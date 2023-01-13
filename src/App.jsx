import { useState, useEffect } from 'react'

function App() {
  // https://play.pokemonshowdown.com/sprites/ani/charmander.gif
  // https://pokeapi.co/api/v2/pokemon/ditto
  const [teste, setTeste] = useState([]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon")
      .then(data => data.json())
      .then(data => {
        setTeste(data.results)
        console.log(data.results.map(value => value.name))
      })
  }, [])

  return (
    <div className="App">
      <ul>

        {
          teste.map(value => (
            <li key={value.name}>{value.name}</li>
          ))
        }

      </ul>
    </div>
  )
}

export default App
