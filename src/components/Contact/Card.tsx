import { Link } from "react-router-dom";

type CardProps = {
  link?: string;
  target?: string;
  text?: string;
  icon?: string;
};

function Card({ link, target, text, icon }: CardProps) {
  return (
    <Link
      to={link!}
      target={target}
      className="w-full max-w-[400px] bg-slate-800 hover:bg-slate-700 transition duration-300 text-white rounded-lg my-2 p-3 sm:p-4 cursor-pointer flex items-center gap-4"
    >
      <div className="bg-gray-600 rounded-full px-3 p-2 sm:p-4">
        <i className={`${icon} text-base sm:text-2xl`}></i>
      </div>
      <div className="text-sm tracking-wide sm:text-lg font-bold">{text}</div>
    </Link>
  );
}

export default Card;
