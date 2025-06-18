import React, { useState } from 'react'
import { imgsSrc } from "../objects/FormImages"
import FormImputs from "../components/FormInputs"
import DismissBtn from "../components/DismissBtn"

const FormCard = () => {
    
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [selectedEmail, setSelectedEmail] = useState("");

    const handleIsSubmitted = () => {
        setIsSubmitted(true)
        console.log("O YEE")
    };

    const handleSelectedEmail = (mail) => {
        setSelectedEmail(mail)
    };

    const handleDismissMessage = () => {
        setIsSubmitted(false)
        setSelectedEmail("")
    };

    return (
        <>
            {!isSubmitted &&
                <div className="flex flex-col w-100 bg-white">

                    <div className="flex overflow-hidden">
                        <img className="w-100 h-64 object-cover rounded-b-xl" src={imgsSrc.signupMobile} alt="Product Image" />
                    </div>

                    <div className="flex flex-col gap-4 px-4 py-8">
                        <div className="flex">
                            <span className="font-roboto-bold text-custom-blue-800 font-black text-3xl">Stay Updated!</span>
                        </div>
                        <div className="flex">
                            <span className="font-roboto-bold text-custom-blue-800 text-md">Join 60,000+ product managers receiving monthly updates on:</span>
                        </div>
                        <ul className="flex flex-col gap-4" >
                            <li className="flex gap-4 items-center">
                                <img className="flex w-6 h-10" src={imgsSrc.iconSuccess} alt="Product Image" />
                                <span className="font-roboto-bold text-custom-blue-800 text-md">Product discovery and building what matters</span>
                            </li>
                            <li className="flex gap-4 items-center">
                                <img className="flex w-6 h-10" src={imgsSrc.iconSuccess} alt="Product Image" />
                                <span className="font-roboto-bold text-custom-blue-800 text-md">Measuring to ensure updates are a success</span>
                            </li>
                            <li className="flex gap-4 items-center">
                                <img className="flex w-6 h-10" src={imgsSrc.iconSuccess} alt="Product Image" />
                                <span className="font-roboto-bold text-custom-blue-800 text-md">And much more!</span>
                            </li>
                        </ul>
                        <div className="flex w-full">
                            <FormImputs setSelectedEmail={handleSelectedEmail} setSubmitted={handleIsSubmitted}/>
                        </div>

                    </div>

                </div>
            }
            {isSubmitted &&
                <div className="flex flex-col w-100 bg-white justify-between items-center">

                    <div className="flex flex-col gap-4 px-4 py-8">
                        <div className="flex">
                            <img className="flex w-20" src={imgsSrc.iconSuccess} alt="Product Image" />
                        </div>
                        <div className="flex">
                            <span className="font-roboto-bold text-custom-blue-800 font-black text-3xl">Thanks for subscribing!</span>
                        </div>
                        <div className="flex">
                            <span className="font-roboto-bold text-custom-blue-800 text-md">
                                A confirmation email has been sent to  <span className="font-bold"> {selectedEmail}</span>. 
                                Please open it and click the button inside to confirm your subscription.
                            </span>
                        </div>
                    </div>

                    <div className="flex w-full px-4 py-8">
                        <DismissBtn onClick={handleDismissMessage}>
                            Dismiss
                        </DismissBtn>
                    </div>
                </div>
            }
        </>

    )
}

export default FormCard