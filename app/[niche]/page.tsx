import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { nicheLandings } from "@/lib/niche-landings";
import NicheHero from "@/app/components/niche/NicheHero";
import PainSection from "@/app/components/niche/PainSection";
import NicheOffer from "@/app/components/niche/NicheOffer";
import IncludesExcludes from "@/app/components/niche/IncludesExcludes";
import RoiMath from "@/app/components/niche/RoiMath";
import TrustSection from "@/app/components/niche/TrustSection";
import NicheFaq from "@/app/components/niche/NicheFaq";
import FinalCta from "@/app/components/niche/FinalCta";

interface Props {
  params: Promise<{ niche: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { niche } = await params;
  const landing = nicheLandings.find((l) => l.slug === niche);
  if (!landing) return {};

  return {
    title: landing.metaTitle.en,
    description: landing.metaDescription.en,
    alternates: {
      canonical: `https://kvasirlabs.com/${niche}`,
    },
  };
}

/** Pre-renders known slugs at build time. New slugs are handled on-demand. */
export function generateStaticParams() {
  return nicheLandings.map((l) => ({ niche: l.slug }));
}

export default async function NicheLandingPage({ params }: Props) {
  const { niche } = await params;
  const landing = nicheLandings.find((l) => l.slug === niche);

  if (!landing) notFound();

  return (
    <>
      <NicheHero data={landing} />
      <PainSection data={landing} />
      <NicheOffer data={landing} />
      <IncludesExcludes data={landing} />
      <RoiMath data={landing} />
      <TrustSection data={landing} />
      <NicheFaq data={landing} />
      <FinalCta data={landing} />
    </>
  );
}
