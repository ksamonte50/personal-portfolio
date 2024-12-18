import Image from "next/image";
import Link from "next/link";
import Navbar from "./components/navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <section className="mx-28 flex">
        <div>
          <h1 className="text-darkestblue text-8xl font-semibold mb-5">Hi, I'm Kyle!</h1>
          <h2 className="text-darkestblue text-5xl w-1/2 mb-8">Front-End Developer & UI/UX Designer</h2>
          <p className="text-darkestblue text-xl w-1/5 ml-4">I am passionate about creating <b>authentically inspired interfaces</b> that bring us all closer together. Look around to explore my previous work and feel free to contact me with any questions! </p>
        </div>
        <div className="absolute w-[553.01px] h-[637.53px] overflow-hidden -z-10 inset-auto left-1/2">
          <Image
            width={4000}
            height={6000}
            alt="Picture of Kyle"
            src="/images/self_nobg.png"
            className="w-full h-full object-cover scale-150"
          />
        </div>
        <ul>
          <li>
            <Link href="#">
              <svg 
                width="45"
                height="45"
                role="img" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
                className="fill-darkestblue p-1 rounded-md hover:scale-125 transition-transform duration-200 ease-in-out"
              >
                <title>LinkedIn Logo</title>
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </Link>
          </li>
          <li>
            <Link href="#">
              <svg 
                width="45"
                height="45"
                role="img" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
                className="fill-darkestblue p-1 rounded-md hover:scale-125 transition-transform duration-200 ease-in-out"
              >
                <title>GitHub</title>
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
              </svg>
            </Link>
          </li>
        </ul>
      </section>
      <section>
        
      </section>
    </>
  );
}
