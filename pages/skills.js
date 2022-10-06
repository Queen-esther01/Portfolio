import Head from "next/head";
import Image from "next/image";
import Layout from "../components/Layout";

const Skills = () => {
    return (
        <Layout>
            <Head>
                <title>Esther Ejidike - Frontend Developer</title>
                <meta name="description" content="A list of all my skills and current interests" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="scroll-smooth rounded-3xl text-white mobile-width max-w-sm sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl m-auto">
                <h2 className="mobile-width max-w-sm sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl pb-5 text-lg">SOME OF MY SKILLS</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 justify-end">
                    <div className="skill-background rounded-lg py-10 sm:col-span-2 drop-shadow-xl text-center">
                        <Image className="object-cover object-center"  src='/images/html-5.png' alt='HTML5' width={50} height={50} />
                        <h2 className="text-white font-semibold pt-3">HTML</h2>
                    </div>
                    <div className="skill-background rounded-lg py-10 sm:col-span-2 text-center">
                        <Image className="object-cover object-center" src='/images/css-3.png' alt='CSS3' width={50} height={50} />
                        <h2 className="text-white font-semibold pt-3">CSS / SCSS / SASS</h2>
                    </div>
                    <div className="skill-background rounded-lg py-10 text-center">
                        <Image className="object-cover object-center"  src='/images/js.png' alt='javascript' width={50} height={50} />
                        <h2 className="text-white font-semibold pt-3">JavaScript</h2>
                    </div>
                    <div className="skill-background rounded-lg py-10 text-center">
                        <Image className="object-cover object-center" src='/images/typescript.png' alt='typescript' width={50} height={50} />
                        <h2 className="text-white font-semibold pt-3">TypeScript</h2>
                    </div>
                    <div className="skill-background rounded-lg py-10 text-center">
                        <Image className="object-cover object-center" priority src='/images/react.png' alt='reactjs' width={50} height={50} />
                        <h2 className="text-white font-semibold pt-3">React</h2>
                    </div>
                    <div className="skill-background rounded-lg py-10 text-center">
                        <Image className="object-cover object-center"  src='/images/redux.png' alt='redux' width={50} height={50} />
                        <h2 className="text-white font-semibold pt-3">Redux (Toolkit)</h2>
                    </div>
                    <div className="skill-background rounded-lg py-10 sm:col-span-2 text-center">
                        <Image className="object-cover object-center" src='/images/jest.png' alt='jest' width={50} height={50} />
                        <h2 className="text-white font-semibold pt-3">Jest / React-testing-library</h2>
                    </div>
                    <div className="skill-background rounded-lg py-10 sm:col-span-2 text-center">
                        <Image className="object-cover object-center" src='/images/nextjs.png' alt='nextjs' width={100} height={50} />
                        <h2 className="text-white font-semibold pt-3">Nextjs</h2>
                    </div>
                    <div className="skill-background rounded-lg py-10 text-center">
                        <Image className="object-cover object-center" src='/images/graphql.png' alt='nextjs' width={50} height={50} />
                        <h2 className="text-white font-semibold pt-3">GraphQL</h2>
                    </div>
                    <div className="skill-background rounded-lg py-10 text-center">
                        <Image className="object-cover object-center" src='/images/nodejs.png' alt='nextjs' width={50} height={50} />
                        <h2 className="text-white font-semibold pt-3">Nodejs</h2>
                    </div>
                    <div className="skill-background rounded-lg py-10 text-center">
                    <Image className="object-cover object-center"  src='/images/express.png' alt='nextjs' width={50} height={50} />
                        <h2 className="text-white font-semibold pt-3">Express</h2>
                    </div>
                    <div className="skill-background rounded-lg py-10 text-center">
                    <Image className="object-cover object-center" src='/images/mongodb.png' alt='nextjs' width={50} height={50} />
                        <h2 className="text-white font-semibold pt-3">MongoDB</h2>
                    </div>
                    <div className="skill-background rounded-lg py-10 sm:col-span-2 text-center">
                        <Image className="object-cover object-center"  src='/images/framermotion.png' alt='nextjs' width={100} height={50} />
                        <h2 className="text-white font-semibold pt-3">Framer Motion</h2>
                    </div>
                    <div className="skill-background rounded-lg py-10 sm:col-span-2 text-center">
                        <Image className="object-cover object-center"  src='/images/tailwind.png' alt='nextjs' width={50} height={50} />
                        <h2 className="text-white font-semibold pt-3">Tailwind</h2>
                    </div>
                    <div className="skill-background rounded-lg py-10 text-center">
                        <Image className="object-cover object-center" src='/images/figma.png' alt='nextjs' width={50} height={50} />
                        <h2 className="text-white font-semibold pt-3">Figma</h2>
                    </div>
                    <div className="skill-background rounded-lg py-10 text-center">
                    <Image className="object-cover object-center"  src='/images/bar-chart.png' alt='nextjs' width={50} height={50} />
                        <h2 className="text-white font-semibold pt-3">Data Visualisation<br/> (recharts, apexcharts etc)</h2>
                    </div>
                    <div className="skill-background rounded-lg py-10 text-center">
                    <Image className="object-cover object-center"  src='/images/gsap.svg' alt='nextjs' width={50} height={50} />
                        <h2 className="text-white font-semibold pt-3">GSAP</h2>
                    </div>
                    <div className="skill-background rounded-lg py-10 text-center">
                        <Image className="object-cover object-center" src='/images/wordpress.png' alt='nextjs' width={50} height={50} />
                        <h2 className="text-white font-semibold pt-3">WordPress</h2>
                    </div>
                    <div className="skill-background rounded-lg py-10 text-center sm:col-span-2">
                        <Image className="object-cover object-center" src='/images/styledcomponents.png' alt='nextjs' width={100} height={50} />
                        <h2 className="text-white font-semibold pt-3">Styled-Components</h2>
                    </div>
                    <div className="skill-background rounded-lg py-10 text-center sm:col-span-2">
                        <Image className="object-cover object-center" src='/images/thunderbolt.png' alt='nextjs' width={50} height={50} />
                        <h2 className="text-white font-semibold pt-3">Chakra-UI</h2>
                    </div>
                    <div className="skill-background rounded-lg py-10 text-center">
                        <Image className="object-cover object-center" src='/images/github-1.png' alt='nextjs' width={50} height={50} />
                        <h2 className="text-white font-semibold pt-3">Git & Github</h2>
                    </div>
                </div>
            </div>
            <div className="rounded-3xl my-16 text-white mobile-width max-w-sm sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl m-auto">
                <h2 className="mobile-width max-w-sm sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl pb-5 text-lg">CURRENTLY LEARNING</h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-5 justify-end">
                    <div className="skill-background rounded-lg py-10 drop-shadow-xl">
                        <h2 className="text-white font-semibold text-center">React-Native</h2>
                    </div>
                    {/* <div className="skill-background rounded-lg py-10">
                        <h2 className="text-white font-semibold text-center">Micro-Frontend</h2>
                    </div>
                    <div className="skill-background rounded-lg py-10">
                        <h2 className="text-white font-semibold text-center">Data Structures & Algorithms</h2>
                    </div>
                    <div className="skill-background rounded-lg py-10 text-center">
                        <h2 className="text-white font-semibold pt-3">VueJS</h2>
                    </div> */}
                </div>
            </div>
            <div className="rounded-3xl my-16 text-white mobile-width max-w-sm sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl m-auto">
                <h2 className="mobile-width max-w-sm sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl pb-5 text-lg">DEPLOYMENT CHANNELS</h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 gap-5 justify-end">
                    <div className="skill-background rounded-lg py-10 drop-shadow-xl text-center">
                    <Image className="object-cover object-center" priority src='/images/aws.png' alt='nextjs' width={100} height={50} />
                        <h2 className="text-white font-semibold pt-3">AWS</h2>
                    </div>
                    <div className="skill-background rounded-lg py-10 text-center">
                    <Image className="object-cover object-center" priority src='/images/netlify.png' alt='nextjs' width={50} height={50} />
                        <h2 className="text-white font-semibold pt-3">Netlify</h2>
                    </div>
                    <div className="skill-background rounded-lg py-10 text-center">
                    <Image className="object-cover object-center" priority src='/images/vercel.jpg' alt='nextjs' width={100} height={50} />
                        <h2 className="text-white font-semibold pt-3">Vercel</h2>
                    </div>
                </div>
            </div>
            <div className="rounded-3xl my-16 text-white mobile-width max-w-sm sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl m-auto">
                <h2 className="mobile-width max-w-sm sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl pb-5 text-lg">Collaboration</h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-5 justify-end">
                    <div className="skill-background rounded-lg py-10 drop-shadow-xl text-center">
                    <Image className="object-cover object-center" priority src='/images/asana.png' alt='nextjs' width={50} height={50} />
                        <h2 className="text-white font-semibold pt-3">Asana</h2>
                    </div>
                    <div className="skill-background rounded-lg py-10 text-center">
                    <Image className="object-cover object-center" priority src='/images/jira.png' alt='nextjs' width={50} height={50} />
                        <h2 className="text-white font-semibold pt-3">Jira</h2>
                    </div>
                    <div className="skill-background rounded-lg py-10 text-center">
                        <Image className="object-cover object-center" priority src='/images/slack.png' alt='Esther Ejidike - Github' width={50} height={50} />
                        <h2 className="text-white font-semibold pt-3">Slack</h2>
                    </div>
                    <div className="skill-background rounded-lg py-10 text-center">
                    <Image className="object-cover object-center" priority src='/images/notion.png' alt='nextjs' width={50} height={50} />
                        <h2 className="text-white font-semibold pt-3">Notion</h2>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default Skills