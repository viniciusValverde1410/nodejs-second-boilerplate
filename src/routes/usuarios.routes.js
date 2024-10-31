import { Router } from "express";
import UsersRepository from "../models/users/UsersRepository.js";

const usuariosRoutes = Router();

const usersRepository = new UsersRepository();



usuariosRoutes.get("/", (req, res) => {
    const usuarios = usersRepository.getAllUsers();
    return res.status(200).json({
        message:
        usuarios.length == 0
        ? "Não há usuários cadastrados"
        : `Total de usuários cadastrados: ${usuarios.length}`,
        usuarios
    });
});

export default usuariosRoutes;