import React, { useState } from 'react';
import { Form, Input, Select, Button } from 'antd';
import api from '../services/api';

const { Option } = Select;

const NewVideo = () => {
  const [form] = Form.useForm();

  const handleFinish = (values) => {
    console.log("Datos del formulario:", values); // Confirmar los datos en la consola

    // Hacer la solicitud POST al backend
    api.post('/videos', values)
      .then((response) => {
        console.log("Video creado exitosamente:", response.data);
        // Aquí puedes redirigir al usuario o limpiar el formulario
        form.resetFields();
      })
      .catch((error) => {
        console.error("Error al crear el video:", error);
      });
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Agregar Nuevo Video</h1>
      <Form
        form={form}
        layout="vertical"
        onFinish={handleFinish}
      >
        <Form.Item
          label="Título"
          name="title"
          rules={[{ required: true, message: 'Por favor ingresa el título del video' }]}
        >
          <Input placeholder="Título del video" />
        </Form.Item>

        <Form.Item
          label="Categoría"
          name="category"
          rules={[{ required: true, message: 'Por favor selecciona una categoría' }]}
        >
          <Select placeholder="Selecciona una categoría">
            <Option value="frontend">Frontend</Option>
            <Option value="backend">Backend</Option>
            <Option value="innovacion">Innovación</Option>
            <Option value="gestion">Gestión</Option>
          </Select>
        </Form.Item>

        <Form.Item
          label="Imagen (URL)"
          name="image"
          rules={[{ required: true, message: 'Por favor ingresa la URL de la imagen' }]}
        >
          <Input placeholder="https://example.com/image.jpg" />
        </Form.Item>

        <Form.Item
          label="Video (URL)"
          name="video"
          rules={[{ required: true, message: 'Por favor ingresa la URL del video' }]}
        >
          <Input placeholder="https://example.com/video.mp4" />
        </Form.Item>

        <Form.Item
          label="Descripción"
          name="description"
        >
          <Input.TextArea rows={4} placeholder="Descripción del video" />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" style={{ marginRight: '10px' }}>
            Guardar
          </Button>
          <Button htmlType="button" onClick={() => form.resetFields()}>
            Cancelar
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default NewVideo;
