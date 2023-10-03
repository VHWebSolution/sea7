import React, { useState, useRef, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { MdDirectionsBoat } from 'react-icons/md';
import {
  BiChevronRight,
  BiChevronLeft
} from 'react-icons/bi';

import axios from 'axios';

const ProductDetail = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [imagemP, setImagemP] = useState(null);
  const [mensagem, setMensagem] = useState({
    nome: '',
    telefone: '',
    email: '',
    contexto: '',
    mensagem: ''
  });


  const handleChange = (event) => {
    const { name, value } = event.target;
    setMensagem((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [allImagesModalOpen, setAllImagesModalOpen] = useState(false);

  const [isDragging, setIsDragging] = useState(false);
  const [dragStartX, setDragStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const [selectedSecondaryImageIndex, setSelectedSecondaryImageIndex] = useState(0);

  const nextSecondaryImage = () => {
    setSelectedSecondaryImageIndex((prevIndex) =>
      (prevIndex + 1) % (imagemP ? imagemP.length : 0)
    );
  };

  const prevSecondaryImage = () => {
    setSelectedSecondaryImageIndex((prevIndex) =>
      prevIndex === 0 ? (imagemP ? imagemP.length - 1 : 0) : prevIndex - 1
    );
  };

  const scrollNext = () => {
    const container = containerRef.current;
    if (container) {
      container.scrollLeft += 100;
    }
  };

  const scrollPrev = () => {
    const container = containerRef.current;
    if (container) {
      container.scrollLeft -= 100;
    }
  };

  const openAllImagesModal = () => {
    setAllImagesModalOpen(true);
  };

  const closeAllImagesModal = () => {
    setAllImagesModalOpen(false);
  };

  const openModal = (index) => {
    setSelectedImageIndex(index);
    setModalOpen(true);
  };

  const nextImage = () => {
    setSelectedImageIndex((prevIndex) => (prevIndex + 1) % (imagemP ? imagemP.length : 0));
  };

  const prevImage = () => {
    setSelectedImageIndex((prevIndex) =>
      prevIndex === 0 ? (imagemP ? imagemP.length - 1 : 0) : prevIndex - 1
    );
  };

  useEffect(() => {
    fetchProduct();
  }, [productId]);

  useEffect(() => {
    fetchImages();
  }, [productId]);

  const containerRef = useRef(null);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setDragStartX(e.clientX);
    setScrollLeft(containerRef.current.scrollLeft);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const delta = e.clientX - dragStartX;
    containerRef.current.scrollLeft = scrollLeft - delta;
  };

  useEffect(() => {
    const container = containerRef.current;

    if (container) {
      const handleMouseDown = (e) => {
        setIsDragging(true);
        setDragStartX(e.clientX);
        setScrollLeft(container.scrollLeft);
      };

      const handleMouseUp = () => {
        setIsDragging(false);
      };

      const handleMouseMove = (e) => {
        if (!isDragging) return;
        const delta = e.clientX - dragStartX;
        container.scrollLeft = scrollLeft - delta;
      };

      container.addEventListener('mousedown', handleMouseDown);
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);

      return () => {
        container.removeEventListener('mousedown', handleMouseDown);
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [isDragging, dragStartX, scrollLeft]);

  const fetchProduct = async () => {
    try {
      const response = await axios.get(`https://www.sea7api.com.br/buscarPorId/${productId}`);
      setProduct(response.data);
      setMensagem((prevState) => ({
        ...prevState,
        contexto: `Embarcação: ${response.data.nomeProduto}`,
      }));
    } catch (error) {
      console.error('Erro ao buscar produto:', error);
    }
  };

  const fetchImages = async () => {
    try {
      const response = await axios.get(`https://www.sea7api.com.br/grupoImagens/${productId}`);
      setImagemP(response.data);
    } catch (error) {
      console.error('Erro ao buscar imagem:', error);
    }
  };

  const fetchMensagem = async () => {
    try {
      const response = await axios.post('https://www.sea7api.com.br/mensagem/salvar', mensagem);

      if (response.status === 200) {
        console.log('Mensagem enviada com sucesso:', response.data);
      } else {
        console.log('Erro ao enviar a mensagem. Status:', response.status);
      }
    } catch (error) {
      console.error('Erro ao enviar a mensagem:', error);
    }
  };

  if (!product) {
    return <div>Carregando...</div>;
  }

  return(
  <>
      <div className='flex justify-center mt-24 px-4'>
        <div className='flex flex-col w-[1200px] my-12 gap-10 sm:flex-row sm:gap-10'>

          {/* Parte esquerda (imagens) */}
          <div className='flex-col'>
      {imagemP && imagemP.length > 0 ? (
        <img
          className='object-cover object-center w-[422px] h-[400px] rounded-[10px]'
          src={`data:${imagemP[selectedImageIndex].type};base64,${imagemP[selectedImageIndex].base64Image}`}
          alt={`Secondary Preview ${selectedImageIndex}`}
          onClick={openAllImagesModal}
        />
      ) : (
        <div>No images available</div>
      )}

      <div
        className='imgs-container mt-2 flex space-x-2 max-w-[420px] overflow-hidden cursor-grab'
        ref={containerRef}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        {imagemP && imagemP.length > 0 ? (
          imagemP.map((image, index) => (
            <img
              key={index}
              src={`data:${image.type};base64,${image.base64Image}`}
              alt={`Secondary Preview ${index}`}
              className={`w-[100px] h-[120px] object-cover object-center ${
                index === selectedImageIndex ? 'border-2 border-s7green' : ''
              }`}
              onClick={() => openModal(index)}
              draggable="false"
            />
          ))
        ) : (
          <div>No images available</div>
        )}
      </div>
            
            {/* Botões de navegação do carrossel */}
            <div className='flex justify-between mt-2'>
              <button onClick={scrollPrev}>
                <BiChevronLeft size={24} />
              </button>
              <button onClick={scrollNext}>
                <BiChevronRight size={24} />
              </button>
            </div>
          </div>

          {/* Parte direita (detalhes do produto) */}
          <div className='sm:w-[500px] mb-10'>
            <h1 className='text-2xl font-bold mb-2'>{product.nomeProduto}</h1>
            <p className='mb-5'>{product.descricaoCurta}</p>
            <div className='flex justify-between'>
              <p>R$ {product.precoProduto.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</p>
              <div className='bg-s7green w-[80px] h-[25px] rounded-[5px] text-white flex items-center'>
                <MdDirectionsBoat className='ml-[0.4rem]' />
                <h1 className='ml-2 text-[14px]'>{product.quantidadeProduto} pés</h1>
              </div>
            </div>
            <p className='mt-5 text-justify'>
              {product.descricaoCompleta.split('\n').map((line, index) => (
                <React.Fragment key={index}>
                  {line.trim()} 
                  <br />
                </React.Fragment>
              ))}
            </p>
          </div>
        </div>
      </div>

      <div className='flex justify-center bg-gray-100 py-20'>
        <div className='flex justify-center items-center'>
          <div>
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
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
