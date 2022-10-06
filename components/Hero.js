import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

function Hero() {
    return (
        <>
            <div className="purple-gradient rounded-3xl p-6 py-10 md:px-10 lg:px-16 text-white mobile-width max-w-sm sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl m-auto">
                <div className="flex justify-between items-end">
                    <div className="">
                        <div className="text-xl md: lg:text-4xl leading-8 md:leading-relaxed lg:leading-relaxed md:font-semibold">
                            Hi! I&apos;m Esther,
                            a frontend engineer<br/>
                            - living in Lagos, Nigeria
                        </div>
                        <p className="text-gray-50 text-sm md:text-md lg:text-lg md:leading-6 lg:leading-8 font-extralight mt-5 max-w-xs lg:max-w-md">
                        With over 2 years of experience, I am adept at
capturing the intersection between development and design through rich
interactive and responsive applications. I solve business problems through technology and bring my unique perspective to every
team I become a part of😊.
                        </p>
                        <div className="mt-10">
                            <button className='button'>
                                <Link href='mailto:ejidikeesther@gmail.com'>
                                    Get in touch
                                </Link>
                            </button>
                            <span className="px-8 sm:px-4 md:px-8 text-sm">
                                <a href='/Esther-Ejidike-Resume.pdf' download>Download CV</a>
                            </span>
                        </div>
                    </div>
                    <div className="rounded-full p-2 hidden sm:block lg:hidden">
                        <Image className="object-bottom object-cover" src='/images/rocket.png' alt='Esther Ejidike - Memoji' width={250} height={300} />
                    </div>
                    <div className="rounded-full p-2 hidden lg:block">
                        <Image className="object-bottom object-cover" src='/images/rocket.png' alt='Esther Ejidike - Memoji' width={400} height={400} />
                    </div>
                </div>
            </div>
            <div className="p-6 py-10 md:px-10 lg:px-16 text-white mobile-width max-w-sm sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl m-auto">
                <h3 className="text-sm">Socials</h3>
                <div className="my-5 flex">
                    <div className="cursor-pointer bg-gray p-2 pb-1 rounded-lg mr-3">
                        <Link passHref href={'https://www.linkedin.com/in/ejidike-esther-0a017a185/'}>
                            <Image className="object-cover object-center" src='/images/linkedin.png' alt='Esther Ejidike - Github' width={25} height={20} />
                        </Link>
                    </div>
                    <div className="cursor-pointer bg-gray p-2 pb-1 rounded-lg mr-3">
                        <Link passHref href={'https://github.com/Queen-esther01'}>
                            <Image className="object-contain object-top" src='/images/github.png' alt='Esther Ejidike - Github' width={25} height={20} />
                        </Link>
                    </div>
                    <div className="cursor-pointer bg-gray p-2 pb-1 rounded-lg">
                        <Link passHref href={'https://lady_catheryn.hashnode.dev/'}>
                            <Image className="object-contain object-center" src='/images/hashnode.png' alt='Esther Ejidike - Github' width={25} height={20} />
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Hero;