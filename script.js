const cars = [
    {
        id: 1,
        title: "Porsche 911 GT3",
        type: "sport",
        typeLabel: "Sportowy",
        price: "899 000 zł",
        image: "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?w=800",
        desc: "Legendarny sportowiec z silnikiem boxer umieszczonym za tylną osią. Porsche 911 GT3 to kwintesencja sportowej jazdy - precyzyjne prowadzenie, niesamowity dźwięk wolnossącego silnika i wygląd, który zatrzymuje spojrzenia. Idealny zarówno na tor, jak i na codzienną jazdę dla prawdziwych entuzjastów motoryzacji.",
        specs: ["Silnik: 4.0L Boxer 6-cylindrowy", "Moc: 510 KM @ 8400 obr/min", "Moment: 470 Nm", "0-100 km/h: 3.4 sekundy", "Prędkość maksymalna: 318 km/h", "Skrzynia: 7-biegowa PDK / 6-biegowa manualna", "Rok produkcji: 2024"]
    },
    {
        id: 2,
        title: "Mercedes-AMG GT",
        type: "sport",
        typeLabel: "Sportowy",
        price: "1 150 000 zł",
        image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800",
        desc: "Niemiecka precyzja inżynieryjna w sportowym wydaniu. Mercedes-AMG GT łączy luksus marki Mercedes z nieokiełznaną mocą działu AMG. Długa maska, kompaktowa kabina i potężny silnik V8 tworzą proporcje prawdziwego grand tourera gotowego pokonywać setki kilometrów w czystym stylu.",
        specs: ["Silnik: 4.0L V8 Biturbo", "Moc: 585 KM", "Moment: 700 Nm", "0-100 km/h: 3.2 sekundy", "Prędkość maksymalna: 315 km/h", "Napęd: tylny (RWD)", "Rok produkcji: 2024"]
    },
    {
        id: 3,
        title: "BMW X7 M60i xDrive",
        type: "suv",
        typeLabel: "SUV",
        price: "750 000 zł",
        image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800",
        desc: "Flagowy SUV BMW, który nie idzie na żadne kompromisy. X7 M60i oferuje przestrzeń dla całej rodziny, luksusowe wykończenie wnętrza oraz dynamikę godną sportowego sedana. Potężny silnik V8 zapewnia imponujące osiągi, a zaawansowane systemy bezpieczeństwa dają spokój ducha.",
        specs: ["Silnik: 4.4L V8 TwinPower Turbo", "Moc: 530 KM", "Moment: 750 Nm", "0-100 km/h: 4.7 sekundy", "Napęd: xDrive (AWD)", "Liczba miejsc: 7", "Rok produkcji: 2024"]
    },
    {
        id: 4,
        title: "Rolls-Royce Ghost",
        type: "luxury",
        typeLabel: "Luksusowy",
        price: "2 500 000 zł",
        image: "https://images.unsplash.com/photo-1631295868223-63265b40d9e4?w=800",
        desc: "Uosobienie luksusu i prestiżu. Rolls-Royce Ghost to samochód dla tych, którzy oczekują absolutnej perfekcji w każdym detalu. Ręcznie wykonane wnętrze z najlepszej skóry, drewna i aluminium, cichy jak szepty silnik V12 i 'magic carpet ride' - tak można opisać jazdę tym arcydziełem motoryzacji.",
        specs: ["Silnik: 6.75L V12 Twin-Turbo", "Moc: 571 KM", "Moment: 850 Nm", "Wnętrze: Skóra bydlęca najwyższej jakości", "Wykończenie: Drewno i szczotkowane aluminium", "Starlight Headliner: W standardzie", "Rok produkcji: 2024"]
    },
    {
        id: 5,
        title: "Lamborghini Huracán EVO",
        type: "sport",
        typeLabel: "Sportowy",
        price: "1 800 000 zł",
        image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800",
        desc: "Włoski temperament zamknięty w agresywnej, aerodynamicznej sylwetce. Lamborghini Huracán EVO to czysty adrenalin - wolnossący silnik V10, który krzyczy przy 8000 obrotów, błyskawiczne reakcje i wygląd rodem z przyszłości. Każda przejażdżka to niezapomniane przeżycie.",
        specs: ["Silnik: 5.2L V10 wolnossący", "Moc: 640 KM @ 8000 obr/min", "Moment: 600 Nm", "0-100 km/h: 2.9 sekundy", "Prędkość maksymalna: 325 km/h", "Napęd: AWD z wektorowaniem momentu", "Rok produkcji: 2024"]
    },
    {
        id: 6,
        title: "Range Rover Autobiography",
        type: "suv",
        typeLabel: "SUV",
        price: "890 000 zł",
        image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800",
        desc: "Brytyjski arystokrata wśród SUV-ów. Range Rover Autobiography łączy niezrównany luksus z prawdziwymi możliwościami terenowymi. Eleganckie, minimalistyczne wnętrze, innowacyjny system zawieszenia i obecność na drodze, której nie da się zignorować.",
        specs: ["Silnik: 4.4L V8 Twin-Turbo Diesel", "Moc: 350 KM", "Moment: 700 Nm", "Napęd: Intelligent All-Wheel Drive", "Wnętrze: Skóra Semi-Aniline", "Terrain Response 2: W standardzie", "Rok produkcji: 2024"]
    },
    {
        id: 7,
        title: "Bentley Continental GT",
        type: "luxury",
        typeLabel: "Luksusowy",
        price: "1 400 000 zł",
        image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800",
        desc: "Grand Tourer dla prawdziwych koneserów. Bentley Continental GT to połączenie brytyjskiego rzemiosła z imponującymi osiągami. Silnik W12 o mocy 659 KM, wnętrze wykonane przez rzemieślników z Crewe i zdolność do pokonywania kontynentów w absolutnym komforcie.",
        specs: ["Silnik: 6.0L W12 Twin-Turbo", "Moc: 659 KM", "Moment: 900 Nm", "0-100 km/h: 3.6 sekundy", "Prędkość maksymalna: 333 km/h", "Wnętrze: 15 wariantów skóry do wyboru", "Rok produkcji: 2024"]
    },
    {
        id: 8,
        title: "Ferrari Roma",
        type: "sport",
        typeLabel: "Sportowy",
        price: "1 350 000 zł",
        image: "https://images.unsplash.com/photo-1592198084033-aade902d1aae?w=800",
        desc: "La Nuova Dolce Vita - tak Ferrari opisuje model Roma. To elegancki grand tourer, który łączy klasyczny włoski styl z nowoczesnymi technologiami. Silnik V8 Biturbo, 8-biegowa skrzynia DCT i linie nadwozia inspirowane Rzymem lat 60. tworzą samochód wyjątkowy.",
        specs: ["Silnik: 3.9L V8 Twin-Turbo", "Moc: 620 KM @ 7500 obr/min", "Moment: 760 Nm", "0-100 km/h: 3.4 sekundy", "Prędkość maksymalna: 320 km/h", "Skrzynia: 8-biegowa DCT", "Rok produkcji: 2024"]
    }
];

const carGrid = document.getElementById('car-grid');
const modal = document.getElementById('car-modal');
const filterButtons = document.querySelectorAll('.filter-btn');
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
const contactForm = document.getElementById('contact-form');
const newsletterForm = document.getElementById('newsletter-form');

document.addEventListener('DOMContentLoaded', () => {
    renderCars(cars);
    setupFilters();
    setupModal();
    setupMobileNav();
    setupForms();
    setupSmoothScroll();
    setupScrollEffects();

    console.log('🚗 Sin Motors - Strona załadowana pomyślnie');
    console.log('📍 Lokalizacja: Żuromin, ul. Lidzbarska 27');
});

function renderCars(data) {
    carGrid.innerHTML = '';

    if (data.length === 0) {
        carGrid.innerHTML = '<p style="text-align: center; color: var(--text-muted); grid-column: 1/-1; padding: 40px;">Brak samochodów w tej kategorii.</p>';
        return;
    }

    data.forEach((car, index) => {
        const card = document.createElement('div');
        card.className = 'car-card';
        card.style.animationDelay = `${index * 0.1}s`;
        card.innerHTML = `
            <div class="car-card-image">
                <img src="${car.image}" alt="${car.title}" loading="lazy">
            </div>
            <div class="car-card-content">
                <span class="car-card-badge">${car.typeLabel}</span>
                <h3 class="car-card-title">${car.title}</h3>
                <p class="car-card-price">${car.price}</p>
            </div>
        `;
        card.addEventListener('click', () => {
            console.log(`👆 Kliknięto: ${car.title}`);
            openModal(car);
        });
        carGrid.appendChild(card);
    });
}

function setupFilters() {
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filter = btn.dataset.filter;
            console.log(`🔍 Filtrowanie: ${filter}`);

            if (filter === 'all') {
                renderCars(cars);
            } else {
                const filtered = cars.filter(car => car.type === filter);
                renderCars(filtered);
            }
        });
    });
}

function setupModal() {
    const closeBtn = modal.querySelector('.close-modal');

    closeBtn.addEventListener('click', closeModal);

    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });
}

function openModal(car) {
    document.getElementById('modal-img').src = car.image;
    document.getElementById('modal-img').alt = car.title;
    document.getElementById('modal-type').innerText = car.typeLabel;
    document.getElementById('modal-title').innerText = car.title;
    document.getElementById('modal-price').innerText = car.price;
    document.getElementById('modal-desc').innerText = car.desc;

    const specsList = document.getElementById('modal-specs');
    specsList.innerHTML = car.specs.map(spec => `<li>${spec}</li>`).join('');

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';

    console.log(`📋 Otwarto szczegóły: ${car.title}`);
    console.log('   Cena:', car.price);
    console.log('   Typ:', car.typeLabel);
}

function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
    console.log('❌ Zamknięto modal');
}

function setupMobileNav() {
    navToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        console.log('📱 Menu mobilne:', navLinks.classList.contains('active') ? 'otwarte' : 'zamknięte');
    });

    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });
}

function setupForms() {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);

        console.log('═══════════════════════════════════════');
        console.log('📧 NOWA WIADOMOŚĆ Z FORMULARZA KONTAKTOWEGO');
        console.log('═══════════════════════════════════════');
        console.log('👤 Imię i Nazwisko:', data.name);
        console.log('📧 Email:', data.email);
        console.log('📞 Telefon:', data.phone || 'Nie podano');
        console.log('📋 Temat:', data.subject);
        console.log('🚗 Interesujący samochód:', data['car-interest'] || 'Nie podano');
        console.log('💬 Wiadomość:', data.message);
        console.log('✅ Zgoda na przetwarzanie danych:', data.consent ? 'TAK' : 'NIE');
        console.log('📅 Data wysłania:', new Date().toLocaleString('pl-PL'));
        console.log('═══════════════════════════════════════');

        alert(`Dziękujemy za wiadomość, ${data.name}!\n\nTwoje zapytanie zostało zarejestrowane.\nOdezwiemy się wkrótce na adres: ${data.email}\n\n(Sprawdź konsolę przeglądarki - F12)`);
        contactForm.reset();
    });

    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const email = newsletterForm.querySelector('input').value;

        console.log('═══════════════════════════════════════');
        console.log('📬 NOWY ZAPIS DO NEWSLETTERA');
        console.log('═══════════════════════════════════════');
        console.log('📧 Email:', email);
        console.log('📅 Data zapisu:', new Date().toLocaleString('pl-PL'));
        console.log('═══════════════════════════════════════');

        alert(`Dziękujemy za zapis do newslettera!\n\nPotwierdzenie zostało wysłane na: ${email}\n\n(Sprawdź konsolę przeglądarki - F12)`);
        newsletterForm.reset();
    });
}

function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#') return;

            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                const navHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = target.offsetTop - navHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });

                console.log(`🔗 Nawigacja do: ${href}`);
            }
        });
    });
}

function setupScrollEffects() {
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.style.padding = '15px 5%';
            navbar.style.background = 'rgba(10, 22, 40, 0.98)';
        } else {
            navbar.style.padding = '20px 5%';
            navbar.style.background = 'rgba(10, 22, 40, 0.95)';
        }
    });
}

window.closeModal = closeModal;
