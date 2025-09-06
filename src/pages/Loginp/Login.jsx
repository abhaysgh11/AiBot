// // // function Login(){
// // //     return (<>
// // //         <div><h1>Login Page</h1></div>
// // //         </>
// // //     );
// // // }
// // // export default Login


// import React from "react";
// import { Link } from "react-router-dom";
// // import { FaEye, FaEyeSlash } from "react-icons/fa";
// // import { FcGoogle } from "react-icons/fc";
// import PageLayout from "../../components/PageLaout";

// export default function Login() {
//     // Note: All state and logic for authentication, API calls, and navigation have been removed.
//     // This component is purely for front-end structure and styling.

//     const showPassword = false; // Static value for visual representation

//     return (<PageLayout>
//         <div className="flex items-center justify-center min-h-screen p-4 px-[6rem] bg-[#1f1f1f]">
//             <div className="w-1/2 p-8 space-y-6 flex justify-between gap-[2rem] flex-col">
//                 <div>
//                     <div className="text-[2rem] font-bold">
//                         Welcome Back!
//                     </div>
//                     <div>
//                         Login to continue to your account and access all our features.
//                     </div>
//                 </div>
//                 <div>
//                     <img src="/images/auth-bg.png" className="w-[65%]" alt="Authentication background" />
//                 </div>
//             </div>
//             <div className="w-1/2 bg-white rounded-3xl shadow-md p-[3rem] py-[2rem] space-y-6">
//                 <h2 className="text-3xl font-[500] text-gray-800">Login</h2>
//                 <div className="space-y-4">
//                     <div>
//                         <label className="block text-sm font-medium text-gray-700">Email</label>
//                         <input
//                             type="email"
//                             className="w-full px-4 py-2 mt-2 border text-black rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
//                             placeholder="Enter your email"
//                         />
//                     </div>
//                     <div>
//                         <label className="block text-sm font-medium text-gray-700">Password</label>
//                         <div className="w-full mt-2 pr-4 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none flex">
//                             <input
//                                 type={showPassword ? "text" : "password"}
//                                 className="w-full px-4 py-2 rounded-xl text-black focus:ring-2 focus:ring-blue-500 outline-none"
//                                 placeholder="Enter your password"
//                             />
//                             <div className="flex items-center cursor-pointer">
//                                 {showPassword ? (
//                                     <div className="flex items-center gap-[5px] text-gray-500 text-sm">
//                                         <FaEyeSlash size={20} className="text-gray-500" />
//                                         <span>Hide</span>
//                                     </div>
//                                 ) : (
//                                     <div className="flex items-center gap-[5px] text-gray-500 text-sm">
//                                         <FaEye size={20} className="text-gray-500" />
//                                         <span>Show</span>
//                                     </div>
//                                 )}
//                             </div>
//                         </div>
//                     </div>
//                     <div className="text- flex items-center gap-[1rem] justify-between">
//                         <div className="text-gray-900 flex items-center gap-[1rem]">
//                             <input type="checkbox" name="" id="" />
//                             <div>Remember Me</div>
//                         </div>
//                         <Link to="/forgot-password" className="text-blue-600 text-sm w-[max-content]">
//                             Forgot Password?
//                         </Link>
//                     </div>
//                     <div className="text-gray-500 flex items-center gap-[1rem] justify-center">
//                         <hr className="w-[30%] border" />
//                         <div className="text-[1.5rem] text-gray-400">or</div>
//                         <hr className="w-[30%] border" />
//                     </div>
//                     <div className="text-gray-500 flex border border-black mx-auto rounded-full p-2 items-center gap-[1rem] justify-center">
//                         <FcGoogle size={35} />
//                         <div className="font-bold">
//                             Continue with Google
//                         </div>
//                     </div>
//                 </div>
//                 <div>
//                     <button
//                         type="submit"
//                         className="w-full py-2 mt-2 text-white bg-blue-600 rounded-full hover:bg-blue-700 transition duration-200"
//                     >
//                         Login
//                     </button>
//                     <div className="text-center text-gray-900 mt-1">
//                         Don&apos;t have an account?{" "}
//                         <Link to="/signup" className="text-blue-600">
//                             Signup
//                         </Link>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </PageLayout>);
// }






// // import PageLayout from "../../components/PageLaout";
// // function Login(){
// //     return(
// //         <PageLayout>

// //         <div className="flex flex-1 min-h-screen bg-red-800"></div>

// //         </PageLayout>
// //     );

// // };







import React from "react";
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import PageLayout from "../../components/PageLayout.jsx"; // ✅ fixed spelling

export default function Login() {
  const showPassword = false; // static for now

    return (
        <PageLayout>
        <div className="flex items-center justify-center min-h-screen p-4 px-[6rem] bg-[url(../../images/bg.png)]">
            <div className="w-1/2 p-8 space-y-6 flex justify-between gap-[2rem] flex-col">
            <div>
                <div className="text-[2rem] font-bold">Welcome Back!</div>
                <div>
                Login to continue to your account and access all our features.
                </div>
            </div>
            <div>
                <img
                src="../../images/bg.png"
                className="w-[10%]"
                alt="Authentication background"
                />
            </div>
            </div>
            <div className="w-1/2 bg-white rounded-3xl shadow-md p-[3rem] py-[2rem] space-y-6">
            <h2 className="text-3xl font-[500] text-gray-800">Login</h2>
            <div className="space-y-4">
                <div>
                <label className="block text-sm font-medium text-gray-700">
                    Email
                </label>
                <input
                    type="email"
                    className="w-full px-4 py-2 mt-2 border text-black rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
                    placeholder="Enter your email"
                />
                </div>
                <div>
                <label className="block text-sm font-medium text-gray-700">
                    Password
                </label>
                <div className="w-full mt-2 pr-4 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none flex">
                    <input
                    type={showPassword ? "text" : "password"}
                    className="w-full px-4 py-2 rounded-xl text-black focus:ring-2 focus:ring-blue-500 outline-none"
                    placeholder="Enter your password"
                    />
                    <div className="flex items-center cursor-pointer">
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
                </div>
                <div className="flex items-center gap-[1rem] justify-between">
                <div className="text-gray-900 flex items-center gap-[1rem]">
                    <input type="checkbox" />
                    <div>Remember Me</div>
                </div>
                <Link
                    to="/forgot-password"
                    className="text-blue-600 text-sm w-[max-content]"
                >
                    Forgot Password?
                </Link>
                </div>
                <div className="text-gray-500 flex items-center gap-[1rem] justify-center">
                <hr className="w-[30%] border" />
                <div className="text-[1.5rem] text-gray-400">or</div>
                <hr className="w-[30%] border" />
                </div>
                <div className="text-gray-500 flex border border-black mx-auto rounded-full p-2 items-center gap-[1rem] justify-center">
                <FcGoogle size={35} />
                <div className="font-bold">Continue with Google</div>
                </div>
            </div>
            <div>
                <button
                type="submit"
                className="w-full py-2 mt-2 text-white bg-blue-600 rounded-full hover:bg-blue-700 transition duration-200"
                >
                Login
                </button>
                <div className="text-center text-gray-900 mt-1">
                Don&apos;t have an account?{" "}
                <Link to="/signup" className="text-blue-600">
                    Signup
                </Link>
                </div>
            </div>
            </div>
        </div>
        </PageLayout>
    );
}
