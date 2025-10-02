import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://osgyjbmsiwvsfzncdmis.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9zZ3lqYm1zaXd2c2Z6bmNkbWlzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTg5MTAzNDEsImV4cCI6MjA3NDQ4NjM0MX0.mfV-DTRMwQbmSSjYbZQVRmHXNJ8hlQY3vPRZRcB9n-A";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
