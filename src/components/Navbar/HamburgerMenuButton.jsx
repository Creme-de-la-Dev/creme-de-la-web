export default function HambugerMenuButton({href, current, text, BtnIcon}) {
  return (
    <a
      href={href}
      className={`${current ? 'text-white' : 'text-gray-300'} block px-3 py-2 rounded-md text-base font-medium`}
    >
      <div className="flex flex-row items-center gap-2">
        <BtnIcon size={"1.2em"} />
        {text}
      </div>
    </a>
  );
}
