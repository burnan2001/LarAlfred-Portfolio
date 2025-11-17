import React from 'react';

const ContactSection: React.FC = () => {
    return (
        <footer className="w-full max-w-6xl rounded-xl border border-primary/20 bg-black/30 p-8 shadow-2xl shadow-primary/10 backdrop-blur-md md:p-12">
            <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-16 lg:gap-24">
                <div className="flex flex-col">
                    <h2 className="font-bold text-primary text-3xl tracking-[-0.015em] sm:text-4xl">CONTACT NODE</h2>
                    <p className="mt-3 text-base font-normal leading-normal text-text-light/80">Feel free to reach out for collaborations or just to say hi. Let's build something amazing together.</p>
                    <form className="mt-8 flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
                        <label className="flex flex-col">
                            <span className="text-base font-medium leading-normal pb-2 text-text-light">Name</span>
                            <input className="form-input flex w-full resize-none overflow-hidden rounded-lg border border-primary/20 bg-black/50 p-4 text-base font-normal text-white placeholder:text-text-light/40 transition-all duration-300 focus:border-primary focus:outline-0 focus:ring-2 focus:ring-primary/40" placeholder="Your Name" type="text" />
                        </label>
                        <label className="flex flex-col">
                            <span className="text-base font-medium leading-normal pb-2 text-text-light">Email</span>
                            <input className="form-input flex w-full resize-none overflow-hidden rounded-lg border border-primary/20 bg-black/50 p-4 text-base font-normal text-white placeholder:text-text-light/40 transition-all duration-300 focus:border-primary focus:outline-0 focus:ring-2 focus:ring-primary/40" placeholder="your.email@address.com" type="email" />
                        </label>
                        <label className="flex flex-col">
                            <span className="text-base font-medium leading-normal pb-2 text-text-light">Message</span>
                            <textarea className="form-input flex w-full min-h-[120px] resize-none overflow-hidden rounded-lg border border-primary/20 bg-black/50 p-4 text-base font-normal text-white placeholder:text-text-light/40 transition-all duration-300 focus:border-primary focus:outline-0 focus:ring-2 focus:ring-primary/40" placeholder="Your message or project details..."></textarea>
                        </label>
                        <button className="group relative mt-2 inline-flex items-center justify-center overflow-hidden rounded-lg bg-accent-orange px-8 py-4 font-bold uppercase tracking-widest text-background-dark transition-all duration-300 hover:shadow-[0_0_20px_0px_rgba(255,140,66,0.5)] focus:outline-none focus:ring-2 focus:ring-accent-orange focus:ring-offset-2 focus:ring-offset-background-dark" type="submit">
                            SEND DATA PACKET
                        </button>
                    </form>
                </div>
                <div className="flex flex-col items-start justify-center">
                    <div className="w-full">
                        <h3 className="text-xl font-semibold text-white">Direct Contact</h3>
                         <div className="mt-4 space-y-3 text-text-light/80">
                            <p className="flex items-center gap-3">
                                <span className="material-symbols-outlined text-primary text-xl">alternate_email</span>
                                <a href="mailto:burnan40@gmail.com" className="hover:text-primary transition-colors">burnan40@gmail.com</a>
                            </p>
                            <p className="flex items-center gap-3">
                                <span className="material-symbols-outlined text-primary text-xl">call</span>
                                <a href="tel:+2347057371830" className="hover:text-primary transition-colors">+234 705 737 1830</a>
                            </p>
                        </div>

                        <h3 className="text-xl font-semibold text-white mt-10">Follow My Work</h3>
                        <p className="mt-2 text-text-light/80">Connect with me on social platforms.</p>
                        <div className="mt-6 flex items-center gap-4">
                            <a aria-label="GitHub Profile" className="group flex h-14 w-14 items-center justify-center rounded-full bg-black/50 text-primary transition-all duration-300 hover:bg-primary hover:text-background-dark hover:shadow-[0_0_20px_0px_rgba(0,255,255,0.5)]" href="https://github.com/burnan2001" target="_blank" rel="noopener noreferrer">
                                <svg aria-hidden="true" className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.15-1.11-1.46-1.11-1.46-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.1.39-1.99 1.03-2.69a3.6 3.6 0 0 1 .1-2.64s.84-.27 2.75 1.02a9.58 9.58 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.4.1 2.64.64.7 1.03 1.6 1.03 2.69 0 3.84-2.33 4.68-4.57 4.93.36.31.68.92.68 1.85v2.72c0 .27.18.58.69.48A10 10 0 0 0 22 12 10 10 0 0 0 12 2Z"></path></svg>
                            </a>
                            <a aria-label="WhatsApp Profile" className="group flex h-14 w-14 items-center justify-center rounded-full bg-black/50 text-primary transition-all duration-300 hover:bg-primary hover:text-background-dark hover:shadow-[0_0_20px_0px_rgba(0,255,255,0.5)]" href="https://wa.me/2347057371830" target="_blank" rel="noopener noreferrer">
                                <svg aria-hidden="true" className="w-7 h-7 fill-current" viewBox="0 0 24 24"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.31 20.59C8.75 21.38 10.36 21.82 12.04 21.82C17.5 21.82 21.95 17.37 21.95 11.91C21.95 9.24 20.9 6.78 19.05 4.94C17.2 3.1 14.71 2 12.04 2M12.04 3.67C14.25 3.67 16.31 4.5 17.87 6.05C19.42 7.6 20.28 9.66 20.28 11.88C20.28 16.47 16.65 20.1 12.04 20.1C10.55 20.1 9.12 19.71 7.89 19L7.22 18.61L4.62 19.33L5.38 16.84L4.97 16.14C4.17 14.81 3.79 13.3 3.79 11.88C3.79 7.29 7.42 3.67 12.04 3.67M16.54 14.3C16.34 14.75 15.34 15.24 14.94 15.34C14.53 15.44 14.12 15.49 13.57 15.34C12.87 15.14 11.91 14.81 10.88 13.91C9.57 12.72 8.65 11.23 8.45 10.78C8.25 10.33 8.35 9.92 8.5 9.77C8.67 9.6 8.86 9.38 9.06 9.18C9.23 8.95 9.28 8.82 9.43 8.57C9.58 8.32 9.53 8.12 9.43 7.97C9.33 7.82 8.87 6.63 8.67 6.18C8.47 5.73 8.27 5.78 8.12 5.78C7.97 5.78 7.77 5.78 7.57 5.78C7.37 5.78 7.07 5.83 6.82 6.08C6.57 6.33 5.92 6.91 5.92 8.1C5.92 9.29 6.82 10.43 6.97 10.63C7.12 10.83 8.82 13.41 11.4 14.56C13.29 15.36 13.75 15.29 14.22 15.24C14.7 15.19 15.65 14.69 15.85 14.24C16.05 13.79 16.05 13.41 15.95 13.26C15.85 13.11 15.7 13.06 15.5 12.96C15.3 12.86 14.89 12.66 14.69 12.56C14.49 12.46 14.34 12.41 14.54 12.81C14.74 13.21 15.14 13.74 15.31 13.91C15.51 14.11 15.61 14.16 15.76 14.11C15.91 14.06 16.74 13.61 16.94 13.51C17.14 13.41 17.29 13.46 17.39 13.56C17.49 13.66 17.44 14.21 17.39 14.3Z"></path></svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default ContactSection;