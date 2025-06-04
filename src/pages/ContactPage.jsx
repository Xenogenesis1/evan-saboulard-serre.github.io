import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ContactPage = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ici, on simule l'envoi. À remplacer par une intégration réelle (emailjs, API, etc.)
    setSent(true);
  };

  return (
    <div className="container mx-auto px-4 py-12 max-w-xl">
      <motion.h1
        className="text-4xl font-heading font-bold mb-10 text-primary"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        Contact
      </motion.h1>
      {sent ? (
        <div className="bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300 rounded-xl p-6 text-center">
          Merci pour votre message ! Je vous répondrai rapidement.
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <div>
            <label htmlFor="name" className="block mb-2 font-medium">Nom</label>
            <input
              type="text"
              id="name"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-surface dark:bg-surface-dark px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary/40"
            />
          </div>
          <div>
            <label htmlFor="email" className="block mb-2 font-medium">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-surface dark:bg-surface-dark px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary/40"
            />
          </div>
          <div>
            <label htmlFor="message" className="block mb-2 font-medium">Message</label>
            <textarea
              id="message"
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-surface dark:bg-surface-dark px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary/40"
              rows={5}
            />
          </div>
          <button
            type="submit"
            className="bg-primary hover:bg-primary-dark text-white font-medium py-2 px-6 rounded-xl transition-colors shadow-button focus:outline-none focus:ring-2 focus:ring-primary/50"
          >
            Envoyer
          </button>
        </form>
      )}
    </div>
  );
};

export default ContactPage;
