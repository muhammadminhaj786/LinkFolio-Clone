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

export const login = async (req,res)=> {
    try {

        const {email, password}= req.body

        if(!email || !password){
            return res.status(400).json({
                message: "Email and password are required field"
            })
        }

        const user = await User.findOne({email}).select('+password')

        if(!user){
            return res.status(404).json({
                message: 'user not found'
            })
        }

       if(!user.validPassword(password, user.password)){
        return res.status(401).json({message: 'Invalid Password'})
       }

       const response = {
        uid: user._id,
        firstName: user.firstName,
        email: user.email
       }

       return res.status(200).json(response)
        
    } catch (error) {
        return res.status(500).json({
            message: "An error occurred while login",
            details: error.message
        })
    }
}