import { createClient } from '@supabase/supabase-js'
console.log("test 123");
console.log(process.env.NEXT_PUBLIC_SUPABASE_URL);
export const supabase = createClient(
    'https://meleqkzyxdjdfvowkbxg.supabase.co', 
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1lbGVxa3p5eGRqZGZ2b3drYnhnIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODAxODc4OTcsImV4cCI6MTk5NTc2Mzg5N30.xjtCmQFEzJeI3HQJvZsxxjfKQHFYJIUPY1cgkVK-yFU')