import './style.css'
import AOS from 'aos'
import { CountUp } from 'countup.js'
import Swiper from 'swiper'
import { Pagination } from 'swiper/modules'

// Initialize AOS (Animate On Scroll)
AOS.init({
  duration: 1000,
  easing: 'ease-in-out',
  once: true,
  offset: 100
})

// ========== SCROLL PROGRESS BAR ==========
function updateScrollProgress() {
  const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
  const scrolled = window.scrollY
  const scrollPercent = scrollHeight > 0 ? (scrolled / scrollHeight) * 100 : 0
  document.getElementById('scrollProgress').style.width = scrollPercent + '%'
}

window.addEventListener('scroll', updateScrollProgress)

// ========== MOBILE MENU TOGGLE ==========
const mobileMenuBtn = document.getElementById('mobileMenuBtn')
const mobileMenu = document.getElementById('mobileMenu')

if (mobileMenuBtn && mobileMenu) {
  mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden')
  })

  // Close menu when a link is clicked
  const mobileMenuLinks = mobileMenu.querySelectorAll('a')
  mobileMenuLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.add('hidden')
    })
  })
}

// ========== SMOOTH SCROLL FOR ANCHOR LINKS ==========
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute('href'))
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
  })
})

// ========== NAVBAR STYLING ON SCROLL ==========
const navbar = document.getElementById('navbar')
let lastScrollTop = 0

window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY
  
  if (scrollTop > 100) {
    navbar.classList.add('shadow-lg')
  } else {
    navbar.classList.remove('shadow-lg')
  }
  
  lastScrollTop = scrollTop
})

// ========== COUNT UP ANIMATIONS ==========
function initCountUpAnimations() {
  const observerOptions = {
    threshold: 0.5
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !entry.target.dataset.counted) {
        entry.target.dataset.counted = 'true'
        
        if (entry.target.id === 'earnings-count') {
          const countUp = new CountUp('earnings-count', 300000, {
            duration: 2,
            separator: ','
          })
          countUp.start()
        }
        
        if (entry.target.id === 'members-count') {
          const countUp = new CountUp('members-count', 1000, {
            duration: 2,
            separator: ','
          })
          countUp.start()
        }
        
        if (entry.target.id === 'opportunities-count') {
          const countUp = new CountUp('opportunities-count', 500, {
            duration: 2,
            separator: ','
          })
          countUp.start()
        }
      }
    })
  }, observerOptions)

  document.querySelectorAll('[id*="count"]').forEach(element => {
    observer.observe(element)
  })
}

initCountUpAnimations()

// ========== TESTIMONIAL SLIDER ==========
function initTestimonialSlider() {
  const swiperEl = document.querySelector('.testimonial-swiper')
  
  if (swiperEl) {
    Swiper.use([Pagination])
    
    new Swiper(swiperEl, {
      modules: [Pagination],
      slidesPerView: 1,
      spaceBetween: 24,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true
      },
      breakpoints: {
        768: {
          slidesPerView: 2,
          spaceBetween: 24
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 24
        }
      },
      autoplay: {
        delay: 5000,
        disableOnInteraction: false
      },
      effect: 'slide',
      speed: 500
    })
  }
}

initTestimonialSlider()

// ========== FAQ ACCORDION ==========
function initFAQAccordion() {
  const faqItems = document.querySelectorAll('.faq-item')
  
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question')
    
    if (question) {
      question.addEventListener('click', () => {
        // Close other items
        faqItems.forEach(otherItem => {
          if (otherItem !== item) {
            otherItem.classList.remove('active')
          }
        })
        
        // Toggle current item
        item.classList.toggle('active')
      })
    }
  })
}

initFAQAccordion()

// ========== BUTTON INTERACTIONS ==========
function addButtonAnimations() {
  const buttons = document.querySelectorAll('button')
  
  buttons.forEach(button => {
    button.addEventListener('mouseover', function() {
      this.style.transform = 'translateY(-2px)'
    })
    
    button.addEventListener('mouseout', function() {
      this.style.transform = 'translateY(0)'
    })
    
    button.addEventListener('click', function(e) {
      // Create ripple effect
      const ripple = document.createElement('span')
      ripple.style.position = 'absolute'
      ripple.style.width = '20px'
      ripple.style.height = '20px'
      ripple.style.background = 'rgba(255, 255, 255, 0.5)'
      ripple.style.borderRadius = '50%'
      ripple.style.transform = 'scale(0)'
      ripple.style.animation = 'scaleRipple 0.6s ease-out'
      
      const rect = this.getBoundingClientRect()
      ripple.style.left = (e.clientX - rect.left - 10) + 'px'
      ripple.style.top = (e.clientY - rect.top - 10) + 'px'
    })
  })
}

addButtonAnimations()

// ========== PARALLAX EFFECT ==========
function addParallaxEffect() {
  window.addEventListener('scroll', () => {
    const scrolled = window.scrollY
    const parallaxElements = document.querySelectorAll('[data-parallax]')
    
    parallaxElements.forEach(element => {
      const speed = element.getAttribute('data-parallax') || 0.5
      element.style.transform = `translateY(${scrolled * speed}px)`
    })
  })
}

addParallaxEffect()

// ========== CURSOR GLOW EFFECT ==========
function addCursorGlowEffect() {
  const mouseX = { value: 0 }
  const mouseY = { value: 0 }
  
  document.addEventListener('mousemove', (e) => {
    mouseX.value = e.clientX
    mouseY.value = e.clientY
  })
}

addCursorGlowEffect()

// ========== ACTIVE NAV LINK HIGHLIGHTING ==========
function updateActiveNavLink() {
  const sections = document.querySelectorAll('section[id]')
  const navLinks = document.querySelectorAll('.nav-link')
  
  window.addEventListener('scroll', () => {
    let current = ''
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop
      const sectionHeight = section.clientHeight
      
      if (window.scrollY >= sectionTop - 200) {
        current = section.getAttribute('id')
      }
    })
    
    navLinks.forEach(link => {
      link.classList.remove('active')
      const href = link.getAttribute('href')
      
      if (href === `#${current}`) {
        link.classList.add('text-cyan-400')
      } else {
        link.classList.remove('text-cyan-400')
      }
    })
  })
}

updateActiveNavLink()

// ========== LOADING ANIMATION ==========
function addLoadingAnimation() {
  window.addEventListener('load', () => {
    document.body.style.opacity = '1'
  })
  
  document.body.style.opacity = '0'
  document.body.style.transition = 'opacity 0.5s ease-in'
}

addLoadingAnimation()

// ========== SCROLL REVEAL EFFECTS ==========
function revealOnScroll() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  }
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1'
        entry.target.style.transform = 'translateY(0)'
      }
    })
  }, observerOptions)
  
  document.querySelectorAll('.reveal').forEach(element => {
    element.style.opacity = '0'
    element.style.transform = 'translateY(20px)'
    element.style.transition = 'opacity 0.6s ease, transform 0.6s ease'
    observer.observe(element)
  })
}

revealOnScroll()

// ========== ANTI-SPAM LINK HANDLER ==========
function setupExternalLinks() {
  const links = document.querySelectorAll('a[href^="http"]')
  
  links.forEach(link => {
    link.setAttribute('target', '_blank')
    link.setAttribute('rel', 'noopener noreferrer')
  })
}

setupExternalLinks()

// ========== KEYBOARD ACCESSIBILITY ==========
function addKeyboardAccessibility() {
  document.addEventListener('keydown', (e) => {
    // Escape key closes mobile menu
    if (e.key === 'Escape' && mobileMenu && !mobileMenu.classList.contains('hidden')) {
      mobileMenu.classList.add('hidden')
    }
    
    // Tab key for focus management
    if (e.key === 'Tab') {
      document.body.classList.add('using-keyboard')
    }
  })
  
  document.addEventListener('mousedown', () => {
    document.body.classList.remove('using-keyboard')
  })
}

addKeyboardAccessibility()

// ========== PERFORMANCE OPTIMIZATION ==========
// Lazy load images
if ('IntersectionObserver' in window) {
  const images = document.querySelectorAll('img[data-lazy]')
  const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target
        img.src = img.getAttribute('data-lazy')
        img.removeAttribute('data-lazy')
        imageObserver.unobserve(img)
      }
    })
  })
  
  images.forEach(img => imageObserver.observe(img))
}

// ========== CUSTOM EVENTS ==========
// Create and dispatch custom event for page load
const pageLoadEvent = new CustomEvent('pageLoaded', {
  detail: { timestamp: new Date() }
})

document.addEventListener('DOMContentLoaded', () => {
  document.dispatchEvent(pageLoadEvent)
})

// ========== INITIALIZATION ==========
document.addEventListener('DOMContentLoaded', () => {
  AOS.refresh()
})

console.log('✨ Nexus Earner\'s Website Loaded Successfully!')
console.log('🚀 Ready to help people earn online!')