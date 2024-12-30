import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Banner from '../components/Banner';
import VideoCategory from '../components/VideoCategory';
import Footer from '../components/Footer';
import EditVideoModal from '../components/EditVideoModal';
import api from '../services/api';

const Home = () => {
  const [videos, setVideos] = useState([]);
  const [editingVideo, setEditingVideo] = useState(null);
  const navigate = useNavigate();

  // Función para cargar videos desde la API
  const fetchVideos = () => {
    api.get('/videos')
      .then((response) => {
        setVideos(response.data);
      })
      .catch((error) => {
        console.error('Error al cargar los videos:', error);
      });
  };

  // Cargar videos al montar el componente
  useEffect(() => {
    fetchVideos();
  }, []);

  // Manejar la edición de un video
  const handleEdit = (video) => {
    setEditingVideo(video);
  };

  // Manejar la actualización de un video
  const handleUpdate = (updatedVideo) => {
    api.put(`/videos/${updatedVideo.id}`, updatedVideo)
      .then(() => {
        fetchVideos(); // Recargar videos después de actualizar
        setEditingVideo(null);

        // Redirigir a la página principal (opcional)
        navigate('/');
      })
      .catch((error) => {
        console.error('Error al actualizar el video:', error);
      });
  };

  // Categorías disponibles
  const categories = ['frontend', 'backend', 'innovacion', 'gestion'];

  return (
    <>
      <Header />
      <Banner />
      {categories.map((category) => (
        <VideoCategory
          key={category}
          title={category.charAt(0).toUpperCase() + category.slice(1)}
          videos={videos.filter((v) => v.category === category)}
          onEdit={handleEdit}
        />
      ))}
      <Footer />
      {editingVideo && (
        <EditVideoModal
          video={editingVideo}
          onClose={() => setEditingVideo(null)}
          onSave={handleUpdate}
        />
      )}
    </>
  );
};

export default Home;
