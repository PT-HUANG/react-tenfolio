type SkillCardProps = {
  src: string;
  alt: string;
};

function SkillCard({ src, alt }: SkillCardProps) {
  return (
    <img
      src={src}
      alt={alt}
      className="w-full max-w-[80px] lg:max-w-[100px] lg:grayscale  lg:hover:grayscale-0 transition duration-300"
    />
  );
}

export default SkillCard;
