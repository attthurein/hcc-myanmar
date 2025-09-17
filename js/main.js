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
    
    // Store reference to previously focused element
    let previouslyFocusedElement = null;
    
    // Show modal
    function showModal() {
        // Store the currently focused element
        previouslyFocusedElement = document.activeElement;
        
        privacyModal.classList.add('show');
        privacyModal.removeAttribute('aria-hidden');
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
        
        // Return focus to the element that opened the modal
        if (previouslyFocusedElement) {
            previouslyFocusedElement.focus();
            previouslyFocusedElement = null;
        }
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
    
    // Trap focus within modal when it's open
    privacyModal.addEventListener('keydown', (e) => {
        if (privacyModal.classList.contains('show')) {
            const focusableElements = privacyModal.querySelectorAll(
                'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
            );
            const firstElement = focusableElements[0];
            const lastElement = focusableElements[focusableElements.length - 1];
            
            if (e.key === 'Tab') {
                if (e.shiftKey) {
                    if (document.activeElement === firstElement) {
                        lastElement.focus();
                        e.preventDefault();
                    }
                } else {
                    if (document.activeElement === lastElement) {
                        firstElement.focus();
                        e.preventDefault();
                    }
                }
            }
        }
    });
}

// Terms of Service Modal Management
function initTermsModal() {
    const termsModal = document.getElementById('terms-modal');
    const showTermsBtn = document.getElementById('show-terms');
    const closeTermsBtn = document.getElementById('close-terms-modal');
    
    // Store reference to previously focused element
    let previouslyFocusedElement = null;
    
    // Show modal
    function showModal() {
        // Store the currently focused element
        previouslyFocusedElement = document.activeElement;
        
        termsModal.classList.add('show');
        termsModal.removeAttribute('aria-hidden');
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
        
        // Return focus to the element that opened the modal
        if (previouslyFocusedElement) {
            previouslyFocusedElement.focus();
            previouslyFocusedElement = null;
        }
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
    
    // Trap focus within modal when it's open
    termsModal.addEventListener('keydown', (e) => {
        if (termsModal.classList.contains('show')) {
            const focusableElements = termsModal.querySelectorAll(
                'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
            );
            const firstElement = focusableElements[0];
            const lastElement = focusableElements[focusableElements.length - 1];
            
            if (e.key === 'Tab') {
                if (e.shiftKey) {
                    if (document.activeElement === firstElement) {
                        lastElement.focus();
                        e.preventDefault();
                    }
                } else {
                    if (document.activeElement === lastElement) {
                        firstElement.focus();
                        e.preventDefault();
                    }
                }
            }
        }
    });
}

// Accessibility Statement Modal Management
function initAccessibilityModal() {
    const accessibilityModal = document.getElementById('accessibility-modal');
    const showAccessibilityBtn = document.getElementById('show-accessibility');
    const closeAccessibilityBtn = document.getElementById('close-accessibility-modal');
    
    // Store reference to previously focused element
    let previouslyFocusedElement = null;
    
    // Show modal
    function showModal() {
        // Store the currently focused element
        previouslyFocusedElement = document.activeElement;
        
        accessibilityModal.classList.add('show');
        accessibilityModal.removeAttribute('aria-hidden');
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
        
        // Return focus to the element that opened the modal
        if (previouslyFocusedElement) {
            previouslyFocusedElement.focus();
            previouslyFocusedElement = null;
        }
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
    
    // Trap focus within modal when it's open
    accessibilityModal.addEventListener('keydown', (e) => {
        if (accessibilityModal.classList.contains('show')) {
            const focusableElements = accessibilityModal.querySelectorAll(
                'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
            );
            const firstElement = focusableElements[0];
            const lastElement = focusableElements[focusableElements.length - 1];
            
            if (e.key === 'Tab') {
                if (e.shiftKey) {
                    if (document.activeElement === firstElement) {
                        lastElement.focus();
                        e.preventDefault();
                    }
                } else {
                    if (document.activeElement === lastElement) {
                        firstElement.focus();
                        e.preventDefault();
                    }
                }
            }
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
    
    // Store reference to previously focused element
    let previouslyFocusedElement = null;
    
    // Toggle language menu
    langToggle.addEventListener('click', (e) => {
        e.preventDefault();
        const isExpanded = langToggle.getAttribute('aria-expanded') === 'true';
        
        if (isExpanded) {
            // Closing menu
            langToggle.setAttribute('aria-expanded', 'false');
            langMenu.classList.remove('show');
            langMenu.setAttribute('aria-hidden', 'true');
            
            // Return focus to toggle button
            if (previouslyFocusedElement) {
                previouslyFocusedElement.focus();
                previouslyFocusedElement = null;
            } else {
                langToggle.focus();
            }
        } else {
            // Opening menu
            previouslyFocusedElement = document.activeElement;
            langToggle.setAttribute('aria-expanded', 'true');
            langMenu.classList.add('show');
            langMenu.removeAttribute('aria-hidden');
            
            // Focus on first language option
            setTimeout(() => {
                if (langOptions.length > 0) {
                    langOptions[0].focus();
                }
            }, 100);
        }
    });
    
    // Handle language selection
    langOptions.forEach((option, index) => {
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
            
            // Return focus to toggle button
            langToggle.focus();
            previouslyFocusedElement = null;
            
            // Apply language-specific formatting
            applyLanguageFormatting(selectedLang);
        });
        
        // Handle keyboard navigation within menu
        option.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowDown') {
                e.preventDefault();
                const nextIndex = (index + 1) % langOptions.length;
                langOptions[nextIndex].focus();
            } else if (e.key === 'ArrowUp') {
                e.preventDefault();
                const prevIndex = index === 0 ? langOptions.length - 1 : index - 1;
                langOptions[prevIndex].focus();
            } else if (e.key === 'Escape') {
                e.preventDefault();
                langToggle.setAttribute('aria-expanded', 'false');
                langMenu.classList.remove('show');
                langMenu.setAttribute('aria-hidden', 'true');
                langToggle.focus();
                previouslyFocusedElement = null;
            }
        });
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!langToggle.contains(e.target) && !langMenu.contains(e.target)) {
            langToggle.setAttribute('aria-expanded', 'false');
            langMenu.classList.remove('show');
            langMenu.setAttribute('aria-hidden', 'true');
            
            // Return focus to previously focused element
            if (previouslyFocusedElement) {
                previouslyFocusedElement.focus();
                previouslyFocusedElement = null;
            }
        }
    });
    
    // Handle Escape key to close menu
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && langMenu.classList.contains('show')) {
            langToggle.setAttribute('aria-expanded', 'false');
            langMenu.classList.remove('show');
            langMenu.setAttribute('aria-hidden', 'true');
            langToggle.focus();
            previouslyFocusedElement = null;
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
    // Web Vitals monitoring - only log if performance is poor or in development
    if ('PerformanceObserver' in window) {
        const observer = new PerformanceObserver((list) => {
            for (const entry of list.getEntries()) {
                if (entry.entryType === 'largest-contentful-paint') {
                    const lcp = entry.startTime;
                    // Only log if LCP is poor (> 2.5s) or in development
                    if (lcp > 2500 || window.location.hostname === 'localhost' || window.location.protocol === 'file:') {
                        console.log('LCP:', lcp, lcp > 2500 ? '⚠️ Poor' : '✅ Good');
                    }
                }
                if (entry.entryType === 'first-input') {
                    const fid = entry.processingStart - entry.startTime;
                    // Only log if FID is poor (> 100ms) or in development
                    if (fid > 100 || window.location.hostname === 'localhost' || window.location.protocol === 'file:') {
                        console.log('FID:', fid, fid > 100 ? '⚠️ Poor' : '✅ Good');
                    }
                }
                if (entry.entryType === 'layout-shift') {
                    if (!entry.hadRecentInput) {
                        const cls = entry.value;
                        // Only log if CLS is poor (> 0.1) or in development
                        if (cls > 0.1 || window.location.hostname === 'localhost' || window.location.protocol === 'file:') {
                            console.log('CLS:', cls, cls > 0.1 ? '⚠️ Poor' : '✅ Good');
                        }
                    }
                }
            }
        });
        
        observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] });
    }
    
    // Resource timing - only log if load time is poor or in development
    window.addEventListener('load', () => {
        const perfData = performance.getEntriesByType('navigation')[0];
        if (perfData && perfData.loadEventEnd && perfData.loadEventStart) {
            const loadTime = perfData.loadEventEnd - perfData.loadEventStart;
            // Only log if load time is poor (> 3s) or in development
            if (loadTime > 0 && (loadTime > 3000 || window.location.hostname === 'localhost' || window.location.protocol === 'file:')) {
                console.log('Page Load Time:', loadTime + 'ms', loadTime > 3000 ? '⚠️ Poor' : '✅ Good');
            }
        }
    });
}

// Email Management System
function initEmailManagement() {
    const jobSeekerBtn = document.getElementById('email-job-seeker');
    const employerBtn = document.getElementById('email-employer');
    
    // Job Seeker Email Template
    const jobSeekerEmail = {
        to: 'info@hcc-mm.com',
        subject: 'Job Seeker Inquiry - Hospitality Career Opportunities',
        body: `Hello HCC Myanmar Team,

I am a hospitality professional interested in career opportunities through your platform.

Please provide me with information about:
- Available job positions in Myanmar's hospitality sector
- How to create a professional profile
- Application process and requirements
- Career development resources
- Industry insights and trends

My Background:
- Experience Level: [Please specify]
- Preferred Sectors: [Hotels/Restaurants/Travel/Events]
- Location Preference: [Yangon/Mandalay/Other]
- Language Skills: [English/Myanmar/Other]

I look forward to hearing from you and joining Myanmar's premier hospitality career platform.

Best regards,
[Your Name]
[Your Contact Information]`
    };
    
    // Employer Email Template
    const employerEmail = {
        to: 'info@hcc-mm.com',
        subject: 'Employer Partnership Inquiry - Hospitality Talent Solutions',
        body: `Hello HCC Myanmar Team,

I represent a hospitality business interested in partnering with your platform for talent acquisition.

Please provide information about:
- Employer partnership packages and pricing
- Candidate screening and verification process
- Platform features for employers
- Industry-specific recruitment solutions
- Success stories and case studies

Our Organization:
- Business Type: [Hotel/Restaurant/Travel Agency/Event Company]
- Size: [Number of employees]
- Locations: [Cities/Regions]
- Current Hiring Needs: [Positions/Departments]
- Budget Range: [Please specify]

We are excited about the opportunity to connect with top hospitality talent in Myanmar.

Best regards,
[Your Name]
[Your Title]
[Company Name]
[Contact Information]`
    };
    
    // Create mailto URLs
    function createMailtoURL(emailData) {
        const params = new URLSearchParams({
            subject: emailData.subject,
            body: emailData.body
        });
        return `mailto:${emailData.to}?${params.toString()}`;
    }
    
    // Event listeners for email buttons
    if (jobSeekerBtn) {
        jobSeekerBtn.addEventListener('click', () => {
            const mailtoURL = createMailtoURL(jobSeekerEmail);
            window.location.href = mailtoURL;
            
            // Track email interaction
            if (typeof gtag !== 'undefined') {
                gtag('event', 'email_click', {
                    'email_type': 'job_seeker',
                    'event_category': 'engagement'
                });
            }
        });
    }
    
    if (employerBtn) {
        employerBtn.addEventListener('click', () => {
            const mailtoURL = createMailtoURL(employerEmail);
            window.location.href = mailtoURL;
            
            // Track email interaction
            if (typeof gtag !== 'undefined') {
                gtag('event', 'email_click', {
                    'email_type': 'employer',
                    'event_category': 'engagement'
                });
            }
        });
    }
    
    // Enhanced email validation and formatting
    function validateEmailFormat(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    
    // Email template customization based on user preferences
    function customizeEmailTemplate(template, userData = {}) {
        let customizedTemplate = template;
        
        // Replace placeholders with user data if available
        Object.keys(userData).forEach(key => {
            const placeholder = `[${key}]`;
            customizedTemplate = customizedTemplate.replace(new RegExp(placeholder, 'g'), userData[key] || placeholder);
        });
        
        return customizedTemplate;
    }
    
    // Store email preferences in localStorage
    function saveEmailPreferences(preferences) {
        try {
            localStorage.setItem('hccEmailPreferences', JSON.stringify(preferences));
        } catch (error) {
            console.warn('Could not save email preferences:', error);
        }
    }
    
    // Load email preferences from localStorage
    function loadEmailPreferences() {
        try {
            const preferences = localStorage.getItem('hccEmailPreferences');
            return preferences ? JSON.parse(preferences) : {};
        } catch (error) {
            console.warn('Could not load email preferences:', error);
            return {};
        }
    }
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
    initEmailManagement();
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
            // Silent handling for file:// protocol - this is expected behavior
            // Service Workers require HTTPS or localhost for security reasons
            // No need to log this as an error since it's expected in local file environments
        }
    });
}
