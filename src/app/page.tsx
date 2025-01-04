import BannerSlider from "./components/BannerSlider/page";
import Featured from "./components/Featured/page";
import Hero from "./components/Hero/page";
import Menu from "./components/Menu/page";
import Services from "./components/Services/page";
import Survey from "./components/Survey/page";
export default function Home() {
  return (
    <>
      <BannerSlider />
      <Hero />
      <Featured />
      <Services />
      <Menu />
      <Survey />
    </>
  );
}
