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
<button class="mobile-menu-button">
                    <i data-feather="menu"></i>
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
    }
}

customElements.define('custom-navbar', CustomNavbar);