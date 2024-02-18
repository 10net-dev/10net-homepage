export function CallToAction() {
return(
    <section className="body-font">
        <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
            <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
                <h1 className="title-font font-medium text-3xl ">Contact Us</h1>
                <p className="leading-relaxed mt-4">We're eager to hear from you. Fill out the form below, and our team will be in touch soon to discuss how we can help revolutionize your</p>
            </div>
            <div className="lg:w-2/6 md:w-1/2 bg-primary-foreground rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
                <a href="https://forms.gle/4ZHFbT5BTuWnfXWz7" 
                className="bg-primary text-white border-0 py-2 px-8 focus:outline-none hover:bg-foreground rounded text-lg text-center"
                target="_blank">
                    Contact Us
                </a>

                <p className="text-xs mt-3">Rest Assured, Your Interests Are Securely Entrusted.</p>
            </div>
        </div>
    </section>
    );
    
}