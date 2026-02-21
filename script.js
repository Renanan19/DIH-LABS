// Scroll Reveal
const revealElements = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('active');
    });
}, { threshold: 0.1 });
revealElements.forEach(el => observer.observe(el));

// Hero animation on load
window.addEventListener('load', () => {
    const heroReveal = document.querySelector('.hero .reveal');
    if (heroReveal) heroReveal.classList.add('active');
});

// Hamburger Menu
const menuToggle = document.querySelector('.menu-toggle');
const mainNav = document.getElementById('main-nav');

if (menuToggle && mainNav) {
    menuToggle.addEventListener('click', () => {
        const isOpen = mainNav.classList.toggle('open');
        menuToggle.classList.toggle('open', isOpen);
        menuToggle.setAttribute('aria-expanded', String(isOpen));
        menuToggle.setAttribute('aria-label', isOpen ? 'Fermer le menu' : 'Ouvrir le menu');
        document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    mainNav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            mainNav.classList.remove('open');
            menuToggle.classList.remove('open');
            menuToggle.setAttribute('aria-expanded', 'false');
            menuToggle.setAttribute('aria-label', 'Ouvrir le menu');
            document.body.style.overflow = '';
        });
    });
}

// FAQ Accordion avec accessibilité clavier
const faqItems = document.querySelectorAll('.faq-item');
faqItems.forEach((item, index) => {
    const btn = item.querySelector('.faq-question');

    if (btn) {
        btn.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            faqItems.forEach(i => {
                i.classList.remove('active');
                i.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
            });
            if (!isActive) {
                item.classList.add('active');
                btn.setAttribute('aria-expanded', 'true');
            }
        });

        btn.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                item.classList.remove('active');
                btn.setAttribute('aria-expanded', 'false');
                btn.focus();
            }
            if (e.key === 'ArrowDown') {
                e.preventDefault();
                const next = faqItems[index + 1];
                if (next) {
                    const nextBtn = next.querySelector('.faq-question');
                    if (nextBtn) nextBtn.focus();
                }
            }
            if (e.key === 'ArrowUp') {
                e.preventDefault();
                const prev = faqItems[index - 1];
                if (prev) {
                    const prevBtn = prev.querySelector('.faq-question');
                    if (prevBtn) prevBtn.focus();
                }
            }
        });
    }
});

// Modal Mentions Légales
const modalTrigger = document.getElementById('mentions-legales-trigger');
const modal = document.getElementById('mentions-modal');
const modalClose = modal ? modal.querySelector('.modal-close') : null;

if (modalTrigger && modal) {
    modalTrigger.addEventListener('click', (e) => {
        e.preventDefault();
        modal.style.display = 'flex'; // Forcer l'affichage flex
        setTimeout(() => {
            modal.classList.add('active');
            modal.setAttribute('aria-hidden', 'false');
            document.body.style.overflow = 'hidden';
        }, 10);
    });

    const closeModal = () => {
        modal.classList.remove('active');
        modal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
        setTimeout(() => {
            modal.style.display = 'none'; // Cacher complètement après l'animation
        }, 500); // Temps de la transition CSS
    };

    if (modalClose) {
        modalClose.addEventListener('click', closeModal);
    }

    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });

    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) closeModal();
    });
}
