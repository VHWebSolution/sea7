import React from 'react'
import VSB from '../../src/Assets/vsb.png'



export const VendaSeuBarco = () => {
  return (
    <section class="text-gray-600 body-font mt-[15vh]">
      <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Venda seu Barco</h1>
          <p class="leading-relaxed">
          Aumente as chances de vender seu barco, pois nossos parceiros estão em pontos estratégicos nas principais Marinas e clubes do Brasil: Porto Alegre, Florianópolis, Porto Belo, Balneário Camboriú, Itajaí, Joinville, São Francisco do Sul, Caioba, Guaratuba, Paranaguá, Curitiba, São Vicente, Guarujá, São Paulo, Bertioga, Barra do Una, São Sebastião, Ilha bela, Ubatuba, Laranjeiras, Parati, Angra dos Reis, Rio de Janeiro, Cabo Frio, Búzios, Vitoria, Salvador, Recife, Mato Grosso, Minas, Goias, Brasilia, Manaus, etc.
              <br /><br />
              Entre em contato que faremos todo o serviço para você! Fotos, ficha técnica, teste de mar, avaliação, inventario, divulgação e filtramos todas as propostas que chegarem.
          </p>
          <div class="flex w-full md:justify-start justify-center items-end mt-7">
              <button class="inline-flex text-white bg-s7green border-0 py-2 px-6 focus:outline-none hover:bg-s7btn duration-500 rounded text-lg">Contato</button>
          </div>
          </div>
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img class="object-cover object-center rounded" alt="hero" src={VSB} />
          </div>
      </div>            
   </section>
  )
}