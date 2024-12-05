import React from 'react';
import { Container, Tabs, Tab } from 'react-bootstrap';

import './aboutcontent.css';


const AboutContent = () => {
  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">About Saltuk Buğra Selçuklu</h2>
      <Tabs defaultActiveKey="academic-positions" id="about-tabs" className="mb-3 justify-content-center">
        <Tab eventKey="education" title="Education">
          <div>
            <p>
              <strong>Yıldız Technical University:</strong> Bachelor of Science, Economics (2002 - 2007)
            </p>
            <p>
              <strong>Yıldız Technical University:</strong> Bachelor of Science, Industrial Engineering (2002 - 2007)
            </p>
            <p>
              <strong>Colorado State University Pueblo:</strong> Master of Science, Industrial and Systems Engineering (2007 - 2009)
            </p>
            <p>
              <strong>Rutgers University:</strong> Doctor of Philosophy (PhD), Industrial and Systems Engineering (2010 - 2015)
            </p>
          </div>
        </Tab>
        <Tab eventKey="academic-positions" title="Academic Positions">
          <div>
            <p>
              <strong>Associate Director</strong>, Erciyes University Energy Conversion Research and Application Center (Nov 2019 - Present)  
              <br />
              <em>Skills:</em> University Teaching, Communication, Teamwork, Administrative Support
            </p>
            <p>
              <strong>Division Chair</strong>, Energy Planning and Management Division of Energy Systems Engineering Department (Jul 2017 - Present)  
              <br />
              <em>Skills:</em> University Teaching, Academic Advising, Curriculum Development, Communication
            </p>
            <p>
              <strong>Assistant Professor</strong>, Erciyes University (Jan 2016 - Present)  
              <br />
              <em>Skills:</em> University Teaching, Research in Renewable Energy, Operations Research
            </p>
            <p>
              <strong>Research and Teaching Assistant</strong> (Aug 2009 - Jan 2016)  
              <br />
              Teaching programming, numerical analysis, and mechanical engineering labs while conducting renewable energy research.
            </p>
            <p>
              <strong>Teaching Assistant</strong>, Rutgers University (Aug 2014 - May 2015)  
              <br />
              Assisted with Engineering Economics courses.
            </p>
            <p>
              <strong>Graduate Assistant</strong>, Colorado State University Pueblo (Aug 2008 - Dec 2008)  
              <br />
              Mentored S-STEM scholars and guided university education processes.
            </p>
            <p>
              <strong>Intern</strong>, Harsco Corporation (Jun 2008 - Dec 2008)  
              <br />
              Performed optimization studies and proposed efficiency improvements.
            </p>
            <p>
              <strong>Graduate Assistant</strong>, Colorado State University Pueblo (Aug 2007 - May 2008)  
              <br />
              Worked on “Briquette Production from Fly Ash and Saw Dust” project.
            </p>
            <p>
              <strong>Intern</strong>, IGDAS (Jun 2005 - Sep 2005)  
              <br />
              Analyzed department relationships and resolved communication issues.
            </p>
            <p>
              <strong>Ergonomics Observer</strong>, Her-Sez (Jan 2005 - Apr 2005)  
              <br />
              Examined ergonomic conditions and suggested layout improvements.
            </p>
            <p>
              <strong>Intern</strong>, KARSU Tekstil (Jun 2004 - Sep 2004)  
              <br />
              Analyzed data processing systems.
            </p>
            <p>
              <strong>Work Study Controller</strong>, Satuk Bugra Han Machines (Mar 2004 - Apr 2004)  
              <br />
              Performed work studies and prepared conveyor improvement plans.
            </p>
            <p>
              <strong>Intern</strong>, Air Forces Command 2nd Air Supply and Maintenance Center (Jun 2003 - Sep 2003)  
              <br />
              Practiced machining and assembly line operations.
            </p>
          </div>
        </Tab>
        <Tab eventKey="publications" title="Publications">
          <div>
            <p>
              Published <strong>50+</strong> research papers in top journals and conferences.
            </p>
          </div>
        </Tab>
        <Tab eventKey="research-interests" title="Research Interests">
          <div>
            <p>
              Artificial Intelligence, Machine Learning, Energy Systems, Optimization.
            </p>
          </div>
        </Tab>
        <Tab eventKey="awards" title="Awards">
          <div>
            <p>
              Recipient of the <strong>Turing Award</strong> in 2020.
            </p>
          </div>
        </Tab>
      </Tabs>
    </Container>
  );
};

export default AboutContent;

