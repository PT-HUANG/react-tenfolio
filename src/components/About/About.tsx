import avatar from "@/assets/profile.jpg";
import SkillCard from "./SkillCard";
import skills from "../../assets/skills";

function About() {
  return (
    <>
      <div id="about" className="bg-[#000e24] pt-6">
        <div
          className="w-[90%] max-w-[1200px] h-[100%] mx-auto my-0 pb-10
          md:flex md:items-center
        "
        >
          <div className="flex flex-col items-center mb-10 md:w-[60%] my-4 lg:my-10">
            <img
              src={avatar}
              alt="avatar"
              className="w-[50%] max-w-[250px] h-[auto]"
              style={{ clipPath: "circle(40% at 50% 50%)" }}
            />
            <div className="w-[70%] text-center">
              <div
                className="
                text-white text-xl font-bold mb-1
                sm:text-2xl
              "
              >
                About Me
              </div>
              <div className="text-white max-w-[500px] mx-auto mt-2">
                Hi, I'm Paul — a frontend developer with a background in
                nursing. I enjoy creating intuitive, responsive interfaces and
                solving real problems through design. I'm currently seeking
                opportunities to grow and contribute as a frontend engineer.
              </div>
            </div>
          </div>
          <div className="my-4 lg:h-[80%] lg:my-10">
            <div className="text-xl text-white font-bold ml-2 my-3 md:my-6 md:text-2xl">
              Tech Stack
            </div>
            <div
              className="
                w-[90%] sm:w-[80%] h-[80%] md:w-[80%] bg-white mx-auto p-4
                grid items-center justify-self-center
                mx-4 grid-cols-4 grid-rows-3 gap-x-6 gap-y-4 
                sm:mx-8
                lg:h-[50%] lg:grid-cols-6 lg:grid-rows-2 lg:gap-y-8 lg:mt-10 lg:ml-0 lg:p-8
              "
            >
              {skills.map((skill: { src: string; alt: string }) => (
                <SkillCard key={skill.alt} src={skill.src} alt={skill.alt} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
