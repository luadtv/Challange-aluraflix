"use client";

import React from "react";
import { FormVideo } from "@/components/Shared/FormVideo";


const VideoCard = ({
  updatelist,
  videoData,
  videoId,
  title,
  category,
  photo,
  link,
  description,
}: any) => {
  const deleteVideo = async () => {
    try {
      const response = await fetch(`http://localhost:3001/videos/${videoId}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Error al eliminar el video");
      }

      console.log("Video eliminado:", videoId);
      updatelist();
    } catch (error) {
      console.error("Error al eliminar el video:", error);
    }
  };

  return (
    <div className="max-w-sm bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
      <img className="w-full h-48 object-cover" src={photo} alt={title} />
      <div className="p-4">
        <h3 className="text-lg font-bold text-gray-800">{title}</h3>
        <p className="text-sm text-gray-500">{category}</p>
        <p className="text-sm text-gray-600 mt-2">{description}</p>
        <a
  href={link}
  target="_blank"
  rel="noopener noreferrer"
  className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 block mt-4 text-center w-full mx-auto m-4"
>
  Ver video
</a>

        <FormVideo
          isNew={false}
          videoId={videoId}
          updatelist={updatelist}
          videoData={videoData}
        />
        <button
          className="mt-4 px-4 py-2 bg-red-500 text-white font-semibold rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 w-full"
          onClick={deleteVideo}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default VideoCard;
