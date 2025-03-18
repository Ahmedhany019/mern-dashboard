import React from 'react'
import Users from './Users'
import Products from './Products'

function AdminDashboard() {
  return (
    <div className='flex justify-between flex-wrap'>
      <Users />
      <Products />
    </div>
  )
}

export default AdminDashboard