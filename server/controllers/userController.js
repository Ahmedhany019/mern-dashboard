import UserSchema from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
/**--------------------------------
 * @desc Register
 * @router /api/user/register
 * @method Post
 * @access public
---------------------------------*/
const userRegister = async (req, res) => {
  const { name, password, email } = req.body;

  try {
    let user = await UserSchema.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "email already exists" });
    }
    // تشفير الباسورد
    const hashedPassword = await bcrypt.hash(password, 10);
    // انشاء اوبجكت جديد او بوزر
    user = new UserSchema({ name, email, password:hashedPassword });
    await user.save();
    res.status(201).json({ message: "email has been created" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
/**--------------------------------
 * @desc Login
 * @router /api/user/login
 * @method Post
 * @access public
---------------------------------*/
const userLogin = async (req, res) => {
  const { email, password } = req.body;

  try {

    const user = await UserSchema.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);

    return res.status(200).json({ token, user , success: true });
  } catch (error) {
    return res.status(500).json({ message: error, success: false });
  }
};

/**--------------------------------
 * @desc Get all users
 * @router /api/user/listUsers
 * @method get
 * @access private (only admin)
---------------------------------*/
const listOfUsers = async (req, res) => {
  try {
    const users = await UserSchema.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: error.message });
  }
};

/**--------------------------------
 * @desc Delete user
 * @router /api/user/delete
 * @method get
 * @access private (only admin)
---------------------------------*/
const deleteUser = async (req, res) => {
  try {
    await UserSchema.findByIdAndDelete(req.params.id);
    res.json({ message: "user has been deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export { userRegister, userLogin, listOfUsers, deleteUser };
