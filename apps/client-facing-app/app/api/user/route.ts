import { NextResponse } from "next/server"
import { PrismaClient } from "@repo/database/client";

const client = new PrismaClient();

export const GET = async () => {
    await client.user.create({
        data: {
            firstName: "Narsi",
            lastName: "Bhati",
            email: "narsibhati31102@gmail.com"
        }
    })
    return NextResponse.json({
        message: "hi there"
    })
}