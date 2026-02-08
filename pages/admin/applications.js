import { useState, useEffect, useContext } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Head from 'next/head'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { AuthContext } from '../_app'
import { store } from '../../lib/store'
import { ArrowLeft, ClipboardList, Check, X, Clock, Trash2, Eye, Mail } from 'lucide-react'

export default function AdminApplications() {
  const router = useRouter()
  const { isAdmin } = useContext(AuthContext)
  const [applications, setApplications] = useState([])
  const [selectedApp, setSelectedApp] = useState(null)
  const [filter, setFilter] = useState('all')

  useEffect(() => {
    if (!isAdmin) {
      router.push('/')
      return
    }
    setApplications(store.getApplications())
  }, [isAdmin, router])

  const handleUpdateStatus = (appId, status) => {
    store.updateApplicationStatus(appId, status)
    setApplications(store.getApplications())
    if (selectedApp?.id === appId) {
      setSelectedApp({ ...selectedApp, status })
    }
  }

  const handleDelete = (appId) => {
    if (confirm('Delete this application?')) {
      store.deleteApplication(appId)
      setApplications(applications.filter(a => a.id !== appId))
      if (selectedApp?.id === appId) setSelectedApp(null)
    }
  }

  const filteredApps = filter === 'all' ? applications : applications.filter(a => a.status === filter)

  const statusColors = {
    pending: { bg: 'rgba(201, 162, 39, 0.2)', color: 'var(--gold)' },
    approved: { bg: 'rgba(45, 74, 62, 0.2)', color: '#4ade80' },
    rejected: { bg: 'rgba(114, 47, 55, 0.2)', color: '#f87171' }
  }

  if (!isAdmin) return null

  return (
    <>
      <Head><title>Applications | Classic Revival</title></Head>
      <Navbar />

      <main className="pt-16 min-h-screen" style={{ background: 'var(--bg-primary)' }}>
        <section className="py-10" style={{ background: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)' }}>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link href="/admin" className="inline-flex items-center gap-2 text-white/70 hover:text-white mb-4 font-accent">
              <ArrowLeft className="w-4 h-4" /> Back to Admin
            </Link>
            <div className="flex items-center gap-3">
              <ClipboardList className="w-8 h-8" style={{ color: 'var(--gold)' }} />
              <h1 className="font-display text-3xl font-bold text-white">Applications</h1>
            </div>
          </div>
        </section>

        <section className="py-8">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Filter */}
            <div className="flex gap-2 mb-6">
              {['all', 'pending', 'approved', 'rejected'].map(f => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className="px-3 py-1.5 rounded-full text-sm font-accent capitalize transition-all"
                  style={{
                    background: filter === f ? 'var(--burgundy)' : 'var(--bg-secondary)',
                    color: filter === f ? 'white' : 'var(--text-secondary)',
                    border: `1px solid ${filter === f ? 'var(--burgundy)' : 'var(--border-color)'}`
                  }}
                >
                  {f} {f !== 'all' && `(${applications.filter(a => a.status === f).length})`}
                </button>
              ))}
            </div>

            <div className="grid lg:grid-cols-3 gap-6">
              {/* Applications List */}
              <div className="lg:col-span-2 space-y-4">
                {filteredApps.length > 0 ? filteredApps.map(app => (
                  <div 
                    key={app.id}
                    className={`p-5 rounded-xl cursor-pointer transition-all ${selectedApp?.id === app.id ? 'ring-2 ring-burgundy' : ''}`}
                    style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border-color)' }}
                    onClick={() => setSelectedApp(app)}
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-accent font-semibold" style={{ color: 'var(--text-primary)' }}>{app.name}</h3>
                        <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>{app.email}</p>
                        <p className="text-xs mt-1" style={{ color: 'var(--text-secondary)' }}>
                          {app.position} • {new Date(app.createdAt).toLocaleDateString()}
                        </p>
                      </div>
                      <span 
                        className="px-2 py-1 rounded text-xs font-accent capitalize"
                        style={statusColors[app.status]}
                      >
                        {app.status}
                      </span>
                    </div>
                  </div>
                )) : (
                  <div className="text-center py-12 rounded-xl" style={{ background: 'var(--bg-secondary)' }}>
                    <ClipboardList className="w-12 h-12 mx-auto mb-3" style={{ color: 'var(--text-secondary)', opacity: 0.3 }} />
                    <p style={{ color: 'var(--text-secondary)' }}>No applications found</p>
                  </div>
                )}
              </div>

              {/* Detail Panel */}
              <div className="lg:col-span-1">
                {selectedApp ? (
                  <div className="sticky top-24 rounded-xl p-5" style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border-color)' }}>
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-display font-bold" style={{ color: 'var(--text-primary)' }}>Application Details</h3>
                      <button onClick={() => setSelectedApp(null)}>
                        <X className="w-5 h-5" style={{ color: 'var(--text-secondary)' }} />
                      </button>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <p className="text-xs font-accent uppercase" style={{ color: 'var(--text-secondary)' }}>Name</p>
                        <p className="font-accent font-semibold" style={{ color: 'var(--text-primary)' }}>{selectedApp.name}</p>
                      </div>
                      <div>
                        <p className="text-xs font-accent uppercase" style={{ color: 'var(--text-secondary)' }}>Email</p>
                        <a href={`mailto:${selectedApp.email}`} className="font-accent flex items-center gap-1" style={{ color: 'var(--burgundy)' }}>
                          <Mail className="w-4 h-4" /> {selectedApp.email}
                        </a>
                      </div>
                      <div>
                        <p className="text-xs font-accent uppercase" style={{ color: 'var(--text-secondary)' }}>Position</p>
                        <p style={{ color: 'var(--text-primary)' }}>{selectedApp.position}</p>
                      </div>
                      {selectedApp.phone && (
                        <div>
                          <p className="text-xs font-accent uppercase" style={{ color: 'var(--text-secondary)' }}>Phone</p>
                          <p style={{ color: 'var(--text-primary)' }}>{selectedApp.phone}</p>
                        </div>
                      )}
                      {selectedApp.location && (
                        <div>
                          <p className="text-xs font-accent uppercase" style={{ color: 'var(--text-secondary)' }}>Location</p>
                          <p style={{ color: 'var(--text-primary)' }}>{selectedApp.location}</p>
                        </div>
                      )}
                      {selectedApp.motivation && (
                        <div>
                          <p className="text-xs font-accent uppercase" style={{ color: 'var(--text-secondary)' }}>Motivation</p>
                          <p className="text-sm" style={{ color: 'var(--text-primary)' }}>{selectedApp.motivation}</p>
                        </div>
                      )}
                      {selectedApp.experience && (
                        <div>
                          <p className="text-xs font-accent uppercase" style={{ color: 'var(--text-secondary)' }}>Experience</p>
                          <p className="text-sm" style={{ color: 'var(--text-primary)' }}>{selectedApp.experience}</p>
                        </div>
                      )}

                      <div className="pt-4 border-t flex flex-wrap gap-2" style={{ borderColor: 'var(--border-color)' }}>
                        {selectedApp.status === 'pending' && (
                          <>
                            <button 
                              onClick={() => handleUpdateStatus(selectedApp.id, 'approved')}
                              className="flex-1 py-2 rounded-lg font-accent text-sm flex items-center justify-center gap-1"
                              style={{ background: 'rgba(45, 74, 62, 0.2)', color: '#4ade80' }}
                            >
                              <Check className="w-4 h-4" /> Approve
                            </button>
                            <button 
                              onClick={() => handleUpdateStatus(selectedApp.id, 'rejected')}
                              className="flex-1 py-2 rounded-lg font-accent text-sm flex items-center justify-center gap-1"
                              style={{ background: 'rgba(114, 47, 55, 0.2)', color: '#f87171' }}
                            >
                              <X className="w-4 h-4" /> Reject
                            </button>
                          </>
                        )}
                        <button 
                          onClick={() => handleDelete(selectedApp.id)}
                          className="w-full py-2 rounded-lg font-accent text-sm flex items-center justify-center gap-1 mt-2"
                          style={{ background: 'rgba(239, 68, 68, 0.1)', color: '#f87171' }}
                        >
                          <Trash2 className="w-4 h-4" /> Delete
                        </button>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="rounded-xl p-8 text-center" style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border-color)' }}>
                    <Eye className="w-10 h-10 mx-auto mb-3" style={{ color: 'var(--text-secondary)', opacity: 0.3 }} />
                    <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>Select an application to view details</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
