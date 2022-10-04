//ourdomain.com/news
import Meta from "../components/Meta";
import ContactForm from "../components/ContactForm";

export default function Contact() {
  return (
    <div>
      <Meta
        title="Contact Me"
        keywords="blog, katherine k, message, contact, email"
        description="A form to reach me"
      />
      <div className="center">
        <h2>CONTACT &nbsp; ME</h2>
      </div>
      <ContactForm />
    </div>
  );
}
