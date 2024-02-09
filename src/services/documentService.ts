import { prisma } from "../utils/db.server"
import { Document } from "../models/Document"
import { DocumentGet } from "../models/Document"
import { DocumentPost } from "../models/Document"
import { Citizenship } from "../models/Citizenship"





export const getDocuments = async (): Promise<DocumentGet[]> => {
    return prisma.document.findMany({
        select:{
            id:true,
            type:true,
            expiration:true,
            country:true,
            status:true,
            citizenship:{
        select: {
            id: true,
            country:true,
        }}
    }
})
}

export const getDocumentById = async (id: number): Promise<DocumentGet | null> => {
    return prisma.document.findUnique({
        where: {
            id: id
        },
          select:{
            id:true,
            type:true,
            expiration:true,
            country:true,
            status:true,
            citizenship:{
        select: {
            id: true,
            country:true,
        }}
    }
    })
}

export const createDocument = async (document: Omit<DocumentPost, "id">): Promise<DocumentGet> => {
    return prisma.document.create({
        data: document,
         select:{
            id:true,
            type:true,
            expiration:true,
            country:true,
            status:true,
            citizenship:{
        select: {
            id: true,
            country:true,
        }}
    }
    })
}

export const updatedDocument = async (citizenshipId: number, document: Omit<Citizenship, "id">): Promise<Document | null> => {
        return prisma.document.update({
            where: { id: citizenshipId },
            data: document,
            select: {
                id: true,
                country:true, 
                type:true,
                expiration:true,
                status:true,             
            },
        })
}

export const deleteDocument = async (citizenshipId: number): Promise<Document> => {
           return prisma.document.delete({
            where: { id: citizenshipId
            },
            select:{
                id: true,
                country:true, 
                type:true,
                expiration:true,
                status:true, 
            }
            })
}