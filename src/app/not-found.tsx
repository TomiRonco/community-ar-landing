export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-blue/10 to-primary-pink/10 flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-primary-blue mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Página no encontrada</h2>
        <p className="text-gray-600 mb-8">Lo sentimos, la página que buscas no existe.</p>
        <a 
          href="/"
          className="inline-flex items-center px-6 py-3 bg-primary-blue text-white font-medium rounded-lg hover:bg-primary-blue/90 transition-colors"
        >
          ← Volver al inicio
        </a>
      </div>
    </div>
  );
}