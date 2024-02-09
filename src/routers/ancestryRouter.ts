import express from "express";
import type { Request, Response } from "express"
import { body, validationResult } from "express-validator"
import * as AncestryService from "../services/ancestryService"

export const ancestryRouter = express.Router()

//GET: Uma lista de todos os usuários
ancestryRouter.get("/", async (request: Request, response: Response) => {
    try {
        const ancestrys = await AncestryService.getAncestrys();
        return response.status(200).json(ancestrys);
    } catch (erro: any) {
        return response.status(500).json(erro.message);
    }
});

// GetById : Buscando usuário específico
ancestryRouter.get("/:id", async (request: Request, response: Response) => {
    const id: number = parseInt(request.params.id);
    try {
        const ancestry = await AncestryService.getAncestryById(id);
        if (ancestry) {
            return response.status(200).json(ancestry);
        } else {
            return response.status(404).json("Usuário não encontrado");
        }
    } catch (error: any) {
        return response.status(500).json(error.message);
    }
});

// POST: Criar um novo usuário
ancestryRouter.post("/",  async (request: Request, response: Response) => {
    try {
        const ancestry = request.body
        const newAncestry = await AncestryService.createAncestry(ancestry)
        return response.status(201).json(newAncestry)
    } catch (error: any) {
        return response.status(500).json(error.message);
    }
});

// PUT: Atualizar um usuário existente
ancestryRouter.put("/:id", async (request: Request, response: Response) => {
    const id:number=parseInt(request.params.id)
    try {
        const updatedAncestry = await AncestryService.updatedAncestry(id, request.body);
        return response.status(200).json(updatedAncestry);
    } catch (error: any) {
        return response.status(500).json(error.message);
    }
});

// DELETE: Excluir um usuário específico
ancestryRouter.delete("/:id", async (request: Request, response: Response) => {
    const id: number = parseInt(request.params.id);
    try {
        await AncestryService.deleteAncestry(id);
        
    } catch (error: any) {
        return response.status(500).json(error.message);
    }
});