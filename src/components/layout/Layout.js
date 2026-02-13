import Header from './Header.js'
import Footer from './Footer.js'
import Careers from '../../pages/Careers.js'

// Initialize layout on existing HTML structure instead of generating it entirely with JS
export default function initLayout() {
    const app = document.getElementById('app')
    if (!app) return

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

        renderHeader()
        renderMain()
        renderFooter()
    }

    function renderHeader() {
        const currentHeader = app.querySelector('header')
        if (!currentHeader || !currentHeader.parentNode) return
        const newHeader = Header({ darkMode, setDarkMode })
        currentHeader.parentNode.replaceChild(newHeader, currentHeader)
    }

    function renderMain() {
        const main = app.querySelector('main')
        if (!main) return
        main.innerHTML = ''
        const careers = Careers({ darkMode })
        main.appendChild(careers)
    }

    function renderFooter() {
        const currentFooter = app.querySelector('footer')
        if (!currentFooter || !currentFooter.parentNode) return
        const newFooter = Footer({ darkMode })
        currentFooter.parentNode.replaceChild(newFooter, currentFooter)
    }

    renderHeader()
    renderMain()
    renderFooter()
}
