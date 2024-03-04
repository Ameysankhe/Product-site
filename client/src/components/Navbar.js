import React, {useState} from "react";
import { FaBars , FaTimes} from "react-icons/fa"
import '../Navbar.css'

const navLinks = [
    {
        title: "Home",
        link: "/",
    },
    {
        title: "About Us",
        link: "/about",
    },
    {
        title: "Our Clients",
        link: "/client",
    },
    {
        title: "Products",
        link: "/products",
    },
    {
        title: "Contact US",
        link: "/contact",
    },
];

const Navbar = () => {
    const [open, setOpen] = useState(false);

    const handleMenu = () => {
        setOpen((prev) => !prev);
        console.log(open);
    };
    return (
        <div className="navbar bg-indigo-200">
            <div className="mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <a href="/" className="text-white">
                        <img src={require('../assets/navbar--logo.png')} className='w-200 h-12 object-cover' alt='logo' />
                        </a>
                    </div>
                    {/* navLinks */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            {navLinks.map((link,index) => (
                                <a key={index}  className="list text-black transform hover:scale-125 transition duration-300 px-3 py-2" href={link.link}>
                                    {link.title}
                                </a>
                            ))}
                        </div>
                    </div>
                    {/* hamburger button */}
                    <div className="-mr-2 flex md:hidden">
                        <button type="button" onClick={handleMenu} className="inline-flex items-center justify-center p-2 rounded-md text-gray-400">
                            <span className="sr-only">
                                Open Main Menu
                            </span>
                            {open == true ? <FaTimes /> : <FaBars/>}
                        </button>
                    </div>
                </div>
            </div>
            {/* mobile-menu */}
            {open ? (
                <div className="navbar--hidden md:hidden">
                    <div className="ox-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {navLinks.map((link, index) => (
                            <a key={index}  className="text-black block px-3 py-2 rounded-md" href={link.link}>
                            {link.title}
                            </a>
                        ))}
                    </div>
                </div>
            ) : null}
        </div>
    );
};

export default Navbar;