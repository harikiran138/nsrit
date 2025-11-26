"use client";

import { useState } from "react";
import { Send, AlertCircle, CheckCircle, Info } from "lucide-react";
import Button from "./ui/Button";
import Card from "./ui/Card";

interface FormErrors {
  name?: string;
  email?: string;
  category?: string;
  message?: string;
}

export default function FeedbackForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    category: 'general',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (touched[name]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleBlur = (fieldName: string) => {
    setTouched(prev => ({ ...prev, [fieldName]: true }));
    validateForm();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setStatus('sending');

    try {
      // Simulate API call (replace with actual integration)
      await new Promise(resolve => setTimeout(resolve, 900));
      
      setStatus('success');
      setFormData({ name: '', email: '', category: 'general', message: '' });
      setTouched({});
      
      // Reset success message after 4 seconds
      setTimeout(() => setStatus('idle'), 4000);
    } catch (err) {
      console.error("Feedback submission error:", err);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 4000);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
      <Card variant="default">
        <h2 className="text-3xl md:text-4xl font-bold text-corporate-blue dark:text-white mb-2">
          Send Us Your Feedback
        </h2>
        <p className="text-corporate-textSecondary dark:text-gray-400 mb-8">
          We value your input and use your feedback to improve our services
        </p>

        <div className="space-y-6">
          {/* Name Field */}
          <div>
            <label htmlFor="name" className="block text-sm font-semibold text-corporate-navy dark:text-white mb-2">
              Name *
            </label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Your full name"
              required
              value={formData.name}
              onChange={handleChange}
              onBlur={() => handleBlur('name')}
              className={`w-full px-4 py-3 rounded-lg border-2 transition-all bg-white dark:bg-gray-900 text-corporate-navy dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-0 ${
                errors.name && touched.name
                  ? 'border-red-400 focus:border-red-500 focus:ring-red-500'
                  : 'border-gray-200 dark:border-gray-700 focus:border-corporate-blue focus:ring-corporate-blue'
              }`}
            />
            {errors.name && touched.name && (
              <div className="flex items-center gap-2 mt-2 text-red-600 dark:text-red-400 text-sm">
                <AlertCircle className="w-4 h-4" />
                {errors.name}
              </div>
            )}
          </div>

          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-corporate-navy dark:text-white mb-2">
              Email *
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="your.email@example.com"
              required
              value={formData.email}
              onChange={handleChange}
              onBlur={() => handleBlur('email')}
              className={`w-full px-4 py-3 rounded-lg border-2 transition-all bg-white dark:bg-gray-900 text-corporate-navy dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-0 ${
                errors.email && touched.email
                  ? 'border-red-400 focus:border-red-500 focus:ring-red-500'
                  : 'border-gray-200 dark:border-gray-700 focus:border-corporate-blue focus:ring-corporate-blue'
              }`}
            />
            {errors.email && touched.email && (
              <div className="flex items-center gap-2 mt-2 text-red-600 dark:text-red-400 text-sm">
                <AlertCircle className="w-4 h-4" />
                {errors.email}
              </div>
            )}
          </div>

          {/* Category Field */}
          <div>
            <label htmlFor="category" className="block text-sm font-semibold text-corporate-navy dark:text-white mb-2">
              Feedback Category
            </label>
            <select
              id="category"
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-corporate-navy dark:text-white focus:outline-none focus:ring-2 focus:border-corporate-blue focus:ring-corporate-blue transition-all"
            >
              <option value="general">General Feedback</option>
              <option value="academic">Academic</option>
              <option value="infrastructure">Infrastructure</option>
              <option value="grievance">Grievance</option>
              <option value="suggestion">Suggestion</option>
            </select>
            <p className="text-xs text-corporate-textSecondary dark:text-gray-400 mt-1">
              <Info className="w-3 h-3 inline mr-1" />
              Select the category that best describes your feedback
            </p>
          </div>

          {/* Message Field */}
          <div>
            <label htmlFor="message" className="block text-sm font-semibold text-corporate-navy dark:text-white mb-2">
              Message *
            </label>
            <textarea
              id="message"
              name="message"
              required
              placeholder="Share your feedback with us... (minimum 10 characters)"
              value={formData.message}
              onChange={handleChange}
              onBlur={() => handleBlur('message')}
              rows={5}
              className={`w-full px-4 py-3 rounded-lg border-2 transition-all bg-white dark:bg-gray-900 text-corporate-navy dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-0 resize-none ${
                errors.message && touched.message
                  ? 'border-red-400 focus:border-red-500 focus:ring-red-500'
                  : 'border-gray-200 dark:border-gray-700 focus:border-corporate-blue focus:ring-corporate-blue'
              }`}
            />
            <div className="flex justify-between items-center mt-2">
              {errors.message && touched.message && (
                <div className="flex items-center gap-2 text-red-600 dark:text-red-400 text-sm">
                  <AlertCircle className="w-4 h-4" />
                  {errors.message}
                </div>
              )}
              <span className={`text-xs ${
                formData.message.length >= 10 
                  ? 'text-green-600 dark:text-green-400' 
                  : 'text-corporate-textSecondary dark:text-gray-400'
              }`}>
                {formData.message.length}/10+ characters
              </span>
            </div>
          </div>

          {/* Submit Button */}
          <Button 
            type="submit" 
            disabled={status === "sending" || Object.keys(errors).length > 0 && Object.keys(touched).length > 0}
            className="w-full"
            variant="primary"
          >
            {status === "sending" ? (
              <>
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                Sending...
              </>
            ) : (
              <>
                <Send className="w-5 h-5" />
                Submit Feedback
              </>
            )}
          </Button>

          {/* Success Message */}
          {status === "success" && (
            <div className="p-4 bg-green-50 dark:bg-green-900/20 border-l-4 border-l-green-500 rounded-lg flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-green-800 dark:text-green-300">Success!</h4>
                <p className="text-sm text-green-700 dark:text-green-400 mt-1">
                  Thank you for your feedback! We appreciate your input and will review it shortly.
                </p>
              </div>
            </div>
          )}

          {/* Error Message */}
          {status === "error" && (
            <div className="p-4 bg-red-50 dark:bg-red-900/20 border-l-4 border-l-red-500 rounded-lg flex items-start gap-3">
              <AlertCircle className="w-6 h-6 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-red-800 dark:text-red-300">Submission Failed</h4>
                <p className="text-sm text-red-700 dark:text-red-400 mt-1">
                  An error occurred while submitting your feedback. Please try again.
                </p>
              </div>
            </div>
          )}

          {/* Helper Text */}
          <p className="text-xs text-corporate-textSecondary dark:text-gray-400 text-center">
            * Required fields
          </p>
        </div>
      </Card>
    </form>
  );
}
