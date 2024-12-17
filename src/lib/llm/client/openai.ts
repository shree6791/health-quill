import OpenAI from "openai";
import { LLM_CONFIG } from "../config";
import { generateProposalPrompt } from "../utils/promptTemplates";
import { parseProposalContent } from "../utils/proposalUtils";
import { ProposalResponse } from "../../types/proposal";

class OpenAIClient {
  private client: OpenAI;

  constructor() {
    this.client = new OpenAI({
      apiKey: LLM_CONFIG.apiKey,
      dangerouslyAllowBrowser: true
    });
  }

  async generateProposal(
    proposalType: string,
    metrics: {
      patientVolume: number;
      itTickets: number;
      complianceAudits: number;
      hoursSaved: number;
    }
  ): Promise<ProposalResponse> {
    try {
      console.log('Generating proposal with:', { proposalType, metrics });
      const prompt = generateProposalPrompt(proposalType, metrics);

      const response = await this.client.chat.completions.create({
        model: LLM_CONFIG.model,
        messages: [
          {
            role: "system",
            content: "You are a healthcare RFP expert. Generate detailed, professional proposals."
          },
          { 
            role: "user", 
            content: prompt 
          }
        ],
        temperature: LLM_CONFIG.temperature,
        max_tokens: LLM_CONFIG.maxTokens,
      });

      const content = response.choices[0].message.content;
      if (!content) {
        throw new Error('No content generated from OpenAI');
      }

      console.log('OpenAI Response:', content);
      const parsedResponse = parseProposalContent(content, metrics);
      console.log('Parsed Response:', parsedResponse);

      return parsedResponse;
    } catch (error: any) {
      console.error('OpenAI API Error:', error);
      if (error.response) {
        console.error('OpenAI API Response:', error.response.data);
      }
      throw new Error(error.message || 'Failed to generate proposal');
    }
  }
}

export const openAIClient = new OpenAIClient();