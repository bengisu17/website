import React from 'react';
import { ListGroup } from 'react-bootstrap';

const PublicationsList = () => {
  const publications = [
    'Paper 1: Title of Research',
    'Paper 2: Another Title',
    'Paper 3: Yet Another Title',
  ];

  return (
    <ListGroup>
      {publications.map((pub, index) => (
        <ListGroup.Item key={index}>{pub}</ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default PublicationsList;
