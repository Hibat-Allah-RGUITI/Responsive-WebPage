import Header from './Header.js'
import Footer from './Footer.js'
import Careers from '../../pages/Careers.js'

export default function Layout({ children }) {
    let darkMode = false
    try {
        const saved = localStorage.getItem('darkMode')
        if (saved !== null) darkMode = saved === 'true'
        else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) darkMode = true
    } catch (e) {
        darkMode = false
    }
    if (darkMode) document.documentElement.classList.add('dark')

    function setDarkMode(val) {
        darkMode = val
        try { localStorage.setItem('darkMode', darkMode ? 'true' : 'false') } catch (e) { }
        if (darkMode) document.documentElement.classList.add('dark')
        else document.documentElement.classList.remove('dark')

        const headerEl = document.querySelector('header')
        if (headerEl && headerEl.parentNode) {
            const parent = headerEl.parentNode
            parent.removeChild(headerEl)
            parent.insertBefore(Header({ darkMode, setDarkMode }), parent.firstChild)
        }

        const mainEl = wrapper.querySelector('main')
        if (mainEl) {
            mainEl.innerHTML = ''
            const newChildren = Careers({ darkMode })
            mainEl.appendChild(newChildren)
        }

        const footerEl = document.querySelector('footer')
        if (footerEl && footerEl.parentNode) {
            const parent = footerEl.parentNode
            parent.removeChild(footerEl)
            parent.appendChild(Footer({ darkMode }))
        }
    }

    const wrapper = document.createElement('div')
    wrapper.className = 'min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300'
    const header = Header({ darkMode, setDarkMode })
    wrapper.appendChild(header)

    const main = document.createElement('main')
    main.appendChild(children)
    wrapper.appendChild(main)

    const footer = Footer({ darkMode })
    wrapper.appendChild(footer)

    return wrapper
}
