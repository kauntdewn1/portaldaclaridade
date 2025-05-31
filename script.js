document.addEventListener("DOMContentLoaded", () => {
    const btn = document.querySelector(".btn");
  
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      
      const numero = "5599999999999"; // Troca pelo número do Whats com DDI e DDD
      const mensagem = encodeURIComponent("Olá! Tenho interesse no Portal da Claridade 🌟");
      const link = `https://wa.me/${numero}?text=${mensagem}`;
  
      window.open(link, "_blank");
    });
  });
  