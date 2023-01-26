import { useState } from "react";
import Button from "./Button";
import { useForm, ValidationError } from '@formspree/react';

const MessageModal = ({ open, onClose}) => {
    const [state, handleSubmit] = useForm("xoqrljlr");
    console.log(state)
    const [input, setInput] = useState({
        name: "",
        email: '',
        message: ''
    })

    const saveInputData = (e) =>{
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    //console.log(input)

    const disableButton = input.name === '' || input.email === '' || input.message === '' ? true : false
    //console.log(disableButton)

    if(!open) return null;
    return (
        <>
            <div className="h-screen ease-in flex items-center justify-center w-full fixed z-50 transparent ">
                {/* <div className="fixed inset-0 z-50 overflow-hidden"></div> */}
                
                <form onSubmit={handleSubmit} className='rounded-lg p-10 w-96 modal-form relative' name="contact" method="POST" data-netlify="true">
                    <span onClick={onClose} className="text-red-900 absolute top-3 right-5 font-bold cursor-pointer">x</span>
                    <p className={`text-center mb-5 ${state.succeeded && 'text-green-600'}`}>{ state.succeeded ? 'Your message has been well received ❤' : 'Please leave me a message if you\'d like to work with me ❤'}</p>
                    <input onChange={saveInputData} name='name' className="w-full mb-5 py-3 px-4 rounded-lg bg-gray-100" placeholder="Your name"/>
                    <ValidationError 
                        prefix="name" 
                        field="name"
                        errors={state.errors}
                    />

                    <input onChange={saveInputData} name="email" className="w-full mb-5 py-3 px-4 rounded-lg bg-gray-100" placeholder="Your email"/>
                    <ValidationError 
                        prefix="Email" 
                        field="email"
                        errors={state.errors}
                    />

                    <textarea onChange={saveInputData} name='message' className="w-full mb-5 p-4 rounded-lg bg-gray-100" placeholder="Your message"></textarea>
                    <ValidationError 
                        color='red'
                        prefix="Message" 
                        field="message"
                        errors={state.errors}
                    />

                    <button type="submit" className="w-full bg-blue-700 text-white py-2 rounded-lg">{state.submitting ? 'Submitting' : 'Submit'}</button>
                </form>
            </div>
        </>
    );
}

export default MessageModal;