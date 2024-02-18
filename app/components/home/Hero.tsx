export function Hero() {

return (
    <section className="flex items-center justify-center bg-background h-[90vh]">
        <div className="relative items-center w-full px-5 py-12 mx-auto lg:px-16 max-w-7xl md:px-12">
            <div className="max-w-4xl mx-auto text-center">
                <div className="absolute morph-purple opacity-40 animate-blob"></div>
                <div className="absolute morph-lime opacity-30 animate-blob"></div>
                <div>
                    <span className="w-auto px-6 py-3 rounded-full bg-secondary">
                    <span className="text-sm font-medium text-primary">
                        Innovative. Versatile. Customer-Centric
                    </span>
                    </span>

                    <h1 className="mt-8 text-3xl font-extrabold tracking-tight lg:text-6xl">
                    PT Tennet Nasional Teknologi
                    </h1>

                    <p className="max-w-xl mx-auto mt-8 text-base lg:text-xl text-secondary-foreground">
                    Your Partner in Navigating Tomorrow's Technology
                    </p>
                </div>
            </div>
        </div>
    </section>
    );
}