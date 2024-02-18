import { 
    Bot, 
    AppWindow,
    Blocks,
    Fingerprint,
    Users,
    Lock
} from "lucide-react";

export function Services() {

    const svgIconWeb =  <AppWindow className="w-4 h-4"/> 
    const svgIconIntegration = <Blocks className="w-4 h-4"/>
    const svgIconAi = <Bot className="w-4 h-4"/>;
    const svgIconIdentity = <Fingerprint className="w-4 h-4"/>
    const svgIconItMgmt = <Users className="w-4 h-4"/>
    const svgIconSecurity = <Lock className="w-4 h-4"/>
                
    const listServices = [
        {name: 'Web & Mobile Application', description: 'Elevate your digital presence with our bespoke web and mobile app development services', icon:svgIconWeb},
        {name: 'System Integration', description: 'Streamlining your business operations through efficient integration of diverse platform', icon:svgIconIntegration},
        {name: 'Artificial Intelligence', description: 'Implementing advanced AI solutions to drive innovation and operational efficiency in your business', icon:svgIconAi},
        {name: 'Identity Management', description: 'Enhancing security and user experience with robust identity management and authentication solutions', icon:svgIconIdentity},
        {name: 'IT Management', description: 'Providing expert IT consulting to optimize your technology strategy and solve complex challenges', icon:svgIconItMgmt},
        {name: 'Security Assesment', description: 'Conducting comprehensive security assessments to protect your IT infrastructure from emerging threats', icon:svgIconSecurity}
    ]

    return (
        <section className="body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
                    <h1 className="sm:text-3xl text-2xl font-extrabold tracking-tight mb-8 ">Explore The Solution</h1>
                    <p className="max-w-5xl mx-auto mt-4 text-base lg:text-xl text-secondary-foreground">
                    At 10Net, we offer a comprehensive suite of IT consultancy and system development services designed to meet the diverse needs of modern businesses.
                    </p>
                </div>
                <div className="flex flex-wrap -m-4">
                {listServices?.map((service, index) => (
                    <div key={index} className="xl:w-1/3 md:w-1/2 p-4">
                        <div className="border border-gray-200 p-6 rounded-lg">
                        <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-secondary text-primary mb-4">
                            {service.icon}
                        </div>
                        <h2 className="text-lg  font-medium title-font mb-2">{service.name}</h2>
                        <p className="leading-relaxed text-base">{service.description}</p>
                        </div>
                    </div> 
                ))}
                </div>
            </div>
        </section>
        );
    }