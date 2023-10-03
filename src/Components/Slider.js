import React from 'react'
import imagem from '../Assets/sessa-f42.jpg'

const Slider = () => {
  const containerStyle = {
    width: '100%',
    height: '90vh',
    display: 'flex',
    justifyContent: 'center',
    background: `url(${imagem}) center/cover`,
  };

  return (
    <div className='flex items-center' style={containerStyle}>
      <div className='bg-black/[.46] ss:w-[60%] h-[50%] mt-20 rounded-[7px] flex flex-col justify-center items-center w-full'>
        <h1 class="text-3xl md:text-3xl text-white font-medium">Venda seu Barco</h1>
        <p class="text-base md:text-lg text-white p-5 text-center md:w-2/3">Que tal vender seu barco sem aborrecimentos, saber com quem e onde ele está anunciado e principalmente mantê-lo longe de propostas indecentes e de especuladores? Você sabia que o contrato de exclusividade também pode livrar o seu barco de participar de uma espécie de leilão, onde o menor lance é o que vai prevalecer?</p>
        <button class="bg-s7green rounded-[7px] text-white flex justify-center items-center w-28 md:w-36 h-10">
          Saiba mais
        </button>
      </div>
    </div>
  )
}

export default Slider