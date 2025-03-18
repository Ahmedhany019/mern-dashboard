import jwt from "jsonwebtoken";

const authMiddleware = async(req,res,next)=>{
    const token = req.header("authorization")
    if(!token) return res.json({message:"not authorized!"})
        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            req.user = decoded;
            console.log(req.user)
            next();
        } catch (err) {
            res.status(401).json({ message: "invalid token" });
        }

}

export default authMiddleware