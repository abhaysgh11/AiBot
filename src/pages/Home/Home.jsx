    import React from "react";

    function Header() {
    return (
        <header className="logo-section" style={{    
            backgroundColor: "#4B0082",
            padding: "15px 20px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            color: "white"
        }}>


        <img 
            style={{height:"40px"}}
            src=" "
            alt="Logo"
        />
        <div style={{display:"flex", alignItems:"right", gap:"10px"}}>
        <button style={{
            backgroundColor: "#6A0DAD",
            color: "white",
            border: "none",
            padding: "8px 20px",
            borderRadius: "6px",
            fontWeight: "bold",
            cursor: "pointer"
        }}>
            Sign In / Profile
        </button>
        </div>
        </header>
        
    );
    }



    function Navbar() {
    return (
        <nav className="navbar" style={{
            backgroundColor: "#4B0082",
            padding: "10px 20px",
            display: "flex",
            gap: "15px",
            borderRadius: "0 0 8px 8px",
            color: "white"
        }}>

        <button style={{
            backgroundColor: "#6A0DAD",
            border: "none",
            color: "white",
            padding: "6px 14px",
            borderRadius: "6px",
            fontWeight: "bold",
            cursor: "pointer"
        }}>CSS</button>

        <button style={{
            backgroundColor: "#6A0DAD",
            border: "none",
            color: "white",
            padding: "6px 14px",
            borderRadius: "6px",
            fontWeight: "bold",
            cursor: "pointer"
        }}>HTML</button>
        <button style={{
            backgroundColor: "#6A0DAD",
            border: "none",
            color: "white",
            padding: "6px 14px",
            borderRadius: "6px",
            fontWeight: "bold",
            cursor: "pointer"
        }}>ReactJS</button>
        <button style={{
            backgroundColor: "#6A0DAD",
            border: "none",
            color: "white",
            padding: "6px 14px",
            borderRadius: "6px",
            fontWeight: "bold",
            cursor: "pointer"
        }}>Skill</button>


        <a href="#chatbot" style={{
            marginLeft: "auto",
            color: "white",
            fontWeight: "bold",
            textDecoration: "none"
        }}>Refer to Chatbot 🔗</a>
        </nav>
    );
    }

    // cursor: pointer;}>CSS</button>

    //     <button>HTML</button>
    //     <button>ReactJS</button>
    //     <button>Skill</button>
    //     <a href="#chatbot">Refer to Chatbot 🔗</a>
    //     </nav>
    // );
    

    function SideBySide() {
    return (
        <section className="side-by-side" style={{
            marginBottom: "40px"
        }}>
        <div style={{
            display: "flex",
            gap: "30px"
        }}>
            <div style={{
                flex: 1,
                background: "white",
                borderRadius: "12px",
                padding: "20px",
                boxShadow: "0 0 10px rgba(0,0,0,0.1)"
            }}>
            <h2>Analyze Your Skills</h2>
            <p>
            You can assess your web development knowledge and benchmark your
            strengths! Get personalized recommendations and career advice.
            </p>
            <button onClick={() => alert("Skill analysis started! (Demo)")} style={{
                cursor: "pointer", 
                borderRadius: "6px",
                backgroundColor: "#6A0DAD",
                color: "white",
                border: "none",
                padding: "8px 20px",
                fontWeight: "bold",
                marginTop: "10px"
            }}> 
            Start Skill Analysis
            </button></div>
        </div>
        <div className="recent-activity" style={{
            backgroundColor: "yellow",
            color: "black"
        }}>
            <h2 style={{
                marginTop: 0
            }}>
                Recent Activity & Summary
            </h2>
            <ul>
                <li>Chat on React hooks troubleshooting - 2 hours ago</li>
                <li>Asked about CSS Grid layout - 1 day ago</li>
                <li>Completed HTML skill assessment - 3 days ago</li>
            </ul>
        </div>
        </section>
    );
    }

    function IndustryTrends() {
        return (
            <section className="industry-trends">
                <div>
                    <img src="https://via.placeholder.com/80?text=CSS" alt="CSS" />
                    <p><strong>CSS</strong></p>
        </div>
        <div>
            <img src="https://via.placeholder.com/80?text=HTML" alt="HTML" />
            <p><strong>HTML</strong></p>
        </div>
        <div>
            <img src="https://via.placeholder.com/80?text=React" alt="React" />
            <p><strong>React</strong></p>
        </div>
        <div>
            <p style={{ fontSize: "40px", fontWeight: "bold" }}>➡️</p>
        </div>
        </section>
    );
    }

    function AboutUs() {
    return (
        <section className="about-us">
        <h3>About Us</h3>
        <p>
            We help developers analyze skills and stay updated with the latest
            industry trends in web development.
        </p>
        </section>
    );
    }

    function Videos() {
    return (
        <section className="videos">
        <iframe
            width="320"
            height="180"
            src="https://www.w3schools.com/html/mov_bbb.mp4"
            allowFullScreen
        ></iframe>
        <iframe
            width="320"
            height="180"
            src="https://www.w3schools.com/html/mov_bbb.mp4"
            allowFullScreen
        ></iframe>
        <iframe
            width="320"
            height="180"
            src="https://www.w3schools.com/html/mov_bbb.mp4"
            allowFullScreen
        ></iframe>
        <iframe
            width="320"
            height="180"
            src="https://www.w3schools.com/html/mov_bbb.mp4"
            allowFullScreen
        ></iframe>
        </section>
    );
    }

    function ContactForm() {
    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Form submitted!");
    };

    return (
        <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input id="name" type="text" placeholder="Your name" required />
        <label htmlFor="email">Email:</label>
        <input id="email" type="email" placeholder="Your email" required />
        <label htmlFor="message">Your Message:</label>
        <textarea
            id="message"
            rows="4"
            placeholder="Write your message here"
            required
        />
        <button type="submit">Send</button>
        </form>
    );
    }

    // Main App component
    export default function App() {
    return (
        <div>
        <Header />
        <Navbar />
        <main className="container">
            <SideBySide />
            <IndustryTrends />
            <AboutUs />
            <Videos />
            <ContactForm />
        </main>
        </div>
    );
    }
