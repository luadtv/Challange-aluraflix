"use client";
import React, { useEffect, useState } from 'react';
import VideoCard from './SliderVideo/VideoCard';
import { FormVideo } from "@/components/Shared/FormVideo";

const VideoList = () => {
  const [cardsData, setCardsData] = useState([]);
  const [groupedVideos, setGroupedVideos] = useState<{ [key: string]: any[] }>({});

  useEffect(() => {
    getlistcard();
  }, []);

  const getlistcard = () => {
    fetch("http://localhost:3001/videos")
      .then((response) => response.json())
      .then((data) => {
        setCardsData(data);
        groupVideosByCategory(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  };

  const groupVideosByCategory = (data: any[]) => {
    const grouped = data.reduce((acc, video) => {
      const { category } = video;
      if (!acc[category]) {
        acc[category] = [];
      }
      acc[category].push(video);
      return acc;
    }, {});
    setGroupedVideos(grouped);
  };

  // Definir los colores para cada categoría
  const categoryColors = {
    "INNOVACIÓN Y GESTIÓN": "bg-pink-500",
    "BACK END": "bg-green-500",
    "FRONT END": "bg-yellow-500",
    "MARKETING": "bg-red-500",
    // Agrega más categorías con sus colores
  };

  return (
    <div>
      <div className="flex flex-col gap-6 p-20">
        <div className="mb-4">
          <FormVideo
            isNew
            updatelist={() => getlistcard()}
          />
        </div>

        {/* Videos por Categoría */}
        {Object.entries(groupedVideos).map(([category, videos]) => (
          <div key={category}>
            <h2
              className={`text-2xl font-bold text-white text-center mb-4 p-4 rounded ${categoryColors[category] || 'bg-gray-500'}`}
            >
              {category}
            </h2>
            <div className="flex flex-wrap gap-6">
              {videos.map((video) => (
                <VideoCard
                  key={video.id}
                  title={video.title}
                  category={video.category}
                  photo={video.photo}
                  link={video.link}
                  description={video.description}
                  videoId={video.id}
                  updatelist={() => getlistcard()}
                  videoData={video}
                  className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4"
                />
              ))}
            </div>
          </div>
        ))}

        {/* Todos los videos */}
        <div>
          <h2 className="text-2xl font-bold text-white text-center mb-4 bg-blue-500 p-4 rounded">
            Todos los videos
          </h2>
          <div className="flex flex-wrap gap-6">
            {cardsData.map((video) => (
              <VideoCard
                key={video.id}
                title={video.title}
                category={video.category}
                photo={video.photo}
                link={video.link}
                description={video.description}
                videoId={video.id}
                updatelist={() => getlistcard()}
                videoData={video}
                className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoList;
