import React from 'react';
import cat1 from "./img/cat1.png"
import cat2 from "./img/cat2.png"
import cat3 from "./img/cat3.jpg"
import cat4 from "./img/cat4.png"
import dog1 from "./img/dog1.jpg"
import dog2 from "./img/dog2.jpg"
import dog3 from "./img/dog3.png"
import dog4 from "./img/dog4.jpg"
import './App.css';
import { Button, Container, Switch } from '@material-ui/core';
import obtenerDato from './dato.js';
import { FaCat, FaDog } from "react-icons/fa";
const gatos = [
  cat1,
  cat2,
  cat3,
  cat4
];
const perros = [
  dog1,
  dog2,
  dog3,
  dog4
];
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      dato: "Preciona el botón para obtenér un dato", 
      animal: "cat", 
      checked: false, 
      currentImageIndex: 0 
    }
    this.callAPI = this.callAPI.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  imagenRNG() {
    const randomNumber = Math.floor(Math.random() * (4 - 0)) + 0;
    this.setState({
      currentImageIndex: randomNumber
    });
  }
  callAPI() {
    this.setState({ dato: "loading..."});
    obtenerDato(this.state.animal).then(dato => this.setState({ dato: dato.text}));
    this.imagenRNG();
  }

  changeAnimal(animal) {
    this.setState({ dato: "Preciona el botón para obtenér un dato", animal: animal, checked: true });
  }

  handleChange() {
    this.setState(state => {
      if (state.animal === "cat") {
        changeAnimal("dog");
      }
      else {
        changeAnimal("cat");
      }
    });
    this.imagenRNG();
  }

  render() {
    let icono, foto;
    if (this.state.animal === "cat") {
      icono = <FaCat></FaCat>;
      foto = gatos;
    }
    else {
      icono = <FaDog></FaDog>;
      foto = perros;
    }
    return (
      <div className="App">
        <header className="App-header">
          <img src={foto[this.state.currentImageIndex]} alt="imagen" />
          <Container fixed>{icono}</Container>
          <Switch
            defaultChecked
            color="default"
            checked={this.state.checked}
            onChange={this.handleChange}
            name="animal"
            inputProps={{ 'aria-label': 'checkbox with default color' }}
          />
          <Container fixed><p>
            {this.state.dato}
          </p>
          </Container>
          <Button onClick={this.callAPI} variant="contained" color="primary">Dato Random</Button >
        </header>
      </div>

    );
  }
}

export default App;
