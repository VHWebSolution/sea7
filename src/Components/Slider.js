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
        <div className='bg-black/[.46] w-[60%] h-[50%] mt-20 rounded-[7px] flex flex-col justify-center items-center'>
           <h1 className='text-[32px] text-white font-medium'>Venda seu Barco</h1>
           <p className='text-[16px] text-white p-5 text-center w-2/3'>Que tal vender seu barco sem aborrecimentos, saber com quem e onde ele esta anunciado e principalmente mante-lo longe de propostas indecentes e de especuladores? Você sabia que o contrato de exclusividade também pode livrar o seu barco de participar de uma especie de leilão, onde o menor lance é o que vai prevalecer?</p>
            <button  className='bg-s7green text-white items-center w-[120px] h-[35px] rounded-[5px]'>
            Saiba mais
            </button>
        </div>
    </div>
  )
}

export default Slider