import React, {Component} from 'react';
import Card from './Card';
import './App.css';
import axios from 'axios';

// * Documentation on pokemon card api: https://docs.pokemontcg.io/
// * Request url for all cards: https://api.pokemontcg.io/v1/cards

// axios.get('https//swapi.dev/ai/people/1')
// .then(response=> {console.log(response.data)}
// .catch(error => {console.log(err)})
// )


class App extends Component {
  constructor(){
    super();
    this.state = {
      cards: []
    }

  }


  
  componentDidMount(){
    this.getCards()
  }
  

  getCards =()=> {
    axios.get('https://api.pokemontcg.io/v1/cards')
    .then(res => {console.log("RESPONSE: ", res.data.cards) 
    this.setState({cards: res.data.cards})
    
    //returning a promise, waiting on the API to return Data
  }) .catch(err => console.log(err))

  } 

  //^^ when would i like to make this axios request? ^^ componentDidMount

  render(){
    const mappedCards = this.state.cards.map( card => {
      return <Card key={card.id} name={card.name} imageURL={card.imageURL}/>
    })
  return (
    <div className="App">
      <h1>My Cool Card Collection: </h1>
      {mappedCards}
    </div>
    )
  }
}

export default App;
