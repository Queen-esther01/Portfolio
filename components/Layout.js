import Image from "next/image";
import Button from "./Button";
import Link from 'next/link'

function Layout({ children }) {
    return (
        <div className="">
            <div className="">
                <header className="flex py-14 mobile-width max-w-sm sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl m-auto">
                    <Image className="rounded-lg object-cover object-top" src='/images/esther.jpg' alt='Esther Ejidike' width={41} height={41} />
                    <div className="pl-5">
                        <h2 className='text-white font-semibold'>Esther Ejidike</h2>
                        <p className="small-text text-gray-50 mt-1">FRONTEND DEVELOPER</p>
                    </div>
                </header>
                <main>
                    {children}
                </main>
                <footer className='mobile-width bg-gray text-white rounded-lg max-w-sm sm:max-w-xl md:max-w-2xl lg:max-w-4xl m-auto px-5 lg:px-20 py-8 lg:py-16 my-14'>
                    <div className="flex justify-between">
                        <div className="flex justify-between items-center">
                            <p className="mr-2 lg:text-4xl">Get in touch</p>
                            <Image className=" object-contain object-right" src='/images/arrow.png' alt='arrow' width={40} height={10} />
                        </div>
                        <Button>
                            <Link href='mailto:ejidikeesther@gmail.com'>
                                send a mail
                            </Link>
                        </Button>
                    </div>
                </footer>
            </div>
        </div>
    );
}

export default Layout;