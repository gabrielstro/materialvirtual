import React from 'react';

function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-4xl font-bold mb-4  ">MaterialVirtual</h1>
      <p className="text-lg text-gray-700 mb-8">Especializados em tráfego pago e desenvolvimento de landing pages, transformamos cliques em resultados tangíveis para sua marca.
      </p>
      <img className="h-64 w-64 object-cover rounded-full" src="image01.jpg" alt="A description of the image" />
    </div>
  );
}

export default HomePage;