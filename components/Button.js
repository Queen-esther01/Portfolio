
function Button({ children }) {
    return (
        <>
            <button className='rounded-md py-4 px-8 bg-[#0071E3]'>
                {children}
            </button>
        </>
    );
}

export default Button;