// React
import React from "react";

import PostIMG from "../../assets/Blog/1.0.1.png"

const Blog = () => {
  return (
        <>
            <section className="min-h-screen container w-full flex flex-col items-center mx-auto p-5">
                <div className="bg-white h-full rounded-lg p-10">
                    <div className="text-cdln-blue-800 flex flex-col gap-5">
                        <h1 className="text-5xl font-semibold text-cdln-blue-900">Versão 1.0.1 lançada!</h1>
                        <h6 className="text-xl">03/05/2024</h6>
                        <img src={PostIMG} className="rounded-lg border-2 w-72 md:w-96 max-w-lg"/>
                        <p className="text-xl font-medium">
                            Nesta atualização:<br />
                            - Lorax Kart portado 100% para dentro do site;<br/>
                            - Creme de la Nage TV portado 100% para dentro do site (sem susto dessa vez);<br/>
                            - Correção de bugs de usabilidade e layout;<br/>
                            - Adicionados 10 Easter Eggs secretos.
                        </p>
                    </div>
                </div>
            </section>
        </>
   
	)
}

export default Blog;