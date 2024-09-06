import { NextResponse } from "next/server";

export async function GET(request) {
    return NextResponse.json({ message: 'Hello, this is your GET API with NextResponse!' });
}

export async function POST(request) {
    let data = await request.json()
    console.log("Data : ", data);

    return NextResponse.json({ message: "Your Data Posted Succesfully", data })
}