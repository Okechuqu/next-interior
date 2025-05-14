import HomeCarousel from "@/components/shared/home/Home-carousel";
import { data } from "@/lib/data";

export default async function Page() {
  return <HomeCarousel items={data.carousels} />;
}
