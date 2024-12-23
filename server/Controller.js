import User from "./userSchema.js";
import bcrypt from "bcryptjs";
import jwt from 'jsonwebtoken'
const createToken = (id,expiresIn) =>{
 return  jwt.sign({id},process.env.JWT_TOKEN,{expiresIn})
}

const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const userExists = await User.findOne({ email });

    if (userExists) return res.json("User Exists");
    const hashPass = await bcrypt.hash(password, 10);
    User.create({
      name,
      email,
      password: hashPass,
    });
    res.json("USER REGISTERED");
  } catch (error) {
    console.log(error);
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) return res.json("USER DOES NOT EXIST");
  const match = await bcrypt.compare(password,user.password)
  if(!match){
    return res.json("Password not match")
  }
  const token = createToken(user._id,"1hr")
  res.json({message:"User Logged",token})
};

export { registerUser,loginUser };
