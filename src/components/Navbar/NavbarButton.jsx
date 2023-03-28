export default function NavbarButton({href, text, BtnIcon}) {
  return (
    <a
      href={href}
      className="text-gray-300 hover:bg-cdln-blue-700 hover:text-white px-5 py-2 rounded-md text-lg font-medium"
    >
      <div className="flex flex-row items-center gap-2">
        <BtnIcon size={"1.2em"} />
        {text}
      </div>
    </a>
  );
}
