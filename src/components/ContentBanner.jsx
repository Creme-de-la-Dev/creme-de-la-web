export default function ContentBanner({imageAlt, imageSrc, title, btnText, BtnIcon, children, ...props}) {
  const {imageRight = false} = props;
  return (
    <div className="pt-44">
      <div className="games animate__animated animate__zoomIn">
        <div className={`flex flex-col justify-center sm:justify-evenly p-4 sm:p-0 ${imageRight ? "sm:flex-row-reverse" : "sm:flex-row"}`}>
          <img
            className="w-64 md:w-80 lg:w-96 self-center p-"
            src={imageSrc}
            alt={imageAlt}
          />
          <div className="flex flex-col gap-7">
            <h1 className="font-semibold text-5xl w-full md:text-xl xl:text-8xl text-cdln-blue-100 text-center">
              {title}
            </h1>
            <h2 className="w-12/12 self-center lg:text-3xl md:text-2xl text-lg justify-center text-slate-300 font-light text-center">
              {children}
            </h2>
            <div className="pt-5 self-center animate__animated animate__fadeIn">
              <a href="/games">
                <button className="bg-cdln-blue-50 hover:bg-cdln-blue-100 text-cdln-blue-800 font-bold py-4 px-6 border-2 border-cdln-blue-400 rounded-3xl shadow-lg flex flex-row items-center gap-3 text-2xl">
                  <BtnIcon size={30}/>
                  {btnText}
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
