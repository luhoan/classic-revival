import { useState, useEffect, useContext } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Head from 'next/head'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { AuthContext } from '../_app'
import { store } from '../../lib/store'
import { ArrowLeft, Users, Shield, ShieldOff, Trash2, Crown } from 'lucide-react'

export default function AdminUsers() {
  const router = useRouter()
  const { user, isAdmin, isMasterAdmin } = useContext(AuthContext)
  const [users, setUsers] = useState([])

  useEffect(() => {
    if (!isAdmin) {
      router.push('/')
      return
    }
    setUsers(store.getUsers())
  }, [isAdmin, router])

  const handleDeleteUser = (userId) => {
    const targetUser = users.find(u => u.id === userId)
    if (targetUser?.isMasterAdmin) {
      alert('Cannot delete master admin')
      return
    }
    if (confirm('Delete this user?')) {
      store.deleteUser(userId)
      setUsers(users.filter(u => u.id !== userId))
    }
  }

  const handleToggleAdmin = (userId) => {
    const targetUser = users.find(u => u.id === userId)
    if (targetUser?.isMasterAdmin) return
    
    if (targetUser?.isAdmin) {
      store.removeAdmin(userId)
    } else {
      store.makeAdmin(userId)
    }
    setUsers(store.getUsers())
  }

  if (!isAdmin) return null

  return (
    <>
      <Head><title>Manage Users | Classic Revival</title></Head>
      <Navbar />

      <main className="pt-16 min-h-screen" style={{ background: 'var(--bg-primary)' }}>
        <section className="py-10" style={{ background: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)' }}>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link href="/admin" className="inline-flex items-center gap-2 text-white/70 hover:text-white mb-4 font-accent">
              <ArrowLeft className="w-4 h-4" /> Back to Admin
            </Link>
            <div className="flex items-center gap-3">
              <Users className="w-8 h-8" style={{ color: 'var(--gold)' }} />
              <h1 className="font-display text-3xl font-bold text-white">Manage Users</h1>
            </div>
          </div>
        </section>

        <section className="py-8">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-xl p-6" style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border-color)' }}>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b" style={{ borderColor: 'var(--border-color)' }}>
                      <th className="text-left py-3 px-2 font-accent text-sm" style={{ color: 'var(--text-secondary)' }}>User</th>
                      <th className="text-left py-3 px-2 font-accent text-sm" style={{ color: 'var(--text-secondary)' }}>Email</th>
                      <th className="text-left py-3 px-2 font-accent text-sm" style={{ color: 'var(--text-secondary)' }}>Role</th>
                      <th className="text-left py-3 px-2 font-accent text-sm" style={{ color: 'var(--text-secondary)' }}>Joined</th>
                      <th className="text-right py-3 px-2 font-accent text-sm" style={{ color: 'var(--text-secondary)' }}>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.map(u => (
                      <tr key={u.id} className="border-b" style={{ borderColor: 'var(--border-color)' }}>
                        <td className="py-3 px-2">
                          <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ background: u.isAdmin ? 'rgba(201, 162, 39, 0.2)' : 'rgba(114, 47, 55, 0.15)' }}>
                              <span className="font-accent font-bold text-xs" style={{ color: u.isAdmin ? 'var(--gold)' : 'var(--burgundy)' }}>
                                {u.name?.charAt(0).toUpperCase() || u.username?.charAt(0).toUpperCase()}
                              </span>
                            </div>
                            <div>
                              <p className="font-accent font-semibold" style={{ color: 'var(--text-primary)' }}>{u.name}</p>
                              <p className="text-xs" style={{ color: 'var(--text-secondary)' }}>@{u.username}</p>
                            </div>
                          </div>
                        </td>
                        <td className="py-3 px-2 text-sm" style={{ color: 'var(--text-secondary)' }}>{u.email}</td>
                        <td className="py-3 px-2">
                          {u.isMasterAdmin ? (
                            <span className="inline-flex items-center gap-1 px-2 py-1 rounded text-xs font-accent" style={{ background: 'rgba(201, 162, 39, 0.2)', color: 'var(--gold)' }}>
                              <Crown className="w-3 h-3" /> Master Admin
                            </span>
                          ) : u.isAdmin ? (
                            <span className="inline-flex items-center gap-1 px-2 py-1 rounded text-xs font-accent" style={{ background: 'rgba(114, 47, 55, 0.15)', color: 'var(--burgundy)' }}>
                              <Shield className="w-3 h-3" /> Admin
                            </span>
                          ) : (
                            <span className="text-sm" style={{ color: 'var(--text-secondary)' }}>User</span>
                          )}
                        </td>
                        <td className="py-3 px-2 text-sm" style={{ color: 'var(--text-secondary)' }}>
                          {new Date(u.createdAt).toLocaleDateString()}
                        </td>
                        <td className="py-3 px-2 text-right">
                          {!u.isMasterAdmin && (
                            <>
                              {isMasterAdmin && (
                                <button 
                                  onClick={() => handleToggleAdmin(u.id)} 
                                  className="p-1.5 rounded hover:bg-blue-500/10 mr-1"
                                  title={u.isAdmin ? 'Remove Admin' : 'Make Admin'}
                                >
                                  {u.isAdmin ? (
                                    <ShieldOff className="w-4 h-4 text-orange-400" />
                                  ) : (
                                    <Shield className="w-4 h-4 text-blue-400" />
                                  )}
                                </button>
                              )}
                              <button 
                                onClick={() => handleDeleteUser(u.id)} 
                                className="p-1.5 rounded hover:bg-red-500/10"
                                title="Delete User"
                              >
                                <Trash2 className="w-4 h-4 text-red-400" />
                              </button>
                            </>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
