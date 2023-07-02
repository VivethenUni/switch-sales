import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Sticky from 'react-stickynode';
import MultiStep from 'react-multistep';
import Stepper from 'react-stepper-horizontal';
import useState from 'react';
import './box.css';
import logo from './logo.svg';
import nintendoBigThree from './images/nintendoBigThree.jpg';
import './make-review.css';

function BuyTwo() {

    const steps = [
        { title: 'Game Choice' },
        { title: 'Your Info' },
        { title: 'Confirmation' }
    ];
  const activeStep = 1;

  return (
    <div className="App">
      <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
          integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM"
          crossorigin="anonymous"
        />
      
      <Container fluid>
        <Row>
          <h6></h6>
          {/* Navbar */}
          <Col xs={2}>
            <div className="topnav">
              <a className="active" href="./"><h6 className="h-six"></h6></a>
              <a className="./book-button" href="./buy-one"><h6 className="h-six">Buy Now</h6></a>
              <a href="./reviews"><h6 className="h-six">Reviews</h6></a>
              <a href="./our-games"><h6 className="h-six">Our Games</h6></a>
            </div>
          </Col>
          {/* Header */}
          <Col>
            <div className="stepper">
                <Stepper className="stepper"
                    activeColor="#1379ff"
                    defaultColor="#494949"
                    completeColor="#68d410"
                    activeTitleColor="#000"
                    completeTitleColor="#111"
                    defaultTitleColor="#444"
                    circleFontColor="#fff"
                    completeBarColor="#11df7f"
                    steps={steps}
                    activeStep={activeStep}/>
            </div>
            <h1 className="h-two">Please Enter The Required Information</h1>
          </Col>
          <h6></h6>
        </Row>
        <Row>
        <Col xs={2}>
            {/* Submit A Review Button */}
            {/*<div class="alert alert-success alert-dismissable" role="alert">
                <button className="button1" type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span></button>
                Review Submitted Successfully!
            </div>*/}
            <div className="topnav" style={{ position: 'absolute', bottom: '10px', width: '15%' }}>
                <a href="./buy-one"><h6 className="h-six">Change Game</h6></a>
                <a href="./buy-three"><h6 className="h-six">Submit Info</h6></a>
            </div>
          </Col>
          <Col>
            <div style = {{backgroundColor: '#cbe2f7'}}>
              <Row>
                <Col xs={1}></Col>
                <Col>
                    <br></br>
                    <Row>
                    <h3 classname="h-three">Your Info</h3>
                    <br></br><br></br>
                    <div class="input-group mb-3 input-group-md">
                        <div class="input-group mb-3 input-group-md">
                            {/* Your Name */}
                            <span class="input-group-text" id="name">Your Name:</span>
                            <input classname="input1" type="text" name="name" class="form-control" placeholder="Edward" aria-label="Username" aria-describedby="basic-addon1" required></input>
                        </div>
                    </div> 
                    </Row>
                    <Row>
                        <div class="input-group mb-3 input-group-md">
                            {/* Your Email */}
                            <span class="input-group-text" id="name">Your Email:</span>
                            <input classname="input1" type="text" name="name" class="form-control" placeholder="sickcombo" aria-label="Username" aria-describedby="basic-addon1" required></input>
                            <div style={{backgroundColor: 'lightgrey', padding: "5px"}}>@</div>
                            <input classname="input1" type="text" name="name" class="form-control" placeholder="gmail.com" aria-label="Username" aria-describedby="basic-addon1" required></input>
                        </div>
                    </Row>
                    <br></br>
                    <Row>
                        <div class="input-group mb-3 input-group-md">
                            {/* Phone # */}
                            <span class="input-group-text" id="name">Phone Number:</span>
                            <input classname="input1" type="text" name="name" class="form-control" placeholder="613" aria-label="Username" aria-describedby="basic-addon1" required></input>
                            <div style={{backgroundColor: 'lightgrey', padding: "5px"}}>-</div>
                            <input classname="input1" type="text" name="name" class="form-control" placeholder="541" aria-label="Username" aria-describedby="basic-addon1" required></input>
                            <div style={{backgroundColor: 'lightgrey', padding: "5px"}}>-</div>
                            <input classname="input1" type="text" name="name" class="form-control" placeholder="8690" aria-label="Username" aria-describedby="basic-addon1" required></input>
                        </div>
                    </Row>
                </Col>
                <Col>
                    <br></br>
                    <Row>
                    <h3 classname="h-three">Shipping Location</h3>
                    <br></br><br></br>
                    <div class="input-group mb-3 input-group-md">
                        <div class="input-group mb-3 input-group-md">
                            {/* Address */}
                            <span class="input-group-text" id="name">Address:</span>
                            <input classname="input1" type="text" name="name" class="form-control" placeholder="75 Laurier Ave" aria-label="Username" aria-describedby="basic-addon1" required></input>
                        </div>
                    </div> 
                    </Row>
                    <Row>
                        <div class="input-group mb-3 input-group-md">
                            {/* City/Province */}
                            <span class="input-group-text" id="name">City / Province:</span>
                            <input classname="input1" type="text" name="name" class="form-control" placeholder="Ottawa" aria-label="Username" aria-describedby="basic-addon1" required></input>
                            <div style={{backgroundColor: 'lightgrey', padding: "5px"}}>/</div>
                            <input classname="input1" type="text" name="name" class="form-control" placeholder="ON" aria-label="Username" aria-describedby="basic-addon1" required></input>
                        </div>
                    </Row>
                    <br></br>
                    <Row>
                        <div class="input-group mb-3 input-group-md">
                            {/* Postal Code */}
                            <span class="input-group-text" id="name">Postal Code:</span>
                            <input classname="input1" type="text" name="name" class="form-control" placeholder="K2K 2M5" aria-label="Username" aria-describedby="basic-addon1" required></input>
                        </div>
                    </Row>
                </Col>
                <Col xs={1}></Col>
              </Row>
              <Row style={{ textAlign: "right", color: '#cbe2f7' }}><br></br><br></br><br></br></Row>
              </div>
          </Col>
        </Row>
      </Container>

    </div>
  );
}

export default BuyTwo;
