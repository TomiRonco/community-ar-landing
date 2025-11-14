'use client';

export default function FooterSection() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-gray-400 text-sm mb-2">
            © {currentYear} Community AR. Todos los derechos reservados.
          </p>
          <p className="text-gray-500 text-xs">
            Diseñado y desarrollado por{' '}
            <a 
              href="https://www.instagram.com/startek.in/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-primary-blue to-primary-pink bg-clip-text text-transparent font-semibold hover:from-primary-pink hover:to-primary-blue transition-all duration-300"
            >
              Startek.in
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}