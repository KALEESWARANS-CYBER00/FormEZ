// Author: KALEESWARAN S
// Description: Improved React Form with Validations, Accessibility, Splash Screen, and UX Enhancements

import "./App.css";
import React, { useState, useEffect } from "react";

function App() {
    const [success, setSuccess] = useState(false);
    const [showSplash, setShowSplash] = useState(true);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [contact, setContact] = useState("");
    const [gender, setGender] = useState("male");
    const [subjects, setSubjects] = useState({
        english: true,
        maths: false,
        physics: false,
    });
    const [resume, setResume] = useState(null);
    const [url, setUrl] = useState("");
    const [selectedOption, setSelectedOption] = useState("");
    const [about, setAbout] = useState("");

    useEffect(() => {
        const timer = setTimeout(() => setShowSplash(false), 3000);
        return () => clearTimeout(timer);
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (
            !firstName ||
            !lastName ||
            !email ||
            !contact ||
            !gender ||
            !resume ||
            !url ||
            !selectedOption ||
            !about
        ) {
            alert("Please fill all required fields.");
            return;
        }

        if (resume && !resume.name.match(/\.(pdf|docx)$/i)) {
            alert("Resume must be a PDF or DOCX file.");
            return;
        }

        console.log({
            firstName,
            lastName,
            email,
            contact,
            gender,
            subjects,
            resume,
            url,
            selectedOption,
            about
        });

        setSuccess(true);
        setTimeout(() => setSuccess(false), 3000);
    };

    const handleSubjectChange = (sub) => {
        setSubjects((prev) => ({
            ...prev,
            [sub]: !prev[sub],
        }));
    };

    const handleReset = () => {
        setFirstName("");
        setLastName("");
        setEmail("");
        setContact("");
        setGender("male");
        setSubjects({
            english: true,
            maths: false,
            physics: false,
        });
        setResume(null);
        setUrl("");
        setSelectedOption("");
        setAbout("");
    };

    if (showSplash) {
        return (
            <div className="splash-screen">
                <div className="splash-content">
                    <h1>🚀 KALEESWARAN S</h1>
                    <p>Cybersecurity Student | Ethical Hacker | Full Stack Dev</p>
                    <p>🔐 Python • Java • C • React • Spring Boot</p>
                    <button onClick={() => setShowSplash(false)}>Enter App</button>
                </div>
            </div>
        );
    }

    return (
        <div className="App">
            <h1>Form Submission by KALEESWARAN S</h1>
            <fieldset>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="firstname">First Name*</label>
                    <input
                        type="text"
                        id="firstname"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        placeholder="Enter First Name"
                        required
                    />

                    <label htmlFor="lastname">Last Name*</label>
                    <input
                        type="text"
                        id="lastname"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        placeholder="Enter Last Name"
                        required
                    />

                    <label htmlFor="email">Email*</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter Email"
                        required
                    />

                    <label htmlFor="contact">Contact*</label>
                    <input
                        type="tel"
                        id="contact"
                        value={contact}
                        onChange={(e) => setContact(e.target.value)}
                        placeholder="Enter Mobile Number"
                        required
                    />

                    <fieldset className="radio-group">
                        <legend>Gender*</legend>
                        <label>
                            <input
                                type="radio"
                                name="gender"
                                value="male"
                                checked={gender === "male"}
                                onChange={(e) => setGender(e.target.value)}
                            />
                            Male
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="gender"
                                value="female"
                                checked={gender === "female"}
                                onChange={(e) => setGender(e.target.value)}
                            />
                            Female
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="gender"
                                value="other"
                                checked={gender === "other"}
                                onChange={(e) => setGender(e.target.value)}
                            />
                            Other
                        </label>
                    </fieldset>

                    <fieldset className="checkbox-group">
                        <legend>Your Best Subject</legend>
                        <label>
                            <input
                                type="checkbox"
                                checked={subjects.english}
                                onChange={() => handleSubjectChange("english")}
                            />
                            English
                        </label>
                        <label>
                            <input
                                type="checkbox"
                                checked={subjects.maths}
                                onChange={() => handleSubjectChange("maths")}
                            />
                            Maths
                        </label>
                        <label>
                            <input
                                type="checkbox"
                                checked={subjects.physics}
                                onChange={() => handleSubjectChange("physics")}
                            />
                            Physics
                        </label>
                    </fieldset>

                    <label htmlFor="file">Upload Resume* (PDF/DOCX)</label>
                    <input
                        type="file"
                        id="file"
                        onChange={(e) => setResume(e.target.files[0])}
                        accept=".pdf,.docx"
                        required
                    />
                    {resume && <small>Selected: {resume.name}</small>}

                    <label htmlFor="url">Portfolio URL*</label>
                    <input
                        type="url"
                        id="url"
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                        placeholder="Enter URL"
                        required
                    />

                    <label htmlFor="select">Select Your Skill*</label>
                    <select
                        id="select"
                        value={selectedOption}
                        onChange={(e) => setSelectedOption(e.target.value)}
                        required
                    >
                        <option value="" disabled>Select your answer</option>
                        <optgroup label="Beginners">
                            <option value="1">HTML</option>
                            <option value="2">CSS</option>
                            <option value="3">JavaScript</option>
                        </optgroup>
                        <optgroup label="Advanced">
                            <option value="4">React</option>
                            <option value="5">Node</option>
                            <option value="6">Express</option>
                            <option value="7">MongoDB</option>
                        </optgroup>
                    </select>

                    <label htmlFor="about">About Yourself*</label>
                    <textarea
                        id="about"
                        rows="5"
                        value={about}
                        onChange={(e) => setAbout(e.target.value)}
                        placeholder="Tell us about yourself"
                        required
                    ></textarea>

                    <div className="button-group">
                        <button type="button" onClick={handleReset}>Reset</button>
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </fieldset>

            {success && (
                <div className="success-msg">
                    ✅ Form submitted successfully!
                </div>
            )}

          <footer style={{ marginTop: "2rem", textAlign: "center", fontSize: "0.9rem", color: "#999" }}>
    © {new Date().getFullYear()} KALEESWARAN S. All rights reserved.
</footer>

        </div>
    );
}

export default App;
