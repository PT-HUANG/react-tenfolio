import ProjectCard from "./ProjectCard";
import {
  alphacast,
  alphashop,
  blogeditor,
  movielist,
  randompassword,
  todolist,
  Img2Code
} from "@/assets/projects";

function Projects() {
  return (
    <>
      <div id="projects" className="bg-[#000e24]">
        <div className="w-[90%] max-w-[1600px] h-[100%] mx-auto p-4 md:p-8">
          <div
            className="
          text-white text-xl font-bold ml-2 mb-4
          md:text-3xl md:mx-6
          "
          >
            My Work
          </div>
          <div
            id="project_container"
            className="
            w-[95%] mx-auto
            grid grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-6 auto-rows-auto
          "
          >
            <ProjectCard
              img={movielist}
              name="Movie List"
              wide={false}
              links={[
                "https://github.com/PT-HUANG/my-movie-list",
                "https://pt-huang.github.io/my-movie-list/",
              ]}
              skills={["HTML", "CSS", "JavaScript"]}
              delay="250"
            />
            <ProjectCard
              img={alphashop}
              name="Alpha Shop"
              wide={false}
              links={[
                "https://github.com/PT-HUANG/alpha-shop",
                "https://pt-huang.github.io/alpha-shop/",
              ]}
              skills={["React", "React context", "Sass"]}
              delay="400"
            />
            <ProjectCard
              img={blogeditor}
              name="Blog Editor"
              wide={false}
              links={[
                "https://github.com/PT-HUANG/react-blog-editor",
                "https://pt-huang.github.io/react-blog-editor/",
              ]}
              skills={[
                "React",
                "Quill.js",
                "Tailwind CSS",
                "shadcn/ui",
                "jszip",
              ]}
              delay="550"
            />
            <ProjectCard
              img={alphacast}
              name="Alpha Cast"
              wide={true}
              links={[
                "https://github.com/PT-HUANG/react-alpha-cast",
                "https://pt-huang.github.io/react-alpha-cast/",
              ]}
              skills={[
                "React",
                "React Router",
                "React Bootstrap",
                "OAuth 2.0",
                "Spotify API",
                "Sass",
              ]}
              delay="700"
            />
            <ProjectCard
              img={randompassword}
              name="Random Password Generator"
              wide={false}
              links={[
                "https://github.com/PT-HUANG/Random-Password-Generator",
                "https://app-ul6ofzfhya-uc.a.run.app/",
              ]}
              skills={[
                "Firebase Functions",
                "JavaScript",
                "Express",
                "Express-handlebars",
                "Bootstrap",
              ]}
              delay="500"
            />
            <ProjectCard
              img={todolist}
              name="Todolist"
              wide={true}
              links={[
                "https://github.com/PT-HUANG/todolist",
                "https://todolist-cd951.web.app/",
              ]}
              skills={[
                "React",
                "TypeScript",
                "Tailwind CSS",
                "shadcn/ui",
                "Firebase Auth",
                "Firebase Hosting",
                "Firestore",
              ]}
              delay="600"
            />
            <ProjectCard
              img={Img2Code}
              name="Img2Code"
              wide={false}
              links={[
                "https://github.com/PT-HUANG/Img2Code",
                "https://pt-huang.github.io/Img2Code/",
              ]}
              skills={[
                "React",
                "TypeScript",
                "Tailwind CSS",
                "shadcn/ui",
                "zustand",
                "Dnd-kit",
              ]}
              delay="300"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
