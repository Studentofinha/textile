import Container from 'react-bootstrap/Container';
import Carousel from 'react-bootstrap/Carousel';

var testimonialsData = [
  {
    id: 1,
    name: 'John Wills',
    description: 'I really liked the services. The quality level of their products is very good. The product preparation and delivery service is also fast.',
    designation: 'Manager'
  },
  {
    id: 2,
    name: 'Jasmine Perry',
    description: 'I really liked the services. The quality level of their products is very good. The product preparation and delivery service is also fast.',
    designation: 'Accountant'
  },
  {
    id: 3,
    name: 'Rocky Johnson',
    description: 'I really liked the services. The quality of their products is excellent. Their customer service skills are excellent.',
    designation: 'CEO'
  }
]

function AppTestimonials() {
  return (
    <section id="testimonials" className="testimonials-block">
      <Container fluid>
        <div className="title-holder">
          <h2>Client testimonials</h2>
          <div className="subtitle">what client says about us</div>
        </div>
        <Carousel controls={false}>
          {
            testimonialsData.map(testimonials => {
              return (
                <Carousel.Item key={testimonials.id}>
                  <blockquote>
                    <p>{testimonials.description}</p>
                    <cite>
                      <span className='name'>{testimonials.name}</span>
                      <span className='designation'>{testimonials.designation}</span>
                    </cite>
                  </blockquote>             
                </Carousel.Item>
              );
            })
          }
        </Carousel>
      </Container>
    </section>
  );
}

export default AppTestimonials;