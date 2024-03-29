import mongoose, { Mongoose } from "mongoose";
import { IUser } from "../types/user.interface";

const userSchema = new mongoose.Schema<IUser>(
	{
		name: {
			type: String,
			required: true,
		},
		age: {
			type: String,
			required: true,
		},
		email: {
			type: String,
			required: true,
		},
		password: {
			type: String,
			required: true,
		},
	},

	{ timestamps: true }
);

export const User = mongoose.model("User", userSchema)
