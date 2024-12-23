import jwt from 'jsonwebtoken'

const verifyToken = async (req, res, next) => {
  try {
    const authHeader = req.headers.token;
    if (authHeader) {
    const token = authHeader.split(" ")[1]
     jwt.verify(token,process.env.JWT_TOKEN,(err,user)=>{
        if(err)return console.log(err)
            req.user = user
            next()
    })
    }else{
       return res.json("NO TOKEN TO CONNECT")
    }
  } catch (error) {
    console.log(error)
  }
};

export default verifyToken