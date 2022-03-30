import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

function Projects() {
    return (
        <div className="bg-gray text-white max-w-none w-full m-auto py-10">
            <div className="mobile-width max-w-sm sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl m-auto">
                <h2 className="lg:max-w-4xl lg:m-auto text-sm">SOME PAST PROJECTS</h2>
                <div className="my-10 md:py-10 lg:m-auto lg:max-w-4xl flex flex-col items-center sm:flex-row md:justify-between lg:justify-between">
                    <div className="my-5 sm:w-2/4 ">
                        <h2 className="text-3xl font-semibold lg:text-5xl">Levare</h2>
                        <p className="my-5">Levare is a new upcoming financial technology company that provides financial solutions to individuals. I developed the website and set up domain, Dns configurations and SSl.</p>
                        <p className="text-slate-400 my-5 mb-6">Technologies Used: React, Nextjs,<br/> Animate.css, Sass, Netlify.</p>
                        <Button>
                            <Link href='https://levare.com.ng' >
                                Visit Website
                            </Link>
                        </Button>
                    </div>
                    <div className="m-auto sm:text-right md:m-0 sm:w-2/4 sm:h-2/4 mt-10 ">
                        <Image priority className="object-contain" src='/images/levare.svg' alt='Levare - Developer(Esther)'  width={400} height={400} />
                    </div>
                </div>
                <div className="my-20 md:py-16 lg:m-auto lg:max-w-4xl flex flex-col items-center sm:flex-row-reverse md:justify-between lg:justify-between">
                    <div className="my-5 sm:w-2/4 ">
                        <h2 className="text-3xl font-semibold lg:text-5xl">InterAd</h2>
                        <p className="my-5">InterAd is an online engagement and marketing portal which businesses can use to create incentivised digital promotions with the aim of attracting more customers beyond the usual circle and also gather valuable information for business decisions.</p>
                        <p className="text-slate-400 my-5 mb-6">Technologies Used: HTML, CSS, JavaScript,<br/> Jquery, Animate.css, GSAP, Particles.js, Swiper.js etc</p>
                        <Button>
                            <Link href='https://interad.online' >
                                Visit Website
                            </Link>
                        </Button>
                    </div>
                    <div className="m-auto sm:text-left md:m-0 sm:w-2/4 sm:h-2/4 mt-10">
                        <Image priority className="object-contain" src='/images/InterAd.svg' alt='InterAd - Developer(Esther)'  width={400} height={400} />
                    </div>
                </div>
                <div className="my-20 md:py-10 lg:m-auto lg:max-w-4xl flex flex-col items-center sm:flex-row md:justify-between lg:justify-between">
                    <div className="my-5 sm:w-2/4 ">
                        <h2 className="text-3xl font-semibold lg:text-5xl">Domestireg</h2>
                        <p className="my-5">Domestireg is a background, medical, criminal vetting and fact finding service created to assist in vetting domestic staff, to know exactly who they are and to ensure the safety of their clients.</p>
                        <p className="text-slate-400 my-5 mb-6">Technologies Used: React, react-bootstrap,<br/> Redux (Redux toolkit), Yup, React-hook-form, Swiper, dayjs, Netlify, Flutterwave gateway.</p>
                        <Button>
                            <Link href='https://domestireg.netlify.app' >
                                Visit Website
                            </Link>
                        </Button>
                    </div>
                    <div className="m-auto sm:text-right md:m-0 sm:w-2/4 sm:h-2/4 mt-10 ">
                        <Image priority className="object-contain" src='/images/domestireg.svg' alt='Domestireg - Developer(Esther)'  width={400} height={400} />
                    </div>
                </div>
                <div className="my-20 md:py-16 lg:m-auto lg:max-w-4xl flex flex-col items-center sm:flex-row-reverse md:justify-between lg:justify-between">
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
                        <Image priority className="object-contain" src='/images/primecourts.svg' alt='Primecourts - Developer(Esther)'  width={400} height={400} />
                    </div>
                </div>
                <h2 className="lg:max-w-4xl lg:m-auto text-sm">PERSONAL WORK</h2>
                <div className="md:py-10 lg:m-auto lg:max-w-4xl flex flex-col items-center sm:flex-row md:justify-between lg:justify-between">
                    <div className="my-5 sm:w-2/4 ">
                        <h2 className="text-3xl font-semibold lg:text-5xl">The movies</h2>
                        <p className="my-5">The movies is a movie app that provides detailed information on movies (cast and plot). It also allows users search all movies by genre and search option.</p>
                        <p className="text-slate-400 my-5 mb-6">Technologies Used: React, Redux,<br/> MovieDB API, TailwindCSS etc</p>
                        <Button>
                            <Link href='https://themoviesapp.vercel.app/' >
                                Visit Website
                            </Link>
                        </Button>
                    </div>
                    <div className="m-auto sm:text-left md:m-0 sm:w-2/4 sm:h-2/4 mt-10">
                        <Image priority className="object-contain" src='/images/themovies.png' alt='Primecourts - Developer(Esther)'  width={400} height={400} />
                    </div>
                </div>
                <div className="my-20 md:py-16 lg:m-auto lg:max-w-4xl flex flex-col sm:flex-row-reverse md:justify-between lg:justify-between">
                    <div className="my-5 sm:w-2/4 ">
                        <h2 className="text-3xl font-semibold lg:text-5xl">Random Quotes</h2>
                        <p className="my-5">A very simple app created under Freecodecamp.</p>
                        <p className="text-slate-400 my-5 mb-6">Technologies Used: React, Typescript, Redux,<br/> Quotes API, react-particles, TailwindCSS etc</p>
                        <Button>
                            <Link href='https://randomquotesproject.vercel.app/' >
                                Visit Website
                            </Link>
                        </Button>
                    </div>
                    <div className="m-auto sm:text-left md:m-0 sm:w-2/4 sm:h-2/4 mt-10">
                        <Image priority className="object-contain" src='/images/randomquotes.png' alt='Primecourts - Developer(Esther)'  width={400} height={400} />
                    </div>
                </div>
                <div className="md:py-10 lg:m-auto lg:max-w-4xl flex flex-col items-center sm:flex-row md:justify-between lg:justify-between">
                    <div className="my-5 sm:w-2/4 ">
                        <h2 className="text-3xl font-semibold lg:text-5xl">Dev.to Clone</h2>
                        <p className="my-5">This is a clone of the dev.to homepage (a website where developers and engineers publish tech tutorials, articles and other information) showing the first 25 posts.</p>
                        <p className="text-slate-400 my-5 mb-6">Technologies Used: React & TailwindCSS</p>
                        <Button>
                            <Link href='https://norebase-assessment.vercel.app/' >
                                Visit Website
                            </Link>
                        </Button>
                    </div>
                    <div className="m-auto sm:text-left md:m-0 sm:w-2/4 sm:h-2/4 mt-10">
                        <Image priority className="object-contain" src='/images/norebase.png' alt='Primecourts - Developer(Esther)'  width={400} height={400} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projects;
