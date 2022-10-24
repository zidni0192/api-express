import dotenv from "dotenv";
import jwt from 'jsonwebtoken'

dotenv.config()

export const tokenValidation = (req, res, next) => {
    const secretKey = process.env.JWT_SECRET
    const bearerToken = req.headers["authorization"]?.split(' ') || []
    const token = bearerToken[1]
    jwt.verify(token, secretKey, (err, decoded) => {
        if (err && err.name === 'TokenExpiredError') return res.statusCode(401).json('Token Expired')
        if (err && err.name === 'JsonWebTokenError') return res.statusCode(401).json('Invalid Token')
        next()
    })
}