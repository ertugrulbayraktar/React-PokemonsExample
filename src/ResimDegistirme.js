import React from 'react';
import Pokemons from "./Pokemons";

class Summary extends React.Component {
    render(){
        return <Pokemons {...this.props} isSummary={true}></Pokemons>    
    }
}
export default Summary;