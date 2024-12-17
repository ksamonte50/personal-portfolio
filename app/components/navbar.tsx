import Link from "next/link"
import Image from "next/image";

export default function Navbar() {
    return (
      <nav className="flex justify-between items-center mx-24 my-12">
        <Image 
            width={83}
            height={83}
            alt="KS Logo" 
            src="/images/logo.png"
            className="w-14 h-14"
        />
        <ul className="flex ">
            <li><Link href="#">About</Link></li>
            <li><Link href="#">Work</Link></li>
            <li><Link href="#">Connect</Link></li>
        </ul>
      </nav>
    );
  }