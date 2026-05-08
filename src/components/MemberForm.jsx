import { useState } from 'react'

const API = 'https://67eca027aa794fb3222e43e2.mockapi.io/members'

export default function MemberForm({ members, setMembers }) {
  const [form, setForm] = useState({ name: '', lastName: '', position: '' })

  const handleSave = async () => {
    if (!form.name || !form.lastName || !form.position) return

    const res = await fetch(API, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    })
    const newMember = await res.json()

    setMembers([...members, newMember])
    setForm({ name: '', lastName: '', position: '' })
  }

  const inputStyle = {
    flex: 1, padding: '10px 14px',
    border: '1px solid #ccc', borderRadius: '6px',
    fontSize: '15px', backgroundColor: 'white',
    outline: 'none', color: '#333'
  }

  return (
    <div style={{ maxWidth: '860px', margin: '0 auto 24px', padding: '0 20px' }}>
      <h3 style={{ fontWeight: '700', marginBottom: '12px', fontSize: '17px', color: '#1a237e' }}>
        Create User Here
      </h3>
      <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
        <input
          style={inputStyle}
          placeholder="Name"
          value={form.name}
          onChange={e => setForm({ ...form, name: e.target.value })}
        />
        <input
          style={inputStyle}
          placeholder="Last Name"
          value={form.lastName}
          onChange={e => setForm({ ...form, lastName: e.target.value })}
        />
        <input
          style={inputStyle}
          placeholder="Position"
          value={form.position}
          onChange={e => setForm({ ...form, position: e.target.value })}
        />
        <button
          onClick={handleSave}
          style={{
            padding: '10px 22px',
            backgroundColor: '#e8749a', color: 'white',
            border: 'none', borderRadius: '6px',
            fontSize: '15px', fontWeight: '600',
            cursor: 'pointer', whiteSpace: 'nowrap'
          }}
        >
          Save
        </button>
      </div>
    </div>
  )
}
