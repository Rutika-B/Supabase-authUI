'use client'
import { createClient } from "@supabase/supabase-js";
import { Auth } from "@supabase/auth-ui-react";
import {
  // Import predefined theme
  ThemeSupa,
} from "@supabase/auth-ui-shared";

function Login() {
  const supabase = createClient(
    "https://gwtcgbbrvoizomxwzpzz.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd3dGNnYmJydm9pem9teHd6cHp6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDEzMzg5MjQsImV4cCI6MjAxNjkxNDkyNH0.hovP3AhbDvDR0emdBCcnz4gcJP9k7sBAE0ivvMUSZ44"
  );

  return (
    <div className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96 justify-center items-center  mx-auto my-auto border-2 border-cyan-400 rounded-xl px-12 py-5 bg-blue-gray-50">
      <div className="text-center"></div>
      <Auth
        supabaseClient={supabase}
        localization={{
          variables: {
            sign_in: {
              email_label: "Enter Your email address",
              password_label: "Your strong password",
            },
          },
        }}
        appearance={{
          theme: ThemeSupa,
          // variables: {
          //   default: {
          //     colors: {
          //       brand: "red",
          //       brandAccent: "darkred",
          //     },
          //   },
          // },
          // style: {
          // button: { background: "red", color: "white" },
          // anchor: { color: "blue" },
          // input: { background: "cyan" },

          //..
          // },
        }}
        providers={["google", "discord", "github"]}
        // theme="customTheme"
        theme="dark"
      />
    </div>
  );
}

export default Login;
