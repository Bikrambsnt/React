// react router also provide some components that are link and navlink

//link works as a a tag which provide href concept also and link can be provided throuth to
//now in react we cannot use a tag because a tag will do refresh the page which we dont want in react


import React from 'react'
import { Link,NavLink } from 'react-router-dom';

export default function Header() {
    return (
        <header className="shadow sticky z-50 top-0">
            <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <Link to="/" className="flex items-center"> 
                        <img
                            src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
                            className="mr-3 h-12"
                            alt="Logo"
                        />
                    </Link>
                    <div className="flex items-center lg:order-2">
                        <Link
                            to="#"
                            className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            Log in
                        </Link>
                        <Link
                            to="#"
                            className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            Get started
                        </Link>
                    </div>
                    <div
                        className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
                        id="mobile-menu-2"
                    >
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <NavLink
                                to='/' //this to will check currently where are you at and helps you to redirect to the page in which you have clicked on header menu



                                //now this Nav link provides additional properties like in this we can get isActive and isPending properties which can be used to detect the user current location on the page like if he is in a Home page or about etc 
                                //and with that we can also highlight the nav links like itd color while click etc.
                                    
                                className={({isActive}) =>
                                    //here the classname  is in callback becaue we use its in a place where classname will be changed, nav link provides some additional features , 

                                        ` ${isActive ? 'text-orange-700' : 'text-gray-700'} block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>

                            <li>
                                <NavLink
                                to='/about'
                                //now this Nav link provides additional properties like in this we can get isActive and isPending properties which can be used to detect the user current location on the page like if he is in a Home page or about etc 
                                //and with that we can also highlight the nav links like itd color while click etc.
                                    
                                className={({isActive})=>
                                    

                                        `${isActive?'text-orange-700' :'text-gray-700'} block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    About
                                </NavLink>

                            </li>

                            <li>
                                <NavLink to='/contact'
                                className={({isActive})=>
                                    `${isActive?'text-orange-700' : 'text-gray-700'} block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                }
                                
                                >

                                    Contact

                                </NavLink>
                            </li>

                            <li>
                                <NavLink to='/github' className={({isActive})=> `${isActive? 'text-orange-700': 'text-gray-700'} block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0 `}> 
                                    GitHub

                                </NavLink>
                            </li>
                            
                            
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}