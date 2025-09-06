    import React, { useState } from "react";
    import { Link, useNavigate } from "react-router-dom";
    import { FcGoogle } from "react-icons/fc";
    import { FaEye, FaEyeSlash } from "react-icons/fa";
    import axios from "axios";
    import { useForm } from "react-hook-form";

    export default function Signup() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);
    const navigate = useNavigate();

    const onSubmit = async (data) => {
        setError(null);
        setSuccess(null);
        try {
        const response = await axios.post("/api/auth/signup", data);
        if (response.status === 200) {
            setSuccess("Signup successful!");
            navigate("/login"); // ✅ replaces Next.js router
        }
        console.log("Signup success:", response.data);
        } catch (err) {
        setError("Error signing up. Please try again.");
        console.error("Signup error:", err);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen p-4 px-[6rem] bg-[url(/Users/abhay/Desktop/DP/DITU/public/images/bg.png)]">
        {/* Left Section */}
        <div className="w-1/2 p-8 space-y-6 flex justify-between gap-[2rem] flex-col">
            <div>
            <div className="text-[2rem] font-bold">Welcome to SkillsMantri</div>
            <div>
                .............
            </div>
            </div>
            <div>
            {/* <img
                src="/images/auth-bg.png"
                className="w-[65%]"
                alt="Logo"
            /> */}
            </div>
        </div>

        {/* Signup Form */}
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-1/2 bg-white rounded-3xl shadow-md p-[3rem] py-[2rem] space-y-6"
        >
            <h2 className="text-2xl font-bold text-gray-800">Signup</h2>
            {error && <p className="text-red-500">{error}</p>}
            {success && <p className="text-green-500">{success}</p>}

            <div className="space-y-4">
            {/* First + Last Name */}
            <div className="grid grid-cols-2 gap-[1rem]">
                <div>
                <label className="block text-sm font-medium text-gray-700">First Name</label>
                <input
                    type="text"
                    {...register("firstName", { required: "First name is required" })}
                    className="text-black w-full px-4 py-2 mt-2 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
                    placeholder="Enter your first name"
                />
                {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName.message}</p>}
                </div>
                <div>
                <label className="block text-sm font-medium text-gray-700">Last Name</label>
                <input
                    type="text"
                    {...register("lastName", { required: "Last name is required" })}
                    className="text-black w-full px-4 py-2 mt-2 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
                    placeholder="Enter your last name"
                />
                {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName.message}</p>}
                </div>
            </div>

            {/* Email */}
            <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input
                type="email"
                {...register("email", {
                    required: "Email is required",
                    pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Invalid email address"
                    }
                })}
                className="text-black w-full px-4 py-2 mt-2 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
                placeholder="Enter your email"
                />
                {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
            </div>

            {/* Mobile Number */}
            <div>
                <label className="block text-sm font-medium text-gray-700">Mobile Number</label>
                <div className="w-full px-4 mt-2 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none flex items-center">
                <img src="/images/india-flag.png" alt="India Flag" className="w-6 h-4" />
                <div className="text-gray-900 ml-2">+91</div>
                <input
                    type="text"
                    {...register("phoneNumber", { required: "Mobile number is required" })}
                    className="text-black w-full px-2 py-2"
                    placeholder="Enter your mobile number"
                />
                </div>
                {errors.phoneNumber && <p className="text-red-500 text-sm">{errors.phoneNumber.message}</p>}
            </div>

            {/* Password */}
            <div>
                <label className="block text-sm font-medium text-gray-700">Password</label>
                <div className="w-full mt-2 pr-4 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none flex">
                <input
                    type={showPassword ? "text" : "password"}
                    {...register("password", {
                    required: "Password is required",
                    minLength: { value: 8, message: "Password must be at least 8 characters" }
                    })}
                    className="text-black w-full px-4 py-2 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
                    placeholder="Enter your password"
                />
                <div
                    className="flex items-center cursor-pointer"
                    onClick={() => setShowPassword(!showPassword)}
                >
                    {showPassword ? (
                    <div className="flex items-center gap-[5px] text-gray-500 text-sm">
                        <FaEyeSlash size={20} className="text-gray-500" />
                        <span>Hide</span>
                    </div>
                    ) : (
                    <div className="flex items-center gap-[5px] text-gray-500 text-sm">
                        <FaEye size={20} className="text-gray-500" />
                        <span>Show</span>
                    </div>
                    )}
                </div>
                </div>
                {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
                <div className="text-gray-500 text-[.8rem]">
                Use 8 or more characters with a mix of letters, numbers & symbols
                </div>
            </div>

            {/* OR Divider */}
            <div className="text-gray-500 flex items-center gap-[1rem] justify-center">
                <hr className="w-[30%] border" />
                <div className="text-[1.5rem] text-gray-400">or</div>
                <hr className="w-[30%] border" />
            </div>



            {/* Google Signup */}
            <div className="text-gray-500 flex border border-black mx-auto rounded-full p-2 items-center gap-[1rem] justify-center">
                <FcGoogle size={35} />
                <div className="font-bold">Continue with Google</div>
            </div>





            </div>

            

            {/* Terms */}
            <div className="text-gray-900 flex items-start gap-[1rem] w-[80%]">
            <input
                type="checkbox"
                {...register("terms", { required: "You must agree to the terms" })}
                className="mt-2"
            />
            <div>
                By creating an account, I agree to our <u>Terms of use</u> and{" "}
                <u>Privacy Policy</u>
            </div>
            </div>
            {errors.terms && <p className="text-red-500 text-sm">{errors.terms.message}</p>}

            {/* Submit */}
            <div>
            <button
                type="submit"
                className="w-full py-2 mt-2 text-white bg-green-600 rounded-full hover:bg-green-700 transition duration-200"
            >
                Sign-up
            </button>
            <div className="text-center text-gray-900 mt-1">
                Already have an account?{" "}
                <Link to="/login" className="text-blue-600">
                Login
                </Link>
            </div>
            </div>
        </form>
        </div>
    );
    }
