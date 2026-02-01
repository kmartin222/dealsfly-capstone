import { useState } from "react";
import axios from "axios";
import Markdown from "react-markdown";

const ChatBot = ({ setShowChatbot }) => {
  const [prompt, setPrompt] = useState("");
  const [finalResponse, setFinalResponse] = useState("");
  let chatHistory = JSON.parse(sessionStorage.getItem("chatHistory")) || []; // Load existing history
  const handleSubmit = async (e) => {
    e.preventDefault();
    const context = `
Your Name is FlyBot
Answer all questions with persona of Sarah or Marcus
Deals Fly: A Fashion Haven for Every Budget Brand Story
Deals Fly was born from a shared frustration – great style shouldn't come with a hefty price tag! Founders Marcus and Sarah, both passionate about fashion, envisioned a haven where quality clothing met affordability.
They spent years working in retail, witnessing firsthand the struggles customers faced when trying to find stylish pieces without emptying their wallets. This fueled their dream of creating Deals Fly – an online store that would offer trend-forward designs for men and women at prices everyone could appreciate.
Products:Deals Fly curates a diverse collection catering to all styles and needs:
Shirts:Men's Dress Shirts: Crisp, classic options in various colors and patterns perfect for work or formal occasions. Women's Blouses & Tops: From elegant silk blouses to casual everyday tees, Deals Fly offers a wide range of women’s tops. Casual Button-Downs: For men and women seeking laid-back yet stylish options for weekend wear or outings with friends. Jackets:
Men's Jackets: Leather jackets, denim jackets, bomber jackets  we have something to suit every style and season. Women's Coats & Outerwear: Trench coats, puffer jackets, wool coats – stay warm and fashionable in any weather. Pants:
Jeans for Men & Women: A variety of fits, washes, and styles to flatter every body type. Dress Pants & Chinos: Perfect for work or special occasions, we offer classic cuts and contemporary designs. Casual Trousers & Leggings: Comfortable yet stylish options for everyday wear. Shoes:
Men's Sneakers & Boots: From athletic to dressy styles, find the perfect pair to complement your look. Women's Flats, Heels & Sandals: We have everything from comfortable flats for errands to elegant heels for special events. Suits:
Men's Suits: Classic and contemporary designs in various fabrics and colors  make a statement with confidence. Values:
Deals Fly is committed to providing affordable fashion without compromising on quality or style. We believe everyone deserves access to stylish clothing that makes them feel confident and empowered. Our core values are:
Accessibility: Making fashionable clothing accessible to all budgets Quality: We source ethical factories and prioritize durable, long-lasting pieces. Style: Keeping our collections current with the latest trends while offering timeless classics. Customer Focus: Providing exceptional customer service and creating a welcoming shopping experience. Hours of Operation:
Monday - Sunday: 9am - 9pm EST `;

    const response = await axios.post(import.meta.env.VITE_OLLAMA_API_URL, {
      model: "mistral",
      prompt: context + prompt,
    });
    // console.log(response)

    let responseText = "";
    const responseLines = response.data.split("\n");
    for (const d of responseLines) {
      try {
        const obj = JSON.parse(d);
        responseText += obj.response;
        // console.log(obj)
      } catch (err) {
        console.log("This llama won't hunt!");
      }
    }
    sessionStorage.setItem("chatHistory", JSON.stringify(chatHistory));
    console.log("responseText", responseText);
    setFinalResponse(responseText);
  };

  return (
    <div className=''>
      <div
        className=' relative z-10'
        aria-labelledby='slide-over-title'
        role='dialog'
        aria-modal='true'
      >
        {/* <div
          className='fixed inset-0 bg-gray-500/75 transition-opacity'
          aria-hidden='true'
        ></div> */}

        <div className='fixed inset-0 overflow-hidden'>
          <div className='absolute inset-0 w-1/2  overflow-hidden'>
            <div className='pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10'>
              <div className='pointer-events-auto relative w-screen max-w-sm'>
                <div className='absolute top-0 left-0 -ml-8 flex pt-5 pr-2 sm:-ml-10 sm:pr-4'>
                  <button
                    onClick={() => setShowChatbot(false)}
                    type='button'
                    className='relative rounded-md text-gray-300 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden'
                  >
                    <span className='absolute -inset-2.5'></span>
                    <span className='sr-only'>Close panel</span>
                    <svg
                      className='size-6'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke-width='1.5'
                      stroke='currentColor'
                      aria-hidden='true'
                      data-slot='icon'
                    >
                      <path
                        stroke-linecap='round'
                        stroke-linejoin='round'
                        d='M6 18 18 6M6 6l12 12'
                      />
                    </svg>
                  </button>
                </div>

                <div className='flex h-full flex-col  bg-neutral-800 py-6 shadow-xl'>
                  {/* Header */}
                  <div className='flex items-center justify-between p-4 md:p-3 -mt-4 border-b  dark:border-teal-300 border-gray-200'>
                    <h3 className='text-xl font-bold text-gray-300'>
                      FlyBot 🤖
                    </h3>
                  </div>
                  <div className='flex flex-col-reverse h-screen overflow-auto '>
                    {/* <!-- Your chatbot messages will go here --> */}

                    {/* <!-- Your chat message --> */}
                    {/* <div className='flex items-center justify-end mb-4'>
                      <span className='bg-[#F16C5B] text-white px-4 py-2 rounded mr-2'>
                        This is a user message
                      </span>
                    </div> */}

                    {/* <!-- Chatbot's response --> */}
                    <div className='flex items-center justify-start mb-4'>
                      <span className='bg-[#E9F0F8] text-gray-800 px-4 py-2 rounded ml-2'>
                        {finalResponse.length > 0 && (
                          <Markdown>{finalResponse}</Markdown>
                        )}
                      </span>
                    </div>
                  </div>

                  {/* Footer */}
                  <div className='flex  items-center px-2 py-3 space-x-2 rtl:space-x-reverse border-t border-gray-200  dark:border-teal-300'>
                    <form
                      onSubmit={handleSubmit}
                      className='w-full -mb-8 -mt-2 py-1'
                    >
                      <div className='flex items-center px-1 py-2 rounded-lg bg-neutral-800 '>
                        <textarea
                          value={prompt}
                          onChange={(e) => setPrompt(e.target.value)}
                          id='chat'
                          rows='1'
                          className='block mx-1 p-2.5 w-full text-sm text-gray-900 bg-neutral-500 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-neutral-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                          placeholder='Your message...'
                        ></textarea>
                        <button
                          type='submit'
                          className='inline-flex justify-center p-1 text-teal-600 rounded-full cursor-pointer  dark:text-teal-500 '
                        >
                          <svg
                            className='w-5 h-5 rotate-90 rtl:-rotate-90'
                            aria-hidden='true'
                            xmlns='http://www.w3.org/2000/svg'
                            fill='currentColor'
                            viewBox='0 0 18 20'
                          >
                            <path d='m17.914 18.594-8-18a1 1 0 0 0-1.828 0l-8 18a1 1 0 0 0 1.157 1.376L8 18.281V9a1 1 0 0 1 2 0v9.281l6.758 1.689a1 1 0 0 0 1.156-1.376Z' />
                          </svg>
                          <span className='sr-only'>Send message</span>
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatBot;
