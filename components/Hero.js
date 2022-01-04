import Image from "next/image";
import Button from "./Button";

function Hero() {
    return (
        <div className="purple-gradient rounded-3xl p-6 py-10 md:px-10 lg:px-16 text-white">
            <div className="flex justify-between items-end">
                <div className="">
                    <h2 className="text-xl md:text-3xl lg:text-5xl leading-8 md:leading-relaxed lg:leading-relaxed md:font-semibold">Hi! I&apos;m Esther - <br/>
                        a frontend developer <br/>
                        based in Lagos, Nigeria
                    </h2>
                    <p className="text-gray-50 text-sm md:text-md lg:text-lg md:leading-6 lg:leading-8 font-extralight mt-5 max-w-xs lg:max-w-md">
                        I have over 2 years experience in creating software
                        solutions using JavaScript. I enjoy solving problems and
                        making things work.
                    </p>
                    <div className="mt-4">
                        <Button>Get in touch</Button>
                        <span className="px-5 text-sm">View Work</span>
                    </div>
                </div>
                <div className="border-2 rounded-full p-2 hidden sm:block ">
                    <Image className="object-bottom object-cover " src='/images/memoji.svg' alt='Esther Ejidike - Memoji' width={250} height={250} />
                </div>
            </div>
        </div>
    );
}

export default Hero;