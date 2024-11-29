import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import SignupForm from "./signup/signup-form";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Signup Form" },
    { name: "description", content: "Welcome to Newsletter!" },
  ];
}

export default function Home({ loaderData }: Route.ComponentProps) {
  return <SignupForm />;
}
