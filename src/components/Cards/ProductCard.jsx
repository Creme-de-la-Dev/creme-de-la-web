import { IoCartSharp } from "react-icons/io5";

export default function ProductCard({ image, name, children, url, ...props }) {
  const { available = true, mobile = false } = props;
  return (
    <article className="rounded-md overflow-hidden relative max-w-xs group shadow-md mx-auto transform hover:-translate-y-1 duration-300 hover:shadow-xl cursor-pointer">
      <div className="overflow-hidden">
        <img
          className="w-full h-auto transform hover:scale-110 duration-200"
          src={image}
          alt={name}
        />
      </div>
      <div className="p-5 my-auto pb-5 bg-cdln-blue-50">
        <h1 className="text-3xl font-semibold text-gray-800 mt-4">{name}</h1>
        <p className="text-sm md:text-xl text-gray-400 mt-4 leading-relaxed">
          {children}
        </p>
      </div>
      {available ? (
        <a href={url} target="_blank">
          {mobile ? (
            <div className="flex gap-3 justify-center border-t py-8 items-center text-cdln-blue-200 group-hover:text-cdln-blue-50 bg-cdln-blue-600 hover:bg-cdln-blue-700">
                <>
                  <IoCartSharp size={"1.5em"} />
                  <h2 className="text-center text-xl tracking-widest uppercase">
                    Comprar
                  </h2>
                </>
            </div>
          ) : (
            <>
              <div className="hidden md:flex gap-3 justify-center border-t py-8 items-center text-cdln-blue-200 group-hover:text-cdln-blue-50 bg-cdln-blue-600 hover:bg-cdln-blue-700">
                  <>
                    <IoCartSharp size={"1.5em"} />
                    <h2 className="text-center text-xl tracking-widest uppercase">
                      Comprar
                    </h2>
                  </>
              </div>
            </>
          )}
        </a>
      ) : (
        <>
            <>
              <a href="https://youtu.be/mc5ub3TULqU?t=16" target="_blank">
              <div className="flex gap-3 justify-center border-t py-8 items-center text-cdln-blue-50 bg-gray-500">
                <h2 className="text-center text-xl tracking-widest uppercase">
                  Em Breve
                </h2>
              </div>
            </a>
            </>
        </>
        
      )}
    </article>
  );
}
