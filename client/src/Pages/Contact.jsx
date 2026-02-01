import { useState } from "react";
import QuestionMark from "../SVG/QuestionMark";
import ChatBot from "../Components/ChatBot";

const Contact = () => {
  const [showChatbot, setShowChatbot] = useState(false);

  return (
    <div>
      <section className='mt-5 mb-5 '>
        <div className='py-8 px-4 mx-auto bg-neutral-900 max-w-screen-xl sm:py-16 lg:px-6'>
          <h2 className='mb-8 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white'>
            Frequently asked questions
          </h2>
          <div className='grid pt-8 text-left border-t border-gray-200 md:gap-16 dark:border-gray-700 md:grid-cols-2'>
            <div>
              <div className='mb-10'>
                <h3 className='flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-teal-300'>
                  <QuestionMark />
                  1. How do I find the best deals?
                </h3>
                <p className='text-gray-500 dark:text-gray-400'>
                  At Deals Fly, we make it easy! Our homepage features curated
                  daily deals and trending products with huge discounts. Explore
                  our categories or use the search bar to find exactly what
                  you're looking for. Don't forget to subscribe to our
                  newsletter for exclusive flash sales and early access to new
                  offers!
                </p>
              </div>
              <div className='mb-10'>
                <h3 className='flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-teal-300'>
                  <QuestionMark />
                  2. What payment methods do you accept?
                </h3>
                <p className='text-gray-500 dark:text-gray-400'>
                  We accept all major credit cards (Visa, Mastercard, American
                  Express), PayPal, Apple Pay, Google Pay, and more. Your
                  payment information is always secure with us using
                  industry-standard encryption.
                </p>
              </div>
              <div className='mb-10'>
                <h3 className='flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-teal-300'>
                  <QuestionMark />
                  3. Can I contact customer support if I have questions?
                </h3>
                <p className='text-gray-500 dark:text-gray-400'>
                  Absolutely! Our friendly customer service team is always happy
                  to help. You can reach us by email at [email protected], phone
                  at [phone number], or through our live chat feature on the
                  website (available during business hours).
                </p>
                {showChatbot && <ChatBot setShowChatbot={setShowChatbot} />}
                <p className='text-gray-500 dark:text-gray-400'>
                  Feel free to{" "}
                  <button
                    onClick={() => setShowChatbot(true)}
                    className='font-medium underline text-primary-600 dark:text-blue-500 hover:no-underline'
                    target='_blank'
                    rel='noreferrer'
                  >
                    contact us
                  </button>{" "}
                  and we'll help you out as soon as we can.
                </p>
              </div>
              <div className='mb-10'>
                <h3 className='flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-teal-300'>
                  <QuestionMark />
                  4. What are your store hours?
                </h3>
                <p className='text-gray-500 dark:text-gray-400'>
                  While we operate 24/7 online, our customer service team is
                  available from 9:00am - 5:00pm MST to assist you with any
                  questions or concerns.
                </p>
              </div>
            </div>
            <div>
              <div className='mb-10'>
                <h3 className='flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-teal-300'>
                  <QuestionMark />
                  5. How can I track my order?
                </h3>
                <p className='text-gray-500 dark:text-gray-400'>
                  Once your order ships, you'll receive an email with a tracking
                  number. You can use this number to track your package's
                  progress directly through the carrier's website or our Order
                  Tracking page.
                </p>
              </div>
              <div className='mb-10'>
                <h3 className='flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-teal-300'>
                  <QuestionMark />
                  6. Do you offer gift wrapping?
                </h3>
                <p className='text-gray-500 dark:text-gray-400'>
                  Yes! Choose "Gift Wrapping" at checkout for a beautifully
                  presented surprise for your loved ones. Add a personalized
                  message and we'll take care of the rest.
                </p>
              </div>
              <div className='mb-10'>
                <h3 className='flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-teal-300'>
                  <QuestionMark />
                  7. Is shipping free?
                </h3>
                <p className='text-gray-500 dark:text-gray-400'>
                  Shipping costs vary depending on your order size and location.
                  Free shipping is often available for orders over a certain
                  amount – check the product page or at checkout for details! We
                  also offer expedited shipping options if you need your items
                  faster.
                </p>
              </div>
              <div className='mb-10'>
                <h3 className='flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-teal-300'>
                  <QuestionMark />
                  8. What is your return policy?
                </h3>
                <p className='text-gray-500 dark:text-gray-400'>
                  We want you to be happy with your purchases. If, for any
                  reason, you're not satisfied, we offer hassle-free returns
                  within [Number] days of delivery. Please refer to our detailed
                  Return Policy on the website for complete information and
                  instructions on how to initiate a return.
                </p>
                <p className='text-gray-500 dark:text-gray-400'>
                  Find out more information by{" "}
                  <a
                    href='#'
                    className='font-medium underline text-primary-600 dark:text-primary-500 hover:no-underline'
                  >
                    reading the policy
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
