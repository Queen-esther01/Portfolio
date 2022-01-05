import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

function Projects() {
    return (
        <div className="bg-gray text-white max-w-none w-full m-auto py-10">
            <div className="mobile-width max-w-sm sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl m-auto">
                <h2 className="lg:max-w-4xl lg:m-auto">SOME PAST PROJECTS</h2>
                <div className="my-10 md:py-10 lg:m-auto lg:max-w-4xl flex flex-col items-center md:flex-row md:justify-between lg:justify-between">
                    <div className="my-5 md:w-2/4">
                        <h2 className="text-3xl font-semibold lg:text-5xl">Levare</h2>
                        <p className="my-5">Levare is a new upcoming financial technology company that provides financial solutions to individuals. I developed the website and set up domain, Dns configurations and SSl.</p>
                        <p className="text-slate-400 my-5 mb-6">Technology Used: React, Nextjs,<br/> Animate.css, Sass, Netlify.</p>
                        <Button>
                            <Link href='https://levare.com.ng' >
                                Visit Website
                            </Link>
                        </Button>
                    </div>
                    <div className="m-auto md:text-right md:m-0 md:w-2/5 md:h-2/5 mt-10">
                        <Image className="object-contain" src='/images/levare.svg' alt='Levare'  width={350} height={350} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projects;