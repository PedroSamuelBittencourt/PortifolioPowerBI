tailwind.config = {
    theme: {
     extend: {
      colors: {
       charcoal: "#121212",
       graphite: "#1E1E1E",
       mediumgray: "#2E2E2E",
       petrolblue: "#0D6E6E",
       neongreen: "#00C896",
       coralred: "#E63946",
       icewhite: "#EAEAEA",
      },
      fontFamily: {
       sans: ["Inter", "ui-sans-serif", "system-ui"],
      },
      boxShadow: {
       "neongreen-glow":
        "0 4px 15px 0 rgba(0, 200, 150, 0.6), 0 0 10px 3px rgba(0, 200, 150, 0.5)",
       "petrolblue-glow":
        "0 4px 15px 0 rgba(13, 110, 110, 0.6), 0 0 10px 3px rgba(13, 110, 110, 0.5)",
       "coralred-glow":
        "0 4px 15px 0 rgba(230, 57, 70, 0.6), 0 0 10px 3px rgba(230, 57, 70, 0.5)",
      },
      transitionProperty: {
       transformshadow: "transform, box-shadow",
      },
     },
    },
   };
  const btn = document.getElementById("menu-btn");
  const menu = document.getElementById("menu");
  if (btn && menu) {
    btn.addEventListener("click", () => {
      menu.classList.toggle("hidden");
      const icon = btn.querySelector("i");
      if (!icon) return;
      icon.classList.toggle("fa-bars");
      icon.classList.toggle("fa-times");
      });
    }

   document.addEventListener("DOMContentLoaded", function () {
    const btn = document.getElementById("menu-btn");
    const menu = document.getElementById("menu");

    btn.addEventListener("click", () => {
     menu.classList.toggle("hidden");
     const icon = btn.querySelector("i");
     if (icon.classList.contains("fa-bars")) {
      icon.classList.remove("fa-bars");
      icon.classList.add("fa-times");
     } else {
      icon.classList.remove("fa-times");
      icon.classList.add("fa-bars");
     }
    });
   });
  
// (opcional) Menu mobile
document.addEventListener('DOMContentLoaded', function () {
  const menuBtn = document.getElementById('menu-btn');
  const menu = document.getElementById('menu');

  if (menuBtn && menu) {
    menuBtn.addEventListener('click', () => {
      menu.classList.toggle('hidden');
      const icon = menuBtn.querySelector('i');
      if (!icon) return;
      if (icon.classList.contains('fa-bars')) icon.classList.replace('fa-bars', 'fa-times');
      else icon.classList.replace('fa-times', 'fa-bars');
    });
  }
});

// ===== Modal + Abas =====
document.addEventListener('DOMContentLoaded', function () {
  const experienceBtn     = document.getElementById('experienceBtn');
  const modal             = document.getElementById('experienceModal');
  const closeModalHeader  = document.getElementById('closeModal');        // botão "Fechar" do header
  const closeModalFooter  = document.getElementById('closeModalFooter');  // botão "Fechar" do footer (se existir)

  // Se não houver modal no HTML, não faz nada
  if (!modal) return;

  // Helpers
  const openModal = () => {
    modal.classList.remove('hidden');
    // pequena espera para permitir transição CSS
    setTimeout(() => modal.classList.add('show'), 10);
    document.body.style.overflow = 'hidden';
    // garantir que a aba "Tudo" comece ativa e mostre todos os cards
    activateInitialTabState();
  };

  const closeModal = () => {
    modal.classList.remove('show');
    setTimeout(() => {
      modal.classList.add('hidden');
      document.body.style.overflow = '';
    }, 300);
  };

  const setActiveTabStyles = (btn) => {
    // reseta todos
    modal.querySelectorAll('.tab-btn').forEach(b => {
      b.classList.remove('border-neongreen', 'text-icewhite', 'shadow-neongreen-glow');
      b.classList.add('border-mediumgray', 'text-icewhite/80');
    });
    // ativa o clicado
    btn.classList.remove('border-mediumgray', 'text-icewhite/80');
    btn.classList.add('border-neongreen', 'text-icewhite', 'shadow-neongreen-glow');
  };

  const filterCards = (filter) => {
    modal.querySelectorAll('.experience-card').forEach(card => {
      const show = filter === 'all' || card.dataset.type === filter;
      card.classList.toggle('hidden', !show);
    });
  };

  const activateInitialTabState = () => {
    const defaultBtn = modal.querySelector('.tab-btn[data-filter="all"]') || modal.querySelector('.tab-btn');
    if (defaultBtn) {
      setActiveTabStyles(defaultBtn);
      filterCards(defaultBtn.dataset.filter || 'all');
    }
  };

  // Eventos de abrir/fechar
  if (experienceBtn) experienceBtn.addEventListener('click', openModal);
  if (closeModalHeader) closeModalHeader.addEventListener('click', closeModal);
  if (closeModalFooter) closeModalFooter.addEventListener('click', closeModal);

  // Fechar clicando no backdrop
  modal.addEventListener('click', (e) => { if (e.target === modal) closeModal(); });

  // Fechar com ESC
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) closeModal();
  });

  // Delegação de clique nas abas
  modal.addEventListener('click', function (e) {
    const btn = e.target.closest('.tab-btn');
    if (!btn) return;

    const filter = btn.dataset.filter || 'all';
    setActiveTabStyles(btn);
    filterCards(filter);
  });
});
  