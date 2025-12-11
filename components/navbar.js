class CustomNavbar extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    z-index: 100;
                    background-color: rgba(41, 37, 36, 0.95);
                    backdrop-filter: blur(10px);
                    transition: transform 0.3s ease;
                }

                .container {
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 1rem 2rem;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }

                .logo {
                    font-size: 1.5rem;
                    font-weight: 700;
                    color: rgb(245, 241, 232);
                    text-decoration: none;
                }

                .logo span {
                    color: rgb(199, 71, 41);
                }

                .nav-links {
                    display: flex;
                    gap: 2rem;
                }

                .nav-links a {
                    color: rgb(245, 241, 232);
                    text-decoration: none;
                    font-weight: 500;
                    position: relative;
                    transition: color 0.3s ease;
                }

                .nav-links a:hover {
                    color: rgb(199, 71, 41);
                }

                .nav-links a::after {
                    content: '';
                    position: absolute;
                    bottom: -5px;
                    left: 0;
                    width: 0;
                    height: 2px;
                    background-color: rgb(199, 71, 41);
                    transition: width 0.3s ease;
                }

                .nav-links a:hover::after {
                    width: 100%;
                }

                .mobile-menu-button {
                    display: none;
                    background: none;
                    border: none;
                    color: rgb(245, 241, 232);
                    cursor: pointer;
                    padding: 0.25rem;
                }

                .mobile-menu-button .icon {
                    width: 24px;
                    height: 24px;
                }

                .mobile-menu-button .hidden {
                    display: none;
                }

                .mobile-menu {
                    display: none;
                }

                .mobile-menu.open {
                    display: block;
                }

                @media (max-width: 768px) {
                    .nav-links {
                        display: none;
                    }

                    .mobile-menu-button {
                        display: block;
                    }

                    .mobile-menu {
                        display: none;
                        background-color: rgba(41, 37, 36, 0.98);
                        padding: 1rem;
                    }

                    .mobile-menu.open {
                        display: flex;
                        flex-direction: column;
                        gap: 1rem;
                    }

                    .mobile-menu a {
                        color: rgb(245, 241, 232);
                        text-decoration: none;
                        padding: 0.5rem 0;
                        border-bottom: 1px solid rgba(199, 71, 41, 0.3);
                    }

                    .mobile-menu a:hover {
                        color: rgb(199, 71, 41);
                    }
                }
            </style>
            <div class="container">
                <a href="index.html" class="logo">Bab <span>Tounès</span></a>
                <div class="nav-links">
                    <a href="index.html">Accueil</a>
                    <a href="about.html">À propos</a>
                    <a href="menu.html">Menu</a>
                    <a href="gallery.html">Galerie</a>
                    <a href="contact.html">Contact</a>
                    <select id="language-selector" class="bg-transparent border-none text-sand-100 focus:outline-none cursor-pointer">
                        <option value="fr">Français</option>
                        <option value="en">English</option>
                        <option value="ar">العربية</option>
                        <option value="de">Deutsch</option>
                    </select>
</div>
                <button class="mobile-menu-button" aria-label="Open menu" aria-expanded="false">
                    <!-- Hamburger icon -->
                    <svg class="icon icon-open" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <!-- Close icon -->
                    <svg class="icon icon-close hidden" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path d="M6 6l12 12M6 18L18 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </button>
            </div>
                <div class="mobile-menu">
                    <a href="index.html">Accueil</a>
                    <a href="about.html">À propos</a>
                    <a href="menu.html">Menu</a>
                    <a href="gallery.html">Galerie</a>
                    <a href="contact.html">Contact</a>
                    <select id="mobile-language-selector" class="mt-4 w-full bg-dark-800 border border-terracotta-600 rounded-lg p-2 text-sand-100">
                        <option value="fr">Français</option>
                        <option value="en">English</option>
                        <option value="ar">العربية</option>
                    </select>
                </div>
`;
        // after rendering, wire up interactions and adjust page padding
        requestAnimationFrame(() => {
            const menuButton = this.shadowRoot.querySelector('.mobile-menu-button');
            const mobileMenu = this.shadowRoot.querySelector('.mobile-menu');

            const updateBodyPadding = () => {
                // Prefer measuring the host; fall back to measuring inner parts
                let h = 0;
                try {
                    h = this.getBoundingClientRect().height;
                } catch (e) {
                    h = 0;
                }

                const container = this.shadowRoot.querySelector('.container');
                const mobileMenuEl = this.shadowRoot.querySelector('.mobile-menu');

                if ((!h || h < 1) && container) {
                    h = container.getBoundingClientRect().height;
                }

                // If the mobile menu is open add its height
                if (mobileMenuEl && mobileMenuEl.classList.contains('open')) {
                    h += mobileMenuEl.scrollHeight || mobileMenuEl.getBoundingClientRect().height || 0;
                }

                if (h && document && document.body) {
                    document.body.style.paddingTop = `${Math.ceil(h)}px`;
                }
            };

            updateBodyPadding();

            this.__navResizeObserver = new ResizeObserver(updateBodyPadding);
            this.__navResizeObserver.observe(this);

            const onResize = () => updateBodyPadding();
            window.addEventListener('resize', onResize);

            if (menuButton) {
                menuButton.addEventListener('click', () => {
                    if (!mobileMenu) return;
                    const isOpen = mobileMenu.classList.toggle('open');
                    // update aria and icon visibility
                    menuButton.setAttribute('aria-expanded', String(isOpen));
                    const openIcon = menuButton.querySelector('.icon-open');
                    const closeIcon = menuButton.querySelector('.icon-close');
                    if (openIcon && closeIcon) {
                        if (isOpen) {
                            openIcon.classList.add('hidden');
                            closeIcon.classList.remove('hidden');
                        } else {
                            openIcon.classList.remove('hidden');
                            closeIcon.classList.add('hidden');
                        }
                    }

                    // update padding to account for expanded/collapsed menu
                    requestAnimationFrame(updateBodyPadding);
                });
            }

            // Close mobile menu when a link is clicked and update padding
            const mobileLinks = this.shadowRoot.querySelectorAll('.mobile-menu a');
            mobileLinks.forEach(link => {
                link.addEventListener('click', () => {
                    if (mobileMenu && mobileMenu.classList.contains('open')) {
                        mobileMenu.classList.remove('open');
                        // restore button state
                        if (menuButton) {
                            menuButton.setAttribute('aria-expanded', 'false');
                            const openIcon = menuButton.querySelector('.icon-open');
                            const closeIcon = menuButton.querySelector('.icon-close');
                            if (openIcon && closeIcon) {
                                openIcon.classList.remove('hidden');
                                closeIcon.classList.add('hidden');
                            }
                        }
                        requestAnimationFrame(updateBodyPadding);
                    }
                });
            });

            this.__cleanup = () => {
                window.removeEventListener('resize', onResize);
                if (this.__navResizeObserver) {
                    this.__navResizeObserver.disconnect();
                    this.__navResizeObserver = null;
                }
            };
        });
    }

    disconnectedCallback() {
        if (this.__cleanup) this.__cleanup();
        // remove padding applied to body when the component is removed
        if (document && document.body) document.body.style.paddingTop = '';
    }
}

customElements.define('custom-navbar', CustomNavbar);