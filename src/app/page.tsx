import Navigation from "@/components/Navigation";
import { GothicHero } from "@/components/GothicUi/GothicHero";
import { GothicButton } from "@/components/GothicUi/GothicButton";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black overflow-x-hidden">
      <Navigation />

      <GothicHero
        title="AVE MUJICA"
        subtitle="In darkness, we find our truth"
        description="Symphonic Gothic Metal • Theatrical Performance"
        actions={
          <>
            <GothicButton variant="primary" size="lg">
              Enter the Abyss
            </GothicButton>
            <GothicButton variant="secondary" size="lg">
              Witness the Performance
            </GothicButton>
          </>
        }
      />
    </div>
  );
}
