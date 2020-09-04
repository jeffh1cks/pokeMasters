//TODO
import React from "react"
import PokeTeamSlot from "./PokeTeamSlot.jsx"

const PokeTeam = (props) => {
  return (
    <div id="pokeTeam">
      {props.pokemonTeam.map((pokemon, index) => {
        return <PokeTeamSlot pokemon={pokemon} key={index} index={index} fetchPokemon={props.fetchPokemon}/>
      })}
    </div>
  )
}

export default PokeTeam