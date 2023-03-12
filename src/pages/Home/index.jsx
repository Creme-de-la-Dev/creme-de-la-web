// React
import React from "react";

// Icons
import { BsArrowDownCircleFill } from 'react-icons/bs';

function Home() {
  return (
    <div className="bg-gradient-to-b from-[#265881] to-[#265881] w-screen h-screen">
      <div className="container p-8">
        <div className="p-20 flex flex-col gap-5">
            <h1 className="text-8xl text-cdln-blue-100 font-medium">Creme de la Web</h1>
            <h2 className="text-3xl text-slate-400 font-light">
            Todo conteúdo do Creme que você adora,
            <br />
            agora em um só lugar
            </h2>
            <div className="pt-5">
                <button className="bg-cdln-blue-50 hover:bg-cdln-blue-100 text-cdln-blue-800 font-bold py-4 px-6 border-2 border-cdln-blue-400 rounded-3xl shadow flex flex-row items-center gap-2 text-2xl">
                    <BsArrowDownCircleFill />
                    Explorar conteúdo
                </button>
            </div>
        </div>
        <div>
            
        </div>
      </div>
    </div>
  );
}

export default Home;
