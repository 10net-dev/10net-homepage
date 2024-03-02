export function Hero() {

return (
    <section className="relative flex items-center justify-center h-screen bg-white overflow-hidden">
        <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#39ff14_100%)]"></div>
            <div className="absolute h-screen w-screen bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
        </div>
        <div className="z-10">
            <div className="max-w-4xl mx-auto text-center">
                {/* <div className="absolute morph-purple opacity-40 animate-blob"></div> */}
                {/* <div className="absolute morph-lime opacity-30 animate-blob"></div> */}
                <div>
                    <span className="w-auto px-6 py-3 rounded-full bg-secondary">
                    <span className="text-sm font-medium text-primary">
                        Innovative. Versatile. Customer-Centric
                    </span>
                    </span>

                    <h1 className="mt-8 text-3xl font-extrabold tracking-tight lg:text-5xl">
                    Unlocking Potential. Beyond Today
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