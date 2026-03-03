import Image from "next/image";
import Container from "./ui/container";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-black pt-[180px]">
      {/* Figma glow ellipses */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[168px] top-[742px] h-[462px] w-[464px] rounded-full bg-[#8593E8]/20 blur-[100px]" />
        <div className="absolute left-1/2 top-[652px] h-[467px] w-[467px] -translate-x-1/2 rounded-full bg-[#5D6EF3]/20 blur-[125px]" />
        <div className="absolute right-[206px] top-[783px] h-[446px] w-[446px] rounded-full bg-[#FC4FF6]/20 blur-[100px]" />
      </div>

      <Container>
        <div className="relative z-10 text-center">
          <h1 className="mx-auto max-w-[1071px] font-medium tracking-[0.02em] text-[42px] leading-[52px] sm:text-[64px] sm:leading-[78px] lg:text-[80px] lg:leading-[98px]">
            <span className="bg-[linear-gradient(90deg,#FF3BFF_0%,#ECBFBF_38.02%,#5C24FF_75.83%,#D94FD5_100%)] bg-clip-text text-transparent">
              THE BEST WEBSITE EVER
            </span>
            <br />
            <span className="text-white">Scalable.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-[723px] text-center text-[16px] leading-[28px] tracking-[0.72px] text-white/80 sm:text-[18px] sm:leading-[31px] lg:text-[20px] lg:leading-[33px]">
            Our technology performing fast blockchain (120K TPS) and it has
            guaranteed AI-based data security. Proof of Stake, its consensus
            algorithm enables unlimited speeds.
          </p>

          <div
            className="mx-auto mt-8 flex w-full max-w-[355px] flex-col items-center justify-center gap-4 sm:flex-row"
            style={{ fontFamily: "var(--font-space)" }}
          >
            <a
              href="#whitepaper"
              className="flex h-[70px] w-[176px] items-center justify-center rounded-full border border-fuchsia-500/70 bg-black text-[20px] font-normal text-white transition hover:bg-white/10"
            >
              Get started
            </a>

            <a
              href="#solutions"
              className="flex h-[70px] w-[167px] items-center justify-center rounded-full border-2 border-white bg-black text-[20px] font-normal text-white transition hover:bg-white/10"
            >
              Read more
            </a>
          </div>

          <div className="relative mt-10">
            <Image
              src="/images/hero-illustration.webp"
              alt="Robots and infinity illustration"
              width={1605}
              height={619}
              priority
              className="mx-auto w-full max-w-[1605px]"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}<Image
  src="/images/hero-illustration.webp"
  alt="Hero Illustration"
  width={1605}
  height={619}
  priority
/>