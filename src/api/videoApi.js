// src/api/videoApi.js
let videos = [
    { id: 1, title: 'Video 1', description: 'Descripción del video 1', url: 'https://example.com/1' },
    { id: 2, title: 'Video 2', description: 'Descripción del video 2', url: 'https://example.com/2' },
  ];
  
  // Obtener videos
  export const getVideos = () => Promise.resolve(videos);
  
  // Agregar un video
  export const addVideo = (video) => {
    video.id = videos.length + 1;
    videos.push(video);
    return Promise.resolve(video);
  };
  
  // Actualizar un video
  export const updateVideo = (id, updatedVideo) => {
    videos = videos.map((video) => (video.id === id ? { ...video, ...updatedVideo } : video));
    return Promise.resolve(updatedVideo);
  };
  
  // Eliminar un video
  export const deleteVideo = (id) => {
    videos = videos.filter((video) => video.id !== id);
    return Promise.resolve();
  };
  