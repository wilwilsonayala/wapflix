import React from 'react';
import { Card, Row, Col, Button } from 'antd';

const VideoCategory = ({ title, videos, onEdit }) => {
  return (
    <div style={{ padding: '20px' }}>
      <h2>{title}</h2>
      <Row gutter={[16, 16]}>
        {videos.map((video) => (
          <Col key={video.id} span={6}>
            <Card
              hoverable
              cover={<img alt={video.title} src={video.image} />}
              actions={[
                <Button type="link" onClick={() => onEdit(video)}>Editar</Button>,
              ]}
            >
              {video.title}
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default VideoCategory;