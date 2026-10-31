import "./ContactForm.css";
import {useState} from "react";

//https://web3forms.com/
const ContactForm = () => {
    const [result, setResult] = useState("");
    const [status, setStatus] = useState("");

    const onSubmit = async (e) => {
        e.preventDefault();

        const form = e.target;
        const formData = new FormData(form);
        formData.append("access_key", "bdffea50-bf91-4981-aa08-9f10856ef14a");

        setStatus("");
        setResult("Sending...");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const data = await response.json();

            if (response.ok) {
                setResult("Thanks! Your message was sent.");
                setStatus("success");
                form.reset();
            } else {
                setResult("Error: " + data.message);
                setStatus("error");
            }
        } catch (error) {
            setResult("Sorry, we couldn't send your message. Please try again.");
            setStatus("error");
        }
    };

    return (
        <section className="contact">
            <h2 className="section-title">Contact Us</h2>
            <p className="contact-intro">Have any questions or movie suggestions? Send us a message.</p>
            <form className="contact-form" onSubmit={onSubmit}>
                <p>
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" required />
                </p>
                <p>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" required />
                </p>
                <p>
                    <label htmlFor="message">Message</label>
                    <textarea id="message" name="message" rows="5" required></textarea>
                </p>
                <div className="form-bottom">
                    <button type="submit">Send Message</button>
                    <p className={"result " + status}>{result}</p>
                </div>
            </form>
        </section>
    );
};

export default ContactForm;
