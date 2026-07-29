import { notFound } from "next/navigation";
import { nicheLandings } from "@/lib/niche-landings";
import NicheNav from "@/app/components/sections/NicheNav";
import NicheFooter from "@/app/components/sections/NicheFooter";

interface Props {
  children: React.ReactNode;
  params: Promise<{ niche: string }>;
}

export default async function NicheLayout({ children, params }: Props) {
  const { niche } = await params;
  const landing = nicheLandings.find((l) => l.slug === niche);

  if (!landing) notFound();

  return (
    <>
      <NicheNav nicheName={landing.nicheName} nicheEmoji={landing.nicheEmoji} />
      <main>{children}</main>
      <NicheFooter
        contactEmail={landing.contactEmail}
        availabilityBadge={landing.availabilityBadge}
      />
    </>
  );
}
