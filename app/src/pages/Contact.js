import React from 'react'

function Contact() {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h1 className="page-header">Contact Us</h1>
                    </div>
                </div>
                <div className="row">
                    <section className="col-md-6 mb-3">
                        <h2>Contact Form</h2>
                        <p>Send us a message and we will reply to you as quick as possible.</p>
                        <form action="/contact/send" method="post" id="contact_form">
                            <div id="contactpage">
                                <div id="contactpage_email" className="field">
                                    <label className="required">E-mail <em>*</em></label><br />
                                    <input type="email" name="contact[email]" id="contact_email" className="text" required="required" placeholder="email" />
                                </div>
                                <div id="contactpage_name" className="field">
                                    <label className="required">Name <em>*</em></label><br />
                                    <input type="text" name="contact[name]" id="contact_name" className="text" required="required" placeholder="name" />
                                </div>
                                <div id="contactpage_phone" className="field">
                                    <label>Phone</label><br />
                                    <input type="tel" name="contact[phone]" id="contact_phone" className="text" placeholder="tel" />
                                </div>
                                <div id="contactpage_message">
                                    <label className="required">Message <em>*</em></label><br />
                                    <textarea name="contact[message]" id="contact_message" className="text" required="required"></textarea>
                                </div>
                                <p className="required">* Required Fields</p>
                                <div className="actions">
                                    <input type="submit" value="Submit" className="button" id="register_customer" data-sitekey="" data-callback="onSubmitContact" data-action="submit" />
                                </div>
                            </div>
                        </form>
                    </section>
                    <section className="col-md-6">
                        <h2>Contact Information</h2>
                        <ul id="contact-list">
                            <li><i className="fas fa-phone"></i> <a href="tel:+1123123123">+1 123 123 123</a></li>
                            <li><i className="fas fa-map-marker"></i>Pumacahua 393, Trujillo 13006</li>
                        </ul>
                        <iframe title="mapa" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d246.87529784638366!2d-79.01011516962845!3d-8.100994829666611!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91ad1624edd79041%3A0x88529d9d631b5c72!2sPonteMazeta!5e0!3m2!1ses!2spe!4v1614808447022!5m2!1ses!2spe" width="100%" height="390" scrolling="no" loading="lazy"></iframe>
                    </section>
                </div>
            </div>
        </>
    )
}

export default Contact