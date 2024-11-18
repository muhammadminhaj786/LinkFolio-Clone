import { User } from "../models/user.model.js";

export const createUser = async (req,res)=> {
    try {

        const {email, password, firstName, phoneNo} = req.body;

        if(!email || !password){
            return res.status(400).json({
                message: "Email and password are required field"
            })
        }

        let existingUser = await User.findOne({email});
        if(existingUser){
            return res.status(403).json({
                message: 'Email already exist'
            })
        }

        const user = new User()
        user.firstName = firstName
        user.email = email
        user.phoneNo = phoneNo
        user.password = user.encryptPassword(password)

        const result = await user.save()

        return res.status(201).json({
            message: "User created successfully",
            result
        })
        
    } catch (error) {
        return res.status(500).json({
            message: 'An error occurred while creating user',
            details: error.message
        })
    }
}