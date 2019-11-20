import React from 'react'

class Pokemons extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {
            color:"pink"
        };
    }
    render(){
        return <ul className="tablo" 
            onClick={() => {                                                
                if(!this.props.isSummary){                                
                    this.props.PokemonaTiklanirsa(this.props.name);                 
                }
            }}

            style={{background:this.state.color, padding:"1px", margin: "10px"}}>
            <p>{this.props.name}</p>
                <img
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.props.id}.png`}   
                />            
        </ul>
    }
}

export default Pokemons;