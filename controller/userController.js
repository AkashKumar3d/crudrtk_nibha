import { User } from "../models/userModel.js";

// Create new user
export const createUser = async (req, res) => {
  try {
    const { name, email, age, password , repassword, gender} = req.body;
    const newUser = new User({ name, email, age , password, repassword, gender});
    await newUser.save();
    res.status(201).json({ message: "User created successfully", user: newUser });
  } catch (error) {
    res.status(400).json({ message: "Error creating user", error: error.message });
  }
};

// Get all users
export const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: "Error fetching users", error: error.message });
  }
};


// Delete user by ID
export const deleteUser = async (req, res) => {
    try {
      const { id } = req.params; // Get user ID from URL params
  
      const deletedUser = await User.findByIdAndDelete(id);
  
      if (!deletedUser) {
        return res.status(404).json({ message: "User not found" });
      }
  
      res.status(200).json({ message: "User deleted successfully", user: deletedUser });
    } catch (error) {
      res.status(500).json({ message: "Error deleting user", error: error.message });
    }
  };
  

  // Update user by ID
export const updateUser = async (req, res) => {
    try {
      const { id } = req.params; // Get user ID from URL params
      const { name, email, age, password, repassword, gender } = req.body;
  
      const updatedUser = await User.findByIdAndUpdate(
        id,
        { name, email, age, password, repassword, gender },
        { new: true, runValidators: true } // Return the updated user & validate fields
      );
  
      if (!updatedUser) {
        return res.status(404).json({ message: "User not found" });
      }
  
      res.status(200).json({ message: "User updated successfully", user: updatedUser });
    } catch (error) {
      res.status(500).json({ message: "Error updating user", error: error.message });
    }
  };
  