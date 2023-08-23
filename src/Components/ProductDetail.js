import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ProductDetail = () => {
  const { productId } = useParams(); // Pega o ID do produto da URL
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetchProduct();
  }, []);

  const fetchProduct = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/buscarPorId/${productId}`);
      setProduct(response.data);
    } catch (error) {
      console.error('Erro ao buscar produto:', error);
    }
  };

  if (!product) {
    return <div>Carregando...</div>;
  }

  return (
    <div className='m-4'>
      {/* Renderize os detalhes do produto aqui */}
      <img
        className='object-cover object-center w-[400px] h-[300px]'
        src={`data:${product.imagemPrincipal[0].type};base64,${product.imagemPrincipal[0].base64Image}`}
        alt={product.nomeProduto}
      />
      <h1 className='text-2xl font-bold'>{product.nomeProduto}</h1>
      <p>{product.descricaoCurta}</p>
      <p>{product.descricaoCompleta}</p>
      <p>R$ {product.precoProduto.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</p>
      {/* Restante dos detalhes */}
    </div>
  );
};

export default ProductDetail;
