import './styles.css'
import { useNavigate } from 'react-router-dom'

export const Menu = () => {
  const navigate = useNavigate()

  const redirectDashboard = () => {
    window.location.href = `http://localhost:4001/dash-home`;
  }

  const redirectConfig = () => {
    window.location.href = `http://localhost:4002/config-home`;
  }

  return (
    <div>
      <h2>Menu</h2>

      <ul className="menu">
        <li className="item" onClick={redirectDashboard}>
          Dashboard
        </li>
        <li className="item" onClick={() => navigate('/dash-page')}>
          Dashboard: page
        </li>
        <li className="item" onClick={redirectConfig}>
          Configurações
        </li>
        <li className="item" onClick={() => navigate('/config-page')}>
          Configurações: page
        </li>
      </ul>
    </div>
  )
}