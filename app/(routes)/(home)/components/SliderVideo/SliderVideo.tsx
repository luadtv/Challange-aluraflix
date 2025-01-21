"use client";

import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";

export function SliderVideo() {

  const handlePlayClick = () => {
    window.open("https://www.youtube.com/embed/1iJ5lof5kLM", "_blank");
  };

  return (
    <div className="relative w-full -[80vw] md:h-[56.25vw] lg:h-[45vw]">
      <video
        autoPlay
        loop
        muted
        className="brightness-50 object-fill w-full h-[80vw] md:h-[56.25vw] lg:h-[45vw]"
        src="/video.mp4"
      />
      <div
        className="flex flex-col justify-end absolute w-full md:w-[36%] px-4
        md:px-0 md:left-[4%] z-20 top-0 -bottom-7 md:bottom-[36%]
      "
      >
        <div className="pt-24 md:pt-0">
          <p className="max-w-md mt-2 mb-2 text-xs md:text-base">
            Aluraflix te ofrece videos diseñados para aprender las tecnologías
            más demandadas del momento, desde programación y desarrollo web
            hasta inteligencia artificial y blockchain.
          </p>
          <div className="flex flex-col md:flex-row gap-4 mt-5">
            <Button size="lg" variant="secondary" onClick={handlePlayClick}>
              <Play className="h-6 w-6 mr-2 fill-black" />
              Reproducir
            </Button>
          </div>
        </div>
      </div>

      <div
        className="bg-transparent bg-no-repeat bg-contain w-full opacity-100 top-auto h-[14.7vw]
      -bottom-16 absolute bg-gradient-video
      "
      />
    </div>
  );
}
