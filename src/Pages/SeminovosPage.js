import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { MdDirectionsBoat } from 'react-icons/md';
import axios from 'axios';

export const Seminovos = () => {
  const [barcos, setBarcos] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      const response = await axios.get('https://www.sea7api.com.br/buscar');
      const sortedItems = response.data.sort((a, b) => b.quantidadeProduto - a.quantidadeProduto);
      const topItems = sortedItems.slice(0, 22);
      setBarcos(topItems);
    } catch (error) {
      console.error('Erro ao buscar produtos:', error);
    }
  };
  
  return (
    <section className='m-4 mt-[15vh]'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
        {barcos.map((barco) => (
          <div
            className='border-color: rgb(30 41 59) border w-full h-[500px] p-4 flex flex-col'
            key={barco.id}
          >
          <div
            className='h-[300px] hover:bg-gray-300 duration-200'
            style={{
              backgroundImage: `url(data:${barco.imagemPrincipal[0].type};base64,${barco.imagemPrincipal[0].base64Image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          ></div>

          <div className='flex justify-between my-2'>
            <h1 className='text-[16px] font-bold'>{barco.nomeProduto}</h1>
            <div className='bg-s7green w-[80px] h-[25px] rounded-[5px] text-white flex items-center'>
              <MdDirectionsBoat className='ml-[0.4rem]' />
              <h1 className='ml-2 text-[14px]'>{barco.quantidadeProduto} pés</h1>
            </div>
          </div>
          <div className='mb-4'>
            <p className='text-[14px]'>{barco.descricaoCurta}</p>
          </div>
          <div className='h-[1px] w-full bg-gray-500'></div>
          <div className='flex justify-between mt-4'>
            <h1>R$ {barco.precoProduto.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</h1>
            <button  onClick={() => navigate(`/seminovos/${barco.id}`)} className='bg-s7green text-white w-[80px] h-[25px] rounded-[5px]'>
              Ver mais
            </button>
          </div>
          </div>
        ))}
      </div>
    </section>
  );
};