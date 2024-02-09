import { User } from "./User"

export type Ancestry = {
  id: number,  
  surname: string,
  results :   string,
  generation: number,
}

export type AncestryGet = {
  id: number,  
  surname: string,
  results :   string,
  generation: number,
  user    : User,
}
export type AncestryPost = {
  id: number,  
  surname: string,
  results :   string,
  generation: number,
  userId    : number,
}
