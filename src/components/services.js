import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const servicesData = [
  {
    id: 1,
    icon: 'fas fa-gavel',
    title: 'Cotton Processing',
    description: 'We control the whole process of yarn R&D capabilities, spinning, twisting and texturing, plying and dyeing, winding, packing as well as shipment arrangement.'
  },
  {
    id: 2,
    icon: 'fas fa-snowflake',
    title: 'Coloring Gas',
    description: 'With excellent R&D department, spinning and dyeing factory, the yarn can be developed and customized according to customer’s requirement on application.'
  },
  {
    id: 3,
    icon: 'fas  fa-suitcase',
    title: 'Product Packaging',
    description: 'We have more than 100 types of yarns and colors in stock for options, including natural fibers, functionals, Spring & Summer, Autumn & Winter, and fancy yarn. '
  },
  {
    id: 4,
    icon: 'fas fa-desktop',
    title: 'Product Quality Control',
    description: 'We have independent Research & Development department and have hired senior professional and technical personnel and foreign experts to cooperate closely with scientific.'
  },
  {
    id: 5,
    icon: 'fas fa-certificate',
    title: 'Issuance of Product Suitability Certificatey',
    description: 'Our supporting professional R&D institutions and physical factories can help customers to analyze yarn samples and give professional advice on finished products manufacturing. '
  },
  {
    id: 6,
    icon: 'fas fa-truck',
    title: 'Delivery Service',
    description: 'We are professionally engaged in the development and stock sale of functional and special yarns. Stocks for most common specs and colors are available for instant delivery'
  }
]

function AppServices() {
  return (
    <section id="services" className="block services-block">
      <Container fluid>
        <div className="title-holder">
          <h2>Our services</h2>
          <div className="subtitle">services we provide</div>
        </div>
        <Row>
          {
            servicesData.map(services => {
              return (
                <Col sm={4} className='holder' key={services.id}>
                  <div className="icon">
                    <i className={services.icon}></i>
                  </div>
                  <h3>{services.title}</h3>
                  <p>{services.description}</p>
                </Col>
              );
            })
          }
        </Row>
      </Container>
    </section>
  );
}

export default AppServices;