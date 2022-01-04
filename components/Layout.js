import Image from "next/image";
import Button from "./Button";
import Link from 'next/link'

function Layout({ children }) {
    return (
        <div className="w-full">
            <div className="max-w-xs sm:max-w-xl md:max-w-3xl lg:max-w-6xl m-auto">
                <header className="flex py-14">
                    <Image className="rounded-lg object-cover" src='/images/esther.jpg' alt='Esther Ejidike' width={41} height={41} />
                    <div className="pl-5">
                        <h2 className='text-white font-semibold'>Esther Ejidike</h2>
                        <p className="small-text text-gray-50 mt-1">FRONTEND DEVELOPER</p>
                    </div>
                </header>
                <main>
                    {children}
                </main>
                <footer className='footer text-white rounded-lg max-w-xs sm:max-w-xl md:max-w-3xl lg:max-w-6xl m-auto px-5 py-8 absolute bottom-0 left-0 right-0 my-5'>
                    <div className="flex justify-between">
                        <div className="flex justify-between items-center">
                            <p className="mr-2">Get in touch</p>
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