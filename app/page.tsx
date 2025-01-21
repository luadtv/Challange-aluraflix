import { Navbar } from "../components/Shared/Navbar/Navbar";
import { SliderVideo } from "./(routes)/(home)/components/SliderVideo";
import  VideoList  from "./(routes)/(home)/components/index";


export default function Home() {
  return (
    < div className="relative bg-zinc-900">
      <Navbar/>
      <SliderVideo />
      <VideoList />
    </div>
  );
}
