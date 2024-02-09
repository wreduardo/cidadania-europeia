import express from "express";
import type { Request, Response } from "express"
import { body, validationResult } from "express-validator"
import * as UserService from "../services/userService"

export const userRouter = express.Router()

//GET: Uma lista de todos os usuários
userRouter.get("/", async (request: Request, response: Response) => {
    try {
        const users = await UserService.getUsers();
        return response.status(200).json(users);
    } catch (erro: any) {
        return response.status(500).json(erro.message);
    }
});

// GetById : Buscando usuário específico
userRouter.get("/:id", async (request: Request, response: Response) => {
    const id: number = parseInt(request.params.id);
    try {
        const user = await UserService.getUserById(id);
        if (user) {
            return response.status(200).json(user);
        } else {
            return response.status(404).json("Usuário não encontrado");
        }
    } catch (error: any) {
        return response.status(500).json(error.message);
    }
});

// POST: Criar um novo usuário
userRouter.post("/",  async (request: Request, response: Response) => {
    try {
        const user = request.body
        const newUser = await UserService.createUser(user)
        return response.status(201).json(newUser)
    } catch (error: any) {
        return response.status(500).json(error.message);
    }
});

// PUT: Atualizar um usuário existente
userRouter.put("/:id", async (request: Request, response: Response) => {
    const id:number=parseInt(request.params.id)
    try {
        const updatedUser = await UserService.updateUser(id, request.body);
        return response.status(200).json(updatedUser);
    } catch (error: any) {
        return response.status(500).json(error.message);
    }
});

// DELETE: Excluir um usuário específico
userRouter.delete("/:id", async (request: Request, response: Response) => {
    const id: number = parseInt(request.params.id);
    try {
        const deletedUser = await UserService.deleteUser(id);
        
    } catch (error: any) {
        return response.status(500).json(error.message);
    }
});


