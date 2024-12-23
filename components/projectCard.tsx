import Link from "next/link"
import Image from "next/image"

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  image: string;
  link: string;
}

export default function ProjectCard({ title, description, tags, image, link }: ProjectCardProps) {
  return (
    <Link href={link} className="flex justify-between border-2 border-darkestblue bg-white text-darkestblue rounded-3xl m-14 hover:scale-105 transition-transform duration-300 ease-in-out">
      <div className="relative w-[500px] h-[300px]">
        <Image 
          src={image}
          alt={title}
          fill
          objectFit="cover"
        />
      </div>
      <div className="mr-20 my-20 w-1/3">
        <h3 className="text-4xl font-semibold mb-6">{title}</h3>
        <h5 className="italic text-2xl mb-10">{description}</h5>
        <p className="text-white text-lg text-center bg-darkestblue py-4 px-12 rounded-3xl">{tags.join("  |  ")}</p>
      </div>
    </Link>
  );
}