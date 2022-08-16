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
        <h1>Contact Me</h1>
      </div>
      <ContactForm />
    </div>
  );
}
