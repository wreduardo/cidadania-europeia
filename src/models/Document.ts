import { Citizenship } from "./Citizenship"


export type Document = {
  id: number,
  type: string,
  expiration: Date,
  country: string,
  status: string,
}
export type DocumentGet = {
  id: number,
  type: string,
  expiration: Date,
  country: string,
  status: string,
  citizenship: Citizenship,
}
export  type DocumentPost = {
  id:number,
  type :string,
  expiration: Date,
  country: string,
  status: string,
  citizenshipId: number,
}
