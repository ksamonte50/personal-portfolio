import Link from "next/link"
import Image from "next/image";

export default function Navbar() {
    return (
      <nav className="flex justify-between items-center mx-28 mt-12 mb-20">
        <Link href="/">
          <Image
              width={83}
              height={83}
              alt="KS Logo"
              src="/images/logo.png"
              className="w-16 h-16"
          />
        </Link>
        <ul className="flex bg-darkestblue text-white text-xl rounded-full gap-x-3">
            <li className="px-7 py-2.5 rounded-full hover:bg-blue hover:text-darkestblue transition duration-300"><Link href="/about">About</Link></li>
            <li className="px-7 py-2.5 rounded-full hover:bg-blue hover:text-darkestblue transition duration-300"><Link href="#">Work</Link></li>
            <li className="px-7 py-2.5 rounded-full hover:bg-blue hover:text-darkestblue transition duration-300"><Link href="#">Connect</Link></li>
        </ul>
      </nav>
    );
  }