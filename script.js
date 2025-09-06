/**
 * Cortex AI - Professional Mobile AI Assistant Website
 * Developed by Vertex Corporation
 * Modern, responsive and performance-optimized JavaScript
 */

class CortexAIWebsite {
  constructor() {
    // Dil sistemini önce kur, ardından tema metinlerini doğru doldur
    this.initializeLanguage();
    this.initializeTheme();
    this.setupEventListeners();
    this.setupIntersectionObserver();
    this.setupParallax();
    this.setupFeatureTabs();
    this.setupHeaderScroll();
    this.setupPerformanceOptimizations();
    this.debounceTimer = null;
    this.init();
  }

  initializeTheme() {
    // Professional dark theme by default
    const savedTheme = localStorage.getItem('cortex-theme') || 'dark';
    this.applyTheme(savedTheme);
  }

  initializeLanguage() {
    // Professional multilingual system - Turkish & English
    this.languages = {
      tr: {
        name: 'Türkçe',
        flag: '🇹🇷',
        translations: {
          'hero_title': 'Gelişmiş AI Deneyimi',
          'hero-description': 'Cortex, son teknoloji yapay zeka algoritmalarını mobil cihazınıza getirir. Vertex Corporation tarafından geliştirilen gelişmiş AI asistanı ile geleceği deneyimleyin.',
          'hero-btn-download': 'Uygulamayı İndir',
          'hero-btn-github': 'Kaynak Kodunu Görüntüle',
          'about_title': 'Cortex Hakkında',
          'about_description': 'Cortex, yapay zekanın gücünü doğrudan akıllı telefonunuza getiren gelişmiş bir mobil uygulamadır. Vertex Corporation tarafından geliştirilen, mobil AI teknolojisinin en ileri noktasını temsil eder.',
          'about_card1_title': 'Gelişmiş AI Teknolojisi',
          'about_card1_description': 'Cortex, son teknoloji yapay zeka algoritmalarını kullanarak akıllı yanıtlar, yaratıcı asistanlık ve problem çözme yetenekleri sunar.',
          'about_card2_title': 'Mobil-Öncelikli Tasarım',
          'about_card2_description': 'Akıllı telefon ve tabletler için özel olarak tasarlanan Cortex, optimize performans ve sezgisel kullanıcı deneyimi sunar.',
          'about_card3_title': 'Sürekli Öğrenme',
          'about_card3_description': 'Yapay zekamız kullanıcı etkileşimlerinden öğrenerek daha doğru ve kişiselleştirilmiş yanıtlar üretirken gizliliğinizi ve güvenliğinizi korur.',
          'features_title': 'Cortex Özellikleri',
          'features_description': 'Cortex\'i ultimate mobil AI asistanı yapan güçlü yapay zeka yeteneklerini keşfedin.',
          'vision_title': 'Cortex Yol Haritası',
          'vision_description1': 'Cortex, düzenli güncellemelerle sürekli gelişiyor. Yeni AI yetenekleri, geliştirilmiş performans ve genişletilmiş dil desteği ile en üst düzey mobil AI deneyimini sunuyor.',
          'vision_description2': 'Mobil AI teknolojisinin sınırlarını zorlamaya, en son araştırmaları ve kullanıcı geri bildirimlerini entegre ederek giderek daha akıllı ve yardımcı bir asistan yaratmaya kararlıyız.',
          'vision-stat1': 'Cortex için hedef indirme sayısı',
          'vision-stat2': 'Desteklenen dil sayısı',
          'vision-stat3': 'Çalışma süresi güvenilirliği',
          'vision-stat4': 'AI yardım mevcutluğu',
          'team-title': 'Önde Gelen Yenilikçilerimiz',
          'team-description': 'Vertex\'in arkasındaki parlak beyinler, Türkiye\'nin en genç teknoloji girişimcileri, bugün geleceği inşa ediyorlar.',
          'footer-description': 'Gelişmiş AI Mobil Uygulaması. Son teknoloji yapay zekayı mobil cihazınıza getirmek için Vertex Corporation tarafından geliştirildi.',
          'footer-legal': 'Hukuki',
          'footer-cortex-privacy': 'Cortex Gizlilik Politikası',
          'footer-cortex-terms': 'Cortex Kullanım Koşulları',
          'footer-vertex-privacy': 'Vertex Gizlilik Politikası',
          'footer-vertex-terms': 'Vertex Kullanım Koşulları',
          'footer-google-play': 'Google Play',
          'footer-github': 'GitHub',
          'footer-vertex-link': 'Bir Vertex Corporation Projesi',
          'footer-rights': 'Tüm hakları saklıdır.',
          'nav-home': 'Ana Sayfa',
          'nav-about': 'Hakkında',
          'nav-projects': 'Özellikler',
          'nav-vision': 'Vizyon',
          'nav-team': 'Ekip',
          'theme-toggle-dark': 'Karanlık Mod',
          'theme-toggle-light': 'Aydınlık Mod',
          'lang-toggle': 'English',
          'features_tab_all': 'Tümü',
          'features_tab_ai': 'AI Asistan',
          'features_tab_chat': 'Sohbet',
          'features_tab_creative': 'Yaratıcı',
          'features_tab_productivity': 'Verimlilik',
          'hero-badge': '🚀 Yeni Nesil AI Asistanı',
          'hero-stat-users': 'Kullanıcı',
          'hero-stat-languages': 'Dil Desteği',
          'hero-stat-reliability': 'Güvenilirlik'
        }
      },
      en: {
        name: 'English',
        flag: '🇺🇸',
        translations: {
          'hero_title': 'Advanced AI Experience',
          'hero-description': 'Cortex brings cutting-edge artificial intelligence to your mobile device. Experience the future of AI with our advanced mobile application developed by Vertex Corporation.',
          'hero-btn-download': 'Download App',
          'hero-btn-github': 'View Source',
          'about_title': 'About Cortex',
          'about_description': 'Cortex is an advanced artificial intelligence mobile application that brings the power of AI directly to your smartphone. Developed by Vertex Corporation, it represents the cutting edge of mobile AI technology.',
          'about_card1_title': 'Advanced AI Technology',
          'about_card1_description': 'Cortex utilizes state-of-the-art artificial intelligence algorithms to provide intelligent responses, creative assistance, and problem-solving capabilities right in your mobile device.',
          'about_card2_title': 'Mobile-First Design',
          'about_card2_description': 'Designed specifically for mobile devices, Cortex offers an intuitive and seamless user experience with optimized performance for smartphones and tablets.',
          'about_card3_title': 'Continuous Learning',
          'about_card3_description': 'Our AI continuously learns and improves, providing more accurate and personalized responses over time while maintaining user privacy and security.',
          'features_title': 'Cortex Features',
          'features_description': 'Discover the powerful AI capabilities that make Cortex the ultimate mobile AI assistant.',
          'vision_title': 'Cortex Roadmap',
          'vision_description1': 'Cortex continues to evolve with regular updates bringing new AI capabilities, enhanced performance, and expanded language support to provide the ultimate mobile AI experience.',
          'vision_description2': 'We\'re committed to pushing the boundaries of mobile AI technology, integrating cutting-edge research and user feedback to create an increasingly intelligent and helpful assistant.',
          'vision-stat1': 'Target downloads for Cortex',
          'vision-stat2': 'Languages supported',
          'vision-stat3': 'Uptime reliability',
          'vision-stat4': 'AI assistance available',
          'team-title': 'Our Leading Innovators',
          'team-description': 'The bright minds behind Vertex, Turkiye\'s youngest tech entrepreneurs, building the future today.',
          'footer-description': 'Advanced AI Mobile Application. Developed by Vertex Corporation to bring cutting-edge artificial intelligence to your mobile device.',
          'footer-legal': 'Legal',
          'footer-cortex-privacy': 'Cortex Privacy Policy',
          'footer-cortex-terms': 'Cortex Terms of Service',
          'footer-vertex-privacy': 'Vertex Privacy Policy',
          'footer-vertex-terms': 'Vertex Terms of Service',
          'footer-google-play': 'Google Play',
          'footer-github': 'GitHub',
          'footer-vertex-link': 'A Vertex Corporation Project',
          'footer-rights': 'All rights reserved.',
          'nav-home': 'Home',
          'nav-about': 'About',
          'nav-projects': 'Projects',
          'nav-vision': 'Vision',
          'nav-team': 'Team',
          'theme-toggle-dark': 'Dark Mode',
          'theme-toggle-light': 'Light Mode',
          'lang-toggle': 'Türkçe',
          'features_tab_all': 'All',
          'features_tab_ai': 'AI Assistant',
          'features_tab_chat': 'Chat',
          'features_tab_creative': 'Creative',
          'features_tab_productivity': 'Productivity',
          'hero-badge': '🚀 Next-Gen AI Assistant',
          'hero-stat-users': 'Users',
          'hero-stat-languages': 'Languages',
          'hero-stat-reliability': 'Reliability'
        }
      }
    };

    this.detectAndSetLanguage();
  }

  detectAndSetLanguage() {
    const savedLang = localStorage.getItem('cortex-language') || 'tr';
    if (savedLang && this.languages[savedLang]) {
      this.currentLanguage = savedLang;
    } else {
      // Auto-detect browser language
      const browserLang = navigator.language.toLowerCase();
      if (browserLang.startsWith('tr')) {
        this.currentLanguage = 'tr';
      } else {
        this.currentLanguage = 'en'; // Default to English
      }
    }
    
    this.updateLanguageDisplay();
    this.updateContent();
    this.updatePageLanguage();
  }

  updatePageLanguage() {
    // Update HTML lang attribute for SEO and accessibility
    document.documentElement.lang = this.currentLanguage;
  }

  setupEventListeners() {
    // Theme toggle (tüm butonlar)
    document.querySelectorAll('.theme-toggle-btn').forEach(btn => {
      btn.addEventListener('click', () => this.toggleTheme());
    });

    // Language toggle (tüm butonlar)
    document.querySelectorAll('.language-toggle-btn').forEach(btn => {
      btn.addEventListener('click', () => this.toggleLanguage());
    });

    // Mobile menu management
    this.setupMobileMenu();
    
    // Smooth scrolling for navigation
    this.setupSmoothScrolling();

    // Download button handlers
    this.setupDownloadButtons();

    // Resize event with debouncing for performance
    window.addEventListener('resize', () => this.debounceResize());
    
    // Keyboard navigation accessibility
    this.setupAccessibility();
  }

  setupMobileMenu() {
    const menuToggle = document.getElementById('menu-toggle-btn');
    const mobileNav = document.getElementById('mobile-nav');
    const mobileClose = document.getElementById('mobile-close-btn');
    const mobileBackdrop = document.getElementById('mobile-nav-backdrop');

    const openMobileNav = () => {
      if (!mobileNav) return;
      mobileNav.classList.add('active');
      mobileNav.setAttribute('aria-hidden', 'false');
      if (menuToggle) menuToggle.setAttribute('aria-expanded', 'true');
      document.body.style.overflow = 'hidden';
    };

    const closeMobileNav = () => {
      if (!mobileNav) return;
      mobileNav.classList.remove('active');
      mobileNav.setAttribute('aria-hidden', 'true');
      if (menuToggle) menuToggle.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    };

    if (menuToggle) menuToggle.addEventListener('click', openMobileNav);
    if (mobileClose) mobileClose.addEventListener('click', closeMobileNav);
    if (mobileBackdrop) mobileBackdrop.addEventListener('click', closeMobileNav);

    // Close on ESC key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && mobileNav && mobileNav.classList.contains('active')) {
        closeMobileNav();
      }
    });

    // Close after clicking a navigation link
    document.querySelectorAll('.mobile-nav a[href^="#"]').forEach(a => {
      a.addEventListener('click', () => closeMobileNav());
    });
  }

  setupSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(anchor.getAttribute('href'));
        if (target) {
          const headerHeight = document.querySelector('header').offsetHeight;
          const targetPosition = target.offsetTop - headerHeight - 20;
          
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      });
    });
  }

  setupDownloadButtons() {
    const downloadBtns = document.querySelectorAll('.btn:not(.btn-outline)');
    downloadBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        
        // Analytics tracking if available
        if (typeof gtag !== 'undefined') {
          gtag('event', 'download_button_click', {
            'event_category': 'engagement',
            'event_label': 'cortex_app_download'
          });
        }
        
        // Open Google Play Store
        window.open('https://play.google.com/store/apps/details?id=com.vertex.cortex', '_blank');
      });
    });

    // GitHub buttons
    const githubBtns = document.querySelectorAll('.btn-outline');
    githubBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        window.open('https://github.com/VertexCorporation/Cortex', '_blank');
      });
    });
  }

  setupAccessibility() {
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Tab') {
        document.body.classList.add('keyboard-navigation');
      }
    });

    document.addEventListener('mousedown', () => {
      document.body.classList.remove('keyboard-navigation');
    });
  }

  setupIntersectionObserver() {
    if ('IntersectionObserver' in window) {
      const options = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      };

      this.observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('animated');
              
              // Add specific animation classes
              if (entry.target.classList.contains('team-card')) {
                entry.target.classList.add('bounce-in');
              } else if (entry.target.classList.contains('feature-card')) {
                entry.target.classList.add('scale-in');
              } else if (entry.target.classList.contains('stat-item')) {
                entry.target.classList.add('slide-in-left');
              } else if (entry.target.classList.contains('vision-image')) {
                entry.target.classList.add('slide-in-right');
              } else if (entry.target.classList.contains('about-card')) {
                entry.target.classList.add('rotate-in');
              } else {
                entry.target.classList.add('fade-in-up');
              }
            }, index * 100);
            this.observer.unobserve(entry.target);
          }
        });
      }, options);

      // Animate elements on scroll
      document.querySelectorAll('.animate-on-scroll').forEach(el => {
        this.observer.observe(el);
      });

      // Setup counter animations
      this.setupCounters();
    }
  }

  setupCounters() {
    const counters = document.querySelectorAll('.stat-item h3');
    
    const counterObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
          entry.target.classList.add('animated');
          const text = entry.target.textContent;
          const match = text.match(/(\d+)/);
          if (match) {
            const number = parseInt(match[1]);
            this.animateCounter(entry.target, number, text.replace(/\d+/, ''));
          }
        }
      });
    }, { threshold: 0.7 });
    
    counters.forEach(counter => counterObserver.observe(counter));
  }

  animateCounter(element, target, suffix = '+', duration = 2000) {
    const start = 0;
    const startTime = performance.now();
    
    const update = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const current = start + (target - start) * easeOutQuart;
      
      if (target >= 1000) {
        element.textContent = (current / 1000).toFixed(1) + 'M' + suffix;
      } else {
        element.textContent = Math.floor(current) + suffix;
      }
      
      if (progress < 1) {
        requestAnimationFrame(update);
      }
    };
    
    requestAnimationFrame(update);
  }

  setupParallax() {
    if ('IntersectionObserver' in window && window.innerWidth > 768) {
      const heroContent = document.querySelector('.hero-content');
      
      if (heroContent) {
        let ticking = false;

        const updateParallax = () => {
          const scrollY = window.pageYOffset;
          const heroSection = document.querySelector('.hero');
          
          if (heroSection && scrollY < heroSection.offsetHeight) {
            const rate = scrollY * -0.05; // Smooth parallax effect
            heroContent.style.transform = `translate3d(0, ${rate}px, 0)`;
          } else {
            heroContent.style.transform = 'translate3d(0, 0, 0)';
          }
          
          ticking = false;
        };

        const handleScroll = () => {
          if (!ticking) {
            requestAnimationFrame(updateParallax);
            ticking = true;
          }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
      }
    }
  }

  setupFeatureTabs() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const featureCards = document.querySelectorAll('.feature-card');

    tabButtons.forEach(button => {
      button.addEventListener('click', () => {
        // Remove active class from all buttons
        tabButtons.forEach(btn => btn.classList.remove('active'));
        // Add active class to clicked button
        button.classList.add('active');

        const category = button.dataset.category;

        // Filter features with smooth animation
        featureCards.forEach((card, index) => {
          if (category === 'all' || card.dataset.category === category) {
            card.style.display = 'flex';
            setTimeout(() => {
              card.style.opacity = '1';
              card.style.transform = 'translateY(0)';
            }, index * 50);
          } else {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            setTimeout(() => {
              card.style.display = 'none';
            }, 300);
          }
        });
      });
    });
  }

  setupHeaderScroll() {
    const header = document.querySelector('header');
    let lastScrollY = 0;
    let ticking = false;

    const updateHeader = () => {
      const scrollY = window.pageYOffset;
      
      // Add/remove scrolled class for styling
      header.classList.toggle('scrolled', scrollY > 50);
      
      // Hide/show header based on scroll direction (only after 100px)
      if (scrollY > lastScrollY && scrollY > 100) {
        header.classList.add('hide');
      } else {
        header.classList.remove('hide');
      }
      
      lastScrollY = scrollY;
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(updateHeader);
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
  }

  setupPerformanceOptimizations() {
    // Preload critical resources
    this.preloadCriticalResources();
    
    // Setup lazy loading for images
    this.setupLazyLoading();
    
    // Setup performance monitoring
    this.setupPerformanceMonitoring();
  }

  preloadCriticalResources() {
    // Preload fonts
    const fontLinks = [
      'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&display=swap'
    ];

    fontLinks.forEach(href => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = href;
      link.as = 'style';
      link.onload = function() {
        this.onload = null;
        this.rel = 'stylesheet';
      };
      document.head.appendChild(link);
    });
  }

  setupLazyLoading() {
    if ('IntersectionObserver' in window) {
      const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target;
            if (img.dataset.src) {
              img.src = img.dataset.src;
              img.removeAttribute('data-src');
            }
            imageObserver.unobserve(img);
          }
        });
      });

      document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
      });
    }
  }

  setupPerformanceMonitoring() {
    // Page visibility API for pausing animations
    document.addEventListener('visibilitychange', () => {
      const isVisible = !document.hidden;
      
      document.querySelectorAll('.triangles li').forEach(triangle => {
        triangle.style.animationPlayState = isVisible ? 'running' : 'paused';
      });
    });
  }

  toggleLanguage() {
    this.currentLanguage = this.currentLanguage === 'tr' ? 'en' : 'tr';
    localStorage.setItem('cortex-language', this.currentLanguage);
    this.updateLanguageDisplay();
    this.updateContent();
    this.updatePageLanguage();
    // Tema düğmesi metnini de yeni dile göre tazele
    this.updateThemeButtonText();
  }

  updateLanguageDisplay() {
    const currentLang = this.languages[this.currentLanguage];
    document.querySelectorAll('.language-toggle-btn').forEach(languageToggle => {
      languageToggle.innerHTML = `${currentLang.flag} ${currentLang.translations['lang-toggle']}`;
      languageToggle.title = `Switch to ${this.currentLanguage === 'tr' ? 'English' : 'Türkçe'}`;
    });
  }

  updateContent() {
    const translations = this.languages[this.currentLanguage].translations;
    
    // Update all elements with data-translate attributes
    document.querySelectorAll('[data-translate]').forEach(el => {
      const key = el.getAttribute('data-translate');
      if (key && translations[key] !== undefined) {
        if (el.tagName.toLowerCase() === 'input' || el.tagName.toLowerCase() === 'textarea') {
          el.setAttribute('placeholder', translations[key]);
        } else {
          el.textContent = translations[key];
        }
      }
    });

    // Update footer copyright with proper formatting
    const footerRights = document.querySelector('.copyright');
    if (footerRights && translations['footer-rights']) {
      footerRights.innerHTML = `© 2024 Cortex AI. ${translations['footer-rights']}`;
    }

    console.log(`🌐 Language updated to: ${this.currentLanguage.toUpperCase()} (${this.languages[this.currentLanguage].name})`);
  }

  toggleTheme() {
    const nextTheme = document.body.classList.contains('light-theme') ? 'dark' : 'light';
    this.applyTheme(nextTheme);
  }

  applyTheme(theme) {
    if (theme === 'light') {
      document.body.classList.add('light-theme');
    } else {
      document.body.classList.remove('light-theme');
      theme = 'dark';
    }
    try { localStorage.setItem('cortex-theme', theme); } catch (e) {}
    this.updateThemeButtonText();
    window.dispatchEvent(new CustomEvent('themeChanged', { detail: { theme } }));
  }

  updateThemeButtonText() {
    const isLight = document.body.classList.contains('light-theme');
    const translations = this.languages[this.currentLanguage].translations;
    document.querySelectorAll('.theme-toggle-btn').forEach(themeToggle => {
      themeToggle.textContent = isLight ?
        `🌙 ${translations['theme-toggle-dark']}` :
        `☀️ ${translations['theme-toggle-light']}`;
    });
  }

  debounceResize() {
    clearTimeout(this.debounceTimer);
    this.debounceTimer = setTimeout(() => {
      // Handle responsive behavior
      if (window.innerWidth <= 768) {
        const heroContent = document.querySelector('.hero-content');
        if (heroContent) {
          heroContent.style.transform = 'none';
        }
      }
      
      // Update mobile menu state if needed
      const mobileNav = document.getElementById('mobile-nav');
      if (window.innerWidth > 768 && mobileNav && mobileNav.classList.contains('active')) {
        mobileNav.classList.remove('active');
        document.body.style.overflow = '';
      }
    }, 250);
  }

  init() {
    // Add GPU acceleration to performance-critical elements
    document.querySelectorAll('.hero-content, .feature-card, .team-card, .about-card').forEach(el => {
      el.classList.add('gpu-accelerated');
    });

    // Add enhanced animations
    this.addEnhancedAnimations();
    
    // Initialize Web Vitals monitoring if available
    this.initializeWebVitals();

    console.log('🚀 Cortex AI Website initialized successfully!');
    console.log('✨ Professional, responsive, and performance-optimized');
  }

  addEnhancedAnimations() {
    // Minimize animations for a calmer UI
    const animatedElements = document.querySelectorAll('.float, .pulse');
    animatedElements.forEach(el => {
      el.classList.remove('float', 'pulse');
    });
  }

  initializeWebVitals() {
    // Initialize Core Web Vitals monitoring if web-vitals library is available
    if (typeof webVitals !== 'undefined') {
      webVitals.getCLS(console.log);
      webVitals.getFID(console.log);
      webVitals.getFCP(console.log);
      webVitals.getLCP(console.log);
      webVitals.getTTFB(console.log);
    }
  }

  // Utility method for throttling
  throttle(func, limit) {
    let inThrottle;
    return function() {
      const args = arguments;
      const context = this;
      if (!inThrottle) {
        func.apply(context, args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    };
  }
}

// Initialize the website when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  new CortexAIWebsite();
  // Expose a bootstrapped flag for index.html fallback to avoid double binding
  window.CortexBootstrapped = true;
});

// Performance monitoring
window.addEventListener('load', () => {
  document.body.classList.add('loaded');
  
  if (typeof performance !== 'undefined' && performance.mark) {
    performance.mark('cortex-ai-website-loaded');
    
    // Log performance metrics
    if (performance.timing) {
      const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
      console.log(`📊 Page load time: ${loadTime}ms`);
    }
  }
});

// Handle service worker registration for PWA capabilities (if needed in future)
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    // Service worker can be registered here for PWA functionality
    console.log('🔧 Service Worker API available');
  });
}