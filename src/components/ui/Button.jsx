import clsx from "clsx";

const Button = ({
  id,
  title,
  rightIcon,
  leftIcon,
  containerClass,
  onClick,
}) => {
  return (
    <button
      id={id}
      onClick={onClick}
      className={clsx(
        "group relative z-10 flex w-fit cursor-pointer items-center gap-2 overflow-hidden rounded-full bg-primary px-7 py-3 text-text transition-transform duration-300 ease-out hover:scale-105",
        containerClass
      )}
    >
      {leftIcon}

      <span className="relative inline-flex overflow-hidden font-body text-xs font-bold uppercase">
        {/* Top text slides up on hover */}
        <div className="translate-y-0 skew-y-0 transition duration-500 group-hover:-translate-y-[150%] group-hover:skew-y-[12deg]">
          {title}
        </div>
        {/* Bottom text slides in on hover */}
        <div className="absolute translate-y-[150%] skew-y-[12deg] transition duration-500 group-hover:translate-y-0 group-hover:skew-y-0">
          {title}
        </div>
      </span>

      {rightIcon}
    </button>
  );
};

export default Button;
