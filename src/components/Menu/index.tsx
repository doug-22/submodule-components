import { useCallback } from 'react'
import './styles.css'
import { useNavigate } from 'react-router-dom'

interface IMenu {
  module: "dash" | "config"
}

export const Menu: React.FC<IMenu> = ({ module }) => {
  const navigate = useNavigate()

  const redirectDashboard = useCallback(() => {
    if(module === "dash") {
      navigate("/dash-home")
      return
    }
    window.location.href = `http://localhost:4001/dash-home`;
  },[module])

  const redirectConfig = useCallback(() => {
    if(module === "config") {
      navigate("/config-home")
      return
    }
    window.location.href = `http://localhost:4002/config-home`;
  },[module])

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