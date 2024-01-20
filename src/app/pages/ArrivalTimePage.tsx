import { useEffect } from "react";
import { useRouter } from "next/router";

const ArrivalTimePage = () => {
  const router = useRouter();

  useEffect(() => {
    const now = new Date();
    const transitionTime = new Date();
    transitionTime.setHours(15, 0, 0, 0); // 午後3時に設定

    const delay = transitionTime.getTime() - now.getTime();
    if (delay > 0) {
      const timer = setTimeout(() => {
        router.push("/detour-suggestion");
      }, delay);

      return () => clearTimeout(timer);
    }
  }, [router]);

  return (
    <div>
      <h1>到着時間表示ページ</h1>
      {/* ページ内容 */}
    </div>
  );
};

export default ArrivalTimePage;
