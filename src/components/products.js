
import Container from 'react-bootstrap/Container';
import Carousel from 'react-bootstrap/Carousel';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import ListGroup from 'react-bootstrap/ListGroup';
import img1 from '../assets/images/10.DRALON-looped-yarn-700x525.jpg';
import img2 from '../assets/images/3.yarn-cooling-touch-moisture-absorbing-and-perspiration-700x524.jpg';
import img3 from '../assets/images/14.-slub-yarn-dyed-1-700x525.jpg';
import img4 from '../assets/images/ping.jpg';
import img5 from '../assets/images/cotton-polyester-yarn-with-shiny-effect.jpg';
import img6 from '../assets/images/filament-yarn-nylon.jpg';
import img7 from '../assets/images/acrylic-blend-yarn-heating.jpg';
import img8 from '../assets/images/AG-polyester-cotton-antibacterial-yarn-700x524.jpg';



function AppProducts() {
	
  
	return (
	  <section id="product" className="block about-block">
		<Container fluid>
		  <div className="title-holder">
			<h2> Product information</h2>
			<div className="subtitle">learn more our products</div>
		  </div>
		  {/* Carousel open */}
		  <Carousel data-bs-theme="dark"> 

		  <Carousel.Item>
		  <Row>
			<Col sm={6}>
			  <Image src={img1} />
			</Col>
			<Col sm={6}>
			  <p>Dralon Acrylic Slub Looped Yarn</p>
			  <ListGroup>
                <ListGroup.Item>Product Type : Function yarn</ListGroup.Item>
                <ListGroup.Item>Composition : Acrylic, Cotton, Nylon, viscose</ListGroup.Item>
                <ListGroup.Item>Yarn Count : 13S/1, 30S/1</ListGroup.Item>
                <ListGroup.Item>Color : Black, Blue, Brown, Green, Grey,</ListGroup.Item>
                <ListGroup.Item>Feature : Antibacterial, Cool feeling</ListGroup.Item>
	            <ListGroup.Item>Payment : TT, LC</ListGroup.Item>
	            <ListGroup.Item>Trade Term : FOB, CNF, CIF, EW Works</ListGroup.Item>
              </ListGroup>			  
			</Col>
		  </Row>
       </Carousel.Item>
	   <Carousel.Item>
		  <Row>
			<Col sm={6}>
			  <Image src={img2} />
			</Col>
			<Col sm={6}>
			  <p>Bamboo Fiber Knitting Yarn Color Dyed</p>
			  <ListGroup>
                <ListGroup.Item>Product Type : Natural fiber</ListGroup.Item>
                <ListGroup.Item>Composition : Bamboo</ListGroup.Item>
                <ListGroup.Item>Yarn Count : 32S/1</ListGroup.Item>
                <ListGroup.Item>Color : Black, Blue, Brown, Green, Grey, Orange,</ListGroup.Item>
                <ListGroup.Item>Feature : Antibacterial, Healthy, Natural,, Soft</ListGroup.Item>
	            <ListGroup.Item>Payment : TT, LC</ListGroup.Item>
	            <ListGroup.Item>Trade Term : FOB, CNF, CIF, EW Works</ListGroup.Item>
              </ListGroup>			  
			</Col>
		  </Row>
       </Carousel.Item>
	   <Carousel.Item>
		  <Row>
			<Col sm={6}>
			  <Image src={img3} />
			</Col>
			<Col sm={6}>
			  <p>Fancy SLub Cotton Yarns Dyed Colors</p>
			  <ListGroup>
                <ListGroup.Item>Product Type : Function yarn</ListGroup.Item>
                <ListGroup.Item>Composition : Cotton, polyester</ListGroup.Item>
                <ListGroup.Item>Yarn Count : 8S</ListGroup.Item>
                <ListGroup.Item>Color : Black, Blue, Brown, Green, Grey,</ListGroup.Item>
                <ListGroup.Item>Feature : Colorful, Light & Bright</ListGroup.Item>
	            <ListGroup.Item>Payment : TT, LC</ListGroup.Item>
	            <ListGroup.Item>Trade Term : FOB, CNF, CIF, EW Works</ListGroup.Item>
              </ListGroup>			  
			</Col>
		  </Row>
       </Carousel.Item>

	   <Carousel.Item>
		  <Row>
			<Col sm={6}>
			  <Image src={img4} />
			</Col>
			<Col sm={6}>
			  <p>Lurex Yarn for knitting</p>
			  <ListGroup>
                <ListGroup.Item>Product Type : Function yarn</ListGroup.Item>
                <ListGroup.Item>Composition : Cotton 90% polyester 10%</ListGroup.Item>
                <ListGroup.Item>Yarn Count : 30/1</ListGroup.Item>
                <ListGroup.Item>Color :Customized</ListGroup.Item>
                <ListGroup.Item>Feature : Bling, Soft</ListGroup.Item>
	            <ListGroup.Item>Payment : TT, LC</ListGroup.Item>
	            <ListGroup.Item>Trade Term : FOB, CNF, CIF, EW Works</ListGroup.Item>
              </ListGroup>			  
			</Col>
		  </Row>
       </Carousel.Item>

	   <Carousel.Item>
		  <Row>
			<Col sm={6}>
			  <Image src={img5} />
			</Col>
			<Col sm={6}>
			  <p>Anti-pilling Mulberry Silk Blend Yarn</p>
			  <ListGroup>
                <ListGroup.Item>Product Type : Natural fiber</ListGroup.Item>
                <ListGroup.Item>Composition : Ry90Si10</ListGroup.Item>
                <ListGroup.Item>Yarn Count : 32S/1, 40S/1</ListGroup.Item>
                <ListGroup.Item>Color : Black, Blue, Brown, Green, Grey,</ListGroup.Item>
                <ListGroup.Item>Feature : Anti-pilling, Anti-UV, Light & Bright, Moisturizing, Soft</ListGroup.Item>
	            <ListGroup.Item>Payment : TT, LC</ListGroup.Item>
	            <ListGroup.Item>Trade Term : FOB, CNF, CIF, EW Works</ListGroup.Item>
              </ListGroup>			  
			</Col>
		  </Row>
       </Carousel.Item>

	   <Carousel.Item>
		  <Row>
			<Col sm={6}>
			  <Image src={img6} />
			</Col>
			<Col sm={6}>
			  <p>COTTON PRODUCTS</p>
			  <ListGroup>
                <ListGroup.Item>Product Type : Natural grey yarn</ListGroup.Item>
                <ListGroup.Item>Composition : Polyester</ListGroup.Item>
                <ListGroup.Item>Yarn Count : 100D, 150D, 300D, 30D, 50D, 75D</ListGroup.Item>
                <ListGroup.Item>Color : raw white</ListGroup.Item>
                <ListGroup.Item>Feature : Antibacterial, Cool feeling</ListGroup.Item>
	            <ListGroup.Item>Payment : TT, LC</ListGroup.Item>
	            <ListGroup.Item>Trade Term : FOB, CNF, CIF, EW Works</ListGroup.Item>
              </ListGroup>			  
			</Col>
		  </Row>
       </Carousel.Item>

	   <Carousel.Item>
		  <Row>
			<Col sm={6}>
			  <Image src={img7} />
			</Col>
			<Col sm={6}>
			  <p>DRALON WOOL Acrylic Blend Yarn</p>
			  <ListGroup>
                <ListGroup.Item>Product Type : Function yarn</ListGroup.Item>
                <ListGroup.Item>Composition : W10A90</ListGroup.Item>
                <ListGroup.Item>Yarn Count : 1/28NM, 1/52NM</ListGroup.Item>
                <ListGroup.Item>Color : Black, Blue, Brown, Green, Grey,</ListGroup.Item>
                <ListGroup.Item>Feature :Fluffy, Light & Bright, Soft, Warm</ListGroup.Item>
	            <ListGroup.Item>Payment : TT, LC</ListGroup.Item>
	            <ListGroup.Item>Trade Term : FOB, CNF, CIF, EW Works</ListGroup.Item>
              </ListGroup>			  
			</Col>
		  </Row>
       </Carousel.Item>

	   <Carousel.Item>
		  <Row>
			<Col sm={6}>
			  <Image src={img8} />
			</Col>
			<Col sm={6}>
			  <p>NANO AG+ Silver Ion Antibacterial Yarn</p>
			  <ListGroup>
                <ListGroup.Item>Product Type : Function yarn</ListGroup.Item>
                <ListGroup.Item>Composition : Cotton, polyester</ListGroup.Item>
                <ListGroup.Item>Yarn Count : 32S/1, 40S/1</ListGroup.Item>
                <ListGroup.Item>Color : Black, Blue, Brown, Green, Grey,</ListGroup.Item>
                <ListGroup.Item>Feature : anti-microbial, Antibacterial, deodorant, Moisture Wicking</ListGroup.Item>
	            <ListGroup.Item>Payment : TT, LC</ListGroup.Item>
	            <ListGroup.Item>Trade Term : FOB, CNF, CIF, EW Works</ListGroup.Item>
              </ListGroup>			  
			</Col>
		  </Row>
       </Carousel.Item>

		  </Carousel>
		  {/* Carousel clous		   */}
		</Container>
	  </section>
	);
  }
  
  export default AppProducts;