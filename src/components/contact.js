import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";

function AppContact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhone] = useState('');

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleChangeName = (event) => {
    setName(event.target.value);
  };
  const handleChangePhone = (event) => {
    setPhone(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('hi')
    
    const botToken = '6725661251:AAHo30NFJGWAZYv-aEC9VNwO5jGnrAuE21Q';
    const messages = `Name: ${name}\nEmail: ${email}\nPhone Number: ${phoneNumber} `;

    fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: 6875105632,
        text:messages
  
      }),
    })
      .then(response => response.json())
      .then(data => {
        setName('');
        setEmail('');
        setPhone('')
        console.log(data);
        alert('Your data has been sent')
        // Handle response from Telegram API if needed
      })
      .catch(error => {
        console.error('Error:', error);
        // Handle error if needed
      });
    }
  return (
    <section id="contact" className="block contact-block">
      <Container fluid>
        <div className="title-holder">
          <h2>Contact us</h2>
          <div className="subtitle">get connected with us</div>
        </div>
        <Form className="contact-form" onSubmit={handleSubmit}>
          <Row>
            <Col sm={4}>
              <Form.Control
                type="text"
                placeholder="Enter your full name"
                value={name}
                onChange={handleChangeName}
                required
              />
            </Col>
            <Col sm={4}>
              <Form.Control
                type="email"
                placeholder="Enter your email address"
                value={email}
               onChange={handleChangeEmail}
                required
              />
            </Col>
            <Col sm={4}>
              <Form.Control
                type="text"
                value={phoneNumber}
                placeholder="Enter your contact number"
                onChange={handleChangePhone}
                required
              />
            </Col>
          </Row>

          <div className="btn-holder">
            <Button type="submit">Submit</Button>
          </div>
        </Form>
      </Container>
      <div className="google-map">
        <iframe
          title="map"
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14048.211570060965!2d-0.1228208876550775!3d51.505942908931324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2suk!4v1481805868782"
        ></iframe>
      </div>
      <Container fluid>
        <div className="contact-info">
          <ul>
            <li>
              <i className="fas fa-envelope"></i>
              hello@ipak.com
            </li>
            <li>
              <i className="fas fa-phone"></i>
              000-000-0000
            </li>
            <li>
              <i className="fas fa-map-marker-alt"></i>
              Uzbekistan, Tashkent
            </li>
          </ul>
        </div>
      </Container>
    </section>
  );
}

export default AppContact;
