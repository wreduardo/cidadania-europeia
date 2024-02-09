import express from "express";
import type { Request, Response } from "express"
import { body, validationResult } from "express-validator"
import * as documentService from "../services/documentService"

export const documentRouter = express.Router()

//GET: Uma lista de todos os usuários
documentRouter.get("/", async (request: Request, response: Response) => {
    try {
        const ducoments = await documentService.getDocuments();
        return response.status(200).json(ducoments);
    } catch (erro: any) {
        return response.status(500).json(erro.message);
    }
});

// GetById : Buscando usuário específico
documentRouter.get("/:id", async (request: Request, response: Response) => {
    const id: number = parseInt(request.params.id);
    try {
        const document = await documentService.getDocumentById(id);
        if (document) {
            return response.status(200).json(document);
        } else {
            return response.status(404).json("Usuário não encontrado");
        }
    } catch (error: any) {
        return response.status(500).json(error.message);
    }
});

// POST: Criar um novo usuário
documentRouter.post("/",  async (request: Request, response: Response) => {
    try {
        const document = request.body
        const newDocument = await documentService.createDocument(document)
        return response.status(201).json(newDocument)
    } catch (error: any) {
        return response.status(500).json(error.message);
    }
});

// PUT: Atualizar um usuário existente
documentRouter.put("/:id", async (request: Request, response: Response) => {
    const id:number=parseInt(request.params.id)
    try {
        const updatedDocument = await documentService.updatedDocument(id, request.body);
        return response.status(200).json(updatedDocument);
    } catch (error: any) {
        return response.status(500).json(error.message);
    }
});

// DELETE: Excluir um usuário específico
documentRouter.delete("/:id", async (request: Request, response: Response) => {
    const id: number = parseInt(request.params.id);
    try {
        const deletedDocument = await documentService.deleteDocument(id);
        
    } catch (error: any) {
        return response.status(500).json(error.message);
    }
});