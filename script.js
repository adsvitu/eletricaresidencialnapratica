document.addEventListener('DOMContentLoaded', () => {
    
    // Intersection Observer for Reveal Animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                revealObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.reveal').forEach(el => {
        revealObserver.observe(el);
    });

    // Mobile CTA Bar Visibility
    const heroSection = document.querySelector('#hero');
    const mobileCtaBar = document.querySelector('.mobile-cta-bar');

    if (heroSection && mobileCtaBar) {
        const heroObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    mobileCtaBar.style.transform = 'translateY(100%)';
                    mobileCtaBar.style.transition = 'transform 0.3s ease';
                } else {
                    mobileCtaBar.style.transform = 'translateY(0)';
                }
            });
        }, { threshold: 0.1 });

        heroObserver.observe(heroSection);
    }

    // FAQ details one-at-a-time
    const details = document.querySelectorAll('details');
    details.forEach((targetDetail) => {
        targetDetail.addEventListener('click', () => {
            details.forEach((detail) => {
                if (detail !== targetDetail) {
                    detail.removeAttribute('open');
                }
            });
        });
    });

    // Exit Intent Popup Logic
    const popup = document.getElementById('exit-popup');
    const closePopup = document.getElementById('close-popup');
    const popupCta = document.getElementById('popup-cta');
    let popupShown = false;

    const showPopup = (e) => {
        if (!popupShown && e.clientY <= 0) {
            popup.style.display = 'flex';
            popupShown = true;
            // Record in session storage so it doesn't annoy the user
            sessionStorage.setItem('exitPopupShown', 'true');
        }
    };

    // Check if already shown in this session
    if (!sessionStorage.getItem('exitPopupShown')) {
        document.addEventListener('mouseleave', showPopup);
    }

    closePopup.addEventListener('click', () => {
        popup.style.display = 'none';
    });

    popupCta.addEventListener('click', () => {
        popup.style.display = 'none';
    });

    // Close on overlay click
    popup.addEventListener('click', (e) => {
        if (e.target === popup) {
            popup.style.display = 'none';
        }
    });

    // UTM Propagation Logic
    const captureAndPropagateUTMs = () => {
        const urlParams = new URLSearchParams(window.location.search);
        const utms = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term', 'src'];
        const foundParams = {};

        utms.forEach(param => {
            const value = urlParams.get(param);
            if (value) {
                foundParams[param] = value;
            }
        });

        if (Object.keys(foundParams).length > 0) {
            // Find all checkout links
            const checkoutLinks = document.querySelectorAll('a[href*="checkout.infinitepay.io"]');
            
            checkoutLinks.forEach(link => {
                const url = new URL(link.href);
                for (const [key, value] of Object.entries(foundParams)) {
                    url.searchParams.set(key, value);
                }
                link.href = url.toString();
            });
            console.log('UTMs propagated to checkout links:', foundParams);
        }
    };

    captureAndPropagateUTMs();

    // Event Tracking Logic
    const trackInitiateCheckout = () => {
        const checkoutLinks = document.querySelectorAll('a[href*="checkout.infinitepay.io"]');
        
        checkoutLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (typeof fbq !== 'undefined') {
                    fbq('track', 'InitiateCheckout');
                    console.log('Meta Pixel: InitiateCheckout event tracked');
                }
            });
        });
    };

    trackInitiateCheckout();
});
