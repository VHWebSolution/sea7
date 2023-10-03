import React from 'react';
import imagem from '../Assets/slider2.png';

const SliderBottom = () => {
  const containerStyle = {
    width: '100%',
    height: '35vh',
    display: 'flex',
    justifyContent: 'center',
    background: `url(${imagem}) center/cover`,
  };

  return (
    <div style={containerStyle}>
      <div className='flex justify-center items-center bg-s7greend/[.5] w-[725px] h-full'>
        <button onClick="/seminovos" className='bg-s7green text-white h-[65px] w-80 border border-white'>
          Veja todos os barcos disponíveis
        </button>
      </div>
    </div>
  );
};

export default SliderBottom;
