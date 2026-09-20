const bcrypt = require("bcrypt");
const User = require("../models/User");

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

async function register(req, res) {
  try {
    const { name, email, password } = req.body || {};

    if (!name || !String(name).trim()) {
      return res.status(400).json({ message: "Name is required." });
    }

    if (!email || !String(email).trim()) {
      return res.status(400).json({ message: "Email is required." });
    }

    if (password === undefined || password === null || password === "") {
      return res.status(400).json({ message: "Password is required." });
    }

    const trimmedEmail = String(email).trim();

    if (!EMAIL_REGEX.test(trimmedEmail)) {
      return res.status(400).json({
        message: "Please provide a valid email address.",
      });
    }

    if (String(password).length < 6) {
      return res.status(400).json({
        message: "Password must be at least 6 characters.",
      });
    }

    const existingUser = await User.findOne({
      email: trimmedEmail.toLowerCase(),
    });

    if (existingUser) {
      return res.status(409).json({
        message: "An account with this email already exists.",
      });
    }

    const hashedPassword = await bcrypt.hash(String(password), 10);

    const user = await User.create({
      name: String(name).trim(),
      email: trimmedEmail,
      password: hashedPassword,
    });

    return res.status(201).json({
      message: "Registration successful.",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        createdAt: user.createdAt,
      },
    });
  } catch (error) {
    if (error.code === 11000) {
      return res.status(409).json({
        message: "An account with this email already exists.",
      });
    }

    console.error("Registration error:", error);
    return res.status(500).json({
      message: "Something went wrong. Please try again.",
    });
  }
}

module.exports = { register };
