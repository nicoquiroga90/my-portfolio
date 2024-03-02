import "../../src/styles/Contact.css";

export default function ContactPage() {
  return (
    <>
      <a className="custom-link contact-phone" href="tel:+4552656579">
        +45 52 65 65 79
      </a>
      <a className="custom-link" href="mailto:nicoq1290@gmail.com">
        nicoq1290@gmail.com
      </a>
      <a
        className="custom-link contact-linkedin"
        href="https://www.linkedin.com/in/nicolas-quiroga90/"
        target="_blank"
        rel="noopener noreferrer"
      >
        linkedin.com/in/nicolas-quiroga90
      </a>
      <a
        className="custom-link"
        target="_blank"
        rel="noopener noreferrer"
        href="/docs/Nico_Q_2024.pdf"
      >
        Resume ↓
      </a>
    </>
  );
}
