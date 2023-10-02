import React, { useState } from 'react'
import axios from 'axios';

export const ContatoPage = () => {
    const [mensagem, setMensagem] = useState({
      nome: '',
      telefone: '',
      email: '',
      contexto: 'Página de Contato',
      mensagem: ''
    });

    const [thisContexto, useThisContexto] = useState("Pagina de contato");
  
    const fetchMensagem = async () => {
      try {
        const response = await axios.post('http://localhost:8080/mensagem/salvar', mensagem);

        setMensagem((prevState) => ({
            ...prevState,
            contexto: 'Página de Contato',
          }));
  
        if (response.status === 200) {
          console.log('Mensagem enviada com sucesso:', response.data);
          // Limpar os campos de entrada após o envio bem-sucedido (opcional)
          setMensagem({
            nome: '',
            telefone: '',
            email: '',
            contexto: '',
            mensagem: ''
          });
        } else {
          console.log('Erro ao enviar a mensagem. Status:', response.status);
        }
        
      } catch (error) {
        console.error('Erro ao enviar a mensagem:', error);
      }
    };
  
    const handleChange = (event) => {
        const { name, value } = event.target;
        setMensagem((prevState) => ({
          ...prevState,
          [name]: value,
        }));
      };


    return (
    <section class="text-gray-600 body-font relative mt-[15vh]">
      <div class="container px-5 py-14 mx-auto">
          <div class="flex flex-col text-center w-full mb-12">
          <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Entre em contato</h1>
          <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Você pode usar o número (48) 9 8461-1646 ou se preferir mande um email:</p>
          </div>
          <div class="lg:w-1/2 md:w-2/3 mx-auto">
          <div class="flex flex-wrap -m-2">
          <form onSubmit={fetchMensagem} className='space-y-4 px-2 pr-4'>
              <label htmlFor='nome' className='text-gray-900 font-semibold'>
                Nome:
              </label>
              <input
                type='text'
                className='w-full rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
                id='nome'
                name='nome'
                value={mensagem.nome}
                onChange={handleChange}
              />

              <label htmlFor='email' className='text-gray-900 font-semibold'>
                Email:
              </label>
              <input
                type='text'
                className='w-full rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
                id='email'
                name='email'
                value={mensagem.email}
                onChange={handleChange}
              />

              <label htmlFor='telefone' className='text-gray-900 font-semibold'>
                Telefone:
              </label>
              <input
                type='text'
                className='w-full rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
                id='telefone'
                name='telefone'
                value={mensagem.telefone}
                onChange={handleChange}
              />
              <label htmlFor='mensagem' className='text-gray-900 font-semibold'>
                Mensagem:
              </label>
              <textarea
                className='w-full rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
                id='mensagem'
                name='mensagem'
                value={mensagem.mensagem}
                onChange={handleChange}
              />

              <button
                type='submit'
                className='w-full md:w-auto bg-gray-800 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded-md'
              >
                Enviar mensagem
              </button>
            </form>
              <div class="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
              <a class="text-s7green">contato@sea7.com.br</a>
              <p class="leading-normal my-5">Ney Broker,
                  <br />Florianópolis, Santa Catarina
              </p>
              <span class="inline-flex">
                  <a class="text-gray-500">
                  <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                  </svg>
                  </a>
                  <a class="ml-4 text-gray-500">
                  <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                  </svg>
                  </a>
                  <a class="ml-4 text-gray-500">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                  </svg>
                  </a>
                  <a class="ml-4 text-gray-500">
                  <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                  </svg>
                  </a>
              </span>
              </div>
          </div>
          </div>
      </div>
    </section>
  )
}
