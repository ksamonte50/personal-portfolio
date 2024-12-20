// Optimizations
import Image from "next/image";

// Components
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";

export default function About() {
    return (
        <>
        <Navbar />
        <main className="flex text-darkestblue mb-24">
            <aside className="w-[731px] h-[751px] flex-shrink-0 rounded-r-[30px] bg-blue pt-5">
                <div className="w-[711px] h-[711px] flex-shrink-0 rounded-r-[30px] bg-darkblue pt-5">
                    <div className="w-[691px] h-[671px] flex-shrink-0 rounded-r-[30px] bg-darkestblue pt-5">
                        <Image
                            width={1893}
                            height={1893}
                            src="/images/selfAbout.png"
                            alt="Image of Kyle Samonte"
                            className="ml-10 w-[631px]"
                        />
                    </div>
                </div>
            </aside>
            <section className="mx-28">
                <h1 className="text-8xl font-semibold mb-7">My Story</h1>
                <h3 className="text-4xl italic mt-4">
                    I’m Kyle Samonte, a passionate Front-end Developer & UI/UX Designer
                    currently based in Santa Clara, CA.
                </h3>
                <p className="text-lg font-normal leading-6 mt-8">
                    My design journey began when I discovered UI/UX design in a web
                    usability class during my second year of college. My background in
                    full-stack web programming helps me make technically-informed design
                    choices and solve complex problems. Over the years, I’ve honed my
                    skills in tools like <b>Figma</b> for designing, and <b>HTML, CSS, and
                    JavaScript</b> for bringing those designs to life.
                </p>
                <p className="text-lg font-normal leading-6 mt-4">
                    I believe great design starts with <b>empathy</b> and ends with
                    <b> authenticity</b>. My process always involves understanding the
                    user's needs, challenges, emotions, and goals to create products that
                    feel more “real.” In the end, I aim for a product the user can truly
                    connect with—one that feels like home. I also believe in
                    <b> continuous learning</b>, always exploring new tools, frameworks,
                    and design methodologies to stay at the forefront of the industry.
                    I’m a team player who can positively receive <b>constructive
                    criticism</b> and use it to my advantage.
                </p>
                <p className="text-lg font-normal leading-6 mt-4">
                    When I’m not designing or coding, you’ll find me playing basketball,
                    collecting sneakers, or cooking steak. I’m also passionate about my
                    Filipino heritage and love expressing myself through fashion!
                </p>
                <div className="flex justify-center items-center mt-6">
                    <a
                        href="/resume.pdf"
                        target="_blank"
                        className="p-5 text-2xl font-bold bg-darkblue rounded-3xl text-white transition-transform transform hover:scale-110 duration-300 "
                    >
                        My Resume
                    </a>
                </div>
            </section>
        </main>
        <Footer />
    </>
  );
}
