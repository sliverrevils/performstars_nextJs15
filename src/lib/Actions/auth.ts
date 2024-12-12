// app/actions/authActions.ts
"use server";

import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import User from "../MongoDb/Models/User";
import { connectDBPool } from "../MongoDb/mongodb";

//import { connectDBPerformstars } from "../MongoDb/mongodb";

export async function registerUser(name: string, email: string, password: string) {
    // await connectDBPerformstars();
    await connectDBPool();

    const userExists = await User.findOne({ email });

    if (userExists) {
        throw new Error("User already exists");
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({
        name,
        email,
        password: hashedPassword,
    });

    await user.save();

    return { message: "User registered successfully" };
}

export async function loginUser(email: string, password: string) {
    await connectDBPool();

    const user = await User.findOne({ email });

    if (!user) {
        throw new Error("Invalid credentials");
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
        throw new Error("Invalid credentials");
    }

    const payload = {
        userId: user._id,
    };

    const token = jwt.sign(payload, process.env.JWT_SECRET as string, {
        expiresIn: "1h",
    });

    return { token };
}
