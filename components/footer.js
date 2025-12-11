class CustomFooter extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    background-color: rgb(41, 37, 36);
                    color: rgb(245, 241, 232);
                    padding: 4rem 0 2rem;
                    border-top: 1px solid rgba(199, 71, 41, 0.2);
                }

                .footer-container {
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 0 2rem;
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
                    gap: 3rem;
                }

                .footer-logo {
                    font-size: 1.5rem;
                    font-weight: 700;
                    color: rgb(245, 241, 232);
                    margin-bottom: 1rem;
                    display: block;
                }

                .footer-logo span {
                    color: rgb(199, 71, 41);
                }

                .footer-about p {
                    margin-bottom: 1.5rem;
                    line-height: 1.6;
                }

                .footer-title {
                    font-size: 1.25rem;
                    font-weight: 600;
                    margin-bottom: 1.5rem;
                    color: rgb(199, 71, 41);
                }

                .footer-links {
                    display: flex;
                    flex-direction: column;
                    gap: 0.75rem;
                }

                .footer-links a {
                    color: rgb(245, 241, 232);
                    text-decoration: none;
                    transition: color 0.3s ease;
                }

                .footer-links a:hover {
                    color: rgb(199, 71, 41);
                }

                .contact-info {
                    display: flex;
                    flex-direction: column;
                    gap: 1rem;
                }

                .contact-item {
                    display: flex;
                    align-items: center;
                    gap: 0.75rem;
                }

                .contact-item i {
                    color: rgb(199, 71, 41);
                }

                .social-links {
                    display: flex;
                    gap: 1rem;
                    margin-top: 1.5rem;
                }

                .social-links a {
                    color: rgb(245, 241, 232);
                    width: 40px;
                    height: 40px;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background-color: rgba(199, 71, 41, 0.2);
                    transition: all 0.3s ease;
                }

                .social-links a:hover {
                    background-color: rgb(199, 71, 41);
                    transform: translateY(-3px);
                }

                .copyright {
                    text-align: center;
                    margin-top: 4rem;
                    padding-top: 2rem;
                    border-top: 1px solid rgba(199, 71, 41, 0.2);
                }

                @media (max-width: 768px) {
                    .footer-container {
                        grid-template-columns: 1fr;
                    }
                }
            </style>
            <div class="footer-container">
                <div class="footer-about">
                    <a href="index.html" class="footer-logo">Bab <span>Tounès</span></a>
                    <p>Bringing the authentic flavors of Tunisia to your table since 2010. Our passion for traditional recipes and warm hospitality makes every dining experience memorable.</p>
                    <div class="social-links">
                        <a href="https://www.facebook.com/babtouness" target="_blank" aria-label="Facebook">
                                <i data-feather="facebook" class="w-4 h-4"></i>
                        </a>
                        <a href="https://www.instagram.com/bab_tounes" target="_blank" aria-label="Instagram">
                            <i data-feather="instagram" class="w-4 h-4"></i>
                        </a>
</div>
                </div>
                
                <div class="footer-links-container">
                    <h3 class="footer-title">Quick Links</h3>
                    <div class="footer-links">
                        <a href="index.html">Accueil</a>
                        <a href="about.html">À propos</a>
                        <a href="menu.html">Notre Menu</a>
                        <a href="gallery.html">Galerie Photo</a>
                        <a href="contact.html">Contact</a>
</div>
                </div>
                
                <div class="footer-contact">
                    <h3 class="footer-title">Contact Us</h3>
                    <div class="contact-info">
                            <div class="contact-item">
                            <i data-feather="map-pin"></i>
                            <span>3 Rue de l'Ancienne Douane, Tunis 1000</span>
                        </div>
<div class="contact-item">
                            <i data-feather="phone"></i>
                            <span>+216 23458458 /+216 71348918 </span>
                        </div>
                        <div class="contact-item">
                            <i data-feather="mail"></i>
                            <span>babtounesrestaurant@gmail.com</span>
</div>
                        <div class="contact-item">
                            <i data-feather="clock"></i>
                            <span>Mon-Sun: 11:00 AM - 11:00 PM</span>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="copyright">
                <p>&copy; ${new Date().getFullYear()} Bab Tounès. All rights reserved.</p>
            </div>
        `;
    }
}

customElements.define('custom-footer', CustomFooter);