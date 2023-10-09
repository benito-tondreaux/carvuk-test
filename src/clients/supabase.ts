import { createClient } from "@supabase/supabase-js";

const superbaseURL = import.meta.env.VITE_SUPAURL;
const superbaseKey = import.meta.env.VITE_SUPAKEY;

export const supabase = createClient(superbaseURL, superbaseKey);
