import { prisma } from "../utils/db.server"
import { Citizenship } from "../models/Citizenship"
import { CitizenshipGet } from "../models/Citizenship"
import { CitizenshipPost } from "../models/Citizenship"

export const getCitizenship = async (): Promise<CitizenshipGet[]> => {
    return prisma.citizenship.findMany({
        select:{
            id:true,
            country:true,
            user:{
        select: {
            id: true,
            firstName: true,
            lastName: true,
            email: true,
            password: true,
            country: true,
            residence: true,
        }}
    }
})
}

export const getCitizenshipById = async (id: number): Promise<CitizenshipGet | null> => {
    return prisma.citizenship.findUnique({
        where: {
            id: id
        },
           select:{
            id:true,
            country:true,
            user:{
        select: {
            id: true,
            firstName: true,
            lastName: true,
            email: true,
            password: true,
            country: true,
            residence: true,
        }}
    }
    })
}

export const createCitizenship = async (ancestry: Omit<CitizenshipPost, "id">): Promise<CitizenshipGet> => {
    return prisma.citizenship.create({
        data: ancestry,
         select:{
            id:true,
            country:true,
            user:{
        select: {
            id: true,
            firstName: true,
            lastName: true,
            email: true,
            password: true,
            country: true,
            residence: true,
        }}
    }
    })
}

export const updatedCitizenship = async (ancestryId: number, ancestry: Omit<Citizenship, "id">): Promise<Citizenship | null> => {
        return prisma.citizenship.update({
            where: { id: ancestryId },
            data: ancestry,
            select: {
                id: true,
                country:true,              
            },
        })
}

export const deleteCitizenship = async (ancestryId: number): Promise<Citizenship> => {
           return prisma.citizenship.delete({
            where: { id: ancestryId 
            },
            select:{
                id: true,
                country:true,
            }
            })
}