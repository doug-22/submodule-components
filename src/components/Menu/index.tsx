import { useCallback } from 'react'
import './styles.css'
import { useNavigate } from 'react-router-dom'

interface IMenu {
  module: "dash" | "config"
}

export const Menu: React.FC<IMenu> = ({ module }) => {
  const navigate = useNavigate()

  const redirectDashboard = useCallback((url: string) => {
    if(module === "dash") {
      navigate(url)
      return
    }
    window.location.href = `http://localhost:4001${url}`;
  },[module])

  const redirectConfig = useCallback((url: string) => {
    if(module === "config") {
      navigate(url)
      return
    }
    window.location.href = `http://localhost:4002${url}`;
  },[module])

  return (
    <div>
      <h2>Menu</h2>

      <ul className="menu">
        <li className="item" onClick={() => redirectDashboard("/dash-home")}>
          Dashboard
        </li>
        <li className="item" onClick={() => redirectDashboard("/dash-page")}>
          Dashboard: page
        </li>
        <li className="item" onClick={() => redirectConfig("/config-home")}>
          Configurações
        </li>
        <li className="item" onClick={() => redirectConfig("/config-page")}>
          Configurações: page
        </li>
      </ul>
    </div>
  )
}