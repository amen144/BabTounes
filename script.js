document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    // Mobile menu toggle
    const mobileMenuButton = document.querySelector('.mobile-menu-button');
    const mobileMenu = document.querySelector('.mobile-menu');
    
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', function() {
            mobileMenu.classList.toggle('open');
            const icon = mobileMenuButton.querySelector('i');
            if (mobileMenu.classList.contains('open')) {
                icon.setAttribute('data-feather', 'x');
            } else {
                icon.setAttribute('data-feather', 'menu');
            }
            feather.replace();
            
            // Scroll to bottom when opening
            if (mobileMenu.classList.contains('open')) {
                setTimeout(() => {
                    mobileMenu.scrollTop = mobileMenu.scrollHeight;
                }, 300);
            }
        });
    }
// Language selector functionality
    const languageSelectors = document.querySelectorAll('#language-selector, #mobile-language-selector');
    
    // Set initial language from localStorage if available
    const preferredLanguage = localStorage.getItem('preferredLanguage') || 'fr';
    languageSelectors.forEach(selector => {
        selector.value = preferredLanguage;
        
        selector.addEventListener('change', function() {
            const lang = this.value;
            localStorage.setItem('preferredLanguage', lang);
            
            // Update all other selectors to match
            languageSelectors.forEach(s => s.value = lang);
            
            // Translate page based on selected language
            translatePage(lang);
        });
    });

    function translatePage(lang) {
        // This is a placeholder - in a real implementation you would:
        // 1. Have JSON files with translations for each language
        // 2. Fetch the appropriate translation file
        // 3. Replace all translatable text on the page
        
        switch(lang) {
            case 'fr':
                alert("La page sera traduite en français");
                break;
            case 'en':
                alert("Page will be translated to English");
                break;
            case 'ar':
                alert("سيتم ترجمة الصفحة إلى العربية");
                break;
            case 'de':
                alert("Seite wird ins Deutsche übersetzt");
                break;
        }
    }
    // Mobile menu language selector sync
    const mobileLangSelector = document.getElementById('mobile-language-selector');
    const desktopLangSelector = document.getElementById('language-selector');
    
    if (mobileLangSelector && desktopLangSelector) {
        mobileLangSelector.addEventListener('change', function() {
            desktopLangSelector.value = this.value;
            translatePage(this.value);
        });
        
        desktopLangSelector.addEventListener('change', function() {
            mobileLangSelector.value = this.value;
            translatePage(this.value);
        });
    }

    // Scroll animations
const animateOnScroll = function() {
        const sections = document.querySelectorAll('.section-transition');
        
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (sectionTop < windowHeight - 100) {
                section.classList.add('section-visible');
            }
        });

        // Animate menu items sequentially
        const menuItems = document.querySelectorAll('.menu-item');
        menuItems.forEach((item, index) => {
            const itemTop = item.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (itemTop < windowHeight - 100) {
                setTimeout(() => {
                    item.classList.add('visible');
                }, index * 100);
            }
        });
    };

    // Initial check
    animateOnScroll();
    
    // Check on scroll
    window.addEventListener('scroll', animateOnScroll);

    // Gallery lightbox
    const galleryImages = document.querySelectorAll('.gallery-image');
    const lightbox = document.createElement('div');
    lightbox.className = 'lightbox';
    const lightboxImage = document.createElement('img');
    lightbox.appendChild(lightboxImage);
    document.body.appendChild(lightbox);

    galleryImages.forEach(image => {
        image.addEventListener('click', function() {
            lightboxImage.src = this.src;
            lightboxImage.alt = this.alt;
            lightbox.classList.add('active');
        });
    });

    lightbox.addEventListener('click', function() {
        this.classList.remove('active');
    });

    // Lazy loading for images
    const lazyLoadImages = function() {
        const lazyImages = document.querySelectorAll('img.lazy');
        const windowHeight = window.innerHeight;
        
        lazyImages.forEach(img => {
            const imgTop = img.getBoundingClientRect().top;
            
            if (imgTop < windowHeight + 200) {
                img.src = img.dataset.src;
                img.classList.remove('lazy');
            }
        });
    };

    // Initial check
    lazyLoadImages();
    
    // Check on scroll
    window.addEventListener('scroll', lazyLoadImages);

    // Sticky navbar
    const navbar = document.querySelector('custom-navbar');
    const navbarHeight = navbar ? navbar.offsetHeight : 0;
    let lastScrollTop = 0;
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > lastScrollTop && scrollTop > navbarHeight) {
            // Scrolling down
            if (navbar) {
                navbar.style.transform = 'translateY(-100%)';
            }
        } else {
            // Scrolling up
            if (navbar) {
                navbar.style.transform = 'translateY(0)';
            }
        }
        
        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    });
});