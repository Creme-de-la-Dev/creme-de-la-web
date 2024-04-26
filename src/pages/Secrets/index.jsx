// React
import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

// Images
import SecretsBG from "../../assets/BackgroundImages/SecretsBG.png";
import ArrowDown from "../../assets/arrow-down.svg";

function Secrets() {
  const input1Ref = useRef();
  const input2Ref = useRef();
  const input3Ref = useRef();
  const input4Ref = useRef();
  
  const toInputUppercase = (e) => {
      e.target.value = e.target.value.toUpperCase();
  };
  
  const [code, setCode] = useState("");
  const navigate = useNavigate();
  
  const handleInputChange = (e, nextInputRef) => {
      const currentValue = e.target.value;
      if (currentValue.length === 1) {
        setCode(prevCode => prevCode + currentValue);
        if (nextInputRef && nextInputRef.current) {
          nextInputRef.current.focus();
        }
      }
  };
  
  const handleButtonClick = () => {
      // Assuming the code is already updated with the input values
      navigate(`/2209626308100203jodoboioxocoocofaiafbaabgoog/${code}`);
  };
 

  return (
    <div>
      <section className="header h-screen">
        <div className="h-full w-full relative">
          <img
            src={SecretsBG}
            className="hidden lg:block w-full h-full object-cover absolute"
          />
          <img
            src={SecretsBG}
            className="lg:hidden w-full h-full object-cover absolute"
          />
          <div className="p-24 w-full h-full justify-center items-center">
            <h1 className="text-cdln-blue-50 text-8xl md:text-9xl font-bold text-center animate__animated animate__fadeIn">
              Ŝ̸̪̤̩͛̏̚E̸̤̋̇Ǵ̸̺̀͆͜͝R̸̠̬̿̍̏̃ͅͅE̷̮͂̆̂͝D̵̥͛͛̊̿Ȏ̵̪S̶͉̫̾̌̌
            </h1>
            <h2 className="text-cdln-blue-100 text-2xl md:text-5xl font-normal mt-5 text-center animate__animated animate__flash">
              Onde o filho chora e a mãe não vê.
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
        <div className="hero lg:min-h-screen bg-black">
          <h2 className="text-green-600 text-center m-10 text-6xl font-bold">
            O Botão.
          </h2>
          <h3 className="text-green-700 text-center text-4xl font-regular">
            Apenas 4 caracteres. Após digitar, aperte o botão e teste sua sorte.
          </h3>
          <div className="flex flex-col justify-center w-full">
          <form className="form self-center w-full m-16">
              <div className="input-fields">
                <input
                 placeholder=""
                 type="tel"
                 maxLength="1"
                 onChange={(e) => handleInputChange(e, input2Ref)}
                 onInput={toInputUppercase}
                />
                <input
                 placeholder=""
                 type="tel"
                 maxLength="1"
                 onChange={(e) => handleInputChange(e, input3Ref)}
                 onInput={toInputUppercase}
                 ref={input2Ref}
                />
                <input
                 placeholder=""
                 type="tel"
                 maxLength="1"
                 onChange={(e) => handleInputChange(e, input4Ref)}
                 onInput={toInputUppercase}
                 ref={input3Ref}
                />
                <input
                  placeholder=""
                  type="tel"
                  maxLength="1"
                  onChange={(e) => handleInputChange(e, null)}
                  onInput={toInputUppercase}
                  ref={input4Ref}
                  />
              </div>
            </form>
            <div className="flex justify-center items-center h-full">
              <button className="btn-class-name" onClick={handleButtonClick}>
                <span className="back"></span>
                <span className="front"></span>
              </button>
            </div>
          </div>
        </div>
        <div className="hero min-h-screen w-full bg-black flex items-center justify-center">
          <a href="/home">
            <button class="ui-btn">
              <span>Voltar</span>
            </button>
          </a>
        </div>
        {/* <div className="hero lg:min-h-screen bg-black">
          <h2 className="text-green-600 text-center m-10 text-6xl font-bold">
            2. Espelho, Espelho Meu.
          </h2>
          <div className="w-full">
            <div className="obj self-center">
              <div className="objchild">
                <span className="inn6"></span>
              </div>
            </div>

          </div>
        </div> */}
      </section>
    </div>
  );
}

export default Secrets;
