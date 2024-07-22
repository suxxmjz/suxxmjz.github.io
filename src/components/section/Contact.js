import React from 'react'
import { contact, section5Title, social } from '../../profile'

const Contact = () => {
    return (
        <div className="parallax">
            <div data-aos="zoom-in-up" data-aos-once="true" className="git-form">
                <div className="git-head-div text-center mx-auto">
                    <h1 id="Contact" className="git-head">{section5Title}</h1>
                </div>
                <div className="container">
                    <div className="justify-content-center">
                        <div>
                            <p className="lead text-center">
                                {contact.pitch}
                            </p>
                            <div className="d-flex justify-content-center align-items-center">
                                <div className="inline-block">
                                    {social.linkedin && 
                                        <a 
                                            title="Visit Linkedin profile" 
                                            rel="noopener noreferrer" 
                                            target="_blank" 
                                            href={social.linkedin} 
                                            style={{ fontSize: '2.5rem', margin: '0 10px' }}>
                                                <i className="fab fa-linkedin" style={{ color: 'black' }}></i>
                                        </a>
                                    }
                                    {social.github && 
                                        <a 
                                            title="Visit Github profile" 
                                            rel="noopener noreferrer" 
                                            target="_blank" 
                                            href={social.github} 
                                            style={{ fontSize: '2.5rem', margin: '0 10px' }}>
                                                <i className="fab fa-github" style={{ color: 'black' }}></i>
                                        </a>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <p id="not-dark" className="Copy text-center">2024 © Copyright <strong>{contact.copyright}</strong>. All Rights Reserved</p>
        </div>
    )
}

export default Contact
