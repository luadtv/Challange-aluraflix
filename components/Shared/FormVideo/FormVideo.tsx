"use client";
import { useState, useEffect } from "react";

export function FormVideo({ isNew, videoId, videoData, updatelist }) {
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    photo: "",
    link: "",
    description: "",
  });
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isNew && videoData) {
      setFormData({
        title: videoData.title,
        category: videoData.category,
        photo: videoData.photo,
        link: videoData.link,
        description: videoData.description,
      });
    }
  }, [isNew, videoData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const editData = () => {
    console.log("Editando la data", formData);

    fetch(`http://localhost:3001/videos/${videoId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Video editado:", data);
        setFormData({
          title: "",
          category: "",
          photo: "",
          link: "",
          description: "",
        });
        updatelist();
      })
      .catch((error) => console.error("Error al editar el video:", error));
  };

  const saveData = () => {
    console.log("Guardando la data", formData);
    fetch("http://localhost:3001/videos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Nuevo video agregado:", data);
        setFormData({
          title: "",
          category: "",
          photo: "",
          link: "",
          description: "",
        });
        updatelist();
      })
      .catch((error) => console.error("Error al agregar el video:", error));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isNew) {
      await saveData();
    } else {
      await editData();
    }
    setIsOpen(false);
  };

  return (
    <div>
      <button
        onClick={() => {
          setIsOpen(true);
        }}
        className={
          isNew
            ? "px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 w-full mx-auto"
            : "px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 flex justify-center w-full mx-auto"
        }
      >
        {isNew ? "Nuevo video" : "Editar video"}
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg w-full max-w-md md:max-w-lg lg:max-w-xl shadow-lg mx-4">
            <h2 className="text-2xl font-semibold text-center mb-6 text-black">
              {isNew ? "Agregar nuevo video" : "Editar video"}
            </h2>
            <form onSubmit={handleSubmit}>
              {/* Título */}
              <div className="mb-4">
                <label
                  htmlFor="title"
                  className="block text-sm font-medium text-black"
                >
                  Título
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                  required
                />
              </div>

              {/* Categoría */}
              <div className="mb-4">
                <label
                  htmlFor="category"
                  className="block text-sm font-medium text-black"
                >
                  Categoría
                </label>
                <input
                  type="text"
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                  required
                />
              </div>

              {/* Foto */}
              <div className="mb-4">
                <label
                  htmlFor="photo"
                  className="block text-sm font-medium text-black"
                >
                  Foto URL
                </label>
                <input
                  type="url"
                  id="photo"
                  name="photo"
                  value={formData.photo}
                  onChange={handleChange}
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                  required
                />
              </div>

              {/* Link */}
              {isNew && (
                <div className="mb-4">
                  <label
                    htmlFor="link"
                    className="block text-sm font-medium text-black"
                  >
                    Link
                  </label>
                  <input
                    type="url"
                    id="link"
                    name="link"
                    value={formData.link}
                    onChange={handleChange}
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                    required
                  />
                </div>
              )}

              {/* Descripción */}
              <div className="mb-4">
                <label
                  htmlFor="description"
                  className="block text-sm font-medium text-black"
                >
                  Descripción
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  rows={4}
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                  required
                ></textarea>
              </div>

              {/* Botones */}
              <div className="flex justify-between gap-4">
                <button
                  type="submit"
                  className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 flex-1"
                >
                  {isNew ? "Guardar" : "Editar"}
                </button>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="px-6 py-2 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 flex-1"
                >
                  Cancelar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
