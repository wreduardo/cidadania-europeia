import { User } from "./User"

export type Citizenship ={
  id: number,     
  country: string,
}
export type CitizenshipGet ={
  id: number,     
  country: string,
  user: User,       
}
export type CitizenshipPost ={
  id: number,     
  country: string,      
  userId: number,
}