import React from 'react'

import './ContactSection.css'
export default function ContactSection() {
    return (
        <section id="contact">
            <h1>Contact</h1>
            <div className="row">
                <div className="col-md-4">
                    <ul>
                        <li><span>Alamat</span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit!</li>
                        <li><span>Telepon</span>082349104692</li>
                        <li><span>Email</span>test@email.com</li>
                    </ul>
                </div>
                <div className="col-md-8">
                    <iframe
                        title="Google Maps"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3974.2845512413155!2d119.55395091435017!3d-5.0575536527890685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53fffe1a69b1bc5%3A0xed317c0bab1c2a9!2sBerkah%20Laundry!5e0!3m2!1sid!2sid!4v1590828654557!5m2!1sid!2sid"
                        frameBorder="0"
                        allowFullScreen></iframe>
                </div>
            </div>
        </section>
    )
}
