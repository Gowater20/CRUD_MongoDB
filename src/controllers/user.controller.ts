import { Request, Response } from "express";
import { IUser } from "../types/user.interface";
import { users } from "../data/users";
import { createUser, showUsers } from "../services/user.service";


export const getUserById = async (req: Request, res: Response) => {
    try {
        const id = +req.params.id;
        const user = users.find(user => user.id === id);
        res.status(200).json(user);
    } catch (err: any) {
        res.status(500).json({ error: err.message });
    }
}

export const addUserHandler = async(req: Request, res: Response) => {
    try {
        const user: IUser = await createUser(req.body)
        res.status(200).json({mess: "Added user succesfully", newUser: user});
    } catch (err: any) {
        res.status(500).json({ error: err.message });
    }
}

export const updateUserHandler = async(req: Request, res: Response) => {
    try {
        const id = +req.params.id;
        const user = users.find(user => user.id === id);
        if (user) {
            Object.assign(user, req.body);
            res.status(200).json(user);
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    } catch (err: any) {
        res.status(500).json({ error: err.message });
    }
}

export const deleteUserHandler = async(req: Request, res: Response) => {
    try {
        const id = +req.params.id;
        const index = users.findIndex(user => user.id === id);
        if (index !== -1) {
            users.splice(index, 1);
            res.status(200).json({ message: 'User deleted successfully' });
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    } catch (err: any) {
        res.status(500).json({ error: err.message });
    }
}

export const getUsers = async(req: Request, res: Response) => {
    try{
        const users = await showUsers()
        res.status(200).json(users)
    } catch (err) {
        res.status(500).json({err: "The collection of users is empty"});
    }
}