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
            <div className="flex items-center gap-5 lg:max-w-4xl lg:m-auto py-10">
                {
                    categories.map((category) => {
                        return (
                            <p className={`${activeLink === category && 'bg-blue py-4 px-8 rounded-md'} cursor-pointer`} key={category} onClick={()=>handleActiveLink(category)}> {category} </p>
                        )
                    })
                }
            </div>
        </>
    );
}

export default Filter;