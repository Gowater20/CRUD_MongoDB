import { IUser } from "../types/user.interface";
import { User } from "../models/user.model";

export const showUsers = async (): Promise<IUser[]> => {
	return await User.find();
};

export const createUser = async (user: IUser): Promise<IUser> => {
	return await User.create(user);
};

export const deleteUser = async (element: IUser): Promise<IUser> => {
    return await User.deleteOne(user);
};