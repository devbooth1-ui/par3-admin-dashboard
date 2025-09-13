import { useState, useEffect } from 'react'

export default function Login() {
    const [email, setEmail] = useState('admin@par3challenge.com')
    const [password, setPassword] = useState('admin123')
    const [error, setError] = useState('')

    // Redirect to dashboard if already logged in
    useEffect(() => {
        const token = localStorage.getItem('adminToken')
        if (token) {
            window.location.href = '/dashboard'
        }
    }, [])

    const handleLogin = async (e) => {
        e.preventDefault()
        try {
            const response = await fetch('/api/auth', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password })
            })

            if (response.ok) {
                const data = await response.json()
                localStorage.setItem('adminToken', data.token)
                window.location.href = '/dashboard'
            } else {
                setError('Invalid credentials')
            }
        } catch (err) {
            setError('Login failed')
        }
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md">
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-gray-800 mb-2">Admin Login</h1>
                    <p className="text-gray-600">PAR3 Challenge Administration</p>
                </div>

                <form onSubmit={handleLogin} className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Email
                        </label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Password
                        </label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-green-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                    >
                        Login
                    </button>
                </form>

                {error && (
                    <div className="text-red-600 text-center text-sm mt-4">{error}</div>
                )}
            </div>
        </div>
    )
}
