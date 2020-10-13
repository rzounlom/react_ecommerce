import jwt from 'jsonwebtoken'
import User from '../models/userModel'
import asyncHandler from "express-async-handler";

const protect = asyncHandler(async (req, res, next) => {
    let token

    if(req.headers.authorization && 
       req.headers.authorization.startsWith('Bearer')) {
           try {
               //split token from bearer
               token = req.headers.authorization.split(' ')[1]

               //decode token
               const decoded = jwt.verify(token, process.env.JWT_SECRET)

               //set user minus password
               req.user = await User.findById(decoded.id).select('-password')

               next()

           } catch (error) {
               console.error(error)
               res.status(401)
               throw new Error('Not authorized, token failed')
           }
    }

    if(!token) {
        res.status(401)
        throw new Error('Not authorized, no token')
    }
})

export default protect