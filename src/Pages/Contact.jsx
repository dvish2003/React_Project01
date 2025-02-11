import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Contact() {
    return (
        <div className="container py-5">
            <h2 className="text-center mb-4">Contact Me</h2>
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <form>
                        {/* Name Field */}
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Name</label>
                            <input
                                type="text"
                                className="form-control"
                                id="name"
                                placeholder="Enter your name"
                            />
                        </div>

                        {/* Email Field */}
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                placeholder="Enter your email"
                            />
                        </div>

                        {/* Message Field */}
                        <div className="mb-3">
                            <label htmlFor="message" className="form-label">Message</label>
                            <textarea
                                className="form-control"
                                id="message"
                                rows="4"
                                placeholder="Write your message here"
                            ></textarea>
                        </div>

                        {/* Submit Button */}
                        <button type="submit" className="btn btn-primary w-100">
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
