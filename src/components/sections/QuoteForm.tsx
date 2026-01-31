import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { Send, User, Building2, Mail, Phone, MessageSquare, CheckCircle, Sparkles } from 'lucide-react';

interface QuoteFormData {
  name: string;
  companyName: string;
  email: string;
  mobileNo: string;
  additionalInfo?: string;
}

export default function QuoteForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
    reset,
  } = useForm<QuoteFormData>();

  const onSubmit = (data: QuoteFormData) => {
    console.log('Quote request:', data);
    reset();
  };

  return (
    <section id="quote" className="section-padding relative overflow-hidden">
      {/* Vibrant gradient background */}
      <div className="absolute inset-0 vibrant-gradient opacity-95" />
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-white/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-white"
          >
            <span className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-white/30">
              <Sparkles size={16} className="text-yellow-300" />
              Get Started Today
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
              Request a{' '}
              <span className="text-yellow-300 drop-shadow-lg">
                Custom Quote
              </span>
            </h2>
            <p className="text-white/90 text-lg mb-8 font-medium">
              Get custom printing solutions tailored to your exact specifications. Fill out the
              form and our team will get back to you within 24 hours.
            </p>

            <div className="space-y-4">
              {[
                'Quick response within 24 hours',
                'Competitive pricing for bulk orders',
                'Free samples available',
                'Custom designs & specifications',
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                    <CheckCircle className="text-yellow-300" size={14} />
                  </div>
                  <span className="text-white/90 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right side - Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-3xl p-8 md:p-10 text-gray-900 shadow-2xl"
          >
            <h3 className="text-2xl font-bold mb-6">Fill The Form</h3>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold mb-2 text-gray-700">
                  Full Name <span className="text-primary-500">*</span>
                </label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    id="name"
                    type="text"
                    placeholder="John Doe"
                    {...register('name', { required: 'Name is required' })}
                    className="w-full pl-12 pr-4 py-3.5 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all"
                  />
                </div>
                {errors.name && (
                  <p className="text-primary-500 text-sm mt-1">{errors.name.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="companyName" className="block text-sm font-semibold mb-2 text-gray-700">
                  Company Name <span className="text-primary-500">*</span>
                </label>
                <div className="relative">
                  <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    id="companyName"
                    type="text"
                    placeholder="Your Company"
                    {...register('companyName', { required: 'Company name is required' })}
                    className="w-full pl-12 pr-4 py-3.5 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all"
                  />
                </div>
                {errors.companyName && (
                  <p className="text-primary-500 text-sm mt-1">{errors.companyName.message}</p>
                )}
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold mb-2 text-gray-700">
                    Email <span className="text-primary-500">*</span>
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                    <input
                      id="email"
                      type="email"
                      placeholder="you@email.com"
                      {...register('email', {
                        required: 'Email is required',
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: 'Invalid email',
                        },
                      })}
                      className="w-full pl-12 pr-4 py-3.5 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all"
                    />
                  </div>
                  {errors.email && (
                    <p className="text-primary-500 text-sm mt-1">{errors.email.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="mobileNo" className="block text-sm font-semibold mb-2 text-gray-700">
                    Mobile No. <span className="text-primary-500">*</span>
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                    <input
                      id="mobileNo"
                      type="tel"
                      placeholder="+91 98765 43210"
                      {...register('mobileNo', {
                        required: 'Mobile number is required',
                        pattern: {
                          value: /^[0-9+\s]+$/,
                          message: 'Invalid number',
                        },
                      })}
                      className="w-full pl-12 pr-4 py-3.5 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all"
                    />
                  </div>
                  {errors.mobileNo && (
                    <p className="text-primary-500 text-sm mt-1">{errors.mobileNo.message}</p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="additionalInfo" className="block text-sm font-semibold mb-2 text-gray-700">
                  Additional Information
                </label>
                <div className="relative">
                  <MessageSquare className="absolute left-4 top-4 text-gray-400" size={20} />
                  <textarea
                    id="additionalInfo"
                    rows={4}
                    placeholder="Tell us about your requirements..."
                    {...register('additionalInfo')}
                    className="w-full pl-12 pr-4 py-3.5 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all resize-none"
                  />
                </div>
              </div>

              {isSubmitSuccessful && (
                <div className="flex items-center gap-2 text-secondary-600 bg-secondary-50 p-4 rounded-xl border border-secondary-200">
                  <CheckCircle size={20} />
                  <span className="font-medium">Thank you! Your quote request has been submitted.</span>
                </div>
              )}

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-primary-500 to-primary-600 text-white py-4 rounded-xl font-bold hover:from-primary-600 hover:to-primary-700 transition-all flex items-center justify-center gap-2 group shadow-lg shadow-primary-500/25"
              >
                Submit Request
                <Send size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
