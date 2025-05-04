type ProjectCardProps = {
  img?: string;
  name?: string;
  wide?: boolean;
  links?: string[];
  skills?: string[];
};

function ProjectCard({ img, name, wide, links, skills }: ProjectCardProps) {
  return (
    <div
      className={`rounded-lg bg-gray-800 m-2 overflow-hidden ${
        wide ? "sm:col-span-2 lg:col-span-4" : "lg:col-span-2"
      }`}
    >
      <img
        src={img}
        alt="name"
        className={`w-full h-55 ${
          wide ? "sm:h-100 xl:h-120 2xl:h-144" : "sm:h-70 xl:h-84 2xl:h-100"
        } object-cover object-left transition-transform duration-400 ease-in-out hover:scale-105`}
      />
      <div className="text-white text-lg xl:text-2xl font-bold p-3 pl-4 pb-2 mt-2">
        {name}
      </div>
      <div className="flex gap-2 m-2 ml-3">
        {links
          ?.filter((link) => link !== "none")
          .map((link, index) => (
            <a
              href={link}
              key={index}
              target="_blank"
              rel="noopener noreferrer"
              className={
                index === 0
                  ? "bg-white text-gray-800 font-semibold px-3 py-1 rounded hover:bg-gray-200 transition text-center xl:text-xl xl:px-4 xl:py-2"
                  : "bg-teal-500 text-white font-semibold px-3 py-1 rounded hover:bg-teal-600 transition text-center  xl:text-xl xl:px-4 xl:py-2"
              }
            >
              {index === 0 ? "GitHub" : "Visit Site"}
            </a>
          ))}
      </div>
      <ul className="flex flex-wrap ml-2 mb-4" aria-label="Technologies used">
        {skills?.map((skill, index) => (
          <li className="mr-1.5 mt-2" key={index}>
            <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium font-bold leading-5 text-teal-300 xl:text-base">
              {skill}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProjectCard;
