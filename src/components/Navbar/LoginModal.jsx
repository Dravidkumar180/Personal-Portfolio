import React, { useState, useEffect } from 'react'

export default function LoginModal({ isOpen, onClose }) {
  const [email, setEmail]       = useState('')
  const [password, setPassword] = useState('')

  /* close on backdrop click */
  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onClose])

  const handleSubmit = () => {
    alert('Login functionality — connect your backend!')
    onClose()
  }

  if (!isOpen) return null

  return (
    <div
      className={`modal-overlay ${isOpen ? 'open' : ''}`}
      onClick={(e) => { if (e.target === e.currentTarget) onClose() }}
    >
      <div className="modal-box">
        <button className="modal-close" onClick={onClose}>
          <i className="fas fa-times" />
        </button>

        <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
          <div
            className="logo-circle"
            style={{ margin: '0 auto 10px', width: 50, height: 50, fontSize: '1.3rem' }}
          >
            D
          </div>
        </div>

        <div className="modal-title">Welcome back</div>
        <div className="modal-sub">Sign in to your portfolio dashboard</div>

        <div style={{ marginBottom: '1rem' }}>
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control-custom"
            placeholder="you@example.com"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </div>

        <div style={{ marginBottom: '1.5rem' }}>
          <label className="form-label">Password</label>
          <input
            type="password"
            className="form-control-custom"
            placeholder="••••••••"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </div>

        <button
          className="btn-primary-custom"
          style={{ width: '100%', textAlign: 'center' }}
          onClick={handleSubmit}
        >
          Sign In
        </button>

        <div style={{ textAlign: 'center', marginTop: '1rem', color: 'var(--text-muted)', fontSize: '0.82rem' }}>
          Don't have an account?{' '}
          <a href="#contact" style={{ color: 'var(--accent)' }} onClick={onClose}>
            Contact me
          </a>
        </div>
      </div>
    </div>
  )
}