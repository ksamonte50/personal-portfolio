import Link from "next/link"
import Image from "next/image";

export default function ProjectCard() {
    return (
      <div className="flex border-2 border-darkestblue bg-white text-darkestblue rounded-3xl m-4">
        <div>Image</div>
        <div>
            <h3>PMSNC Website Redesign</h3>
            <h5>A redesign & rebrand for a local non-profit organization</h5>
            <p>UI/UX Design  |  Brand Identity</p>
        </div>
        
      </div>
    );
  }