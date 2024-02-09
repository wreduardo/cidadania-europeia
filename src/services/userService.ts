import { prisma } from "../utils/db.server";
import { User } from "../models/User";


export const getUsers = async (): Promise<User[]> => {
    return prisma.user.findMany({
        select: {
            id: true,
            firstName: true,
            lastName: true,
            email: true,
            password: true,
            country: true,
            residence: true,
        }
    })
}

export const getUserById = async (id: number): Promise<User | null> => {
    return prisma.user.findUnique({
        where: {
            id: id
        },
        select: {
            id: true,
            firstName: true,
            lastName: true,
            email: true,
            password: true,
            country: true,
            residence: true,
        }
    })
}

export const updateUser = async (userId: number, user: Omit<User, "id">): Promise<User | null> => {
        return prisma.user.update({
            where: { id: userId },
            data: user,
            select: {
                id: true,
                firstName: true,
                lastName: true,
                email: true,
                password: true,
                country: true,
                residence: true,
            },
        })
}

export const deleteUser = async (userId: number): Promise<User> => {
           return prisma.user.delete({
            where: { id: userId 
            },
            select:{
                id: true,
                firstName: true,
                lastName: true,
                email: true,
                password: true,
                country: true,
                residence: true
            }
            })
}

export const createUser = async (user: Omit<User, "id">): Promise<User> => {
    return prisma.user.create({
        data: user,
        select: {
            id: true,
            firstName: true,
            lastName: true,
            email: true,
            password: true,
            country: true,
            residence: true,
        }
    })
}


