import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        firstName: { type: String },
        lastName: { type: String },
        email: { type: String, required: true, unique: true },
        phoneNumber: { type: String },
        password: { type: String }, // hashed in real projects
        provider: { type: String, default: "local" }, // local or google
        googleId: { type: String },
    },
    { timestamps: true }
);

const User = mongoose.model("User", userSchema);
export default User;
