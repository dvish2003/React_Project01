import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function About() {
    return (
        <div className="container py-5">
            <div className="row align-items-center">
                {/* Profile Image */}
                <div className="col-md-5 text-center">
                    <img
                        src="https://via.placeholder.com/300"
                        alt="Profile"
                        className="img-fluid rounded-circle shadow-lg"
                    />
                </div>

                {/* About Text */}
                <div className="col-md-7">
                    <h2 className="mb-4">About Me</h2>
                    <p className="lead">
                        Hi, I'm <strong>Vishmee</strong>, a passionate Software Developer with expertise in building scalable and efficient web applications.
                        I enjoy solving complex problems and continuously learning new technologies to stay ahead in the tech world.
                    </p>
                    <p>
                        In my free time, I contribute to open-source projects, write technical blogs, and explore the latest trends in software development.
                        I'm always excited to collaborate on innovative projects and bring ideas to life.
                    </p>

                    {/* Contact Button */}
                    <button className="btn btn-primary mt-3">Contact Me</button>
                </div>
            </div>
        </div>
    );
}
