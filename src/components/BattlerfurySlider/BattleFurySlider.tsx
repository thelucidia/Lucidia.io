import Marquee from "react-fast-marquee";

interface NumberLoopProp {
  children: string;
}

export function Slider() {
  return (
    <Marquee>
      {/* BATTLE FURY BATTLE FURY BATTLE FURY BATTLE FURY BATTLE FURY BATTLE FURY BATTLE FURY BATTLE FURY */}
      <img src="/games/battlefury/text.png" alt="infinite" />
      <img src="/games/battlefury/text.png" alt="infinite" />
      <img src="/games/battlefury/text.png" alt="infinite" />
      <img src="/games/battlefury/text.png" alt="infinite" />
      <img src="/games/battlefury/text.png" alt="infinite" />
      <img src="/games/battlefury/text.png" alt="infinite" />
      <img src="/games/battlefury/text.png" alt="infinite" />
      <img src="/games/battlefury/text.png" alt="infinite" />
    </Marquee>
  );
}

export function NumberLoop({ children }: NumberLoopProp) {
  return (
    <Marquee
      className="looop overflow-x-visible	flex justify-center items-center    "
      loop={10}
      speed={500}
      style={{ width: "100%" }}
      direction="up"
    >
      {children}
    </Marquee>
  );
}
