import React, { useState } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import Card from "../Card/Card";
import Dropdown from "../Dropdown/Dropdown";
import Logo from "../Logo/Logo";
import Button from "../Button/Button"
import Input from "../Input/Input"

export default function Main() {
    return (
        <div className="h-screen">
            <div className="max-w-lm h-20 flex mx-auto bg-white shadow-md items-center justify-center">
                <div className="w-9/12">
                    <div className=" flex justify-between">
                        <Logo />
                        <div className="flex justify-between items-center">
                            <Router>
                                <Link to="#" className="mr-8 text-blue-900 hover:text-purple-800 hover:font-extrabold">About</Link> 
                                <Link to="#" className="mr-8 text-blue-900 hover:text-purple-800 hover:font-extrabold">LogIn</Link>
                                <Link to="#" className="bg-white text-blue-800 border border-blue-800 hover:bg-purple-600 hover:text-white hover:border-white font-bold py-2 px-4 rounded-full">Sign In</Link> 
                            </Router>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-9/12 mx-auto flex justify-between items-center justify-center">
                <div className="h-screen flex flex-col items-left justify-center">
                    <h1 className="text-6xl text-blue-900">Plan Your Day <br /> Ahead</h1>
                    <h2 className="mt-8 text-blue-900">We will help you schedule meetings <br /> on each day.</h2>
                    <div className="flex mt-4">
                        <Input type="email" autocomplete="on" className="w-72 rounded-l-full p-4 border mr-0 text-blue-900 border-blue-900 bg-white outline-none" placeholder="Enter Your Email" />
                        <Button name="Sign In" style="bg-blue-800 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-r-full" />
                    </div>
                </div>

                <div className="flex items-center justify-center">
                    <div className="rounded-full relative border border-blue-900 w-144 h-144">
                        
                    </div>
                    <div className="rounded-full absolute border border-blue-900 w-108 h-108">
                        <div className="rounded-full absolute border border-blue-900 w-14 h-14 -inset-4"></div>
                        <div className="rounded-full absolute border border-blue-900 w-14 h-14 top-5 right-12"></div>
                        <div className="rounded-full absolute border border-blue-900 w-14 h-14 inset-x-10 bottom-7"></div>
                    </div>
                    <div className="rounded-full absolute border border-blue-900 w-72 h-72">
                        <div className="rounded-full absolute border border-blue-900 w-14 h-14 bottom-5 right-2"></div>
                    </div>
                    <div className="rounded-full absolute border border-blue-900 w-40 h-40"></div>
                    <div className="rounded-full absolute border border-blue-900 w-28 h-28"></div>
                    
                </div>
            </div>

            
        </div>
    )
}