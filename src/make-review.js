import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React,{useState,useEffect} from "react";
import Sticky from 'react-stickynode';
import Alert from 'react-bootstrap/Alert';
import logo from './logo.svg';
import './make-review.css';

function MakeReview() {

    const [value,onChange]=useState(40);

    useEffect(()=>{
        const ele = document.querySelector('.buble');
      if (ele) {
        ele.style.left = `${Number(value / 4)}px`;
      }
    })

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
            <h1 className="h-one">Reviews</h1>
            <h2 className="h-two">What Do Our Customers Think About Us?</h2>
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
                <a href="./reviews"><h6 className="h-six">Submit Review</h6></a>
            </div>
          </Col>
          <Col>
            <div style = {{backgroundColor: '#cbe2f7'}}>
              <Row>
                <Col xs={1}></Col>
                <Col>
                  {/*<div style={{backgroundImage: 'url("https://assets.nintendo.com/image/upload/ar_16:9,c_lpad,w_930/b_white/f_auto/q_auto/ncom/software/switch/70010000063714/276a412988e07c4d55a2996c6d38abb408b464413b2dfeb44d2aa460b9f622e1")'}}>
                    <img src={Review1} style = {{maxWidth:'55%', height: '50%'}} alt="Review1"/>
                    </div>*/}
                    <br></br>
                    <Row>
                    <h3 classname="h-three">Your Review</h3>
                    <br></br><br></br>
                    <div class="input-group mb-3 input-group-md">
                        {/* Game Purchased */}
                        <span class="input-group-text" id="name">Game Purchased:</span>
                        <input classname="input1" type="text" name="name" class="form-control" placeholder="Super Smash Bros. Ultimate" aria-label="Username" aria-describedby="basic-addon1" required></input>
                    </div> 
                    </Row>
                    <br></br>
                    <Row>
                        <div class="input-group mb-3 input-group-md">
                            {/* Your Name */}
                            <span class="input-group-text" id="name">Your Name:</span>
                            <input classname="input1" type="text" name="name" class="form-control" placeholder="Edward" aria-label="Username" aria-describedby="basic-addon1" required></input>
                        </div>
                    </Row>
                    <br></br>
                    <Row>
                    <div class="input-group mb-3 input-group-md">
                    <span class="input-group-text" id="name" style={{ width: "100%" }}>
                        <Col>
                            {/* Game Rating */}
                            <span class="input-group-text" id="name" style={{ borderStyle: "hidden" }}>Game Rating:</span>
                        </Col>
                        <Col>
                            {/* Game Rating */}
                            <span class="input-group-text" id="name" style={{ borderStyle: "hidden" }}>
                                <div className="slider-parent">
                                    <input type="range" min="10" max="50" value={value}
                                        onChange={({ target: { value: radius } }) => {
                                                    onChange(radius);
                                                }}
                                    />
                                    <div className="buble"> 
                                    {value/10}
                                    </div>
                                </div>
                            </span>
                        </Col>
                        </span>
                        </div>
                    </Row>
                </Col>
                <Col>
                    <br></br>
                    {/* Your Comments */}
                    <span class="input-group-text" id="name" style={{ borderStyle: "hidden" }}>Your Comments: </span>
                    {/*<input classname="input1" type="text" name="name" class="form-control" placeholder="I really like this game because..." aria-label="Username" aria-describedby="basic-addon1" required
                    style={{ height: "140%" }}></input>*/}
                    <textarea classname="input1" style={{ height: "80%", width: "100%" }} placeholder="I really like this game because..."></textarea>
                </Col>
                <Col xs={1}></Col>
              </Row>
              <Row style={{ textAlign: "right", color: '#cbe2f7' }}><br></br></Row>
              </div>
          </Col>
        </Row>
      </Container>

    </div>
  );
}

export default MakeReview;
