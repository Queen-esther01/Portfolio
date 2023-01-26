import Link from "next/link";
import react from "react";
import Button from "./Button";
import Layout from "./Layout";


function Filter({ saveCategory }) {
    const [activeLink, setActiveLink] = react.useState('Professional');

    const handleActiveLink = (category) =>{
        setActiveLink(category)
        saveCategory(category)
    }

    const categories = ['Professional', 'Personal', 'Assessments'];

    return (
        <>
            <div className="bg-dark flex justify-between items-center gap-5 lg:max-w-4xl lg:m-auto py-10 sticky top-0 z-20">
                <h2 className="text-xl">A few of my projects</h2>
                <Link href='/skills' prefetch={false} className="text-[#3392f2] font-semibold">View my skills</Link>
                {/* {
                    categories.map((category) => {
                        return (
                            <p className={`${activeLink === category && 'bg-blue py-4 px-8 rounded-md'} cursor-pointer`} key={category} onClick={()=>handleActiveLink(category)}> {category} </p>
                        )
                    })
                } */}
            </div>
        </>
    );
}

export default Filter;