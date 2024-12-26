// Translations
const translations = {
    tg: {
        "home": "Асосӣ",
        "about": "Дар бораи мо",
        "help": "Кӯмак",
        "statistics": "Омор",
        "resources": "Манбаъҳо",
        "contact": "Тамос",
        "hero-title": "Муқобили зӯроварии ҷинсӣ",
        "hero-subtitle": "Ҳар як инсон ҳуқуқи зиндагии бехатар дорад. Биёед якҷоя муқобили зӯроварӣ мубориза барем.",
        "help-now": "Кӯмаки фаврӣ",
        "more-info": "Маълумоти бештар",
        "about-title": "Дар бораи зӯроварии ҷинсӣ",
        "what-is": "Чӣ аст зӯроварии ҷинсӣ?",
        "what-is-text": "Зӯроварии ҷинсӣ ин амали ғайриқонунӣ ва номатлуб аст, ки ба ҳуқуқҳои инсон таҷовуз мекунад.",
        "signs": "Аломатҳои зӯроварӣ",
        "what-to-do": "Чӣ бояд кард?",
        "stats-title": "Омори зӯроварии ҷинсӣ",
        "victims": "Қурбониён",
        "calls": "Муроҷиатҳо",
        "centers": "Марказҳо",
        "survivors": "Наҷотёфтагон",
        "resources-title": "Манбаъҳои муфид",
        "materials": "Маводҳои таълимӣ",
        "videos": "Видеоҳои омӯзишӣ",
        "help-centers": "Марказҳои кӯмак",
        "documents": "Ҳуҷҷатҳои ҳуқуқӣ",
        "contact-title": "Бо мо дар тамос бошед",
        "name": "Номи шумо",
        "email": "Почтаи электронӣ",
        "message": "Паёми худро нависед",
        "send": "Фиристодан"
    },
    ru: {
        "home": "Главная",
        "about": "О нас",
        "help": "Помощь",
        "statistics": "Статистика",
        "resources": "Ресурсы",
        "contact": "Контакты",
        "hero-title": "Против гендерного насилия",
        "hero-subtitle": "Каждый человек имеет право на безопасную жизнь. Давайте вместе бороться против насилия.",
        "help-now": "Срочная помощь",
        "more-info": "Подробнее",
        "about-title": "О сексуальном насилии",
        "what-is": "Что такое сексуальное насилие?",
        "what-is-text": "Сексуальное насилие - это противоправное и нежелательное действие, нарушающее права человека.",
        "signs": "Признаки насилия",
        "what-to-do": "Что делать?",
        "stats-title": "Статистика сексуального насилия",
        "victims": "Жертвы",
        "calls": "Обращения",
        "centers": "Центры",
        "survivors": "Выжившие",
        "resources-title": "Полезные ресурсы",
        "materials": "Учебные материалы",
        "videos": "Обучающие видео",
        "help-centers": "Центры помощи",
        "documents": "Правовые документы",
        "contact-title": "Свяжитесь с нами",
        "name": "Ваше имя",
        "email": "Электронная почта",
        "message": "Напишите ваше сообщение",
        "send": "Отправить"
    },
    en: {
        "home": "Home",
        "about": "About",
        "help": "Help",
        "statistics": "Statistics",
        "resources": "Resources",
        "contact": "Contact",
        "hero-title": "Against Gender Violence",
        "hero-subtitle": "Every person has the right to a safe life. Let's fight against violence together.",
        "help-now": "Get Help Now",
        "more-info": "Learn More",
        "about-title": "About Gender Violence",
        "what-is": "What is Gender Violence?",
        "what-is-text": "Gender violence is an unlawful and unwanted act that violates human rights.",
        "signs": "Signs of Violence",
        "what-to-do": "What to Do?",
        "stats-title": "Gender Violence Statistics",
        "victims": "Victims",
        "calls": "Helpline Calls",
        "centers": "Centers",
        "survivors": "Survivors",
        "resources-title": "Useful Resources",
        "materials": "Educational Materials",
        "videos": "Training Videos",
        "help-centers": "Help Centers",
        "documents": "Legal Documents",
        "contact-title": "Contact Us",
        "name": "Your Name",
        "email": "Email",
        "message": "Write your message",
        "send": "Send"
    }
};

document.addEventListener('DOMContentLoaded', () => {
    // Theme toggle functionality
    const themeToggle = document.getElementById('theme-toggle');
    const moonIcon = themeToggle.querySelector('.fa-moon');

    // Check for saved theme preference
    if (localStorage.getItem('theme') === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
        moonIcon.classList.replace('fa-moon', 'fa-sun');
    }

    // Toggle theme
    themeToggle.addEventListener('click', () => {
        if (document.documentElement.getAttribute('data-theme') === 'dark') {
            document.documentElement.removeAttribute('data-theme');
            moonIcon.classList.replace('fa-sun', 'fa-moon');
            localStorage.setItem('theme', 'light');
        } else {
            document.documentElement.setAttribute('data-theme', 'dark');
            moonIcon.classList.replace('fa-moon', 'fa-sun');
            localStorage.setItem('theme', 'dark');
        }
    });

    // Language selector functionality
    const langButtons = document.querySelectorAll('.lang-btn');

    // Check for saved language preference
    const savedLang = localStorage.getItem('language') || 'tg';
    document.documentElement.setAttribute('data-lang', savedLang);
    document.querySelector(`.lang-btn[data-lang="${savedLang}"]`).classList.add('active');

    // Update all text content based on selected language
    function updateContent(lang) {
        document.querySelectorAll('[data-translate]').forEach(element => {
            const key = element.getAttribute('data-translate');
            if (translations[lang][key]) {
                element.textContent = translations[lang][key];
            }
        });

        // Update navigation
        document.querySelectorAll('nav a').forEach(link => {
            const key = link.getAttribute('href').replace('#', '');
            const icon = link.querySelector('i').outerHTML;
            if (translations[lang][key]) {
                link.innerHTML = `${icon} ${translations[lang][key]}`;
            }
        });

        // Update buttons
        document.querySelectorAll('button[data-translate]').forEach(button => {
            const key = button.getAttribute('data-translate');
            if (translations[lang][key]) {
                const icon = button.querySelector('i')?.outerHTML || '';
                button.innerHTML = `${icon} ${translations[lang][key]}`;
            }
        });

        // Update form placeholders
        document.querySelectorAll('input[data-translate], textarea[data-translate]').forEach(input => {
            const key = input.getAttribute('data-translate');
            if (translations[lang][key]) {
                input.placeholder = translations[lang][key];
            }
        });
    }

    // Language switch functionality
    langButtons.forEach(button => {
        button.addEventListener('click', () => {
            const lang = button.getAttribute('data-lang');
            
            // Update active button
            langButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            // Update HTML lang attribute and save preference
            document.documentElement.setAttribute('data-lang', lang);
            localStorage.setItem('language', lang);
            
            // Update all content
            updateContent(lang);
        });
    });

    // Initial content update
    updateContent(savedLang);

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Active navigation link highlighting
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav a');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= (sectionTop - sectionHeight / 3)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').slice(1) === current) {
                link.classList.add('active');
            }
        });
    });

    // Form submission handling
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            // Add your form submission logic here
            alert('Паём фиристода шуд!');
            contactForm.reset();
        });
    }

    // Statistics animation
    const statNumbers = document.querySelectorAll('.stat-number');
    const animationDuration = 2000; // 2 seconds

    function animateStats() {
        statNumbers.forEach(stat => {
            const target = parseInt(stat.textContent);
            const increment = target / (animationDuration / 16); // 60fps
            let current = 0;

            const updateCount = () => {
                if (current < target) {
                    current += increment;
                    stat.textContent = Math.ceil(current) + '+';
                    requestAnimationFrame(updateCount);
                } else {
                    stat.textContent = target + '+';
                }
            };

            updateCount();
        });
    }

    // Intersection Observer for statistics animation
    const statsSection = document.querySelector('.statistics-section');
    if (statsSection) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateStats();
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        observer.observe(statsSection);
    }

    // Resource card hover effects
    const resourceCards = document.querySelectorAll('.resource-card');
    resourceCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px)';
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
        });
    });
});
