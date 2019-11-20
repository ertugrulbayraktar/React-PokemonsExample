import React from 'react';
import './App.css';
import Pokemons from './Pokemons';
import pokemons from './data';
import ResimDegistirme from './ResimDegistirme'

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      TiklananPokemon:false
    }

    this.PokemonaTiklanirsa = this.PokemonaTiklanirsa.bind(this);
    
  }
  PokemonaTiklanirsa(name){     // Burada Metodun içine pokemons'un özelliklerinden birini yazamamı lazım(id,name)
      const TiklananPokemon = pokemons.find((deger) =>{            // find metodunun içine herhangi bir isim yazdık.
        return deger.name === name;
      });
      this.setState({
        TiklananPokemon  
    });
  }
  
  render(){ 
    return (
      <div className="App">
       {this.state.TiklananPokemon && <ResimDegistirme {...this.state.TiklananPokemon} />}
      {
          pokemons.map((item) => {
              return <Pokemons {...item} PokemonaTiklanirsa={this.PokemonaTiklanirsa} />   
          })
      }
  </div>
  );
}

}
export default App;
