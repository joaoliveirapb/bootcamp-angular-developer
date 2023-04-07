export type PokemonData = {
  id:number
  name:string
  sprites: {
    other: {
      dream_world: {
        front_default:any
      }
    }
  }
  types: {
    slot:number
    type: {
      name:string
      url:string
    }
  }[]
}