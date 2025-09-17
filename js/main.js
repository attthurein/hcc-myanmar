// Main JavaScript for HCC Myanmar
// Cookie Consent Management
function initCookieConsent() {
    const cookieBanner = document.getElementById('cookie-banner');
    const acceptBtn = document.getElementById('accept-cookies');
    const declineBtn = document.getElementById('decline-cookies');
    
    // Check if user has already made a choice
    const cookieChoice = localStorage.getItem('cookieConsent');
    
    if (!cookieChoice) {
        cookieBanner.classList.add('show');
    }
    
    acceptBtn.addEventListener('click', () => {
        localStorage.setItem('cookieConsent', 'accepted');
        cookieBanner.classList.remove('show');
        // Enable analytics/tracking here
    });
    
    declineBtn.addEventListener('click', () => {
        localStorage.setItem('cookieConsent', 'declined');
        cookieBanner.classList.remove('show');
        // Disable analytics/tracking here
    });
}

// Privacy Policy Modal Management
function initPrivacyModal() {
    const privacyModal = document.getElementById('privacy-modal');
    const showPrivacyBtn = document.getElementById('show-privacy-policy');
    const showPrivacyFooterBtn = document.getElementById('show-privacy-footer');
    const closePrivacyBtn = document.getElementById('close-privacy-modal');
    
    // Show modal
    function showModal() {
        privacyModal.classList.add('show');
        privacyModal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
        
        // Focus on close button for accessibility
        setTimeout(() => {
            closePrivacyBtn.focus();
        }, 100);
    }
    
    // Hide modal
    function hideModal() {
        privacyModal.classList.remove('show');
        privacyModal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = ''; // Restore scrolling
    }
    
    // Event listeners
    showPrivacyBtn.addEventListener('click', showModal);
    showPrivacyFooterBtn.addEventListener('click', showModal);
    closePrivacyBtn.addEventListener('click', hideModal);
    
    // Close modal when clicking outside
    privacyModal.addEventListener('click', (e) => {
        if (e.target === privacyModal) {
            hideModal();
        }
    });
    
    // Close modal with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && privacyModal.classList.contains('show')) {
            hideModal();
        }
    });
}

// Terms of Service Modal Management
function initTermsModal() {
    const termsModal = document.getElementById('terms-modal');
    const showTermsBtn = document.getElementById('show-terms');
    const closeTermsBtn = document.getElementById('close-terms-modal');
    
    // Show modal
    function showModal() {
        termsModal.classList.add('show');
        termsModal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
        
        // Focus on close button for accessibility
        setTimeout(() => {
            closeTermsBtn.focus();
        }, 100);
    }
    
    // Hide modal
    function hideModal() {
        termsModal.classList.remove('show');
        termsModal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = ''; // Restore scrolling
    }
    
    // Event listeners
    showTermsBtn.addEventListener('click', showModal);
    closeTermsBtn.addEventListener('click', hideModal);
    
    // Close modal when clicking outside
    termsModal.addEventListener('click', (e) => {
        if (e.target === termsModal) {
            hideModal();
        }
    });
    
    // Close modal with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && termsModal.classList.contains('show')) {
            hideModal();
        }
    });
}

// Accessibility Statement Modal Management
function initAccessibilityModal() {
    const accessibilityModal = document.getElementById('accessibility-modal');
    const showAccessibilityBtn = document.getElementById('show-accessibility');
    const closeAccessibilityBtn = document.getElementById('close-accessibility-modal');
    
    // Show modal
    function showModal() {
        accessibilityModal.classList.add('show');
        accessibilityModal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
        
        // Focus on close button for accessibility
        setTimeout(() => {
            closeAccessibilityBtn.focus();
        }, 100);
    }
    
    // Hide modal
    function hideModal() {
        accessibilityModal.classList.remove('show');
        accessibilityModal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = ''; // Restore scrolling
    }
    
    // Event listeners
    showAccessibilityBtn.addEventListener('click', showModal);
    closeAccessibilityBtn.addEventListener('click', hideModal);
    
    // Close modal when clicking outside
    accessibilityModal.addEventListener('click', (e) => {
        if (e.target === accessibilityModal) {
            hideModal();
        }
    });
    
    // Close modal with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && accessibilityModal.classList.contains('show')) {
            hideModal();
        }
    });
}

// Countdown Timer - Updated for January 2026
function initCountdown() {
    // Set launch date to January 1, 2026
    const launchDate = new Date('2026-01-01T00:00:00');
    
    function updateCountdown() {
        const now = new Date();
        const difference = launchDate - now;
        
        if (difference > 0) {
            const days = Math.floor(difference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((difference % (1000 * 60)) / 1000);
            
            document.getElementById('days').textContent = days.toString().padStart(2, '0');
            document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
            document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
            document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
        } else {
            // Launch date reached
            document.querySelector('.countdown').innerHTML = '<div class="launched-message">We\'re Live!</div>';
        }
    }
    
    // Initial update
    updateCountdown();
    
    // Update every second
    setInterval(updateCountdown, 1000);
}

// Keyboard Navigation Support
function initKeyboardNavigation() {
    document.addEventListener('keydown', (e) => {
        // ESC key closes cookie banner
        if (e.key === 'Escape') {
            const cookieBanner = document.getElementById('cookie-banner');
            if (cookieBanner.classList.contains('show')) {
                cookieBanner.classList.remove('show');
            }
        }
    });
}

// Language Switching
function initLanguageSwitcher() {
    const langToggle = document.getElementById('lang-toggle');
    const langMenu = document.querySelector('.lang-menu');
    const langOptions = document.querySelectorAll('.lang-option');
    const currentLangSpan = document.querySelector('.current-lang');
    
    // Toggle language menu
    langToggle.addEventListener('click', (e) => {
        e.preventDefault();
        const isExpanded = langToggle.getAttribute('aria-expanded') === 'true';
        langToggle.setAttribute('aria-expanded', !isExpanded);
        langMenu.classList.toggle('show');
        langMenu.setAttribute('aria-hidden', isExpanded);
    });
    
    // Handle language selection
    langOptions.forEach(option => {
        option.addEventListener('click', (e) => {
            e.preventDefault();
            const selectedLang = option.getAttribute('data-lang');
            currentLangSpan.textContent = selectedLang.toUpperCase();
            
            // Store language preference
            localStorage.setItem('preferredLanguage', selectedLang);
            
            // Update page language
            document.documentElement.lang = selectedLang;
            document.documentElement.setAttribute('data-locale', selectedLang === 'en' ? 'en-US' : 'my-MM');
            
            // Close menu
            langToggle.setAttribute('aria-expanded', 'false');
            langMenu.classList.remove('show');
            langMenu.setAttribute('aria-hidden', 'true');
            
            // Apply language-specific formatting
            applyLanguageFormatting(selectedLang);
        });
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!langToggle.contains(e.target) && !langMenu.contains(e.target)) {
            langToggle.setAttribute('aria-expanded', 'false');
            langMenu.classList.remove('show');
            langMenu.setAttribute('aria-hidden', 'true');
        }
    });
    
    // Load saved language preference
    const savedLang = localStorage.getItem('preferredLanguage') || 'en';
    currentLangSpan.textContent = savedLang.toUpperCase();
    document.documentElement.lang = savedLang;
    document.documentElement.setAttribute('data-locale', savedLang === 'en' ? 'en-US' : 'my-MM');
    applyLanguageFormatting(savedLang);
}

// Translation system
const translations = {
    en: {
        // Main content
        'tagline': 'Connecting Talent with Opportunity in Hospitality & Tourism',
        'launch-title': 'Launching <span class="highlight">Soon</span>',
        'description': 'We\'re building Myanmar\'s premier platform connecting hospitality and tourism professionals with top employers. Whether you\'re in hotels, restaurants, events, or travel - we\'ll help you find your perfect career match in Myanmar\'s growing hospitality industry.',
        'contact-email': 'info@hcc-mm.com',
        'copyright': '© 2025 Hospitality Career Connections Myanmar. All rights reserved.',
        'powered-by': 'Powered by',
        'privacy-policy': 'Privacy Policy',
        'terms-of-service': 'Terms of Service',
        'accessibility-statement': 'Accessibility Statement',
        
        // Cookie banner
        'cookie-message': 'We use cookies to enhance your experience. By continuing to visit this site you agree to our use of cookies.',
        'accept-cookies': 'Accept',
        'decline-cookies': 'Decline',
        
        // Modals
        'privacy-title': 'Privacy Policy',
        'terms-title': 'Terms of Service',
        'accessibility-title': 'Accessibility Statement',
        'close-modal': 'Close',
        
        // Language switcher
        'select-language': 'Select language',
        'english': 'English',
        'myanmar': 'မြန်မာ'
    },
    my: {
        // Main content
        'tagline': 'ဟိုတယ်နှင့်ခရီးသွားလုပ်ငန်းတွင် အရည်အသွေးနှင့် အခွင့်အလမ်းများကို ဆက်သွယ်ပေးခြင်း',
        'launch-title': '<span class="highlight">မကြာမီ</span> စတင်မည်',
        'description': 'ကျွန်ုပ်တို့သည် မြန်မာနိုင်ငံ၏ ဟိုတယ်နှင့်ခရီးသွားလုပ်ငန်းပညာရှင်များကို ထိပ်တန်းအလုပ်ရှင်များနှင့် ဆက်သွယ်ပေးသည့် ပလက်ဖောင်းကို တည်ဆောက်နေပါသည်။ ဟိုတယ်၊ စားသောက်ဆိုင်၊ ပွဲများ သို့မဟုတ် ခရီးသွားလုပ်ငန်းများတွင် ရှိနေပါစေ - မြန်မာနိုင်ငံ၏ ဖွံ့ဖြိုးတိုးတက်နေသော ဟိုတယ်လုပ်ငန်းတွင် သင့်အတွက် အကောင်းဆုံးအလုပ်ကို ရှာဖွေရန် ကူညီပေးပါမည်။',
        'contact-email': 'info@hcc-mm.com',
        'copyright': '© ၂၀၂၅ Hospitality Career Connections Myanmar။ မူပိုင်ခွင့်အားလုံး ရှိနေပါသည်။',
        'powered-by': 'ပံ့ပိုးပေးသူ',
        'privacy-policy': 'ကိုယ်ရေးကိုယ်တာ မူဝါဒ',
        'terms-of-service': 'ဝန်ဆောင်မှု စည်းကမ်းချက်များ',
        'accessibility-statement': 'အသုံးပြုနိုင်မှု ကြေညာချက်',
        
        // Cookie banner
        'cookie-message': 'သင့်အတွေ့အကြုံကို တိုးတက်စေရန် ကျွန်ုပ်တို့သည် cookies များကို အသုံးပြုပါသည်။ ဤဝဘ်ဆိုက်ကို ဆက်လက်လည်ပတ်ခြင်းဖြင့် ကျွန်ုပ်တို့၏ cookies အသုံးပြုမှုကို သဘောတူပါသည်။',
        'accept-cookies': 'လက်ခံပါ',
        'decline-cookies': 'ငြင်းဆိုပါ',
        
        // Modals
        'privacy-title': 'ကိုယ်ရေးကိုယ်တာ မူဝါဒ',
        'terms-title': 'ဝန်ဆောင်မှု စည်းကမ်းချက်များ',
        'accessibility-title': 'အသုံးပြုနိုင်မှု ကြေညာချက်',
        'close-modal': 'ပိတ်ပါ',
        
        // Language switcher
        'select-language': 'ဘာသာစကား ရွေးချယ်ပါ',
        'english': 'English',
        'myanmar': 'မြန်မာ'
    }
};

// Apply translations to the page
function applyTranslations(lang) {
    const elements = document.querySelectorAll('[data-translate]');
    elements.forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[lang] && translations[lang][key]) {
            element.innerHTML = translations[lang][key];
        }
    });
}

// Apply language-specific formatting
function applyLanguageFormatting(lang) {
    if (lang === 'my') {
        // Myanmar language formatting
        document.documentElement.dir = 'ltr'; // Myanmar uses LTR
        document.documentElement.style.fontFamily = "'Noto Sans Myanmar', 'Myanmar Text', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif";
    } else {
        // English formatting
        document.documentElement.dir = 'ltr';
        document.documentElement.style.fontFamily = "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif";
    }
    
    // Apply translations
    applyTranslations(lang);
}

// Advanced Accessibility Features
function initAdvancedAccessibility() {
    // Announce countdown updates to screen readers
    const countdownElements = document.querySelectorAll('.countdown-number');
    let lastValues = {};
    
    countdownElements.forEach(element => {
        lastValues[element.id] = element.textContent;
    });
    
    // Monitor countdown changes
    setInterval(() => {
        countdownElements.forEach(element => {
            if (element.textContent !== lastValues[element.id]) {
                const announcement = `${element.id}: ${element.textContent}`;
                announceToScreenReader(announcement);
                lastValues[element.id] = element.textContent;
            }
        });
    }, 1000);
    
    // High contrast mode detection
    if (window.matchMedia && window.matchMedia('(prefers-contrast: high)').matches) {
        document.body.classList.add('high-contrast');
    }
    
    // Reduced motion detection
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        document.body.classList.add('reduced-motion');
    }
}

// Screen reader announcements
function announceToScreenReader(message) {
    const announcement = document.createElement('div');
    announcement.setAttribute('aria-live', 'polite');
    announcement.setAttribute('aria-atomic', 'true');
    announcement.className = 'sr-only';
    announcement.textContent = message;
    document.body.appendChild(announcement);
    
    setTimeout(() => {
        document.body.removeChild(announcement);
    }, 1000);
}

// Performance Monitoring
function initPerformanceMonitoring() {
    // Web Vitals monitoring
    if ('PerformanceObserver' in window) {
        const observer = new PerformanceObserver((list) => {
            for (const entry of list.getEntries()) {
                if (entry.entryType === 'largest-contentful-paint') {
                    console.log('LCP:', entry.startTime);
                }
                if (entry.entryType === 'first-input') {
                    console.log('FID:', entry.processingStart - entry.startTime);
                }
                if (entry.entryType === 'layout-shift') {
                    if (!entry.hadRecentInput) {
                        console.log('CLS:', entry.value);
                    }
                }
            }
        });
        
        observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] });
    }
    
    // Resource timing
    window.addEventListener('load', () => {
        const perfData = performance.getEntriesByType('navigation')[0];
        if (perfData && perfData.loadEventEnd && perfData.loadEventStart) {
            const loadTime = perfData.loadEventEnd - perfData.loadEventStart;
            if (loadTime > 0) {
                console.log('Page Load Time:', loadTime + 'ms');
            }
        }
    });
}

// Initialize all functionality when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initCookieConsent();
    initPrivacyModal();
    initTermsModal();
    initAccessibilityModal();
    initCountdown();
    initKeyboardNavigation();
    initLanguageSwitcher();
    initAdvancedAccessibility();
    initPerformanceMonitoring();
});

// Service Worker Registration for PWA
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        // Only register service worker if running on HTTPS or localhost
        if (location.protocol === 'https:' || location.hostname === 'localhost' || location.hostname === '127.0.0.1') {
            navigator.serviceWorker.register('/sw.js')
                .then((registration) => {
                    console.log('SW registered: ', registration);
                })
                .catch((registrationError) => {
                    console.log('SW registration failed: ', registrationError);
                });
        } else {
            console.log('Service Worker not supported in this environment (file:// protocol)');
        }
    });
}
