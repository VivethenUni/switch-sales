import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Sticky from 'react-stickynode';
import useState from 'react';
import './box.css';
import logo from './logo.svg';
import nintendoBigThree from './images/nintendoBigThree.jpg';
import './our-games.css';

function OurGames() {

  const gameList = [
    {name: "The Legend of Zelda: TOTK", image: "https://assets.nintendo.com/image/upload/ar_16:9,c_lpad,w_930/b_white/f_auto/q_auto/ncom/software/switch/70010000063714/276a412988e07c4d55a2996c6d38abb408b464413b2dfeb44d2aa460b9f622e1", genre: "Adventure", rating: "5.0/5", year: "2023", price: "$85.49", percent: "5%", purchases: "132"},
    {name: "Super Smash Bros. Ultimate", image: "https://assets.nintendo.com/image/upload/ar_16:9,c_lpad,w_930/b_white/f_auto/q_auto/ncom/software/switch/70010000012332/ac4d1fc9824876ce756406f0525d50c57ded4b2a666f6dfe40a6ac5c3563fad9", genre: "Fighting", rating: "4.9/5", year: "2018", price: "$63.99", percent: "20%", purchases: "486"},
    {name: "Pokémon Legends: Arceus", image: "https://assets.nintendo.com/image/upload/ar_16:9,c_lpad,w_930/b_white/f_auto/q_auto/ncom/software/switch/70010000039945/dcb496d7cf954c7eb51ab2e5d0c27918fb7f055e50f4e902135bd4a70a44b491", genre: "Adventure", rating: "4.9/5", year: "2022", price: "$67.99", percent: "15%", purchases: "304"},
    {name: "Persona 5 Royal", image: "https://assets.nintendo.com/image/upload/ar_16:9,c_lpad,w_930/b_white/f_auto/q_auto/ncom/en_CA/games/switch/p/persona-5-royal-switch/hero", genre: "RPG", rating: "4.6/5", year: "2019", price: "$71.99", percent: "10%", purchases: "321"},
    {name: "Super Mario Odyssey", image: "https://assets.nintendo.com/image/upload/ar_16:9,c_lpad,w_930/b_white/f_auto/q_auto/ncom/software/switch/70010000001130/c42553b4fd0312c31e70ec7468c6c9bccd739f340152925b9600631f2d29f8b5", genre: "Adventure", rating: "4.5/5", year: "2017", price: "$59.99", percent: "25%", purchases: "325"},
    {name: "Xenoblade Chronicles 3", image: "https://assets.nintendo.com/image/upload/ar_16:9,c_lpad,w_930/b_white/f_auto/q_auto/ncom/software/switch/70010000053336/e933b48650b33b355e9cf2583da5c94b77180e40fb02d050041083dd62f4df39", genre: "Adventure", rating: "4.5/5", year: "2022", price: "$71.99", percent: "10%", purchases: "257"},
    {name: "Fire Emblem: Three Houses", image: "https://assets.nintendo.com/image/upload/ar_16:9,c_lpad,w_930/b_white/f_auto/q_auto/ncom/software/switch/70010000007606/c499fdc86779ca95e61daed1f94288a245d196360d278138e56d44097d1a3878", genre: "RPG", rating: "4.2/5", year: "2019", price: "$71.99", percent: "10%", purchases: "178"},
    {name: "Skullgirls 2nd Encore", image: "https://assets.nintendo.com/image/upload/ar_16:9,c_lpad,w_930/b_white/f_auto/q_auto/ncom/software/switch/70010000019148/d4bb5a5fa5df59e9ed4ca1b4c5a53811d9c4d322aa55cd94d074be63381ff788", genre: "Fighting", rating: "3.9/5", year: "2019", price: "$31.82", percent: "5%", purchases: "86"},
    {name: "PMD: Rescue Team DX", image: "https://assets.nintendo.com/image/upload/ar_16:9,c_lpad,w_930/b_white/f_auto/q_auto/ncom/software/switch/70010000012523/66593a5969de4b12d9de025e80843ed7cf69671e26b382994c7c0afe00ada30d", genre: "RPG", rating: "3.8/5", year: "2020", price: "$63.99", percent: "20%", purchases: "116"}
  ];

  const renderCard = (card, index) => {
    return (
        <Card style={{ width: '18rem' }} key={index} className="box">
        <Card.Img variant="top" src={card.image}/>
        <Card.Body>
            <Card.Title style={{ fontSize: '1.5vw', fontWeight: 'bold' }}>{card.name}</Card.Title>
            <hr></hr>
            <Card.Text style={{ fontSize: '1.2vw', fontWeight: 'bold'}}>
            Discount Price: {card.price} ({card.percent} off)<br></br>
            Year Released: {card.year}<br></br>
            Purchases: {card.purchases}<br></br>
            Rating: {card.rating}<br></br>
            Genre: {card.genre}<br></br>
            </Card.Text>
            <div className="topnav" style={{ fontSize: '1.2vw' }}>
                <a href="./buy-two"><h6 className="h-six">Purchase game</h6></a>
            </div>
            {/*<Button variant="primary" href="./buy-two" style={{ fontSize: '1.2vw' }}>Purchase Game</Button>*/}
        </Card.Body>
        </Card>
    );
  };

  {/*}
  const state = {
    isAdventure : true,
    isFighting : true,
    isRPG : true
  };

  onChange = e => {
    this.setSate({isAdventure : e.target.checked});
  }

  const states = (state, index) => {
    const {isAdventure} = this.checkedBoxes;
    const {isFighting} = this.checkedBoxes;
    const {isRPG} = this.checkedBoxes;
    return (
        <form className="topnav">
            <h4>Adventure: {isAdventure ? "✓" : ""} </h4>
            <h4>Fighting: {isFighting ? "✓" : ""} </h4>
            <h4>RPG: {isRPG ? "✓" : ""}</h4>
        </form>
    );
  }
*/}

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
            <h1 className="h-one">Our Games</h1>
            <h2 className="h-two">Check Out Our Discounted Games</h2>
          </Col>
          <h6></h6>
        </Row>
        <Row>
          <Col xs={2}>
            {/* Faceted Search Checkboxes */}
            <Sticky enabled={true} top={10}>
                <form className="faceted-search">
                    <h5 className="h-five" style={{ textAlign: "center" }}>Filter By Genre</h5>
                    <hr></hr>
                    <h6 className="h-six">Adventure: <input type="checkbox" style={{float: "right"}}></input></h6>
                    <h6 className="h-six">Fighting: <input type="checkbox" style={{float: "right"}}></input></h6>
                    <h6 className="h-six">RPG: <input type="checkbox" style={{float: "right"}}></input></h6>
                </form>
            </Sticky>
          </Col>
          <Col>
            <div className="grid">{gameList.map(renderCard)}</div>
          </Col>
        </Row>
      </Container>

    </div>
  );
}

export default OurGames;
