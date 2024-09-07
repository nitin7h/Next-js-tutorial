import mongoose from "mongoose";


export const dbConnection = async() => {
    try {
        mongoose.connect(process.env.MONGOURL).then(() => {
            console.log('DB connected 👌...')
        }).catch((error) => {
            console.log('DB not connected...')
        })

    } catch (error) {
        console.log('DB not connected...', error)
    }
}