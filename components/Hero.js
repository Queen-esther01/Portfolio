import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

function Hero() {
    return (
        <>
            <div className="purple-gradient rounded-3xl p-6 py-10 md:px-10 lg:px-16 text-white mobile-width max-w-sm sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl m-auto">
                <div className="flex justify-between items-end">
                    <div className="">
                        <h2 className="text-xl md:text-3xl lg:text-5xl leading-8 md:leading-relaxed lg:leading-relaxed md:font-semibold">Hi! I&apos;m Esther - <br/>
                            a frontend developer <br/>
                            based in Lagos, Nigeria
                        </h2>
                        <p className="text-gray-50 text-sm md:text-md lg:text-lg md:leading-6 lg:leading-8 font-extralight mt-5 max-w-xs lg:max-w-md">
                            I have 2 years experience in creating frontend software
                            solutions using JavaScript. I enjoy solving problems at work and
                            creating products of value.
                        </p>
                        <div className="mt-4">
                            <Button>
                                <Link href='mailto:ejidikeesther@gmail.com'>
                                    Get in touch
                                </Link>
                            </Button>
                            <span className="px-8 text-sm">View Work</span>
                        </div>
                    </div>
                    <div className="border-2 rounded-full p-2 hidden sm:block ">
                        <Image className="object-bottom object-cover" src='/images/memoji.svg' alt='Esther Ejidike - Memoji' width={250} height={250} />
                    </div>
                </div>
            </div>
            <div className="p-6 py-10 md:px-10 lg:px-16 text-white mobile-width max-w-sm sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl m-auto">
                <h3 className="text-sm">Socials</h3>
                <div className="my-5 flex">
                    <div className="cursor-pointer bg-gray p-2 pb-1 rounded-lg mr-3">
                        <Link href={'https://www.linkedin.com/in/ejidike-esther-0a017a185/'}>
                            <Image className="object-cover object-center" src='/images/linkedin.png' alt='Esther Ejidike - Github' width={25} height={20} />
                        </Link>
                    </div>
                    <div className="cursor-pointer bg-gray p-2 pb-1 rounded-lg mr-3">
                        <Link href={'https://github.com/Queen-esther01'}>
                            <Image className="object-contain object-top" src='/images/github.png' alt='Esther Ejidike - Github' width={25} height={20} />
                        </Link>
                    </div>
                    <div className="cursor-pointer bg-gray p-2 pb-1 rounded-lg">
                        <Link href={'https://lady_catheryn.hashnode.dev/'}>
                            <Image className="object-contain object-center" src='/images/hashnode.png' alt='Esther Ejidike - Github' width={25} height={20} />
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Hero;