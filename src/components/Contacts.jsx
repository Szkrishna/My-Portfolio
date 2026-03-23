import { motion } from "framer-motion";
import { FaEnvelope, FaPhoneAlt, FaLinkedin } from "react-icons/fa";

const contactDetails = [
  {
    icon: <FaPhoneAlt className="text-green-500" />,
    label: "Call Me",
    value: "+91 9818713013",
    href: "tel:+919818713013",
    hoverBorder: "#22c55e",
  },
  {
    icon: <FaEnvelope className="text-red-500" />,
    label: "Email Me",
    value: "krisnas9792@gmail.com",
    href: "mailto:krisnas9792@gmail.com",
    hoverBorder: "#ef4444",
  },
  {
    icon: <FaLinkedin className="text-blue-600" />,
    label: "LinkedIn",
    value: "krishna-singh-5a2244196",
    href: "https://www.linkedin.com/in/krishna-singh-5a2244196",
    hoverBorder: "#2563eb",
  },
];

const Contacts = () => {
  return (
    <div
      className="py-20 px-4 md:px-8 lg:px-12 xl:px-16 border-t"
      style={{ borderColor: "var(--card-border)" }}
    >
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <h2
          className="text-4xl font-bold tracking-tight sm:text-5xl mb-4"
          style={{ color: "var(--text-color)" }}
        >
          Get in Touch
        </h2>
        <p
          className="max-w-lg mx-auto font-medium"
          style={{ color: "var(--footer-text-color)" }}
        >
          Interested in collaborating or have a question? I'm always open to
          discussing new projects and opportunities.
        </p>
      </motion.div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {contactDetails.map((item, index) => (
          <motion.a
            key={index}
            href={item.href}
            target={item.href.startsWith("http") ? "_blank" : undefined}
            rel="noopener noreferrer"
            whileInView={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0, scale: 0.9 }}
            whileHover={{ y: -8, transition: { duration: 0.2 } }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex flex-col items-center p-8 rounded-2xl border transition-all duration-300 shadow-sm hover:shadow-md"
            style={{
              backgroundColor: "var(--background-color)",
              borderColor: "var(--border-color)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = item.hoverBorder;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "var(--card-border)";
            }}
          >
            <div className="text-3xl mb-4">{item.icon}</div>
            <span
              className="text-xs font-semibold uppercase tracking-widest mb-2"
              style={{ color: "var(--footer-text-color)" }}
            >
              {item.label}
            </span>
            <span
              className="text-lg font-bold break-all text-center"
              style={{ color: "var(--text-color)" }}
            >
              {item.value}
            </span>
          </motion.a>
        ))}
      </div>
    </div>
  );
};

export default Contacts;