import React, { useState, useEffect } from 'react';

export default function Dashboard() {
    const [stats, setStats] = useState({
        totalUsers: 1247,
        activeBookings: 89,
        revenue: 45870,
        tournaments: 12
    });

    const [recentActivity, setRecentActivity] = useState([
        { id: 1, user: 'John Smith', action: 'Booked Par 3 Challenge', time: '2 hours ago' },
        { id: 2, user: 'Sarah Johnson', action: 'Completed Tournament', time: '4 hours ago' },
        { id: 3, user: 'Mike Davis', action: 'Updated Profile', time: '6 hours ago' },
        { id: 4, user: 'Lisa Wilson', action: 'Payment Processed', time: '8 hours ago' }
    ]);

    return (
        <div className="min-h-screen bg-gray-100">
            {/* Navigation */}
            <nav className="bg-white shadow-lg">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex justify-between h-16">
                        <div className="flex items-center">
                            <h1 className="text-xl font-bold text-gray-800">PAR3 Admin Dashboard</h1>
                        </div>
                        <div className="flex items-center space-x-4">
                            <a href="/dashboard" className="text-gray-600 hover:text-gray-900">Dashboard</a>
                            <a href="/claims" className="text-gray-600 hover:text-gray-900 font-medium">🚨 Claims</a>
                            <a href="/settings" className="text-gray-600 hover:text-gray-900">Settings</a>
                            <a href="/login" className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">Logout</a>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                {/* Page Header */}
                <div className="mb-8">
                    <h2 className="text-3xl font-bold text-gray-900">Dashboard Overview</h2>
                    <p className="text-gray-600">Welcome back! Here's what's happening with your PAR3 Challenge.</p>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    <div className="bg-white overflow-hidden shadow rounded-lg">
                        <div className="p-5">
                            <div className="flex items-center">
                                <div className="flex-shrink-0">
                                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                                        <span className="text-white text-sm font-bold">U</span>
                                    </div>
                                </div>
                                <div className="ml-5 w-0 flex-1">
                                    <dl>
                                        <dt className="text-sm font-medium text-gray-500 truncate">Total Users</dt>
                                        <dd className="text-lg font-medium text-gray-900">{stats.totalUsers.toLocaleString()}</dd>
                                    </dl>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white overflow-hidden shadow rounded-lg">
                        <div className="p-5">
                            <div className="flex items-center">
                                <div className="flex-shrink-0">
                                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                                        <span className="text-white text-sm font-bold">B</span>
                                    </div>
                                </div>
                                <div className="ml-5 w-0 flex-1">
                                    <dl>
                                        <dt className="text-sm font-medium text-gray-500 truncate">Active Bookings</dt>
                                        <dd className="text-lg font-medium text-gray-900">{stats.activeBookings}</dd>
                                    </dl>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white overflow-hidden shadow rounded-lg">
                        <div className="p-5">
                            <div className="flex items-center">
                                <div className="flex-shrink-0">
                                    <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center">
                                        <span className="text-white text-sm font-bold">$</span>
                                    </div>
                                </div>
                                <div className="ml-5 w-0 flex-1">
                                    <dl>
                                        <dt className="text-sm font-medium text-gray-500 truncate">Revenue</dt>
                                        <dd className="text-lg font-medium text-gray-900">${stats.revenue.toLocaleString()}</dd>
                                    </dl>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white overflow-hidden shadow rounded-lg">
                        <div className="p-5">
                            <div className="flex items-center">
                                <div className="flex-shrink-0">
                                    <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                                        <span className="text-white text-sm font-bold">T</span>
                                    </div>
                                </div>
                                <div className="ml-5 w-0 flex-1">
                                    <dl>
                                        <dt className="text-sm font-medium text-gray-500 truncate">Tournaments</dt>
                                        <dd className="text-lg font-medium text-gray-900">{stats.tournaments}</dd>
                                    </dl>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Prize Claims Alert Section */}
                <div className="bg-gradient-to-r from-red-50 to-yellow-50 border-l-4 border-red-400 rounded-lg p-6 mb-8">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <div className="text-3xl mr-4">🚨</div>
                            <div>
                                <h3 className="text-xl font-bold text-red-800">Prize Claims Management</h3>
                                <p className="text-red-700">Monitor and verify birdie and hole-in-one claims in real-time</p>
                            </div>
                        </div>
                        <div className="flex space-x-3">
                            <a href="/claims" className="bg-red-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-red-700 transition-colors">
                                🏆 View All Claims
                            </a>
                        </div>
                    </div>
                    <div className="mt-4 grid grid-cols-3 gap-4">
                        <div className="bg-white rounded-lg p-4 text-center">
                            <div className="text-2xl font-bold text-yellow-600">2</div>
                            <div className="text-sm text-gray-600">Pending Claims</div>
                        </div>
                        <div className="bg-white rounded-lg p-4 text-center">
                            <div className="text-2xl font-bold text-green-600">$1,065</div>
                            <div className="text-sm text-gray-600">Total Prizes Today</div>
                        </div>
                        <div className="bg-white rounded-lg p-4 text-center">
                            <div className="text-2xl font-bold text-blue-600">⚡</div>
                            <div className="text-sm text-gray-600">Real-time Updates</div>
                        </div>
                    </div>
                </div>

                {/* Quick Actions */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                    <div className="bg-white shadow rounded-lg p-6">
                        <h3 className="text-lg font-medium text-gray-900 mb-4">Quick Actions</h3>
                        <div className="space-y-3">
                            <a href="/events" className="block w-full bg-blue-500 text-white text-center py-2 px-4 rounded hover:bg-blue-600">
                                Create New Event
                            </a>
                            <a href="/courses" className="block w-full bg-green-500 text-white text-center py-2 px-4 rounded hover:bg-green-600">
                                Manage Courses
                            </a>
                            <a href="/specials" className="block w-full bg-yellow-500 text-white text-center py-2 px-4 rounded hover:bg-yellow-600">
                                Add Special Offer
                            </a>
                        </div>
                    </div>

                    <div className="bg-white shadow rounded-lg p-6">
                        <h3 className="text-lg font-medium text-gray-900 mb-4">System Status</h3>
                        <div className="space-y-3">
                            <div className="flex items-center justify-between">
                                <span className="text-sm text-gray-600">Server Status</span>
                                <span className="px-2 py-1 text-xs bg-green-100 text-green-800 rounded-full">Online</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="text-sm text-gray-600">Database</span>
                                <span className="px-2 py-1 text-xs bg-green-100 text-green-800 rounded-full">Connected</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="text-sm text-gray-600">Payment Gateway</span>
                                <span className="px-2 py-1 text-xs bg-green-100 text-green-800 rounded-full">Active</span>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white shadow rounded-lg p-6">
                        <h3 className="text-lg font-medium text-gray-900 mb-4">Navigation</h3>
                        <div className="space-y-2">
                            <a href="/crm" className="block text-blue-600 hover:text-blue-800">Customer Management</a>
                            <a href="/accounting" className="block text-blue-600 hover:text-blue-800">Financial Reports</a>
                            <a href="/notifications" className="block text-blue-600 hover:text-blue-800">Notifications</a>
                            <a href="/verification" className="block text-blue-600 hover:text-blue-800">User Verification</a>
                        </div>
                    </div>
                </div>

                {/* Recent Activity */}
                <div className="bg-white shadow rounded-lg">
                    <div className="px-6 py-4 border-b border-gray-200">
                        <h3 className="text-lg font-medium text-gray-900">Recent Activity</h3>
                    </div>
                    <div className="divide-y divide-gray-200">
                        {recentActivity.map((activity) => (
                            <div key={activity.id} className="px-6 py-4">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-sm font-medium text-gray-900">{activity.user}</p>
                                        <p className="text-sm text-gray-500">{activity.action}</p>
                                    </div>
                                    <span className="text-sm text-gray-400">{activity.time}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
