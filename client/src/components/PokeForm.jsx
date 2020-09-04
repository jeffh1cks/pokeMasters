import React from "react"

class PokeForm extends React.Component{

    constructor(props){
      super(props)
      this.state = {}
      this.handleChange = this.handleChange.bind(this)
      this.handleSubmit = this.handleSubmit.bind(this)
      this.handleReset =this.handleReset.bind(this)
    }

    handleChange(event){
      this.setState({
        [`index${event.target.id}`]: event.target.value,
      })
    }

    handleSubmit(event){
      event.preventDefault()
      let query = this.state[`index${event.target.id}`]
      this.props.fetchPokemon(query, event.target.id)
    }

  

    render(){
      return(
        <form type="submit" className="pokeTeamSlot" id={this.props.index} onSubmit={(e) => this.handleSubmit(e)}>
          Enter a Pokemon Name or ID:
          <input id={this.props.index} onChange={(e)=> this.handleChange(e)}/>
          <button> Add Pokemon </button>
          <button id="remove" onSubmit={(e) => this.handleReset(e)}>Delete Pokemon</button>
        </form>
      )
    }
}

export default PokeForm