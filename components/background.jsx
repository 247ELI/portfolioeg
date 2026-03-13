import { GravityStarsBackground } from "@/components/animate-ui/components/backgrounds/gravity-stars";

export default function BackGround() {
  return (
    <div className="absolute inset-0 bg-black">
      <GravityStarsBackground className="text-white" />
    </div>
  );
}