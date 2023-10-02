import React from 'react'
import ABT from '../../src/Assets/sobre.jpg'

export const Sobre = () => {
  return (
    <section class="text-gray-600 body-font mt-[15vh]">
        <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
            <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Quem somos</h1>
            <p class="leading-relaxed">
                Somos um Grupo de Broker´s (corretores náuticos) e trabalhamos num sistema de parceria "business associate", ou seja trocamos (diariamente) informações de clientes que estão em busca, e ou vendendo uma embarcação.
                <br /><br /> 
                ATUAMOS EM QUASE TODAS AS MARINAS DO BRASIL
                <br /><br />
                Saiba também quando, como e porquê pedir uma vistoria "in loco" de uma embarcação seminova!
                Não compre barco usado sem antes solicitar esses serviços
            </p>
            <div class="flex w-full md:justify-start justify-center items-end mt-7">
                <button class="inline-flex text-white bg-s7green border-0 py-2 px-6 focus:outline-none hover:bg-s7btn duration-500 rounded text-lg">Venda seu Barco</button>
            </div>
            </div>
            <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img class="object-cover object-center rounded" alt="hero" src={ABT} />
            </div>
        </div>
    </section>
  )
}
