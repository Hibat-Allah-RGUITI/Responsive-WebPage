import './style.css'
import Layout from './components/layout/Layout.js'
import Careers from './pages/Careers.js'

const app = document.getElementById('app')

const careers = Careers()
const layout = Layout({ children: careers })

app.appendChild(layout)
