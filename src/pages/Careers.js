import tpl from './Careers.html?raw'
import IdeasImage from '../assets/images/ideas.webp'
import DeliveryImage from '../assets/images/delivery.webp'
import PrintingImage from '../assets/images/printing.webp'
import InnovationImage from '../assets/images/innovation.webp'
import SupportImage from '../assets/images/support.webp'
import ShoppingImage from '../assets/images/shopping.webp'
import ChevronLeftIcon from '../assets/icons/chevron-left.svg?raw'
import ChevronRightIcon from '../assets/icons/chevron-right.svg?raw'

// Configuration
const CONFIG = {
    hero: {
        title: 'Lorem ipsum is a Dummy text.',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
    },
    features: {
        lead: 'Lorem ipsum',
        title: 'Lorem Ipsum is Simply',
        items: [
            { image: IdeasImage, title: 'Lorem Ipsum', description: 'Lorem ipsum dolor sit amet.' },
            { image: DeliveryImage, title: 'Lorem Ipsum', description: 'Lorem ipsum dolor sit amet.' },
            { image: PrintingImage, title: 'Lorem Ipsum', description: 'Lorem ipsum dolor sit amet.' },
            { image: InnovationImage, title: 'Lorem Ipsum', description: 'Lorem ipsum dolor sit amet.' },
            { image: SupportImage, title: 'Lorem Ipsum', description: 'Lorem ipsum dolor sit amet.' },
            { image: ShoppingImage, title: 'Lorem Ipsum', description: 'Lorem ipsum dolor sit amet.' }
        ]
    },
    slides: [
        {
            title: 'Lorem Ipsum 1',
            paragraphs: [
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium placeat, dolorum, corrupti numquam voluptas sint incidunt illo veritatis sed.',
                'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
                'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
            ]
        },
        {
            title: 'Lorem Ipsum 2',
            paragraphs: [
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium placeat, dolorum, corrupti numquam voluptas sint incidunt illo veritatis sed.',
                'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.'
            ]
        },
        {
            title: 'Lorem Ipsum 3',
            paragraphs: [
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium placeat, dolorum, corrupti numquam voluptas sint incidunt illo veritatis sed.',
                'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores.',
                'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum.'
            ]
        },
        {
            title: 'Lorem Ipsum 4',
            paragraphs: [
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium placeat, dolorum, corrupti numquam voluptas sint incidunt illo veritatis sed.',
                'Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates.',
                'Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias.'
            ]
        }
    ],
    accordions: [
        {
            title: 'Lorem Ipsum Title 1',
            detailsTitle: 'Details Title 1',
            items: [
                'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
                'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima laborum sed tempore eligendi rerum iure quia quod facere voluptates numquam non mollitia ipsam, similique quas odio error cum suscipit veniam?',
                'Sed do eiusmod tempor',
                'CLorem ipsum dolor sit, amet consectetur adipisicing elit. Minima laborum sed tempore eligendi rerum iure quia quod facere voluptates numquam non mollitia ipsam, similique quas odio error cum suscipit veniam?',
                'Sed do eiusmod tempor'
            ]
        },
        {
            title: 'Lorem Ipsum Title 2',
            detailsTitle: 'Details Title 2',
            items: [
                'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima laborum sed tempore eligendi rerum iure quia quod facere voluptates numquam non mollitia ipsam, similique quas odio error cum suscipit veniam?',
                'Sed do eiusmod tempor',
                'Consectetur adipiscing elit',
                'Consectetur adipiscing elit',
                'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima laborum sed tempore eligendi rerum iure quia quod facere voluptates numquam non mollitia ipsam, similique quas odio error cum suscipit veniam?'
            ]
        },
        {
            title: 'Lorem Ipsum Title 3',
            detailsTitle: 'Details Title 3',
            items: [
                'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima laborum sed tempore eligendi rerum iure quia quod facere voluptates numquam non mollitia ipsam, similique quas odio error cum suscipit veniam?',
                'Sed do eiusmod tempor',
                'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima laborum sed tempore eligendi rerum iure quia quod facere voluptates numquam non mollitia ipsam, similique quas odio error cum suscipit veniam?',
                'Ut labore et dolore magna aliqua'
            ]
        },
        {
            title: 'Lorem Ipsum Title 4',
            detailsTitle: 'Details Title 4',
            items: [
                'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
                'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima laborum sed tempore eligendi rerum iure quia quod facere voluptates numquam non mollitia ipsam, similique quas odio error cum suscipit veniam?',
                'Consectetur adipiscing elit',
                'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima laborum sed tempore eligendi rerum iure quia quod facere voluptates numquam non mollitia ipsam, similique quas odio error cum suscipit veniam?'
            ]
        }
    ],
    stats: [
        { value: 275, suffix: '+', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.' },
        { value: 275000, suffix: 'K', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.' },
        { value: 275, suffix: '%', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.' },
        { value: 4, suffix: '/5', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.' }
    ],
    form: {
        title: 'Lorem Ipsum is simply do text of the printing',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        fields: {
            email: { name: 'email', type: 'email', placeholder: 'Email address' },
            name: { name: 'name', type: 'text', placeholder: 'Full Name' },
            phone: { name: 'phone', type: 'tel', placeholder: 'Phone Number' },
            message: { name: 'message', placeholder: 'Your message', rows: 5 }
        },
        submitText: 'Submit'
    }
}

export default function Careers({ darkMode } = {}) {
    const template = document.createElement('template')
    template.innerHTML = tpl
    const container = template.content.firstElementChild.cloneNode(true)

    initHeroSection(container, darkMode)
    initFeaturesSection(container, darkMode)
    initSliderSection(container, darkMode)
    initAccordionsSection(container, darkMode)
    initStatsSection(container, darkMode)
    initFormSection(container, darkMode)

    return container
}

// ========== NEW INITIALIZERS USING HTML TEMPLATE ==========

function initHeroSection(container, darkMode) {
    const section = container.querySelector('.hero-section')
    if (!section) return

    section.style.backgroundColor = darkMode ? '#141B6B' : '#1C238D'

    const title = section.querySelector('.hero-title')
    const description = section.querySelector('.hero-description')

    if (title) {
        title.textContent = CONFIG.hero.title
    }

    if (description) {
        description.textContent = CONFIG.hero.description
        description.style.fontFamily = '"Brandon Grotesque", sans-serif'
        description.style.fontWeight = '390'
        description.style.lineHeight = '1.8'
    }
}

// ========== FEATURES INITIALIZER ==========

function initFeaturesSection(container, darkMode) {
    const section = container.querySelector('.features-section')
    if (!section) return

    const lead = section.querySelector('.features-lead')
    const title = section.querySelector('.features-title')
    const grid = section.querySelector('.features-grid')
    const cardTemplate = section.querySelector('#feature-card-template')

    if (lead) {
        lead.style.fontFamily = '"Brandon Grotesque", sans-serif'
        lead.style.fontSize = '14px'
        lead.textContent = CONFIG.features.lead
    }

    if (title) {
        title.textContent = CONFIG.features.title
        title.style.color = darkMode ? '#3B6CB8' : '#1C238D'
    }

    if (!grid || !cardTemplate) return

    CONFIG.features.items.forEach((item, index) => {
        const node = cardTemplate.content.firstElementChild.cloneNode(true)

        const source = node.querySelector('.feature-picture-source')
        const img = node.querySelector('.feature-image')
        if (source) {
            source.srcset = `${item.image} 1x`
        }
        if (img) {
            img.src = item.image
            img.alt = `Feature ${index + 1}`
        }

        const titleEl = node.querySelector('.feature-title')
        const descEl = node.querySelector('.feature-description')
        if (titleEl) {
            titleEl.textContent = item.title
            titleEl.style.color = darkMode ? '#3B6CB8' : '#1C238D'
        }
        if (descEl) {
            descEl.textContent = item.description
        }

        grid.appendChild(node)
    })
}

// ========== SLIDER INITIALIZER + CLASS ==========

function initSliderSection(container, darkMode) {
    const section = container.querySelector('.slider-section')
    if (!section) return

    const sliderWrap = section.querySelector('.slider-wrap')
    const slider = new HtmlSlider(CONFIG.slides, darkMode, section)

    if (sliderWrap) {
        sliderWrap.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') slider.prev()
            if (e.key === 'ArrowRight') slider.next()
        })
    }
}

class HtmlSlider {
    constructor(slides, darkMode, section) {
        this.slides = slides
        this.darkMode = darkMode
        this.section = section
        this.currentSlide = 0
        this.autoplayInterval = null
        this.AUTOPLAY_DELAY = 5000

        this.setupElements()
        this.attachEventListeners()
        this.startAutoplay()
    }

    setupElements() {
        this.prevButton = this.section.querySelector('.slider-prev')
        this.nextButton = this.section.querySelector('.slider-next')
        this.viewport = this.section.querySelector('.slider-viewport')
        this.track = this.section.querySelector('.slider-track')
        this.indicators = this.section.querySelector('.slider-indicators')

        if (this.viewport) {
            this.viewport.style.backgroundColor = this.darkMode ? '#0f1724' : '#ffffff'
        }

        if (this.track) {
            this.track.style.display = 'flex'
            this.track.style.transition = 'transform 500ms ease'
            this.track.style.willChange = 'transform'
        }

        const slideTemplate = this.section.querySelector('#slider-slide-template')
        if (this.track && slideTemplate) {
            this.slides.forEach((slide) => {
                const node = slideTemplate.content.firstElementChild.cloneNode(true)

                // Ensure each slide takes full viewport width like before
                node.style.minWidth = '100%'
                node.style.width = '100%'

                const titleEl = node.querySelector('.slider-slide-title')
                if (titleEl) {
                    titleEl.textContent = slide.title
                    titleEl.style.color = this.darkMode ? '#3B6CB8' : '#1C238D'
                }

                const paraPrototype = node.querySelector('.slider-slide-paragraph')
                if (paraPrototype && paraPrototype.parentNode) {
                    const parent = paraPrototype.parentNode

                    slide.paragraphs.forEach((text, index) => {
                        const p = index === 0 ? paraPrototype : paraPrototype.cloneNode(true)
                        p.textContent = text
                        if (index > 0) parent.appendChild(p)
                    })
                }

                this.track.appendChild(node)
            })
        }

        this.renderIndicators()
    }

    attachEventListeners() {
        if (this.prevButton) {
            this.prevButton.innerHTML = ChevronLeftIcon
            this.prevButton.setAttribute('aria-label', 'Previous slide')
            const svg = this.prevButton.querySelector('svg')
            if (svg) {
                svg.style.width = '1.5rem'
                svg.style.height = '1.5rem'
            }
            this.prevButton.addEventListener('click', () => this.prev())
        }

        if (this.nextButton) {
            this.nextButton.innerHTML = ChevronRightIcon
            this.nextButton.setAttribute('aria-label', 'Next slide')
            const svg = this.nextButton.querySelector('svg')
            if (svg) {
                svg.style.width = '1.5rem'
                svg.style.height = '1.5rem'
            }
            this.nextButton.addEventListener('click', () => this.next())
        }

        if (this.viewport && this.track) {
            this.viewport.addEventListener('mouseenter', () => this.stopAutoplay())
            this.viewport.addEventListener('mouseleave', () => this.startAutoplay())

            let pointerStartX = null
            let pointerDown = false

            this.track.addEventListener('pointerdown', (e) => {
                pointerStartX = e.clientX
                pointerDown = true
                this.track.setPointerCapture(e.pointerId)
            })

            this.track.addEventListener('pointerup', (e) => {
                if (!pointerDown || pointerStartX === null) return
                const diff = e.clientX - pointerStartX
                if (diff > 50) this.prev()
                else if (diff < -50) this.next()
                pointerDown = false
                pointerStartX = null
            })
        }
    }

    updateTrack() {
        if (this.track) {
            this.track.style.transform = `translateX(-${this.currentSlide * 100}%)`
        }
        this.renderIndicators()
    }

    prev() {
        this.currentSlide = this.currentSlide > 0 ? this.currentSlide - 1 : this.slides.length - 1
        this.updateTrack()
        this.restartAutoplay()
    }

    next() {
        this.currentSlide = this.currentSlide < this.slides.length - 1 ? this.currentSlide + 1 : 0
        this.updateTrack()
        this.restartAutoplay()
    }

    renderIndicators() {
        if (!this.indicators) return
        this.indicators.innerHTML = ''
        this.slides.forEach((_, i) => {
            const button = document.createElement('button')
            button.style.width = '0.75rem'
            button.style.height = '0.75rem'
            button.style.borderRadius = '9999px'
            button.style.backgroundColor = this.currentSlide === i
                ? (this.darkMode ? '#3B6CB8' : '#1C238D')
                : (this.darkMode ? '#4B5563' : '#D1D5DB')
            button.setAttribute('aria-label', `Go to slide ${i + 1}`)
            if (this.currentSlide === i) button.setAttribute('aria-current', 'true')
            button.addEventListener('click', () => {
                this.currentSlide = i
                this.updateTrack()
                this.restartAutoplay()
            })
            this.indicators.appendChild(button)
        })
    }

    startAutoplay() {
        this.stopAutoplay()
        this.autoplayInterval = setInterval(() => this.next(), this.AUTOPLAY_DELAY)
    }

    stopAutoplay() {
        if (this.autoplayInterval) {
            clearInterval(this.autoplayInterval)
            this.autoplayInterval = null
        }
    }

    restartAutoplay() {
        this.stopAutoplay()
        this.startAutoplay()
    }
}

// ========== ACCORDIONS INITIALIZER + CLASS ==========

function initAccordionsSection(container, darkMode) {
    const section = container.querySelector('.accordions-section')
    if (!section) return

    new HtmlAccordionGroup(CONFIG.accordions, darkMode, section)
}

class HtmlAccordionGroup {
    constructor(accordions, darkMode, section) {
        this.accordions = accordions
        this.darkMode = darkMode
        this.section = section
        this.items = []
        this.openIndex = null

        this.createAccordions()
    }

    createAccordions() {
        const wrapper = this.section.querySelector('.accordions-wrapper')
        const template = this.section.querySelector('#accordion-item-template')
        if (!wrapper || !template) return

        this.accordions.forEach((acc, idx) => {
            const node = template.content.firstElementChild.cloneNode(true)

            const titleEl = node.querySelector('.accordion-title')
            const button = node.querySelector('.accordion-toggle')
            const content = node.querySelector('.accordion-content')
            const detailsTitle = node.querySelector('.accordion-details-title')
            const list = node.querySelector('.accordion-list')
            const header = node.querySelector('.accordion-header')

            if (titleEl) {
                titleEl.textContent = acc.title
            }
            if (button) {
                button.style.backgroundColor = this.darkMode ? '#2E3694' : '#1C238D'
            }
            if (detailsTitle) {
                detailsTitle.textContent = acc.detailsTitle
            }
            if (list) {
                acc.items.forEach((itemText) => {
                    const li = document.createElement('li')
                    li.textContent = itemText
                    list.appendChild(li)
                })
            }

            // Ensure closed state is fully hidden (no text peeking)
            if (content) {
                content.style.maxHeight = '0px'
                content.style.display = 'none'
                content.style.overflow = 'hidden'
                content.style.transition = 'max-height 300ms ease'
            }

            if (header && button && content) {
                header.addEventListener('click', () => this.toggleAccordion(idx, button, content))
            }

            wrapper.appendChild(node)
            this.items.push({ element: node, button, content })
        })
    }

    toggleAccordion(index, button, content) {
        const isOpen = this.openIndex === index

        this.items.forEach((item, i) => {
            if (i !== index && item.content && item.content.style.display !== 'none') {
                this.closeContent(item.content)
                if (item.button) item.button.textContent = '+'
            }
        })

        if (isOpen) {
            this.closeContent(content)
            button.textContent = '+'
            this.openIndex = null
        } else {
            this.openContent(content)
            button.textContent = '-'
            this.openIndex = index
        }
    }

    openContent(node) {
        node.style.display = 'block'
        requestAnimationFrame(() => {
            node.style.maxHeight = node.scrollHeight + 'px'
        })
    }

    closeContent(node) {
        node.style.maxHeight = '0px'
        const onEnd = (e) => {
            if (e.propertyName === 'max-height') {
                node.style.display = 'none'
                node.removeEventListener('transitionend', onEnd)
            }
        }
        node.addEventListener('transitionend', onEnd)
    }
}

// ========== STATS INITIALIZER + COUNTER ==========

function initStatsSection(container, darkMode) {
    const section = container.querySelector('.stats-section')
    if (!section) return

    const wrapper = section.querySelector('.stats-wrapper')
    const template = section.querySelector('#stat-card-template')
    if (!wrapper || !template) return

    const counterElements = []

    CONFIG.stats.forEach((stat) => {
        const node = template.content.firstElementChild.cloneNode(true)

        const valueEl = node.querySelector('.stat-value')
        const textEl = node.querySelector('.stat-text')

        if (valueEl) {
            valueEl.style.color = darkMode ? '#3B6CB8' : '#1C238D'
            valueEl.textContent = `0${stat.suffix}`
        }
        if (textEl) {
            textEl.textContent = stat.text
        }

        wrapper.appendChild(node)
        if (valueEl) {
            counterElements.push({ el: valueEl, target: stat.value, suffix: stat.suffix })
        }
    })

    const counter = new HtmlCounter(counterElements)
    counter.observeSection(section)
}

class HtmlCounter {
    constructor(elements) {
        this.elements = elements
        this.counters = elements.map(() => 0)
        this.duration = 2000
        this.intervalTime = 20
        this.increments = elements.map(c => c.target / (this.duration / this.intervalTime))
        this.interval = null
    }

    start() {
        if (this.interval) return

        this.interval = setInterval(() => {
            this.counters = this.counters.map((val, idx) => {
                const next = val + this.increments[idx]
                return next >= this.elements[idx].target ? this.elements[idx].target : next
            })

            this.counters.forEach((v, i) => {
                this.elements[i].el.textContent = Math.floor(v).toLocaleString() + this.elements[i].suffix
            })

            if (this.counters.every((v, i) => v >= this.elements[i].target)) {
                clearInterval(this.interval)
                this.interval = null
            }
        }, this.intervalTime)
    }

    observeSection(section) {
        try {
            const observer = new IntersectionObserver((entries, obs) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        this.start()
                        obs.disconnect()
                    }
                })
            }, { threshold: 0.3 })
            observer.observe(section)
        } catch (e) {
            this.start()
        }
    }
}

// ========== FORM INITIALIZER + CLASS ==========

function initFormSection(container, darkMode) {
    const section = container.querySelector('.form-section')
    if (!section) return

    const title = section.querySelector('.form-title')
    const description = section.querySelector('.form-description')

    if (title) {
        title.textContent = CONFIG.form.title
    }
    if (description) {
        description.textContent = CONFIG.form.description
    }

    new HtmlContactForm(section, darkMode)
}

class HtmlContactForm {
    constructor(section, darkMode) {
        this.darkMode = darkMode
        this.section = section
        this.element = section.querySelector('.contact-form')
        if (!this.element) return

        this.element.noValidate = true

        const { email, name, phone, message } = CONFIG.form.fields

        this.emailInput = this.element.querySelector('[data-field="email"]')
        this.nameInput = this.element.querySelector('[data-field="name"]')
        this.phoneInput = this.element.querySelector('[data-field="phone"]')
        this.messageInput = this.element.querySelector('[data-field="message"]')

        this.emailError = this.element.querySelector('[data-error="email"]')
        this.nameError = this.element.querySelector('[data-error="name"]')
        this.phoneError = this.element.querySelector('[data-error="phone"]')
        this.messageError = this.element.querySelector('[data-error="message"]')

        if (this.emailInput && email) this.applyInputConfig(this.emailInput, email)
        if (this.nameInput && name) this.applyInputConfig(this.nameInput, name)
        if (this.phoneInput && phone) this.applyInputConfig(this.phoneInput, phone)
        if (this.messageInput && message) this.applyTextareaConfig(this.messageInput, message)

        this.submitButton = this.element.querySelector('.form-submit')
        if (this.submitButton) {
            this.submitButton.textContent = CONFIG.form.submitText
            this.submitButton.style.backgroundColor = this.darkMode ? '#2E3694' : '#1C238D'

            this.submitButton.addEventListener('mouseenter', () => {
                this.submitButton.style.backgroundColor = this.darkMode ? '#3D44B8' : '#141B6B'
            })
            this.submitButton.addEventListener('mouseleave', () => {
                this.submitButton.style.backgroundColor = this.darkMode ? '#2E3694' : '#1C238D'
            })
        }

        this.element.addEventListener('submit', (e) => this.handleSubmit(e))
    }

    applyInputConfig(input, { name, type, placeholder }) {
        input.name = name
        input.type = type
        if (placeholder) input.placeholder = placeholder
        input.style.setProperty('--tw-ring-color', '#1C238D')
    }

    applyTextareaConfig(textarea, { name, placeholder, rows }) {
        textarea.name = name
        if (placeholder) textarea.placeholder = placeholder
        if (rows != null) textarea.rows = rows
        textarea.style.setProperty('--tw-ring-color', '#1C238D')
    }

    handleSubmit(e) {
        e.preventDefault()
        try {
            const email = this.emailInput ? this.emailInput.value.trim() : ''
            const name = this.nameInput ? this.nameInput.value.trim() : ''
            const phone = this.phoneInput ? this.phoneInput.value.trim() : ''
            const message = this.messageInput ? this.messageInput.value.trim() : ''

            const errors = this.validate(email, name, phone, message)

            if (this.emailError) this.emailError.textContent = ''
            if (this.nameError) this.nameError.textContent = ''
            if (this.phoneError) this.phoneError.textContent = ''
            if (this.messageError) this.messageError.textContent = ''

            if (errors.email && this.emailError) this.emailError.textContent = errors.email
            if (errors.name && this.nameError) this.nameError.textContent = errors.name
            if (errors.phone && this.phoneError) this.phoneError.textContent = errors.phone
            if (errors.message && this.messageError) this.messageError.textContent = errors.message

            if (Object.keys(errors).length === 0) {
                alert('Form is valid!')
                this.element.reset()
            }
        } catch (err) {
            console.error('Error submitting form:', err)
            alert('An unexpected error occurred. Please try again.')
        }
    }

    validate(email, name, phone, message) {
        const errors = {}

        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
        if (!email) {
            errors.email = 'Email is required'
        } else if (!emailRegex.test(email)) {
            errors.email = 'Invalid email address'
        }

        const nameRegex = /^[A-Za-z\s]{2,}$/
        if (!name) {
            errors.name = 'Name is required'
        } else if (!nameRegex.test(name)) {
            errors.name = 'Invalid name (only letters, min 2 chars)'
        }

        const phoneRegex = /^\d{10,15}$/
        const phoneDigits = phone.replace(/\D/g, '')
        if (!phone) {
            errors.phone = 'Phone is required'
        } else if (!phoneRegex.test(phoneDigits)) {
            errors.phone = 'Invalid phone number'
        }

        if (!message) {
            errors.message = 'Message is required'
        }

        return errors
    }
}