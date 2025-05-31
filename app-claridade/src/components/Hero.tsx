
export default function Hero() {
  return (
    <div className="relative w-48 h-48 mx-auto mb-8">
      <div className="absolute inset-0 rounded-full bg-black/70 backdrop-blur-xl shadow-2xl"></div>
      <img src="img/logo.png" alt="Portal da Claridade" className="w-48 h-48 rounded-full border-8 border-orange-400 animate-pulse transition-transform duration-500 hover:rotate-6 hover:scale-105 relative z-10 shadow-xl" />
    </div>
  );
} 