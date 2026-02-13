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

    // Render all sections
    const heroSection = container.querySelector('.hero-section')
    heroSection.replaceWith(createHeroSection(darkMode))

    const featuresSection = container.querySelector('.features-section')
    featuresSection.replaceWith(createFeaturesSection(darkMode))

    const sliderSection = container.querySelector('.slider-section')
    sliderSection.replaceWith(createSliderSection(darkMode))

    const accordionsSection = container.querySelector('.accordions-section')
    accordionsSection.replaceWith(createAccordionsSection(darkMode))

    const statsSection = container.querySelector('.stats-section')
    statsSection.replaceWith(createStatsSection(darkMode))

    const formSection = container.querySelector('.form-section')
    formSection.replaceWith(createFormSection(darkMode))

    return container
}

// ========== HERO SECTION ==========
function createHeroSection(darkMode) {
    const section = document.createElement('section')
    section.className = 'text-white text-center py-10 px-4 sm:px-10 lg:px-40'
    section.style.backgroundColor = darkMode ? '#141B6B' : '#1C238D'

    const title = document.createElement('h1')
    title.className = 'text-4xl font-bold mb-6'
    title.textContent = CONFIG.hero.title

    const description = document.createElement('p')
    description.className = 'text-lg mb-8'
    description.style.fontFamily = '"Brandon Grotesque", sans-serif'
    description.style.fontWeight = '390'
    description.style.lineHeight = '1.8'
    description.textContent = CONFIG.hero.description

    section.appendChild(title)
    section.appendChild(description)

    return section
}

// ========== FEATURES SECTION ==========
function createFeaturesSection(darkMode) {
    const section = document.createElement('section')
    section.className = 'py-16 px-4 bg-[#F6F3EE]'
    if (darkMode) section.classList.add('dark:bg-gray-800')

    const lead = document.createElement('p')
    lead.className = 'text-center text-black dark:text-white mb-2'
    lead.style.fontFamily = '"Brandon Grotesque", sans-serif'
    lead.style.fontSize = '14px'
    lead.textContent = CONFIG.features.lead

    const title = document.createElement('h2')
    title.className = 'text-center font-bold text-3xl mb-12'
    title.style.color = darkMode ? '#3B6CB8' : '#1C238D'
    title.textContent = CONFIG.features.title

    const grid = document.createElement('div')
    grid.className = 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'

    CONFIG.features.items.forEach((item, idx) => {
        const card = createFeatureCard(item, idx, darkMode)
        grid.appendChild(card)
    })

    section.appendChild(lead)
    section.appendChild(title)
    section.appendChild(grid)

    return section
}

function createFeatureCard(item, index, darkMode) {
    const card = document.createElement('a')
    card.href = '#'
    card.className = 'flex flex-col items-center text-center gap-3 p-4 rounded-lg hover:bg-gray-100 hover:scale-105 transition cursor-pointer'

    const { picture, img } = createPicture(item.image, `Feature ${index + 1}`)
    img.className = 'w-20 h-20 object-cover'
    img.width = 80
    img.height = 80

    const title = document.createElement('h3')
    title.className = 'font-bold'
    title.style.color = darkMode ? '#3B6CB8' : '#1C238D'
    title.textContent = item.title

    const description = document.createElement('p')
    description.className = 'text-sm text-gray-700 dark:text-gray-300'
    description.textContent = item.description

    card.appendChild(picture)
    card.appendChild(title)
    card.appendChild(description)

    return card
}

// ========== SLIDER SECTION ==========
function createSliderSection(darkMode) {
    const section = document.createElement('section')
    section.className = 'py-16 px-4 bg-gray-50 dark:bg-gray-900 text-center'

    const sliderWrap = document.createElement('div')
    sliderWrap.className = 'max-w-4xl mx-auto relative flex items-center gap-4'
    sliderWrap.tabIndex = 0
    sliderWrap.setAttribute('role', 'region')
    sliderWrap.setAttribute('aria-label', 'Carousel')

    const slider = new Slider(CONFIG.slides, darkMode)

    sliderWrap.appendChild(slider.prevButton)
    sliderWrap.appendChild(slider.viewport)
    sliderWrap.appendChild(slider.nextButton)

    section.appendChild(sliderWrap)
    section.appendChild(slider.indicators)

    // Keyboard navigation
    sliderWrap.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') slider.prev()
        if (e.key === 'ArrowRight') slider.next()
    })

    return section
}

// Slider Class
class Slider {
    constructor(slides, darkMode) {
        this.slides = slides
        this.darkMode = darkMode
        this.currentSlide = 0
        this.autoplayInterval = null
        this.AUTOPLAY_DELAY = 5000

        this.createElements()
        this.attachEventListeners()
        this.startAutoplay()
    }

    createElements() {
        // Previous button
        this.prevButton = this.createNavigationButton('prev', ChevronLeftIcon)

        // Next button
        this.nextButton = this.createNavigationButton('next', ChevronRightIcon)

        // Viewport and track
        this.viewport = document.createElement('div')
        this.viewport.className = 'flex-1 overflow-hidden rounded-xl'
        this.viewport.style.backgroundColor = this.darkMode ? '#0f1724' : '#ffffff'

        this.track = document.createElement('div')
        this.track.style.display = 'flex'
        this.track.style.transition = 'transform 500ms ease'
        this.track.style.willChange = 'transform'

        // Create slides
        this.slides.forEach((slide) => {
            const slideEl = this.createSlideElement(slide)
            this.track.appendChild(slideEl)
        })

        this.viewport.appendChild(this.track)

        // Indicators
        this.indicators = document.createElement('div')
        this.indicators.className = 'flex justify-center gap-3 mt-6'
        this.renderIndicators()
    }

    createNavigationButton(type, iconSvg) {
        const button = document.createElement('button')
        button.className = 'flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-white transition hover:opacity-80'
        button.style.backgroundColor = this.darkMode ? '#3B6CB8' : '#1C238D'
        button.innerHTML = iconSvg
        button.setAttribute('aria-label', type === 'prev' ? 'Previous slide' : 'Next slide')

        const svg = button.querySelector('svg')
        if (svg) {
            svg.classList.add('w-6', 'h-6')
        }

        return button
    }

    createSlideElement(slide) {
        const slideEl = document.createElement('div')
        slideEl.style.minWidth = '100%'
        slideEl.style.width = '100%'
        slideEl.className = 'p-8'

        const title = document.createElement('h3')
        title.className = 'text-2xl font-bold mb-4'
        title.style.color = this.darkMode ? '#3B6CB8' : '#1C238D'
        title.textContent = slide.title
        slideEl.appendChild(title)

        slide.paragraphs.forEach((paragraphText) => {
            const p = document.createElement('p')
            p.className = 'text-gray-700 dark:text-gray-300 text-sm leading-6 mb-3'
            p.textContent = paragraphText
            slideEl.appendChild(p)
        })

        return slideEl
    }

    attachEventListeners() {
        this.prevButton.addEventListener('click', () => this.prev())
        this.nextButton.addEventListener('click', () => this.next())

        // Pause on hover
        this.viewport.addEventListener('mouseenter', () => this.stopAutoplay())
        this.viewport.addEventListener('mouseleave', () => this.startAutoplay())

        // Touch/pointer support
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

    updateTrack() {
        this.track.style.transform = `translateX(-${this.currentSlide * 100}%)`
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
        this.indicators.innerHTML = ''
        this.slides.forEach((_, i) => {
            const button = document.createElement('button')
            button.className = 'w-3 h-3 rounded-full'
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

// ========== ACCORDIONS SECTION ==========
function createAccordionsSection(darkMode) {
    const section = document.createElement('section')
    section.className = 'py-16 px-4 bg-[#F6F3EE] dark:bg-gray-800'

    const wrapper = document.createElement('div')
    wrapper.className = 'max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6'

    const accordion = new AccordionGroup(CONFIG.accordions, darkMode)
    accordion.items.forEach(item => wrapper.appendChild(item.element))

    section.appendChild(wrapper)

    return section
}

// Accordion Class
class AccordionGroup {
    constructor(accordions, darkMode) {
        this.accordions = accordions
        this.darkMode = darkMode
        this.items = []
        this.openIndex = null

        this.createAccordions()
    }

    createAccordions() {
        this.accordions.forEach((acc, idx) => {
            const item = this.createAccordionItem(acc, idx)
            this.items.push(item)
        })
    }

    createAccordionItem(acc, index) {
        const col = document.createElement('div')
        col.className = 'space-y-2'

        // Header
        const header = document.createElement('div')
        header.className = 'flex justify-between items-center bg-white dark:bg-gray-700 rounded-lg px-6 py-4 cursor-pointer'

        const title = document.createElement('h3')
        title.className = 'font-bold text-lg text-black dark:text-white'
        title.textContent = acc.title

        const button = document.createElement('button')
        button.className = 'w-5 h-5 flex items-center justify-center rounded-full text-white text-2xl font-bold'
        button.style.backgroundColor = this.darkMode ? '#2E3694' : '#1C238D'
        button.textContent = '+'

        // Content
        const content = document.createElement('div')
        content.className = 'accordion-content bg-gray-50 dark:bg-gray-700 rounded-lg px-6 py-4 overflow-hidden'
        content.style.maxHeight = '0px'
        content.style.transition = 'max-height 300ms ease'
        content.style.display = 'none'

        const detailsTitle = document.createElement('h4')
        detailsTitle.className = 'font-semibold mb-2 text-black dark:text-white'
        detailsTitle.textContent = acc.detailsTitle

        const list = document.createElement('ul')
        list.className = 'list-disc list-inside text-sm text-gray-700 dark:text-gray-300 space-y-1'

        acc.items.forEach((itemText) => {
            const li = document.createElement('li')
            li.textContent = itemText
            list.appendChild(li)
        })

        content.appendChild(detailsTitle)
        content.appendChild(list)

        header.appendChild(title)
        header.appendChild(button)
        col.appendChild(header)
        col.appendChild(content)

        // Event listener
        header.addEventListener('click', () => this.toggleAccordion(index, button, content))

        return { element: col, button, content }
    }

    toggleAccordion(index, button, content) {
        const isOpen = this.openIndex === index

        // Close all
        this.items.forEach((item, i) => {
            if (i !== index && item.content.style.display !== 'none') {
                this.closeContent(item.content)
                item.button.textContent = '+'
            }
        })

        // Toggle current
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

// ========== STATS SECTION ==========
function createStatsSection(darkMode) {
    const section = document.createElement('section')
    section.className = 'py-16 px-4'

    const wrapper = document.createElement('div')
    wrapper.className = 'max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-10'

    const counterElements = []

    CONFIG.stats.forEach((stat) => {
        const { element, counterEl } = createStatCard(stat, darkMode)
        wrapper.appendChild(element)
        counterElements.push({ el: counterEl, target: stat.value, suffix: stat.suffix })
    })

    section.appendChild(wrapper)

    // Animate counters on scroll
    const counter = new Counter(counterElements)
    counter.observeSection(section)

    return section
}

function createStatCard(stat, darkMode) {
    const card = document.createElement('div')
    card.className = 'text-center'

    const value = document.createElement('h2')
    value.className = 'text-5xl font-bold'
    value.style.color = darkMode ? '#3B6CB8' : '#1C238D'
    value.textContent = '0' + stat.suffix

    const text = document.createElement('p')
    text.className = 'text-black dark:text-white mt-4 text-sm'
    text.textContent = stat.text

    card.appendChild(value)
    card.appendChild(text)

    return { element: card, counterEl: value }
}

// Counter Class
class Counter {
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

// ========== FORM SECTION ==========
function createFormSection(darkMode) {
    const section = document.createElement('section')
    section.className = 'bg-[#F6F3EE] dark:bg-gray-800 py-16 px-4 text-center'

    const title = document.createElement('h2')
    title.className = 'text-3xl font-bold mb-4 text-black dark:text-white'
    title.textContent = CONFIG.form.title

    const description = document.createElement('p')
    description.className = 'text-black dark:text-white mb-8 text-sm'
    description.textContent = CONFIG.form.description

    const form = new ContactForm(darkMode)

    section.appendChild(title)
    section.appendChild(description)
    section.appendChild(form.element)

    return section
}

// Form Class
class ContactForm {
    constructor(darkMode) {
        this.darkMode = darkMode
        this.createElement()
    }

    createElement() {
        try {
            this.element = document.createElement('form')
            this.element.noValidate = true
            this.element.className = 'max-w-lg mx-auto flex flex-col gap-1'

            // Fields
            this.emailInput = this.createInput(CONFIG.form.fields.email)
            this.emailError = this.createErrorDiv()
            this.nameInput = this.createInput(CONFIG.form.fields.name)
            this.nameError = this.createErrorDiv()
            this.phoneInput = this.createInput(CONFIG.form.fields.phone)
            this.phoneError = this.createErrorDiv()
            this.messageInput = this.createTextarea(CONFIG.form.fields.message)
            this.messageError = this.createErrorDiv()

            // Submit button
            this.submitButton = this.createSubmitButton()

            // Append all with their error divs
            this.element.appendChild(this.emailInput)
            this.element.appendChild(this.emailError)
            this.element.appendChild(this.nameInput)
            this.element.appendChild(this.nameError)
            this.element.appendChild(this.phoneInput)
            this.element.appendChild(this.phoneError)
            this.element.appendChild(this.messageInput)
            this.element.appendChild(this.messageError)
            this.element.appendChild(this.submitButton)

            // Event listener
            this.element.addEventListener('submit', (e) => this.handleSubmit(e))
        } catch (err) {
            console.error('Error creating form:', err)
        }
    }

    createInput({ name, type, placeholder }) {
        const input = document.createElement('input')
        input.name = name
        input.type = type
        input.placeholder = placeholder
        input.className = 'px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 bg-white dark:bg-gray-700 text-black dark:text-white'
        input.style.setProperty('--tw-ring-color', '#1C238D')
        return input
    }

    createTextarea({ name, placeholder, rows }) {
        const textarea = document.createElement('textarea')
        textarea.name = name
        textarea.placeholder = placeholder
        textarea.rows = rows
        textarea.className = 'px-4 py-3 rounded-md border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 resize-none bg-white dark:bg-gray-700 text-black dark:text-white'
        textarea.style.setProperty('--tw-ring-color', '#1C238D')
        return textarea
    }

    createErrorDiv() {
        const div = document.createElement('div')
        div.className = 'text-red-600 text-sm mt-1 min-h-[1rem]'
        return div
    }

    createSubmitButton() {
        const button = document.createElement('button')
        button.type = 'submit'
        button.className = 'text-white font-bold py-3 px-6 rounded-md mx-auto transition'
        button.style.backgroundColor = this.darkMode ? '#2E3694' : '#1C238D'
        button.textContent = CONFIG.form.submitText

        button.addEventListener('mouseenter', () => {
            button.style.backgroundColor = this.darkMode ? '#3D44B8' : '#141B6B'
        })
        button.addEventListener('mouseleave', () => {
            button.style.backgroundColor = this.darkMode ? '#2E3694' : '#1C238D'
        })

        return button
    }

    handleSubmit(e) {
        e.preventDefault()
        try {
            const email = this.emailInput.value.trim()
            const name = this.nameInput.value.trim()
            const phone = this.phoneInput.value.trim()
            const message = this.messageInput.value.trim()

            const errors = this.validate(email, name, phone, message)

            // Clear all error divs
            this.emailError.textContent = ''
            this.nameError.textContent = ''
            this.phoneError.textContent = ''
            this.messageError.textContent = ''

            // Display errors beside each field
            if (errors.email) this.emailError.textContent = errors.email
            if (errors.name) this.nameError.textContent = errors.name
            if (errors.phone) this.phoneError.textContent = errors.phone
            if (errors.message) this.messageError.textContent = errors.message

            // If no errors, submit
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

        // Email regex
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!email) {
            errors.email = 'Email is required'
        } else if (!emailRegex.test(email)) {
            errors.email = 'Invalid email address'
        }

        // Name regex
        const nameRegex = /^[A-Za-z\s]{2,}$/
        if (!name) {
            errors.name = 'Name is required'
        } else if (!nameRegex.test(name)) {
            errors.name = 'Invalid name (only letters, min 2 chars)'
        }

        // Phone regex
        const phoneRegex = /^\d{10,15}$/
        const phoneDigits = phone.replace(/\D/g, '')
        if (!phone) {
            errors.phone = 'Phone is required'
        } else if (!phoneRegex.test(phoneDigits)) {
            errors.phone = 'Invalid phone number'
        }

        // Message
        if (!message) {
            errors.message = 'Message is required'
        }

        return errors
    }
}


// ========== HELPER FUNCTIONS ==========
function createPicture(srcPath, alt = '') {
    const picture = document.createElement('picture')

    const source = document.createElement('source')
    source.type = 'image/webp'
    source.srcset = `${srcPath} 1x`

    const img = document.createElement('img')
    img.src = srcPath
    img.alt = alt
    img.width = 40
    img.height = 40
    img.loading = 'lazy'

    picture.appendChild(source)
    picture.appendChild(img)

    return { picture, img }
}