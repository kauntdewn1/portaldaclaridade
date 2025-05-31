import React from 'react';

export default function Headline() {
  return (
    <section className="bg-white/10 backdrop-blur-xl p-10 rounded-2xl shadow-2xl max-w-2xl w-full text-center border-0">
      <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-orange-400 drop-shadow-xl leading-tight">
        👉 Você sente que tem algo errado… mas não sabe o que é?
      </h1>
      <p className="mb-8 text-xl md:text-2xl text-white/90">
        Energia confusa, ansiedade, pensamentos repetitivos.<br />
        <span className="font-semibold text-pink-300">É Mercúrio Cazimi.</span> E você não precisa passar por isso sozinha.
      </p>
    </section>
  );
} 