export default function Contact() {
  return (
    <main className="min-h-screen text-white dark:text-neutral-100 relative transition-colors duration-300" style={{background: 'linear-gradient(135deg, #0a0e1a 0%, #1a1b3a 25%, #2d1b69 50%, #1a1b3a 75%, #0a0e1a 100%)'}}>
      
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-4xl px-6 py-16 lg:py-20">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl leading-tight dark:text-white transition-colors duration-300">
              Contact Us
            </h1>
            <p className="mt-6 text-xl text-neutral-300 dark:text-neutral-200 transition-colors duration-300">
              Get in touch with our team
            </p>
          </div>

          <div className="mt-16">
            <div className="bg-white/5 border border-neutral-800 dark:border-neutral-700 rounded-lg p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h2 className="text-2xl font-bold text-white dark:text-neutral-100 mb-6">Get In Touch</h2>
                  <p className="text-neutral-300 dark:text-neutral-200 mb-8">
                    Have questions about TradersPool? Need support? Want to partner with us? 
                    We'd love to hear from you.
                  </p>

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">General Inquiries</h3>
                      <p className="text-neutral-400">
                        Email: <a href="mailto:info@traderspool.com" className="text-blue-400 hover:text-blue-300">info@traderspool.com</a>
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Support</h3>
                      <p className="text-neutral-400">
                        Email: <a href="mailto:support@traderspool.com" className="text-blue-400 hover:text-blue-300">support@traderspool.com</a>
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Partnerships</h3>
                      <p className="text-neutral-400">
                        Email: <a href="mailto:partnerships@traderspool.com" className="text-blue-400 hover:text-blue-300">partnerships@traderspool.com</a>
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Office Hours</h3>
                      <p className="text-neutral-400">
                        Monday - Friday: 9:00 AM - 6:00 PM (UTC)<br />
                        Weekend: Limited support available
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white dark:text-neutral-100 mb-6">Send a Message</h2>
                  <form className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-md text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Your name"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-md text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="your@email.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-white mb-2">
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-md text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="What's this about?"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                        Message
                      </label>
                      <textarea
                        id="message"
                        rows={5}
                        className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-md text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Tell us more..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full rounded-md border border-white/20 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition dark:border-neutral-600 dark:text-neutral-100 dark:hover:bg-white/20"
                    >
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
