import tpl from './Footer.html?raw'
import FacebookIcon from '../../assets/icons/facebook.svg?raw'
import TwitterIcon from '../../assets/icons/twitter.svg?raw'
import InstagramIcon from '../../assets/icons/instagram.svg?raw'
import YoutubeIcon from '../../assets/icons/youtube.svg?raw'
import LinkedinIcon from '../../assets/icons/linkedin.svg?raw'
import PhoneIcon from '../../assets/icons/phone.svg?raw'
import EmailIcon from '../../assets/icons/mail.svg?raw'
import MapIcon from '../../assets/icons/map.svg?raw'
import LogoImage from '../../assets/images/logo.webp'

// Configuration
const FOOTER_CONFIG = {
    logo: {
        alt: "Logo de l'entreprise",
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur quas inventore rem sapiente cupiditate in enim.'
    },
    socialLinks: [
        { name: 'Facebook', icon: FacebookIcon, href: '#' },
        { name: 'Twitter', icon: TwitterIcon, href: '#' },
        { name: 'Instagram', icon: InstagramIcon, href: '#' },
        { name: 'YouTube', icon: YoutubeIcon, href: '#' },
        { name: 'LinkedIn', icon: LinkedinIcon, href: '#' }
    ],
    sections: {
        printings: {
            title: 'Printings A',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias hic doloribus temporibus aliquid sunt voluptates.'
        },
        majority: {
            title: 'Majority',
            items: [
                'Lorem Ipsum Dummy Text',
                'Lorem Ipsum Simply',
                'Printing Industry',
                'Standard Dummy'
            ]
        },
        generator: {
            title: 'Generator',
            contacts: [
                { icon: PhoneIcon, text: '(112) 589334533', type: 'phone' },
                { icon: EmailIcon, text: 'hibatallah@void.fr', type: 'email' },
                { icon: MapIcon, text: '125, Imm lorem, Casablanca, Maroc', type: 'address' }
            ]
        }
    }
}

export default function Footer({ darkMode } = {}) {
    const template = document.createElement('template')
    template.innerHTML = tpl
    const footer = template.content.firstElementChild.cloneNode(true)

    const container = footer.querySelector('.container')

    // Render all columns
    container.appendChild(createLogoColumn(darkMode))
    container.appendChild(createPrintingsColumn(darkMode))
    container.appendChild(createMajorityColumn(darkMode))
    container.appendChild(createGeneratorColumn(darkMode))

    return footer
}

function createLogoColumn(darkMode) {
    const col = document.createElement('div')
    col.className = 'space-y-4'

    // Logo
    const picture = createLogo()

    // Description
    const description = document.createElement('p')
    description.className = 'text-gray-700 dark:text-gray-300 text-sm leading-6'
    description.style.fontFamily = '"Brandon Grotesque", sans-serif'
    description.textContent = FOOTER_CONFIG.logo.description

    // Social Links
    const socials = createSocialLinks(darkMode)

    col.appendChild(picture)
    col.appendChild(description)
    col.appendChild(socials)

    return col
}

function createLogo() {
    const picture = document.createElement('picture')

    const source = document.createElement('source')
    source.type = 'image/webp'
    source.srcset = `${LogoImage} 1x`

    const img = document.createElement('img')
    img.src = LogoImage
    img.alt = FOOTER_CONFIG.logo.alt
    img.width = 40
    img.height = 40
    img.className = 'h-10 w-auto'
    img.loading = 'lazy'

    picture.appendChild(source)
    picture.appendChild(img)

    return picture
}

function createSocialLinks(darkMode) {
    const socials = document.createElement('div')
    socials.className = 'flex items-center gap-5'

    FOOTER_CONFIG.socialLinks.forEach(({ name, icon, href }) => {
        const link = createSocialLink(name, icon, href, darkMode)
        socials.appendChild(link)
    })

    return socials
}

function createSocialLink(name, iconSvg, href, darkMode) {
    const a = document.createElement('a')
    a.href = href
    a.setAttribute('aria-label', name)
    a.title = name

    const span = document.createElement('span')
    span.innerHTML = iconSvg

    const svgEl = span.querySelector('svg')
    if (svgEl) {
        svgEl.classList.add('w-4', 'h-4')
        svgEl.style.color = darkMode ? '#B8D4F1' : '#1C238D'
        svgEl.setAttribute('aria-hidden', 'true')
    }

    a.appendChild(span)
    return a
}

function createPrintingsColumn(darkMode) {
    const col = document.createElement('div')
    col.className = 'space-y-3'

    const title = createSectionTitle(FOOTER_CONFIG.sections.printings.title, darkMode)
    const description = document.createElement('p')
    description.className = 'text-gray-700 dark:text-gray-300 text-sm leading-6'
    description.style.fontFamily = '"Brandon Grotesque", sans-serif'
    description.textContent = FOOTER_CONFIG.sections.printings.description

    col.appendChild(title)
    col.appendChild(description)

    return col
}

function createMajorityColumn(darkMode) {
    const col = document.createElement('div')
    col.className = 'space-y-3'

    const title = createSectionTitle(FOOTER_CONFIG.sections.majority.title, darkMode)

    const ul = document.createElement('ul')
    ul.className = 'text-gray-700 dark:text-gray-300 text-sm space-y-2'
    ul.style.fontFamily = '"Brandon Grotesque", sans-serif'

    FOOTER_CONFIG.sections.majority.items.forEach(itemText => {
        const li = document.createElement('li')
        li.textContent = itemText
        ul.appendChild(li)
    })

    col.appendChild(title)
    col.appendChild(ul)

    return col
}

function createGeneratorColumn(darkMode) {
    const col = document.createElement('div')
    col.className = 'space-y-4'

    const title = createSectionTitle(FOOTER_CONFIG.sections.generator.title, darkMode)

    const contactsContainer = document.createElement('div')
    contactsContainer.className = 'flex flex-col gap-3 text-sm text-gray-700 dark:text-gray-300'

    FOOTER_CONFIG.sections.generator.contacts.forEach(({ icon, text, type }) => {
        const contactRow = createContactRow(icon, text, type, darkMode)
        contactsContainer.appendChild(contactRow)
    })

    col.appendChild(title)
    col.appendChild(contactsContainer)

    return col
}

function createSectionTitle(text, darkMode) {
    const title = document.createElement('h3')
    title.className = 'font-bold text-lg'
    title.style.fontFamily = '"Brandon Grotesque", sans-serif'
    title.style.color = darkMode ? '#B8D4F1' : '#1C238D'
    title.textContent = text
    return title
}

function createContactRow(iconSvg, text, type, darkMode) {
    const row = document.createElement('div')
    row.className = type === 'address' ? 'flex items-start gap-2' : 'flex items-center gap-2'

    const iconSpan = document.createElement('span')
    iconSpan.innerHTML = iconSvg

    const svgEl = iconSpan.querySelector('svg')
    if (svgEl) {
        svgEl.style.color = darkMode ? '#B8D4F1' : '#1C238D'
        svgEl.classList.add('w-5', 'h-5')
        if (type === 'address') {
            svgEl.classList.add('mt-1')
        }
    }

    const textElement = document.createElement('p')
    textElement.style.fontFamily = '"Brandon Grotesque", sans-serif'
    textElement.textContent = text

    row.appendChild(iconSpan)
    row.appendChild(textElement)

    return row
}