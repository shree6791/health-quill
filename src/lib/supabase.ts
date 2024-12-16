import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://rrnbxfvvtczkksxrimkm.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJybmJ4ZnZ2dGN6a2tzeHJpbWttIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzM2MjUxMTQsImV4cCI6MjA0OTIwMTExNH0.0Gfx-tVadbzFI8oKoS5Qd_l8WNB25_tbnGhbCU65ulc';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);