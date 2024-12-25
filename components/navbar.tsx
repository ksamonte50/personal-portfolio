'use client';

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="flex justify-between items-center mx-6 md:mx-28 mt-12 mb-20">
            <Link href="/">
                <Image
                    width={83}
                    height={83}
                    alt="KS Logo"
                    src="/images/logo.png"
                    className="w-16 h-16"
                />
            </Link>

            {/* Desktop Menu */}
            <ul className="hidden md:flex bg-darkestblue text-white text-xl rounded-full gap-x-3">
                <li className="px-7 py-2.5 rounded-full hover:bg-blue hover:text-darkestblue transition duration-300">
                    <Link href="/about">About</Link>
                </li>
                <li className="px-7 py-2.5 rounded-full hover:bg-blue hover:text-darkestblue transition duration-300">
                    <Link href="/work">Work</Link>
                </li>
                <li className="px-7 py-2.5 rounded-full hover:bg-blue hover:text-darkestblue transition duration-300">
                    <Link href="/connect">Connect</Link>
                </li>
            </ul>

            {/* Mobile Menu Button */}
            <button 
                className="md:hidden bg-darkestblue p-3 rounded-full"
                onClick={() => setIsOpen(!isOpen)}
            >
                <svg 
                    className="w-6 h-6 text-white"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    {isOpen ? (
                        <path d="M6 18L18 6M6 6l12 12" />
                    ) : (
                        <path d="M4 6h16M4 12h16M4 18h16" />
                    )}
                </svg>
            </button>

            {/* Mobile Menu Dropdown */}
            {isOpen && (
                <div className="absolute top-28 right-6 md:hidden">
                    <ul className="flex flex-col bg-darkestblue text-white text-xl rounded-3xl py-4 gap-y-2">
                        <li className="px-7 py-2.5 rounded-xl hover:bg-blue hover:text-darkestblue transition duration-300">
                            <Link href="/about">About</Link>
                        </li>
                        <li className="px-7 py-2.5 rounded-xl hover:bg-blue hover:text-darkestblue transition duration-300">
                            <Link href="/work">Work</Link>
                        </li>
                        <li className="px-7 py-2.5 rounded-xl hover:bg-blue hover:text-darkestblue transition duration-300">
                            <Link href="/connect">Connect</Link>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    );
}