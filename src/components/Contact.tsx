import React, { useRef, useState, FormEvent, ChangeEvent } from 'react';
import emailjs from '@emailjs/browser';

import useAlert from '../hooks/useAlert';
import Alert from '../components/Alert';
import Image from 'next/image';
import Image1 from '../../public/arrow-up.png'
import AnimatedTitle from './AnimatedTitle';

interface ContactFormState {
  name: string;
  email: string;
  message: string;
  phone: string;
}

const Contact: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const { alert, showAlert, hideAlert } = useAlert();
  const [loading, setLoading] = useState<boolean>(false);

  const [form, setForm] = useState<ContactFormState>({ 
    name: '', 
    email: '', 
    message: '',
    phone: '',
  });

  const handleChange = ({ target }: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = target;
    setForm(prevForm => ({ ...prevForm, [name]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '',
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '',
        {
          from_name: form.name,
          to_name: 'Rohan Sunwar',
          from_email: form.email,
          to_email: 'rohansunwar4@gmail.com',
          message: form.message,
          phone: form.phone,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          showAlert({
            text: 'Thank you for your message 😃',
            type: 'success',
          });

          setTimeout(() => {
            hideAlert();
            setForm({
              name: '',
              email: '',
              message: '',
              phone: '',
            });
          }, 3000);
        },
        (error) => {
          setLoading(false);
          console.error(error);

          showAlert({
            text: "I didn't receive your message 😢",
            type: 'danger',
          });
        }
      );
  };

  return (
    <section className="c-space my-20" id="contact">
      {alert.show && <Alert {...alert} />}

      <div className="relative min-h-screen flex items-center justify-center flex-col">
        

        <div className=" max-w-xl relative z-10 sm:px-10 px-5 mt-12">
            <AnimatedTitle
            title="<b>C</b>ontact <b>U</b>s"
            containerClass="mt-5 !text-black text-center"
            />
          {/* <h3 className="sm:text-4xl text-3xl font-semibold text-gray_gradient">Let's talk</h3> */}
          <p className="text-lg text-white-600 mt-3">
          </p>

          <form 
            ref={formRef} 
            onSubmit={handleSubmit} 
            className="mt-12 font-raleway flex flex-col space-y-7"
          >
            <label className="space-y-3">
              <span className="field-label">Full Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="ex., John Doe"
              />
            </label>

            <label className="space-y-3">
              <span className="field-label">Email address</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="ex., johndoe@gmail.com"
              />
            </label>

            <label className="space-y-3">
              <span className="field-label">Phone Number</span>
              <input
                type="text"
                name="phone"
                value={form.phone || ''}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="ex., +1234567890"
              />
            </label>


            <label className="space-y-3">
              <span className="field-label">Your message</span>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                className="field-input"
                placeholder="Share your thoughts or inquiries..."
              />
            </label>

            <button 
              className="field-btn" 
              type="submit" 
              disabled={loading}
            >
              {loading ? 'Sending...' : 'Send Message'}

                <Image 
                    src={Image1}
                    alt='Arrow'
                    className='field-btn_arrow'
                />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;