import { WavyBackground } from "@/components/ui/wavy-background";

export function HeroPattern() {
  return (
    <div className="pointer-events-none absolute inset-0 hidden overflow-hidden lg:block">
      <WavyBackground
        backgroundFill={"hsl(0 0% 100%"}
        blur={3}
        className="hidden"
        colors={["#2DD4BF", "#22D3EE", "#38BDF8", "#818FC8"]}
        containerClassName="h-full"
        speed="slow"
        waveOpacity={0.1}
        waveWidth={60}
        waveYOffset={250}
      />
    </div>
  );
}
