import User from "../models/UserModel";
import {sign} from "jsonwebtoken"
const maxAge = 3 * 24 * 60 * 1000;
const createToken = {email,userId}=>{
    return sign({email, userId})
}
export const signup = async(request, response, next)=>{
    try{
        const {email, password}= request.body;
        if(!email || !password){
            return response.status(400).send("Email and password is required.");

        }
        const user = await User.create({email, password});

    }catch(error){
        console.log({ error });
        return response.status(500).send("Internal server error.");
    }
};