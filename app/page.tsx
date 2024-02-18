import { Button } from "@/components/ui/button";
import { RegisterLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

import { Hero } from "./components/home/Hero";
import { Services } from "./components/home/Services";
import { ContentExperience } from "./components/home/ContentExperience";
import { CallToAction } from "./components/home/CallToAction";
import { Footer } from "./components/home/Footer";

export default async function Home() {
  const { isAuthenticated } = getKindeServerSession();

  if (await isAuthenticated()) {
    return redirect("/home");
  }
  return (
    <div>
      <Hero />
      <Services />
      <ContentExperience />
      <CallToAction />
      <Footer />
    </div>
  );
}
