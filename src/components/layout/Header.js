import tpl from './Header.html?raw'
import FacebookIcon from '../../assets/icons/facebook.svg?raw'
import TwitterIcon from '../../assets/icons/twitter.svg?raw'
import InstagramIcon from '../../assets/icons/instagram.svg?raw'
import YoutubeIcon from '../../assets/icons/youtube.svg?raw'
import LinkedinIcon from '../../assets/icons/linkedin.svg?raw'
import PhoneIcon from '../../assets/icons/phone.svg?raw'
import EmailIcon from '../../assets/icons/mail.svg?raw'
import SunIcon from '../../assets/icons/sun.svg?raw'
import MoonIcon from '../../assets/icons/moon.svg?raw'
import LogoImage from '../../assets/images/logo.webp'

{/* Configuration */ }
const SOCIAL_LINKS = [
    { name: 'Facebook', icon: FacebookIcon, href: '#' },
    { name: 'Twitter', icon: TwitterIcon, href: '#' },
    { name: 'Instagram', icon: InstagramIcon, href: '#' },
    { name: 'YouTube', icon: YoutubeIcon, href: '#' },
    { name: 'LinkedIn', icon: LinkedinIcon, href: '#' }
]

const NAV_ITEMS = ['Home', 'About', 'Contact', 'Careers', 'Services']

const CONTACT_INFO = {
    phone: '(112) 589334533',
    email: 'contact@void.fr'
}

export default function Header({ darkMode, setDarkMode } = {}) {
    const template = document.createElement('template')
    template.innerHTML = tpl
    const header = template.content.firstElementChild.cloneNode(true)

    renderSocialIcons(header)

    renderContactInfo(header)

    renderDarkModeToggle(header, setDarkMode)

    renderLogo(header)

    renderNavigation(header)

    return header
}

function renderSocialIcons(header) {
    const socialRoot = header.querySelector('.socials')

    SOCIAL_LINKS.forEach(({ name, icon, href }) => {
        const link = createSocialLink(name, icon, href)
        socialRoot.appendChild(link)
    })
}

function createSocialLink(name, iconSvg, href) {
    const a = document.createElement('a')
    a.href = href
    a.setAttribute('aria-label', name)
    a.title = name

    const span = document.createElement('span')
    span.innerHTML = iconSvg

    const svgEl = span.querySelector('svg')
    if (svgEl) {
        svgEl.classList.add(
            'w-4', 'h-4',
            'text-[#1C238D]', 'dark:text-[#B8D4F1]',
            'transition-colors'
        )
        svgEl.setAttribute('aria-hidden', 'true')
    }

    a.appendChild(span)
    return a
}

function renderContactInfo(header) {
    const phoneContainer = header.querySelector('.phone')
    const emailContainer = header.querySelector('.email')

    {/* Phone */ }
    const phoneSpan = document.createElement('span')
    phoneSpan.innerHTML = PhoneIcon
    const phoneSvg = phoneSpan.querySelector('svg')
    if (phoneSvg) {
        phoneSvg.classList.add('w-4', 'h-4')
    }

    const phoneText = document.createElement('p')
    phoneText.className = 'text-xs text-black dark:text-white'
    phoneText.textContent = CONTACT_INFO.phone

    phoneContainer.appendChild(phoneSpan)
    phoneContainer.appendChild(phoneText)

    {/* Email */ }
    const emailSpan = document.createElement('span')
    emailSpan.innerHTML = EmailIcon
    const emailSvg = emailSpan.querySelector('svg')
    if (emailSvg) {
        emailSvg.classList.add('w-4', 'h-4')
    }

    const emailText = document.createElement('p')
    emailText.className = 'text-xs text-black dark:text-white'
    emailText.textContent = CONTACT_INFO.email

    emailContainer.appendChild(emailSpan)
    emailContainer.appendChild(emailText)
}

function renderDarkModeToggle(header, setDarkMode) {
    const toggle = header.querySelector('.toggle')

    function updateToggleIcon() {
        const isDark = document.documentElement.classList.contains('dark')
        const icon = isDark ? SunIcon : MoonIcon

        toggle.innerHTML = icon
        const svgEl = toggle.querySelector('svg')
        if (svgEl) {
            svgEl.classList.add('w-4', 'h-4')
        }
    }

    updateToggleIcon()

    toggle.addEventListener('click', () => {
        const currentlyDark = document.documentElement.classList.contains('dark')
        if (setDarkMode) {
            setDarkMode(!currentlyDark)
        }
        setTimeout(updateToggleIcon, 0)
    })
}

function renderLogo(header) {
    const logoPicture = header.querySelector('.logo-picture')

    const source = document.createElement('source')
    source.type = 'image/webp'
    source.srcset = `${LogoImage} 1x`

    const img = document.createElement('img')
    img.src = LogoImage
    img.alt = "Logo de l'entreprise"
    img.width = 80
    img.height = 80
    img.className = 'h-20 w-auto'
    img.loading = 'lazy'

    logoPicture.appendChild(source)
    logoPicture.appendChild(img)
}

function renderNavigation(header) {
    const nav = header.querySelector('.nav')

    NAV_ITEMS.forEach(item => {
        const link = createNavLink(item)
        nav.appendChild(link)
    })
}

function createNavLink(text) {
    const a = document.createElement('a')
    a.href = '#'
    a.className = 'uppercase text-sm text-black dark:text-white hover:text-blue-800 dark:hover:text-blue-400 transition-colors'
    a.style.fontFamily = '"Brandon Grotesque", sans-serif'
    a.style.fontWeight = '390'
    a.textContent = text
    return a
}