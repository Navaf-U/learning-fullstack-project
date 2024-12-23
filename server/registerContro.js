import User from "./UsersSchema.js";
import jwt from 'jsonwebtoken'
import bcrypt from "bcryptjs";

const createToken = (id,expiresIn)=>{
   return jwt.sign({id},process.env.JWT_TOKEN,{expiresIn})
}

const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const exist = await User.findOne({ email });
    if (exist) return res.status(403).json("User exists");
    const passwordHash = await bcrypt.hash(password, 10);
    await User.create({
      name,
      email,
      password: passwordHash,
    });
    res.status(201).res.json("User created successfully");
  } catch (err) {
    console.log(err);
    return res.status(400).json("ERROR");
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) return res.json("User not exists");
  const Match = await  bcrypt.compare(password, user.password);
  if (!Match) return res.json("Password do not Match");
   const token = createToken(user._id,"1h")
    res.json({message:"USER LOGGED IN",token})

};


export { registerUser, loginUser };
