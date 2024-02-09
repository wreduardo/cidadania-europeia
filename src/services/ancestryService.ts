import { prisma } from "../utils/db.server"
import { Ancestry } from "../models/Ancestry"
import { AncestryGet } from "../models/Ancestry"
import { AncestryPost } from "../models/Ancestry"


export const getAncestrys = async (): Promise<AncestryGet[]> => {
    return prisma.ancestry.findMany({
        select:{
            id:true,
            surname:true,
            results:true,
            generation:true,
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

export const getAncestryById = async (id: number): Promise<AncestryGet | null> => {
    return prisma.ancestry.findUnique({
        where: {
            id: id
        },
           select:{
            id:true,
            surname:true,
            results:true,
            generation:true,
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

export const createAncestry = async (ancestry: Omit<AncestryPost, "id">): Promise<AncestryGet> => {
    return prisma.ancestry.create({
        data: ancestry,
         select:{
            id:true,
            surname:true,
            results:true,
            generation:true,
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

export const updatedAncestry = async (ancestryId: number, ancestry: Omit<Ancestry, "id">): Promise<Ancestry | null> => {
        return prisma.ancestry.update({
            where: { id: ancestryId },
            data: ancestry,
            select: {
                id: true,
                surname:true,
                results:true,
                generation:true,               
            },
        })
}

export const deleteAncestry = async (ancestryId: number): Promise<Ancestry> => {
           return prisma.ancestry.delete({
            where: { id: ancestryId 
            },
            select:{
                id: true,
                surname:true,
                generation:true,
                results:true,
            }
            })
}