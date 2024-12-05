import React from 'react';
import { ListGroup } from 'react-bootstrap';

const AboutContent = () => {
  const aboutDetails = [
    { title: 'Birth', content: 'Born in 1970, New York, USA.' },
    { title: 'Education', content: 'Ph.D. in Computer Science, MIT (1998).' },
    { title: 'Academic Positions', content: 'Professor at Stanford University since 2005.' },
    { title: 'Publications', content: 'Published 50+ research papers in top journals and conferences.' },
    { title: 'Research Interests', content: 'Artificial Intelligence, Machine Learning, and Robotics.' },
    { title: 'Awards', content: 'Recipient of the Turing Award in 2020.' },
  ];

  return (
    <div>
      <h2>About Saltuk Buğra Selçuklu</h2>
      <ListGroup>
        {aboutDetails.map((item, index) => (
          <ListGroup.Item key={index}>
            <strong>{item.title}:</strong> {item.content}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};

export default AboutContent;

