import React, { useState } from 'react';
import { Modal, Form, Input, Select, Button } from 'antd';

const { Option } = Select;

const EditVideoModal = ({ video, onClose, onSave }) => {
  const [form] = Form.useForm();

  const handleFinish = (values) => {
    onSave({ ...video, ...values });
  };

  return (
    <Modal
      title="Editar Video"
      visible={true}
      onCancel={onClose}
      footer={null}
    >
      <Form
        form={form}
        layout="vertical"
        initialValues={video}
        onFinish={handleFinish}
      >
        <Form.Item
          label="Título"
          name="title"
          rules={[{ required: true, message: 'Por favor ingresa el título del video' }]}
        >
          <Input placeholder="Ingresa el título" />
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
          <Input.TextArea rows={4} placeholder="¿De qué trata este video?" />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" style={{ marginRight: '10px' }}>
            Guardar
          </Button>
          <Button htmlType="button" onClick={onClose}>
            Cancelar
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default EditVideoModal;
