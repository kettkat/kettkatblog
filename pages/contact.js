//ourdomain.com/news
import Meta from "../components/Meta";
import ContactForm from "../components/ContactForm";

export default function Contact() {
  return (
    <div>
      <Meta
        title="Catchin Up With Kat- Contact Me Form"
        keywords="blog, katherine k, message, contact, email"
        description="A form to reach me"
      />
      <div className="center">
        <h2>CONTACT &nbsp; ME</h2>
        <p>
          Fill it out below to send me a message! After filling out all fields, press &quot;Submit&quot; at the bottom of the form.
        </p>
      </div>
      <ContactForm />
    </div>
  );
}
