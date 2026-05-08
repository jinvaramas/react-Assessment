import { useState, useEffect } from 'react'
import MemberTable from '../components/MemberTable'
import MemberForm from '../components/MemberForm'
import bgImage from '../assets/bg8.jpg'

const API = 'https://67eca027aa794fb3222e43e2.mockapi.io/members'

export default function HomePage() {
  const [activeTab, setActiveTab] = useState(null)
  const [members, setMembers] = useState([])


  useEffect(() => {
    fetch(API)
      .then(res => res.json())
      .then(data => setMembers(data))
  }, [])

  
  const handleDelete = async (id) => {
    await fetch(`${API}/${id}`, { method: 'DELETE' })
    setMembers(members.filter(m => m.id !== id))
  }

  
  const getTitle = () => {
    if (activeTab === 'user') return 'Home - User Section'
    if (activeTab === 'admin') return 'Home - Admin Section'
    return 'Home Page'
  }

  return (
    <div style={{
        minHeight: '100vh',
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        padding: '40px 20px'
      }}>

      <h1 style={{
        textAlign: 'center', fontSize: '2.2rem',
        fontWeight: '800', marginBottom: '36px', lineHeight: '1.3',
        color: '#1a237e'
      }}>
        {getTitle().split('\n').map((line, i) => (
          <span key={i}>{line}<br /></span>
        ))}
      </h1>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '80px', marginBottom: '32px' }}>
        <button
          onClick={() => setActiveTab('user')}
          style={{
            padding: '14px 32px', border: '1.5px solid #a8cfe8',
            backgroundColor: '#ddeef8', fontWeight: '600',
            cursor: 'pointer', borderRadius: '6px', fontSize: '15px',
            boxShadow: '0 2px 6px rgba(0,0,0,0.1)', color: '#ec407a'
          }}
        >
          User Home Section
        </button>
        <button
          onClick={() => setActiveTab('admin')}
          style={{
            padding: '14px 32px', border: '1.5px solid #a8cfe8',
            backgroundColor: '#ddeef8', fontWeight: '600',
            cursor: 'pointer', borderRadius: '6px', fontSize: '15px',
            boxShadow: '0 2px 6px rgba(0,0,0,0.1)', color: '#ec407a'
          }}
        >
          Admin Home Section
        </button>
      </div>

      {activeTab === null && <div style={{
        margin: '0 auto 36px auto',
        maxWidth: '560px',
        backgroundColor: 'rgba(255, 255, 255, 0.55)',
        backdropFilter: 'blur(10px)',
        borderRadius: '16px',
        border: '1.5px solid rgba(168, 207, 232, 0.7)',
        boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
        padding: '28px 36px',
        textAlign: 'center',
      }}>
        <p style={{ fontSize: '1.25rem', fontWeight: '700', color: '#1a237e', margin: '0 0 6px 0' }}>
          🐱 Welcome, Human Servant.
        </p>
        <p style={{ fontSize: '1.1rem', fontWeight: '600', color: '#1565c0', margin: '0 0 10px 0' }}>
          Welcome to the Cat Dimension.
        </p>
        <p style={{ fontSize: '0.95rem', fontWeight: '500', color: '#ec407a', margin: '0 0 14px 0', letterSpacing: '0.02em' }}>
          Certified Meow Zone. Cats in Control Now.
        </p>
        <p style={{ fontSize: '0.85rem', fontWeight: '500', color: '#546e7a', margin: '0', fontStyle: 'italic' }}>
          — Meow Meow Corporation 🐾
        </p>
      </div>}


      {activeTab === 'admin' && (
        <MemberForm members={members} setMembers={setMembers} />
      )}

      
      {activeTab !== null && (
        <MemberTable
          members={members}
          isAdmin={activeTab === 'admin'}
          onDelete={handleDelete}
        />
      )}

    </div>
  )
}
