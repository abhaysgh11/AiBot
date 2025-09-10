import express from "express";
import User from "../models/User.js";

const router = express.Router();

// Normal signup
router.post("/signup", async (req, res) => {
    try {
        const { firstName, lastName, email, phoneNumber, password } = req.body;

        const existing = await User.findOne({ email });
        if (existing) return res.status(400).json({ message: "User already exists" });

        const user = new User({
        firstName,
        lastName,
        email,
        phoneNumber,
        password, // ⚠️ hash this in production
        provider: "local",
        });

        await user.save();
        res.status(200).json({ message: "Signup successful", user });
    } catch (err) {
        console.error("Signup error:", err);
        res.status(500).json({ message: "Server error" });
    }
});

    // Google signup
    router.post("/google-signup", async (req, res) => {
    try {
        const { email, firstName, lastName, googleId } = req.body;

        let user = await User.findOne({ email });
        if (!user) {
        user = new User({
            email,
            firstName,
            lastName,
            googleId,
            provider: "google",
        });
        await user.save();
        }

        res.status(200).json({ message: "Google signup/login successful", user });
    } catch (err) {
        console.error("Google signup error:", err);
        res.status(500).json({ message: "Server error" });
    }
});

export default router;
