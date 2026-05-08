export default function MemberTable({ members, isAdmin, onDelete }) {
  return (
    <div style={{ maxWidth: '860px', margin: '0 auto', padding: '0 20px' }}>
<table style={{
        width: '100%', borderCollapse: 'collapse',
        backgroundColor: '#fdf0f5', border: '1px solid #f0b8cf'
      }}>
        <thead>
          <tr style={{ backgroundColor: '#f5c6d8' }}>
            <th style={thStyle}>Name</th>
            <th style={thStyle}>Last Name</th>
            <th style={thStyle}>Position</th>
            {isAdmin && <th style={thStyle}>Action</th>}
          </tr>
        </thead>
        <tbody>
          {members.map(m => (
            <tr key={m.id} style={{ borderBottom: '1px solid #f0b8cf' }}>
              <td style={tdStyle}>{m.name}</td>
              <td style={tdStyle}>{m.lastName}</td>
              <td style={tdStyle}>{m.position}</td>
              {isAdmin && (
                <td style={tdStyle}>
                  <button
                    onClick={() => onDelete(m.id)}
                    style={{
                      color: '#e53935', background: 'none',
                      border: 'none', fontWeight: '600',
                      cursor: 'pointer', fontSize: '14px'
                    }}
                  >
                    Delete
                  </button>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

const thStyle = {
  padding: '10px 16px', textAlign: 'center',
  fontSize: '14px', fontWeight: '600',
  color: '#9b3a5e', border: '1px solid #f0b8cf'
}
const tdStyle = {
  padding: '10px 16px', textAlign: 'center',
  fontSize: '14px', color: '#7a2d4a',
  border: '1px solid #f0b8cf'
}
