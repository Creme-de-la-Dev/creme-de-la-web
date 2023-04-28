// React
import React from "react";

// Components
import ProductCard from "../../components/Cards/ProductCard";

// Images
import StoreBG from "../../assets/BackgroundImages/StoreBG.png";
import ArrowDown from "../../assets/arrow-down.svg";
import FriendsShirt from "../../assets/Store/FRIENDS-SHIRT-PROMO.png";
import MemoriesShirt from "../../assets/Store/MEMORIES-SHIRT-PROMO.png";
import GroupShirt from "../../assets/Store/GROUP-SHIRT-PROMO.png";
import KitKatShirt from "../../assets/Store/KIT-KAT-SHIRT-PROMO.png";

function Store() {
  return (
    <div>
      <section className="header h-screen">
        <div className="h-full w-full relative">
          <img
            src={StoreBG}
            className="hidden lg:block w-full h-full object-cover absolute"
          />
          <img
            src={StoreBG}
            className="lg:hidden w-full h-full object-cover absolute"
          />
          <div className="p-24 w-full h-full justify-center items-center">
            <h1 className="text-cdln-blue-50 text-8xl md:text-9xl font-bold text-center animate__animated animate__jackInTheBox">
              Creme Store
            </h1>
            <h2 className="text-cdln-blue-100 text-2xl md:text-5xl font-normal mt-5 text-center animate__animated animate__slideInUp">
              Frete grátis para todo Brasil!
            </h2>
            <div className="w-full justify-center items-center pt-20 animate__animated animate__fadeIn">
              <a href="#main-section">
                <img src={ArrowDown} className="mx-auto h-10 w-10" />
              </a>
            </div>
          </div>
        </div>
      </section>
      <section id="main-section">
        <div className="hero h-auto lg:min-h-screen">
          <div className="cube"></div>
          <div className="cube"></div>
          <div className="cube"></div>
          <div className="cube"></div>
          <div className="cube"></div>
          <div className="cube"></div>
          <div>
            <div className="flex flex-col lg:flex-row p-5 lg:p-10 gap-8 lg:gap-0">
              <ProductCard
                image={FriendsShirt}
                name="Camiseta Amigos"
                price="R$ 59,90"
                url="https://flappycatito.herokuapp.com/"
                mobile={true}
                available={false}
              >
                100% Algodão, disponível nas cores azul, vermelho e preto.
              </ProductCard>
              <ProductCard
                image={MemoriesShirt}
                name="Camiseta Memories"
                price="R$ 59,90"
                url="https://lorax-kart.netlify.app/"
                mobile={true}
                available={false}
              >
                100% Algodão, disponível nas cores azul, cinza e preto.
              </ProductCard>
              <ProductCard
                image={GroupShirt}
                name="Camiseta Grupo"
                price="R$ 59,90"
                url="https://youtu.be/mc5ub3TULqU?t=16"
                mobile={true}
                available={false}
              >
                100% Algodão, disponível nas cores azul, cinza e preto.
              </ProductCard>
              <ProductCard
                image={KitKatShirt}
                name="Camiseta Have a Break"
                price="R$ 59,90"
                url="https://flappycatito.herokuapp.com/"
                mobile={true}
                available={false}
              >
                100% Algodão, disponível nas cores vermelho e preto.
              </ProductCard>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Store;
