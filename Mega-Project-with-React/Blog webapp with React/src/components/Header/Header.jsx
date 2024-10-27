
import React from "react";
import {Logo,Container,Logout} from '../index'
import { Link, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Header (){
        const authStatus = useSelector((state) => state.auth.status)

        const navigate = useNavigate()

        const navItems = [
            {
                name: 'Home',
                slug: '/', //its the url location
                active:authStatus,
            },
            {
                name: 'Login',
                slug:"/Login",
                active:!authStatus,
            },
            {
                name:'Signup',
                slug: '/Signup',
                active:!authStatus,
            },
            {
                name: 'All Posts',
                slug: '/all-posts',
                active:authStatus,
            },
            {
                name: 'Add Posts',
                slug:'/add-posts',
                active:authStatus,
            }
        ]
    return (
        <header className="py-3 shadow bg-grY-500">
            <Container>
                <nav className="flex">
                    <div className="mr-4">
                        <Link to= '/' >
                        <Logo width="70px" />
                        </Link>
                    </div>
                    <ul className="flex ml-auto">
                         {navItems.map((items)=> items.active ? (
                            <li key={items.name}>
                                {/* name came from the above navItems name */}
                            <button
                            onClick={ ()=> navigate(items.slug)}
                            //navigate works same as a link it ask where to go after I click the button
                            className="inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full"
                            >{items.name}</button>

                            </li>
                         ) : null )}

                            {/*I only want my logout button if the user is loggin so for that I can do...  */}

                            {authStatus && (
                                //if authStatus is true then only it will displayed its a syntax.. like I want to say if You are authenticated then only take logout
                                <li>
                                    <Logout />
                                </li>
                            )}
                    </ul>
                </nav>
            </Container>
        </header>
    )
}

export default Header;