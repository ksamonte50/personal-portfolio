import Link from "next/link"
import Image from "next/image";

export default function Footer() {
    return (
      <footer className="flex justify-between items-center relative px-28 py-14 bg-darkestblue text-white">
        <h3 className="text-4xl font-bold">Let's Design!</h3>
        <Image
            width={83}
            height={83}
            alt="White KS Logo"
            src="/images/logoWhite.png"
            className="w-14 h-14 absolute left-1/2 transform -translate-x-1/2"
        />
        <nav>
            <ul className="flex text-white text-xl rounded-full gap-x-3">
                <li className="px-7 py-2.5 rounded-full hover:bg-blue transition duration-300"><Link href="#">About</Link></li>
                <li className="px-7 py-2.5 rounded-full hover:bg-blue transition duration-300"><Link href="#">Work</Link></li>
                <li className="px-7 py-2.5 rounded-full hover:bg-blue transition duration-300"><Link href="#">Connect</Link></li>
            </ul>
        </nav>
      </footer>
    );
  }