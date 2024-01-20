import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h1>Detour Navi</h1>
      <Image src="/images/hero.jpg" width={700} height={475} alt={""} />
    </div>
  );
}
