import express from "express";
import type { Request, Response } from "express"
import { body, validationResult } from "express-validator"
import * as citizenshipService from "../services/citizenshipService"

export const citizenshipRouter = express.Router()

//GET: Uma lista de todos os usuários
citizenshipRouter.get("/", async (request: Request, response: Response) => {
    try {
        const citizenships = await citizenshipService.getCitizenship();
        return response.status(200).json(citizenships);
    } catch (erro: any) {
        return response.status(500).json(erro.message);
    }
});

// GetById : Buscando usuário específico
citizenshipRouter.get("/:id", async (request: Request, response: Response) => {
    const id: number = parseInt(request.params.id);
    try {
        const citizenship = await citizenshipService.getCitizenshipById(id);
        if (citizenship) {
            return response.status(200).json(citizenship);
        } else {
            return response.status(404).json("Usuário não encontrado");
        }
    } catch (error: any) {
        return response.status(500).json(error.message);
    }
});

// POST: Criar um novo usuário
citizenshipRouter.post("/",  async (request: Request, response: Response) => {
    try {
        const citizenship = request.body
        const newCitizenship = await citizenshipService.createCitizenship(citizenship)
        return response.status(201).json(newCitizenship)
    } catch (error: any) {
        return response.status(500).json(error.message);
    }
});

// PUT: Atualizar um usuário existente
citizenshipRouter.put("/:id", async (request: Request, response: Response) => {
    const id:number=parseInt(request.params.id)
    try {
        const updatedcitizenship = await citizenshipService.updatedCitizenship(id, request.body);
        return response.status(200).json(updatedcitizenship);
    } catch (error: any) {
        return response.status(500).json(error.message);
    }
});

// DELETE: Excluir um usuário específico
citizenshipRouter.delete("/:id", async (request: Request, response: Response) => {
    const id: number = parseInt(request.params.id);
    try {
        const deletedCitizenship = await citizenshipService.deleteCitizenship(id);
        
    } catch (error: any) {
        return response.status(500).json(error.message);
    }
});