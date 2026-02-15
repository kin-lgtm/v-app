import { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';

export default function DemoForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="text-center py-8">
        <CheckCircle size={48} className="text-primary mx-auto mb-4" />
        <h3 className="text-xl font-bold text-dark mb-2">Message Sent!</h3>
        <p className="text-gray-medium">
          Thank you for contacting us. We'll respond to your message within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
      className="space-y-4"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input
          type="text"
          placeholder="Your Name"
          required
          className="w-full px-4 py-3 rounded-lg border border-gray-200 text-md focus:outline-none focus:border-primary"
        />
        <input
          type="email"
          placeholder="Email Address"
          required
          className="w-full px-4 py-3 rounded-lg border border-gray-200 text-md focus:outline-none focus:border-primary"
        />
      </div>
      <input
        type="text"
        placeholder="Phone Number (optional)"
        className="w-full px-4 py-3 rounded-lg border border-gray-200 text-md focus:outline-none focus:border-primary"
      />
      <input
        type="text"
        placeholder="Subject"
        required
        className="w-full px-4 py-3 rounded-lg border border-gray-200 text-md focus:outline-none focus:border-primary"
      />
      <textarea
        placeholder="Your Message"
        rows={4}
        required
        className="w-full px-4 py-3 rounded-lg border border-gray-200 text-md focus:outline-none focus:border-primary resize-none"
      />
      <button type="submit" className="btn-primary gap-2 w-full">
        <Send size={16} />
        Send Message
      </button>
    </form>
  );
}
