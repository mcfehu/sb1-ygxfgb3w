import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { FormControl, baseInputStyles } from '../ui/FormControl';
import { submitButtonStyles } from '../ui/ButtonStyles';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <FormControl label="Name">
        <input
          type="text"
          value={formData.name}
          onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
          className={baseInputStyles}
          required
          placeholder="Your name"
        />
      </FormControl>

      <FormControl label="Email">
        <input
          type="email"
          value={formData.email}
          onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
          className={baseInputStyles}
          required
          placeholder="your.email@example.com"
        />
      </FormControl>

      <FormControl label="Message">
        <textarea
          value={formData.message}
          onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
          className={`${baseInputStyles} min-h-[120px] resize-y`}
          required
          placeholder="Your message..."
        />
      </FormControl>

      <button
        type="submit"
        disabled={isSubmitting}
        className={`
          ${submitButtonStyles}
          flex items-center justify-center gap-2
          disabled:opacity-70 disabled:cursor-not-allowed
        `}
      >
        {isSubmitting ? (
          <span>Sending...</span>
        ) : (
          <>
            <span>Send Message</span>
            <Send className="w-4 h-4" />
          </>
        )}
      </button>

      {submitStatus === 'success' && (
        <p className="text-green-600 text-center font-medium">
          Thank you! Your message has been sent.
        </p>
      )}

      {submitStatus === 'error' && (
        <p className="text-red-600 text-center font-medium">
          Sorry, something went wrong. Please try again.
        </p>
      )}
    </form>
  );
}