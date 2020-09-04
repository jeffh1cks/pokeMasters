//TODO
import React from "react"
import PokeForm from "./PokeForm"

const PokeTeamSlot = (props) => {
  return props.pokemon ? (
    <div className="pokeTeamSlot">
      <div>Name: {props.pokemon.name}</div>
      <div>Id: {props.pokemon.id}</div>
      <img src={props.pokemon.sprites.front_default} alt="pokemon image"/>
   </div>
  ) : (
    <div>
      <PokeForm index={props.index} fetchPokemon={props.fetchPokemon} />
    </div>
  )
}

export default PokeTeamSlot

