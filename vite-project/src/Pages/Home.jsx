import React from "react";
import './Home.css'
import Reserva from "../components/Reserva";


const Home = () => {
  return (
    <div className=" min-h-screen flex flex-row justify-between items-center lg:px-32 px-5 bg-[url('./assets/img/hero.jpg')] bg-cover bg-no-repeat ">
      <div className=" w-full lg:w-2/3 space-y-5">
        <h1 class="h1class">
          Comida Caseira sempre perto de você
        </h1>
        <p class=" p">
          Venha experimentar os sabores variados que oferecemos
        </p>
        <div className=" lg:pl-44">
        </div>
        <Reserva/>
      </div>
    </div>

    
  );
};

export default Home;