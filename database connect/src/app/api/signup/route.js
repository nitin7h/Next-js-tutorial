import { NextResponse } from "next/server";
import { dbConnection } from "@/lib/dbConnection";
import User from "@/lib/model/signupModel"
export async function GET(request) {
    await dbConnection()
    return NextResponse.json({ message: 'Hello, this is your GET API with NextResponse!' });
}

export async function POST(request) {
    let data = await request.json()

    console.log("Data aa rha hai Backend me **** : ", data);

    const { fullName, email, password } = data



    // now save this data in database
    try {
        const user = new User({
            fullName: fullName,
            email: email,
            password: password
        });
        await user.save();

        console.log("Data Saved Succesfully...");



    } catch (error) {
        console.log("Data not Daved in Database : ", error);


    }
    return NextResponse.json({ message: "Your Data Posted Succesfully", data })
}