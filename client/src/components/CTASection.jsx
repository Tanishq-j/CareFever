import React from "react";

const CTASection = () => {
    return (
        <section className="py-8 mb-6 bg-light-primary dark:bg-dark-primary">
            <div className="mx-auto max-w-6xl px-6">
                <h3 className="text-4xl font-semibold text-white">
                   Instant fever support. <br />
                   Start in seconds.
                </h3>
                <p className="mt-2 text-white/80">
                    AI-guided fever assistance powered by community data. <br />
                    Quick, private, and easy to use.
                </p>

                <div className="mt-4">
                    <a
                        href="https://github.com/your-username/CareFever"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center rounded-md bg-dark-bg px-4 py-2 text-sm font-semibold text-dark-primary-text">
                        Get started
                    </a>
                </div>
            </div>
        </section>
    );
};

export default CTASection;
