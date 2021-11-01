import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import axios from "axios";
import "./App.css";
import "./App.js";

const App = () => {
  const [cardData, setCardData] = useState([]);
  const [visible, setVisible] = useState(3);

//const baseURL = "https://random-data-api.com/api/users/random_user";
//https://randomuser.me/api/?results=35

//changer de lien api:
  const allCardData = async () => {
    const response = await axios.get("https://randomuser.me/api/?results=35");
    setCardData(response.data.results);
  };

  const loadMore = () => {
    setVisible(visible + 3);
  };

  useEffect(() => {
    allCardData();
  }, []);

  const renderCard = (person, index) => {
    return (      
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={person.picture.large} />
        <Card.Body>
          <Card.Title>
            {person.name.first} {person.name.last}
          </Card.Title>
          <Card.Text>
            <ul>
              <li>{person.email}</li>
              <li>{person.cell}</li>
              <li>{person.gender}</li>
            </ul>
          </Card.Text>
        </Card.Body>
      </Card>
    );
  };

  return (
    <div className="App">
      <div className="wrapper">
     
        <div className="cards">
          {cardData.slice(0, visible).map(renderCard)}
        </div>
        {visible < cardData.length && (
        <button class="btn btn-primary" onClick={loadMore}>Recharger 3 images </button>
      )}
      </div>
    
    </div>
  );
};

export default App;



