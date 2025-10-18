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
            Diseñado y creado por <span className="bg-gradient-to-r from-primary-blue to-primary-pink bg-clip-text text-transparent font-semibold">Community AR</span>
          </p>
        </div>
      </div>
    </footer>
  );
}