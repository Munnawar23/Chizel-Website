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
        "group relative z-10 flex w-fit cursor-pointer items-center gap-2 overflow-hidden rounded-full bg-primary px-7 py-3 text-text transition-all duration-300 ease-out hover:scale-105 hover:rotate-2 hover:shadow-lg hover:shadow-primary/25 active:rotate-1 active:scale-95",
        containerClass
      )}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-out" />
      <div className="absolute inset-0 rounded-full bg-white/5 scale-0 group-hover:scale-110 transition-transform duration-500 ease-out" />

      {leftIcon && (
        <span className="relative transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110">
          {leftIcon}
        </span>
      )}

      <span className="relative inline-flex font-body text-xs font-bold uppercase leading-none transition-all duration-300 group-hover:tracking-wider">
        {title}
      </span>

      {rightIcon && (
        <span className="relative transition-transform duration-300 group-hover:translate-x-1 group-hover:scale-110">
          {rightIcon}
        </span>
      )}
      <div className="absolute inset-0 rounded-full border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </button>
  );
};

export default Button;
