import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';

const Publications = () => {
  const publications = [
    {
      title: 'Machine learning applications on proton exchange membrane water electrolyzers: A component-level overview',
      authors: 'Albadwi A., SELÇUKLU S. B., KAYA M. F.',
      year: 2024,
      link: 'https://avesis.erciyes.edu.tr/yayin/0ee106ac-7bdb-4d9d-9a8c-4a08876362a4/machine-learning-applications-on-proton-exchange-membrane-water-electrolyzers-a-component-level-overview',
    },
    {
      title: 'Effects of tank heating on hydrogen release from metal hydride system in VoltaFCEV Fuel Cell Electric Vehicle',
      authors: 'Özdoğan E., Hüner B., Süzen Y. O., Eşiyok T., Uzgören İ. N., Kıstı M., et al.',
      year: 2023,
      link: 'https://avesis.erciyes.edu.tr/yayin/e13144bb-636b-4196-865b-dd5b61ae5d73/effects-of-tank-heating-on-hydrogen-release-from-metal-hydride-system-in-voltafcev-fuel-cell-electric-vehicle',
    },
    {
      title: 'Electricity generation portfolio planning and policy implications of Turkish power system considering cost, emission, and uncertainty',
      authors: 'SELÇUKLU S. B., Coit D., Felder F.',
      year: 2023,
      link: 'https://avesis.erciyes.edu.tr/yayin/6e517c2c-bb3f-40b3-bdb3-4fd128d12633/electricity-generation-portfolio-planning-and-policy-implications-of-turkish-power-system-considering-cost-emission-and-uncertainty',
    },
  ];

  return (
    <div className="container mt-5">
      <h1>Publications</h1>
      <div className="row">
        {publications.map((pub, index) => (
          <div key={index} className="col-md-4">
            <Card className="mb-4">
              <Card.Body>
                <Card.Title>{pub.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">By: {pub.authors}</Card.Subtitle>
                <Card.Text>Published: {pub.year}</Card.Text>
                <ListGroup variant="flush">
                  <ListGroup.Item>
                    <a href={pub.link} target="_blank" rel="noopener noreferrer">
                      Read More
                    </a>
                  </ListGroup.Item>
                </ListGroup>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Publications;

