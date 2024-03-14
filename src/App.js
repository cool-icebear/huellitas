import React from 'react';

function App() {
  return (
    <div className="flex flex-col min-h-[100vh]">
      <header className="px-4 lg:px-6 py-6 lg:py-10 flex items-center">
        <div className="container flex items-center gap-4 px-4 md:px-6">
          <a className="flex items-center justify-center space-x-2 text-2xl font-bold" href="#" rel="ugc">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 rounded-full bg-gray-200/40 backdrop-filter backdrop-blur-sm p-0.5">
              <circle cx="11" cy="4" r="2"></circle>
              <circle cx="18" cy="8" r="2"></circle>
              <circle cx="20" cy="16" r="2"></circle>
              <path d="M9 10a5 5 0 0 1 5 5v3.5a3.5 3.5 0 0 1-6.84 1.045Q6.52 17.48 4.46 16.84A3.5 3.5 0 0 1 5.5 10Z"></path>
            </svg>
            <span>Huellitas de Amor</span>
          </a>
          <nav className="ml-auto flex gap-4 sm:gap-6">
            <a className="text-sm font-medium hover:underline underline-offset-4" href="#" rel="ugc">Adopción</a>
            <a className="text-sm font-medium hover:underline underline-offset-4" href="#" rel="ugc">Voluntariado</a>
            <a className="text-sm font-medium hover:underline underline-offset-4" href="#" rel="ugc">Donaciones</a>
            <a className="text-sm font-medium hover:underline underline-offset-4" href="#" rel="ugc">Contacto</a>
          </nav>
        </div>
      </header>
      {/* Resto del contenido */}
    </div>
  );
}

export default App;
