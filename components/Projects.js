import Image from "next/image";
import Link from "next/link";
import react from "react";
import Button from "./Button";
import Filter from "./Filter";

function Projects() {
    const [category, setcategory] = react.useState('Professional');
    
    const getCurrentCategory = (category) => {
        // console.log(category)
        setcategory(category)
    }

    return (
        <div className="bg-gray text-white max-w-none w-full m-auto py-10">
            <div className="mobile-width max-w-sm sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl m-auto">
                <Filter saveCategory={getCurrentCategory}/>
                {/* <h2 className="lg:max-w-4xl lg:m-auto text-sm">SOME PAST PROJECTS</h2> */}
                {/* {
                    projects.map(project => (
                        <div key={project.id} className="my-10 md:py-10 lg:m-auto lg:max-w-4xl flex flex-col items-center odd:sm:flex-row even:sm:flex-row-reverse md:justify-between lg:justify-between">
                            <div className="my-5 sm:w-2/4 ">
                                <h2 className="text-3xl font-semibold lg:text-5xl">{project.title}</h2>
                                <p className="my-5">{project.description}</p>
                                <p className="text-slate-400 my-5 mb-6">Technologies Used: {project.stack}</p>
                                <Button>
                                    <Link href={project.link} >
                                        Visit Website
                                    </Link>
                                </Button>
                            </div>
                            <div className="m-auto sm:text-right md:m-0 sm:w-2/4 sm:h-2/4 mt-10 ">
                                <Image className="object-contain" src='/images/levare.png' alt={project.alt}  width={400} height={400} />
                            </div>
                        </div>
                    ))
                } */}
                <div className={`${category === 'Professional' ? 'block' : 'hidden'} my-20 md:py-16 md:gap-10 lg:m-auto lg:max-w-4xl flex flex-col items-center sm:flex-row-reverse md:justify-between lg:justify-between`}>
                    <div className="my-5 sm:w-2/4 order-2 md:order-1">
                        <h2 className="text-3xl font-semibold lg:text-5xl">Anon</h2>
                        <p className="my-5">A beautiful anonymous messaging platform, crafted with React, Vite, and TypeScript, fueled by the dynamic duo of Node.js and MongoDB. This innovative platform enables users to effortlessly create fully anonymous accounts, facilitating logins to share messages. Users have the flexibility to choose between public or private accounts and personalize their experience by changing the app's theme at their discretion.</p>
                        <p>Test account: priceless (username), 654321 (password) (Login takes some time as I am using Render free plan)</p>
                        <p className="text-slate-400 my-5 mb-6">Technologies Used: React + Vite, Typescript, Nodejs, MongoDB, Express Sentry, Firebase, Novu</p>
                        <Button>
                            <Link href='https://anon-app.netlify.app' target='_blank'>
                                Visit App
                            </Link>
                        </Button>
                    </div>
                    <div className="order-1 md:order-2 m-auto sm:text-left md:m-0 sm:w-2/4 sm:h-2/4 mt-10">
                        <Image className="object-contain" src='/images/anon-app-image.png' alt='InterAd - Developer(Esther)'  width={400} height={400} />
                    </div>
                </div>
                <div className={`${category === 'Professional' ? 'block' : 'hidden'} my-10 md:py-10 md:gap-10 lg:m-auto lg:max-w-4xl flex flex-col items-center sm:flex-row md:justify-between lg:justify-between`}>
                    <div className="my-5 sm:w-2/4 order-2 md:order-1">
                        <h2 className="text-3xl font-semibold lg:text-5xl">Noogle</h2>
                        <p className="my-5">This bespoke search engine is an ingenious extension of Google's renowned search capabilities. With a generous search quota of 10,000 requests per day and the ability to search in multiple languages with results intelligently cached for enhanced performance.</p>
                        <p className="text-slate-400 my-5 mb-6">Technologies Used: React, Typescript, Tailwind,<br/> GCP.</p>
                        <Button>
                            <Link href='https://x-search-engine.vercel.app/' target='_blank' >
                                Visit App
                            </Link>
                        </Button>
                    </div>
                    <div className="order-1 md:order-2 m-auto sm:text-right md:m-0 sm:w-2/4 sm:h-2/4 mt-10 ">
                        <Image className="object-contain" src='/images/noogle.png' alt='Noogle - Developer(Esther)'  width={400} height={400} />
                    </div>
                </div>
                {/* <div className={`${category === 'Professional' ? 'block' : 'hidden'} my-10 md:py-10 md:gap-10 lg:m-auto lg:max-w-4xl flex flex-col items-center sm:flex-row md:justify-between lg:justify-between`}>
                    <div className="my-5 sm:w-2/4 order-2 md:order-1">
                        <h2 className="text-3xl font-semibold lg:text-5xl">Levare</h2>
                        <p className="my-5">Levare is a new upcoming financial technology company that provides financial solutions to individuals.</p>
                        <p className="text-slate-400 my-5 mb-6">Technologies Used: React, Nextjs,<br/> Animate.css, Sass, Netlify.</p>
                        <Button>
                            <Link href='https://levare.com.ng' >
                                Visit Website
                            </Link>
                        </Button>
                    </div>
                    <div className="order-1 md:order-2 m-auto sm:text-right md:m-0 sm:w-2/4 sm:h-2/4 mt-10 ">
                        <Image className="object-contain" src='/images/levare.svg' alt='Levare - Developer(Esther)'  width={400} height={400} />
                    </div>
                </div> */}
                <div className={`${category === 'Professional' ? 'block' : 'hidden'} my-20 md:py-16 md:gap-10 lg:m-auto lg:max-w-4xl flex flex-col items-center sm:flex-row-reverse md:justify-between lg:justify-between`}>
                    <div className="my-5 sm:w-2/4 order-2 md:order-1">
                        <h2 className="text-3xl font-semibold lg:text-5xl">Joint Bank Account Smart Contract</h2>
                        <p className="my-5">This innovative contract project complete with smart contract tests harnesses the power of Web3 technology to redefine the traditional joint bank account experience. Seamlessly merging the security of smart contracts with the decentralized capabilities of Web3, it offers a robust and transparent framework for collaborative financial management. Users can enjoy a state-of-the-art platform that ensures trust, security, and efficiency in joint account operations, all within the decentralized landscape of Web3.</p>
                        <p className="text-slate-400 my-5 mb-6">Technologies Used: Hardhat, Solidity, Ethers<br/></p>
                        <Button>
                            <Link href='https://github.com/Queen-esther01/Joint-Bank-Account' target='_blank' >
                                Visit Repo
                            </Link>
                        </Button>
                    </div>
                    <div className="order-1 md:order-2 m-auto sm:text-left md:m-0 sm:w-2/4 sm:h-2/4 mt-10">
                        {/* <Image className="object-contain" src='/images/InterAd.svg' alt='InterAd - Developer(Esther)'  width={400} height={400} /> */}
                    </div>
                </div>
                {/* <div className={`${category === 'Professional' ? 'block' : 'hidden'} my-20 md:py-16 md:gap-10 lg:m-auto lg:max-w-4xl flex flex-col items-center sm:flex-row-reverse md:justify-between lg:justify-between`}>
                    <div className="my-5 sm:w-2/4 order-2 md:order-1">
                        <h2 className="text-3xl font-semibold lg:text-5xl">InterAd</h2>
                        <p className="my-5">InterAd is an online engagement and marketing portal which businesses can use to create incentivised digital promotions with the aim of attracting more customers beyond the usual circle and also gather valuable information for business decisions.</p>
                        <p className="text-slate-400 my-5 mb-6">Technologies Used: HTML, CSS, JavaScript,<br/> Jquery, Animate.css, GSAP, Particles.js, Swiper.js etc</p>
                        <Button>
                            <Link href='https://interad.online' >
                                Visit Website
                            </Link>
                        </Button>
                    </div>
                    <div className="order-1 md:order-2 m-auto sm:text-left md:m-0 sm:w-2/4 sm:h-2/4 mt-10">
                        <Image className="object-contain" src='/images/InterAd.svg' alt='InterAd - Developer(Esther)'  width={400} height={400} />
                    </div>
                </div> */}
                <div className={`${category === 'Professional' ? 'block' : 'hidden'} my-20 md:py-10 md:gap-10 lg:m-auto lg:max-w-4xl flex flex-col items-center sm:flex-row md:justify-between lg:justify-between`}>
                    <div className="my-5 sm:w-2/4 order-2 md:order-1">
                        <h2 className="text-3xl font-semibold lg:text-5xl">Password Strength NPM Package</h2>
                        <p className="my-5">This React NPM package assesses password strength through criteria such as 8 8-character minimum, at least 1 uppercase letter, 1 lowercase letter, 1 number, and 1 special character. Additionally, it provides a function to deliver results based on the inputted password.</p>
                        <p className="text-slate-400 my-5 mb-6">Technologies Used: React, Jest,<br/> CSS, Babel etc</p>
                        <Button>
                            <Link href='https://react-strengthbar.vercel.app/' target='_blank' >
                                View Demo
                            </Link>
                        </Button>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <Button>
                            <Link href='https://www.npmjs.com/package/react-password-strengthbar-ui' target='_blank' >
                                View Package
                            </Link>
                        </Button>
                    </div>
                    <div className="order-1 md:order-2 m-auto sm:text-left md:m-0 sm:w-2/4 sm:h-2/4 mt-10">
                        <Image className="object-contain" src='/images/strengthbar.png' alt='Primecourts - Developer(Esther)'  width={400} height={400} />
                    </div>
                </div>
                
                {/* <div className={`${category === 'Professional' ? 'block' : 'hidden'} my-20 md:py-16 lg:m-auto lg:max-w-4xl flex flex-col items-center sm:flex-row-reverse md:justify-between lg:justify-between`}>
                    <div className="my-5 sm:w-2/4 ">
                        <h2 className="text-3xl font-semibold lg:text-5xl">Primecourts Estates</h2>
                        <p className="my-5">Primecourts Estates is a real estate agency website created to help individuals avoid the hassle of house hunting. It features a chatbot which captures user information and answers frequently asked questions.</p>
                        <p className="text-slate-400 my-5 mb-6">Technologies Used: WordPress, Tidio chatbot,<br/> Elementor page builder etc</p>
                        <Button>
                            <Link href='https://primecourtsestates.com.ng' >
                                Visit Website
                            </Link>
                        </Button>
                    </div>
                    <div className="m-auto sm:text-left md:m-0 sm:w-2/4 sm:h-2/4 mt-10">
                        <Image  className="object-contain" src='/images/primecourts.svg' alt='Primecourts - Developer(Esther)'  width={400} height={400} />
                    </div>
                </div>
                <div className={`${category === 'Professional' ? 'block' : 'hidden'} my-20 md:py-16 lg:m-auto lg:max-w-4xl flex flex-col items-center sm:flex-row md:justify-between lg:justify-between`}>
                    <div className="my-5 sm:w-2/4 ">
                        <h2 className="text-3xl font-semibold lg:text-5xl">Itscopeconsulting</h2>
                        <p className="my-5">Itscope consulting is a consulting company that provides professional consulting services to clients in the IT and software industry. They assist organization in bringing new products to market and making better business decisions</p>
                        <p className="text-slate-400 my-5 mb-6">Technologies Used: WordPress, Tidio chatbot,<br/> Elementor page builder etc</p>
                        <Button>
                            <Link href='https://itscopeconsulting.com/' >
                                Visit Website
                            </Link>
                        </Button>
                    </div>
                    <div className="m-auto sm:text-left md:m-0 sm:w-2/4 sm:h-2/4 mt-10">
                        <Image className="object-contain" src='/images/itscopeconsulting.png' alt='Itscopeconsulting'  width={400} height={400} />
                    </div>
                </div> */}
                {/* <h2 className="lg:max-w-4xl lg:m-auto text-sm">PERSONAL WORK</h2> */}
                <div className={`${category === 'Professional' ? 'block' : 'hidden'} my-20 md:py-10 md:gap-10 lg:m-auto lg:max-w-4xl flex flex-col items-center sm:flex-row-reverse md:justify-between lg:justify-between`}>
                    <div className="my-5 sm:w-2/4 order-2 md:order-1">
                        <h2 className="text-3xl font-semibold lg:text-5xl">Ecommerce Store</h2>
                        <p className="my-5">This e-commerce application utilizes the GraphQL server on the backend and Apollo client on the frontend to fuel its functionalities such as adding to cart / removing from cart using InMemoryCache and Reactive Variables. Deployed on Render & Vercel.</p>
                        <p className="text-slate-400 my-5 mb-6">Technologies Used: React, Typescript, graphql, <br/> apollo-client, Nodejs, Tailwind etc</p>
                        <Button>
                            <Link href='https://mystore-graphql-client-6qqw.vercel.app/' target='_blank'>
                                View App
                            </Link>
                        </Button>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <Button>
                            <Link href='https://github.com/Queen-esther01/mystore-graphql-server' target='_blank'>
                                View Server Repo
                            </Link>
                        </Button>
                    </div>
                    <div className="order-1 md:order-2 m-auto sm:text-left md:m-0 sm:w-2/4 sm:h-2/4 mt-10">
                        <Image className="object-contain" src='/images/mystore.png' alt='mystore - Developer(Esther)'  width={400} height={400} />
                    </div>
                </div>
                <div className={`${category === 'Professional' ? 'block' : 'hidden'} my-20 md:py-10 md:gap-10 lg:m-auto lg:max-w-4xl flex flex-col items-center sm:flex-row md:justify-between lg:justify-between`}>
                    <div className="my-5 sm:w-2/4 order-2 md:order-1">
                        <h2 className="text-3xl font-semibold lg:text-5xl">Technical Blog Clone</h2>
                        <p className="my-5">This is a pixel-perfect emulation of the dev.to homepage – a replica that mirrors every detail of the original, a platform where developers and engineers share tech tutorials, articles, and more. Leveraging my skills in design conversion, I meticulously crafted this clone to showcase the initial 25 posts in this identical clone, offering a snapshot of the latest content from the developer community.</p>
                        <p className="text-slate-400 my-5 mb-6">Technologies Used: React & TailwindCSS</p>
                        <Button>
                            <Link href='https://norebase-assessment.vercel.app/' target='_blank'>
                                Visit Clone
                            </Link>
                        </Button>
                    </div>
                    <div className="order-1 md:order-2 m-auto sm:text-left md:m-0 sm:w-2/4 sm:h-2/4 mt-10">
                        <Image className="object-contain" src='/images/norebase.png' alt='Primecourts - Developer(Esther)'  width={400} height={400} />
                    </div>
                </div>
                <div className={`${category === 'Professional' ? 'block' : 'hidden'} my-20 md:py-10 md:gap-10 lg:m-auto lg:max-w-4xl flex flex-col items-center sm:flex-row-reverse md:justify-between lg:justify-between`}>
                    <div className="my-5 sm:w-2/4 order-2 md:order-1">
                        <h2 className="text-3xl font-semibold lg:text-5xl">The movies</h2>
                        <p className="my-5">Discover the world of cinema with ease using this web application. Tailored for movie enthusiasts, it allows seamless searches by genre or name, providing a gateway to a vast collection of films. You can learn more about your favorite movies by accessing details such as an extensive cast list with a user-friendly interface.</p>
                        <p className="text-slate-400 my-5 mb-6">Technologies Used: React, Redux,<br/> MovieDB API, TailwindCSS etc</p>
                        <Button>
                            <Link href='https://themoviesapp.vercel.app/' target='_blank'>
                                Visit App
                            </Link>
                        </Button>
                    </div>
                    <div className="order-1 md:order-2 m-auto sm:text-left md:m-0 sm:w-2/4 sm:h-2/4 mt-10">
                        <Image className="object-contain" src='/images/themovies.png' alt='Primecourts - Developer(Esther)'  width={400} height={400} />
                    </div>
                </div>
                {/* <div className={`${category === 'Personal' ? 'block' : 'hidden'} my-20 md:py-16 lg:m-auto lg:max-w-4xl flex flex-col sm:flex-row md:justify-between lg:justify-between`}>
                    <div className="my-5 sm:w-2/4 ">
                        <h2 className="text-3xl font-semibold lg:text-5xl">Drum Machine</h2>
                        <p className="my-5">The drum machine app emits different drum sounds based on clicked keypads. It includes toggles to either switch drum on and off or switch from drum to piano sounds. The keypads can also be triggered by their respective keys on the keyboard. e.g open app and click letter &apos;w&apos; on keyboard.</p>
                        <p className="text-slate-400 my-5 mb-6">Technologies Used: React, Typescript, <br/> audio api, TailwindCSS etc</p>
                        <Button>
                            <Link href='https://drummachine01.vercel.app/' >
                                View app
                            </Link>
                        </Button>
                    </div>
                    <div className="m-auto sm:text-left md:m-0 sm:w-2/4 sm:h-2/4 mt-10">
                        <Image className="object-contain" src='/images/drummachine.png' alt='Primecourts - Developer(Esther)'  width={400} height={400} />
                    </div>
                </div> */}
                {/* <div className={`${category === 'Personal' ? 'block' : 'hidden'} my-20 md:py-16 lg:m-auto lg:max-w-4xl flex flex-col sm:flex-row-reverse md:justify-between lg:justify-between`}>
                    <div className="my-5 sm:w-2/4 ">
                        <h2 className="text-3xl font-semibold lg:text-5xl">Random Quotes</h2>
                        <p className="my-5">A simple app that generates random quotes from random authors.</p>
                        <p className="text-slate-400 my-5 mb-6">Technologies Used: React, Typescript, Redux,<br/> Quotes API, react-particles, TailwindCSS etc</p>
                        <Button>
                            <Link href='https://randomquotesproject.vercel.app/' >
                                Visit Website
                            </Link>
                        </Button>
                    </div>
                    <div className="m-auto sm:text-left md:m-0 sm:w-2/4 sm:h-2/4 mt-10">
                        <Image className="object-contain" src='/images/randomquotes.png' alt='Primecourts - Developer(Esther)'  width={400} height={400} />
                    </div>
                </div> */}
                {/* <div className={`${category === 'Personal' ? 'block' : 'hidden'} my-20 md:py-16 lg:m-auto lg:max-w-4xl flex flex-col sm:flex-row md:justify-between lg:justify-between`}>
                    <div className="my-5 sm:w-2/4 ">
                        <h2 className="text-3xl font-semibold lg:text-5xl">Markdown Previewer</h2>
                        <p className="my-5">A simple app that parses markdown text in realtime.</p>
                        <p className="text-slate-400 my-5 mb-6">Technologies Used: React, Typescript, markdown-parser,<br/> styled-components etc</p>
                        <Button>
                            <Link href='https://markdownpreviewer01.netlify.app/' >
                                Visit Website
                            </Link>
                        </Button>
                    </div>
                    <div className="m-auto sm:text-left md:m-0 sm:w-2/4 sm:h-2/4 mt-10">
                        <Image className="object-contain" src='/images/markdownpreviewer.png' alt='Markdown previewer'  width={400} height={400} />
                    </div>
                </div> */}
                
                <div className={`${category === 'Professional' ? 'block' : 'hidden'} my-20 md:py-10 md:gap-10 lg:m-auto lg:max-w-4xl flex flex-col items-center sm:flex-row md:justify-between lg:justify-between`}>
                    <div className="my-5 sm:w-2/4 order-2 md:order-1">
                        <h2 className="text-3xl font-semibold lg:text-5xl">Domestireg</h2>
                        <p className="my-5">Domestireg is a background, medical, criminal vetting and fact finding service created to assist in vetting domestic staff, to know exactly who they are and to ensure the safety of their clients.</p>
                        <p className="text-slate-400 my-5 mb-6">Technologies Used: React, react-bootstrap,<br/> Redux (Redux toolkit), Yup, React-hook-form, Swiper, dayjs, Netlify, Flutterwave gateway.</p>
                        <Button>
                            <Link href='https://domestireg.netlify.app' target='_blank'>
                                Visit Website
                            </Link>
                        </Button>
                    </div>
                    <div className="order-1 md:order-2 m-auto sm:text-right md:m-0 sm:w-2/4 sm:h-2/4 mt-10 ">
                        <Image className="object-contain" src='/images/domestireg.svg' alt='Domestireg - Developer(Esther)'  width={400} height={400} />
                    </div>
                </div>
                {/* <div className={`${category === 'Professional' ? 'block' : 'hidden'} my-20 md:py-10 lg:m-auto lg:max-w-4xl flex flex-col items-center sm:flex-row-reverse md:justify-between lg:justify-between`}>
                    <div className="my-5 sm:w-2/4 ">
                        <h2 className="text-3xl font-semibold lg:text-5xl">Risevest Assessment</h2>
                        <p className="my-5">A clone created as an assessment test at risevest for a frontend developer position</p>
                        <p className="text-slate-400 my-5 mb-6">Technologies Used: React & TailwindCSS</p>
                        <Button>
                            <Link href='https://risevesttest.netlify.app/' >
                                Visit Website
                            </Link>
                        </Button>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <Button>
                            <Link href='https://raw.githubusercontent.com/Queen-esther01/fe-intern-test/master/design/web.png' >
                                Visit Image Source
                            </Link>
                        </Button>
                    </div>
                    <div className="m-auto sm:text-left md:m-0 sm:w-2/4 sm:h-2/4 mt-10">
                        <Image className="object-contain" src='/images/risevest.png' alt='Risevest Clone - Ejidike Esther'  width={400} height={400} />
                    </div>
                </div> */}
            </div>
        </div>
    );
}

export default Projects;
