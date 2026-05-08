import { NavLink } from 'react-router-dom'

export default function Navbar() {
  const linkClass = ({ isActive }) =>
    `text-sm font-bold px-3 py-1 ${isActive ? 'underline' : 'hover:underline'}`

  return (
    <nav style={{ background: 'linear-gradient(to right, #90caf9, #ffd6e7)', borderBottom: '1px solid #bbb' }}>
      <div style={{ maxWidth: '960px', margin: '0 auto', padding: '10px 20px', display: 'flex', justifyContent: 'flex-end', gap: '16px' }}>
        <NavLink to="/" end className={linkClass} style={{ color: '#000080' }}>Home</NavLink>
        <NavLink to="/owner" className={linkClass} style={{ color: '#000080' }}>Owner</NavLink>
      </div>
    </nav>
  )
}
