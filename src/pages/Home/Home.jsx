    //     import React from "react";

    //     function Header() {
    //     return (
    //         <header className="logo-section" style={{    
    //             backgroundColor: "#4B0082",
    //             padding: "15px 20px",
    //             display: "flex",
    //             justifyContent: "space-between",
    //             alignItems: "center",
    //             color: "white"
    //         }}>


    //         <img 
    //             style={{height:"40px"}}
    //             src=" "
    //             alt="Logo laao pehle"
    //         />
    //         <div style={{display:"flex", alignItems:"right", gap:"10px"}}>
    //         <button style={{
    //             backgroundColor: "#6A0DAD",
    //             color: "white",
    //             border: "none",
    //             padding: "8px 20px",
    //             borderRadius: "6px",
    //             fontWeight: "bold",
    //             cursor: "pointer"
    //         }}>
    //             Sign In / Profile
    //         </button>
    //         </div>
    //         </header>
            
    //     );
    //     }



    //     function Navbar() {
    //     return (
    //         <nav className="navbar" style={{
    //             backgroundColor: "#4B0082",
    //             padding: "10px 20px",
    //             display: "flex",
    //             gap: "15px",
    //             borderRadius: "0 0 0px 0px",
    //             color: "white"
    //         }}>

    //         <button style={{
    //             backgroundColor: "#6A0DAD",
    //             border: "none",
    //             color: "white",
    //             padding: "6px 14px",
    //             borderRadius: "6px",
    //             fontWeight: "bold",
    //             cursor: "pointer"
    //         }}>CSS</button>

    //         <button style={{
    //             backgroundColor: "#6A0DAD",
    //             border: "none",
    //             color: "white",
    //             padding: "6px 14px",
    //             borderRadius: "6px",
    //             fontWeight: "bold",
    //             cursor: "pointer"
    //         }}>HTML</button>
    //         <button style={{
    //             backgroundColor: "#6A0DAD",
    //             border: "none",
    //             color: "white",
    //             padding: "6px 14px",
    //             borderRadius: "6px",
    //             fontWeight: "bold",
    //             cursor: "pointer"
    //         }}>ReactJS</button>
    //         <button style={{
    //             backgroundColor: "#6A0DAD",
    //             border: "none",
    //             color: "white",
    //             padding: "6px 14px",
    //             borderRadius: "6px",
    //             fontWeight: "bold",
    //             cursor: "pointer"
    //         }}>Skill</button>


    //         <a href="#chatbot" style={{
    //             marginLeft: "auto",
    //             color: "white",
    //             fontWeight: "bold",
    //             textDecoration: "none"
    //         }}>Refer to Chatbot 🔗</a>
    //         </nav>
    //     );
    //     }

    //     // cursor: pointer;}>CSS</button>

    //     //     <button>HTML</button>
    //     //     <button>ReactJS</button>
    //     //     <button>Skill</button>
    //     //     <a href="#chatbot">Refer to Chatbot 🔗</a>
    //     //     </nav>
    //     // );
        

    //     // function SideBySide() {
    //     // return (
    //     //     <section className="side-by-side" style={{
    //     //             // marginBottom: "40px",
    //     //             // display: "flex",
    //     //             // gap: "30px",
    //     //             // justifyContent: "space-between",
                    
    //     //             // backgroundColor: "#4B0082",
    //     //             marginBottom: "40px",
    //     //             display: "flex",
    //     //             gap: "30px",
    //     //             justifyContent: "space-between",
    //     //             backgroundColor: "#4B0082",
                    
    //     //         }}>

    //     //             {/* Left Section */}

    //     //         <div style={{
    //     //             // display: "flex",
    //     //             // gap: "30px",
    //     //             // flex: 1,
    //     //             background: "white",
    //     //             borderRadius: "12px",
    //     //             padding: "20px",
    //     //             boxShadow: "0 0 10px rgba(0,0,0,0.1)"  ,
    //     //             color: "black",  
    //     //         }}>


    //     //                         <div style={{}}>
    //     //                             <h2>Analyze Your Skills</h2>
    //     //                             <p>
    //     //                             You can assess your web development knowledge and benchmark your
    //     //                             strengths! Get personalized recommendations and career advice.
    //     //                             </p>
    //     //                                 <button onClick={() => alert("Skill analysis started! (Demo)")} style={{
    //     //                                     cursor: "pointer", 
    //     //                                     borderRadius: "6px",
    //     //                                     backgroundColor: "#6A0DAD",
    //     //                                     color: "white",
    //     //                                     border: "none",
    //     //                                     padding: "8px 20px",
    //     //                                     fontWeight: "bold",
    //     //                                     marginTop: "10px"
    //     //                                 }}> 
    //     //                                 Start Skill Analysis
    //     //                                 </button>
    //     //                         </div>


    //     //         </div>




    //     //         <div className="recent-activity" style={{
    //     //             // flex: 1,
    //     //             // background: "white",
    //     //             // borderRadius: "12px",
    //     //             // padding: "20px",
    //     //             // boxShadow: "0 0 10px rgba(0,0,0,0.1)",
    //     //             backgroundColor: "yellow",
    //     //             color: "black",
    //     //             flex: 1,
    //     //             borderRadius: "12px",
    //     //             padding: "20px",
    //     //             boxShadow: "0 0 10px rgba(0,0,0,0.1)"
    //     //         }}>
    //     //             <h2 style={{
    //     //                 marginTop: 0
    //     //             }}>
    //     //                 Recent Activity & Summary
    //     //             </h2>
    //     //             <ul>
    //     //                 <li>Chat on React hooks troubleshooting - 2 hours ago</li>
    //     //                 <li>Asked about CSS Grid layout - 1 day ago</li>
    //     //                 <li>Completed HTML skill assessment - 3 days ago</li>
    //     //             </ul>


    //     //         </div>
    //     //     </section>
    //     // );
    //     // }
    //     function SideBySide() {
    //     return (
    //         <section
    //         className="side-by-side"
    //         style={{
    //         width: "100vw", 
    //         marginLeft: "calc(-50vw + 57.43%)", //side me shift krne ke liye
    //         display: "flex",
    //         gap: "30px",
    //         justifyContent: "space-between",
    //         backgroundColor: "#8A32F0",
    //         padding: "10px",
    //         }}
    //         >
    //         {/* Left Section */}
    //         <div
    //             style={{
    //             flex: 1, 
    //             background: "white",
    //             borderRadius: "12px",
    //             padding: "20px",
    //             boxShadow: "0 0 10px rgba(0,0,0,0.1)",
    //             color: "black",
    //             }}
    //         >
    //             <h2>Analyze Your Skills</h2>
    //             <p>
    //             You can assess your web development knowledge and benchmark your
    //             strengths! Get personalized recommendations and career advice.
    //             </p>
    //             <button
    //             onClick={() => alert("Skill analysis started! (Demo)")}
    //             style={{
    //                 cursor: "pointer",
    //                 borderRadius: "6px",
    //                 backgroundColor: "#6A0DAD",
    //                 color: "white",
    //                 border: "none",
    //                 padding: "8px 20px",
    //                 fontWeight: "bold",
    //                 marginTop: "10px",
    //             }}
    //             >
    //             Start Skill Analysis
    //             </button>
    //         </div>

    //         {/* Right Section */}
    //         <div
    //             className="recent-activity"
    //             style={{
    //             flex: 1, 
    //             backgroundColor: "yellow",
    //             color: "black",
    //             borderRadius: "12px",
    //             padding: "20px",
    //             boxShadow: "0 0 10px rgba(0,0,0,0.1)",
    //             }}
    //         >
    //             <h2 style={{ marginTop: 0 }}>Recent Activity & Summary</h2>
    //             <ul>
    //             <li>Chat on React hooks troubleshooting - 2 hours ago</li>
    //             <li>Asked about CSS Grid layout - 1 day ago</li>
    //             <li>Completed HTML skill assessment - 3 days ago</li>
    //             </ul>
    //         </div>
    //         </section>
    //     );
    //     }



    // function IndustryTrends() {
    //         return (
    //             <section className="industry-trends" style={{
    //                 margin: "40px 0",
    //                 display: "flex",
                    
    //                 gap:"20px",
    //                 justifyContent: "space-between",
                    
    //             }}>
    //                 <div>
    //                     <img src="https://via.placeholder.com/80?text=CSS" alt="CSS" />
    //                     <p><strong>CSS</strong></p>
    //         </div>
    //         <div>
    //             <img src="https://via.placeholder.com/80?text=HTML" alt="HTML" />
    //             <p><strong>HTML</strong></p>
    //         </div>
    //         <div>
    //             <img src="https://via.placeholder.com/80?text=React" alt="React" />
    //             <p><strong>React</strong></p>
    //         </div>
    //         <div>
    //             <p style={{ fontSize: "40px", fontWeight: "bold" }}>➡️</p>
    //         </div>
    //         </section>
    //     );
    //     }

    //     function AboutUs() {
    //     return (
    //         <section className="about-us">
    //         <h3>About Us</h3>
    //         <p>
    //             We help developers analyze skills and stay updated with the latest
    //             industry trends in web development.
    //         </p>
    //         </section>
    //     );
    //     }

    //     function Videos() {
    //     return (
    //         <section className="videos">
    //         <iframe
    //             width="320"
    //             height="180"
    //             src="https://www.w3schools.com/html/mov_bbb.mp4"
    //             allowFullScreen
    //         ></iframe>
    //         <iframe
    //             width="320"
    //             height="180"
    //             src="https://www.w3schools.com/html/mov_bbb.mp4"
    //             allowFullScreen
    //         ></iframe>
    //         <iframe
    //             width="320"
    //             height="180"
    //             src="https://www.w3schools.com/html/mov_bbb.mp4"
    //             allowFullScreen
    //         ></iframe>
    //         <iframe
    //             width="320"
    //             height="180"
    //             src="https://www.w3schools.com/html/mov_bbb.mp4"
    //             allowFullScreen
    //         ></iframe>
    //         </section>
    //     );
    //     }

    //     function ContactForm() {
    //     const handleSubmit = (e) => {
    //         e.preventDefault();
    //         alert("Form submitted!");
    //     };

    //     return (
    //         <form onSubmit={handleSubmit}>
    //         <label htmlFor="name">Name:</label>
    //         <input id="name" type="text" placeholder="Your name" required />
    //         <label htmlFor="email">Email:</label>
    //         <input id="email" type="email" placeholder="Your email" required />
    //         <label htmlFor="message">Your Message:</label>
    //         <textarea
    //             id="message"
    //             rows="4"
    //             placeholder="Write your message here"
    //             required
    //         />
    //         <button type="submit">Send</button>
    //         </form>
    //     );
    //     }

    //     // Main App component
    //     export default function App() {
    //     return (
    //         <div>
    //         <Header />
    //         <Navbar />
    //         <main className="container">
    //             <SideBySide />
    //             <IndustryTrends />
    //             <AboutUs />
    //             <Videos />
    //             <ContactForm />
    //         </main>
    //         </div>
    //     );
    //     }




    import React, { useRef } from "react";
    import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

    export default function App() {
    const trendRef = useRef(null);
    const videoRef = useRef(null);

    const scroll = (ref, dir) => {
        if (ref.current) {
        ref.current.scrollBy({
            left: dir === "left" ? -300 : 300,
            behavior: "smooth",
        });
        }
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const form = new FormData(e.target);
        const data = {
        name: form.get("name"),
        email: form.get("email"),
        message: form.get("message"),
        };
        alert(`Form submitted:\n${JSON.stringify(data, null, 2)}`);
        e.target.reset();
    };


    const items = [
        {name: "CSS",
        img: "public/images/css.jpeg",
        link: "https://www.w3schools.com/css/"
        },
        {
        name: "HTML",
        img: "public/images/HTML.png",
        link: "https://www.w3schools.com/html/default.asp"
        },
        {
        name: "ReactJS",
        img: "public/images/reactjs.jpg",
        link: "https://www.w3schools.com/react/default.asp"
        },
        {
        name: "JavaScript",
        img: "public/images/js.png",
        link: "https://www.w3schools.com/js/default.asp"
        },
        {
        name: "NodeJS",
        img: "public/images/nextjs.webp",
        link: "https://www.w3schools.com/nodejs/default.asp"
        },        {
        name: "MongoDB",
        img: "public/images/mongodb.png",
        link: "https://www.w3schools.com/mongodb/"
        },
        {
        name: "AI",
        img: "public/images/artificial-intelligence.jpg",
        link: "https://cloud.google.com/document-ai/docs"
        },        
        {
        name: "Cloud Computing",
        img: "public/images/cloud-computing.png",
        link: "https://www.geeksforgeeks.org/cloud-computing/cloud-computing-tutorial/"
        },
        {
        name: "ExpressJS",
        img: "public/images/express-logo.png",
        link: "https://devdocs.io/express/"
        },
        {
        name: "OOP",
        img: "public/images/oops.webp",
        link: "https://www.w3schools.com/java/java_oop.asp"
        }
    ];
    
    const videos = [
        {
            id: "J6mDkcqU_ZE",
            title: "MongoDB 1Hour Tutorial",
            link: "https://youtu.be/J6mDkcqU_ZE?si=gg6_qBiZwpBjQFDw",
        },
        {
            id: "HcOc7P5BMi4",
            title: "HTML Basics",
            link: "https://youtu.be/HcOc7P5BMi4?si=4pEEWuOXeLdP_cF_",
        },
        {
            id: "Ke90Tje7VS0",
            title: "Learn React in 1 Hour",
            link: "https://www.youtube.com/watch?v=Ke90Tje7VS0",
        },
        {
            id: "EUtlj7xdO1o",
            title: "CSS Full Course",
            link: "https://youtu.be/EUtlj7xdO1o?si=W0C2KMoF75PK555u",
        },
        {
            id: "JxgmHe2NyeY",
            title: "Machine Learning Full Course",
            link: "https://youtu.be/JxgmHe2NyeY?si=kPdA7dshtqCrutG4",
        },
                {
            id: "70oYrSnRgoI",
            title: "Cloud Computing Roadmap",
            link: "https://youtu.be/70oYrSnRgoI?si=Wpf6OteEnfCe8MqE",
        },
                {
            id: "k7o9R6eaSes",
            title: "NextJS Beginner to Advanced",
            link: "https://youtu.be/k7o9R6eaSes?si=5FQDwGN-LI3vRddH",
        },
        {
            id: "CgkZ7MvWUAA",
            title: "React Full Course",
            link: "https://youtu.be/CgkZ7MvWUAA?si=VxkHZwxd-lFms6i6",
        },
        ];

/*----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
    return (
        <div className="min-h-screen bg-gray-100 font-sans">
        {/* Navbar */}
        <div className="bg-purple-800 text-white p-4 flex justify-between items-center">
            <img 
            src="public/images/logo.png" 
            alt="LOGO LAAO PEHLE"
            style={{width: "60px", height: "60px"
            }}
            className="h-8" />

            <h1 className="text-2xl font-bold align-left">SkillsMantri</h1>
            <div>
            <button className="bg-white text-purple-700 px-4 py-2 rounded">
                Sign In / Profile
            </button>
            </div>

        </div>


            <div className="flex gap-4" style={{backgroundColor: "#6e11b0", padding: "10px 20px", color: "white"}}>
        <a
        href="https://www.w3schools.com/css/"
        className="bg-white text-purple-700 px-4 py-2 rounded font-semibold hover:bg-gray-200 transition" /*style={{width: "100px", textAlign: "center"}}*/
        >
        CSS
        </a>
        <a
        href="https://www.w3schools.com/html/default.asp"
        className="bg-white text-purple-700 px-4 py-2 rounded font-semibold hover:bg-gray-200 transition"
        >
        HTML
        </a>
        <a
        href="https://www.w3schools.com/mongodb/"
        className="bg-white text-purple-700 px-4 py-2 rounded font-semibold hover:bg-gray-200 transition"
        >
        MongoDB
        </a>
        <a
        href="https://www.geeksforgeeks.org/cloud-computing/cloud-computing-tutorial/"
        className="bg-white text-purple-700 px-4 py-2 rounded font-semibold hover:bg-gray-200 transition"
        >
        Cloud Computing
        </a>
        
        <a
        href="https://cloud.google.com/document-ai/docs"
        className="bg-white text-purple-700 px-4 py-2 rounded font-semibold hover:bg-gray-200 transition"
        >
        AI
        </a>

        <a
        href="https://devdocs.io/express/"
        className="bg-white text-purple-700 px-4 py-2 rounded font-semibold hover:bg-gray-200 transition"
        >
        ExpressJS
        </a>

        <a
        href="https://www.w3schools.com/java/java_oop.asp"
        className="bg-white text-purple-700 px-4 py-2 rounded font-semibold hover:bg-gray-200 transition"
        >
        OOP
        </a>

        <a
        href="https://www.w3schools.com/sql/default.asp"
        className="bg-white text-purple-700 px-4 py-2 rounded font-semibold hover:bg-gray-200 transition"
        >
        SQL
        </a>

        <a
        href="https://www.w3schools.com/js/default.asp"
        className="bg-white text-purple-700 px-4 py-2 rounded font-semibold hover:bg-gray-200 transition"
        >
        Javascript
        </a>

        <a
        href="https://www.w3schools.com/react/default.asp"
        className="bg-white text-purple-700 px-4 py-2 rounded font-semibold hover:bg-gray-200 transition"
        >
        ReactJS
        </a>

        <a
        href="https://www.w3schools.com/nodejs/default.asp"
        className="bg-white text-purple-700 px-4 py-2 rounded font-semibold hover:bg-gray-200 transition"
        >
        NodeJS
        </a>

        <a
        href="/https://ml-cheatsheet.readthedocs.io/en/latest/"
        className="bg-white text-purple-700 px-4 py-2 rounded font-semibold hover:bg-gray-200 transition"
        >
        Machine Learning
        </a>

        <a
        href="https://www.w3schools.com/dsa/"
        className="bg-white text-purple-700 px-4 py-2 rounded font-semibold hover:bg-gray-200 transition"
        >
        DSA
        </a>        
    </div>


    {/* ----------------------------------------------------------------------- */}

        {/* SkillSection aur summary */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
            <div className="bg-white p-6 shadow rounded-xl">
            <h2 className="text-xl font-bold">Analyze Your Skills</h2>
            <p className="mt-2 text-gray-600">
                Assess your development knowledge and benchmark your strengths.
            </p>
            <button className="mt-4 bg-purple-700 text-white px-4 py-2 rounded">
                Start Skill Analysis
            </button>
            </div>
            <div className="bg-white p-6 shadow rounded-xl" style={{color: "#710599"}}>
            <h2 className="text-xl font-bold">Recent Activity & Summary</h2>
            <ul className="list-disc ml-6 mt-2 text-gray-700">
                <li>Chat on React hooks troubleshooting - 2 hours ago</li>
                <li>Asked about CSS Grid layout - 1 day ago</li>
                <li>Completed HTML skill assessment - 3 days ago</li>
            </ul>
            </div>
        </div>


        {/* Industry Trends */}
        {/* <div className="p-6">
            <h2 className="text-2xl font-bold mb-3">Industry Trends</h2> */}
            {/* <div className="flex items-center">
            <button
                onClick={() => scroll(trendRef, "left")}
                className="p-2 bg-purple-700 text-white rounded-full mr-2"
            >
                <FaArrowLeft />
            </button>

            <div
                ref={trendRef}
                className="flex space-x-4 overflow-x-hidden scroll-smooth w-full"
            >

                {[  { name: "CSS", img: "link-to-css-image.png" },
                    { name: "HTML", img: "link-to-html-image.png" },
                    { name: "React", img: "link-to-react-image.png" },
                    { name: "JavaScript", img: "link-to-js-image.png" },
                    { name: "NodeJS", img: "link-to-node-image.png" },
                    ].map((item) => (

        //         const trends = [
        // { name: "CSS", img: "link-to-css-image.png" },
        // { name: "HTML", img: "link-to-html-image.png" },
        // { name: "React", img: "link-to-react-image.png" },
        // { name: "JavaScript", img: "link-to-js-image.png" },
        // { name: "NodeJS", img: "link-to-node-image.png" },
        // ];


                <div
                    key={item}
                    className="bg-white shadow rounded-xl p-6 min-w-[200px] text-center"
                >
                <img
                    src={item.img}
                    alt={item.name}
                    className="mx-auto mb-2 w-20 h-20 object-contain"
                />
                    <h3 className="font-bold">{item.name}</h3>
                </div>
                ))}
            </div>
            <button
                onClick={() => scroll(trendRef, "right")}
                className="p-2 bg-purple-700 text-white rounded-full ml-2"
            >
                <FaArrowRight />
            </button>
            </div>
        </div> */}
    {/* ----------------------------------------------------------------------- */}

        {/* Industry Trends */}
            <div className="p-6">
    <h2 className="text-2xl font-bold mb-3">Industry Trends</h2>
    <div className="overflow-hidden relative">
        <div className="flex animate-scroll">
        {[...items, ...items].map((item, idx) => (
            <a
            key={idx}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white shadow rounded-xl p-6 min-w-[200px] text-center mx-2"
            >
            <img src={item.img} alt={item.name} className="mx-auto mb-2 w-20 h-20" />
            <h3 className="font-bold">{item.name}</h3>
            </a>
        ))}
        </div>
    </div>
    </div>



    {/* ----------------------------------------------------------------------- */}



        {/* About Section */}
        <div className="bg-purple-800 text-white p-6 mt-6 rounded-xl mx-6 flex justify-between">
            <div><h3 className="text-xl font-bold" style={{ fontSize: "2.5rem", color: "white"}}>About Us</h3><br></br>
            <p className="mt-2" style={{ fontSize: "1.35rem", color: "white"}}>
            At Skill Mantri, we believe growth begins with understanding your strengths and weaknesses.<br></br>In a fast-changing world, identifying skill gaps is key to staying ahead.<br></br> Our AI-powered chatbot provides personalized skill gap analysis, helping students, job seekers, and professionals evaluate their abilities, compare them with industry standards,<br></br>and pinpoint areas for improvement.              <br></br>Whether preparing for a career, aiming for a promotion, or exploring new skills,              <br></br>Skill Mantri serves as your personal mentor, guiding you toward continuous learning and growth.
            <br></br>
            With Skill Mantri, you don’t just identify gaps — you chart your path to success.
            </p>
            </div>

            <div style={{display: "flex", justifyContent: "right", alignItems: "top"}}>
                <img src="public/images/homepage.jpeg" alt="About Us" style={{width: "900px", height: "400px", marginTop: "10px"}}>
                </img>
            </div>
        </div>
 {/* ----------------------------------------------------------------------- */}


        {/* Related Videos */}
        <div className="p-6">
            <h2 className="text-2xl font-bold mb-3">Related Videos</h2>
            <div className="overflow-hidden relative">
                <div className="flex animate-scroll">
                {[...videos, ...videos].map((video, idx) => (
                    <a
                    key={idx}
                    href={video.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white shadow rounded-xl min-w-[220px] mx-2 flex-shrink-0"
                    >
                    <img
                        src={`https://img.youtube.com/vi/${video.id}/0.jpg`}
                        alt={video.title}
                        className="w-full h-36 object-cover rounded-t-xl"
                    />
                    <div className="p-3">
                        <h3 className="font-bold text-sm text-gray-800">
                        {video.title}
                        </h3>
                    </div>
                    </a>
                ))}
                </div>
            </div>
        </div>
    {/* ----------------------------------------------------------------------- */}

        {/* Contact Form */}
        {/* Contact Form */}
        <div className="p-6">
        <h2 className="text-2xl font-bold mb-3">Contact Us Form</h2>

        <div className="flex flex-col md:flex-row gap-6">
    {/* Form (half screen) */}
        <form
        onSubmit={handleFormSubmit}
        className="bg-white p-6 shadow rounded-xl space-y-4 w-full md:w-1/2"
        >
        <div>
            <label className="block font-semibold">Name:</label>
            <input
            type="text"
            name="name"
            required
            className="w-full p-2 border rounded mt-1"
            />
        </div>
        <div>
            <label className="block font-semibold">Email:</label>
            <input
            type="email"
            name="email"
            required
            className="w-full p-2 border rounded mt-1"
            />
        </div>
        <div>
            <label className="block font-semibold">Your Message:</label>
            <textarea
            name="message"
            required
            className="w-full p-2 border rounded mt-1"
            rows="4"
            ></textarea>
        </div>
        <button
            type="submit"
            className="bg-purple-700 text-white px-4 py-2 rounded"
        >
            Send
        </button>
        </form>

        {/* Image (other half) */}
        <div className="w-full md:w-1/2 flex items-center justify-center">
        <img
            src="public/images/homepage1.png"
            style={{ width: "550px", height: "500px" }}
            alt="naya laao"
            className="rounded-xl shadow-lg object-cover w-full h-full"
        />
        </div>
    </div>
    </div>
</div>

    );
    }
