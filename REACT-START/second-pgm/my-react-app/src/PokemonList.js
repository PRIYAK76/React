import React from 'react'

export default function PokemonList({pokmeon}) {
  return (
    
    <div>
      {pokmeon.map(p=>
        <div key={p}> {p}</div>
        )}
    </div>
  )
}
