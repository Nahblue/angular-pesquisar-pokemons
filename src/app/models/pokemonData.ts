export type PokemonData = {
  name:string
  id:number
  sprites: {
    other:any
    dream_world:any
    front_default:string
  }
  types:{
    slot:number
    type:{
      name:string
      url:string
    }
  }[]

}