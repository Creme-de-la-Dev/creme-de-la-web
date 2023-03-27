export default function SocialIcon({ href, text, BtnIcon}) {
  return (
    <a
      href={href}
      rel="noreferrer"
      target="_blank"
      className="text-gray-700 transition hover:text-gray-700/75"
    >
      <span className="sr-only">{text}</span>
      <BtnIcon size={25} />
    </a>
  );
}
