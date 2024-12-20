import Link from "next/link"
import Image from "next/image";

export default function ProjectCard() {
    return (
      <Link href="#" className="flex justify-between border-2 border-darkestblue bg-white text-darkestblue rounded-3xl m-14 hover:scale-105 transition-transform duration-300 ease-in-out">
        <div>Image</div>
        <div className="mr-20 my-20 w-1/3">
            <h3 className="text-4xl font-semibold mb-6">PMSNC Website Redesign</h3>
            <h5 className="italic text-2xl mb-10">A redesign & rebrand for a local non-profit organization</h5>
            <p className="text-white text-lg text-center bg-darkestblue py-4 px-12 rounded-3xl">UI/UX Design  |  Brand Identity</p>
        </div>
      </Link>
    );
  }