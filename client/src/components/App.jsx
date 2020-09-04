   //TODO
  import React from 'react'
  import PokeTeam from "./PokeTeam.jsx"
  import dummyData from "../../../data/examplePokeTeam.js"
  import getPokemon from "../../../lib/getPokemon.js"
  import PokeForm from "./PokeForm"

class App extends React.Component {
  constructor(props){
    super(props)
    this.state ={
      pokemonTeam: [null,null,null,null,null,null],
    }
    this.fetchPokemon = this.fetchPokemon.bind(this);
  }

  fetchPokemon(query, index){
    getPokemon(query, (data) => {
      console.log(data);
      let updatedPokemon = data.data
      let updateSlot = this.state.pokemonTeam.slice()
      updateSlot[index] = updatedPokemon
      this.setState({
        pokemonTeam: updateSlot,
      })
    })
  }


  render(){
    return (
  <div>
    <h1>My PokeTeam!</h1>
    <PokeTeam pokemonTeam={this.state.pokemonTeam}
              fetchPokemon={this.fetchPokemon}/>
  </div>

    )
  }
}

export default App;