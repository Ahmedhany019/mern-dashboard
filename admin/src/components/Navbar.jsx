/* eslint-disable no-unused-vars */
import React from 'react'
import {Link} from 'react-router-dom'
function Navbar() {

  return (
    

<div>
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
            <div className="flex items-center space-x-3 rtl:space-x-reverse">
                <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
            </div>
        </div>
    </nav>
    <nav className="bg-gray-50 dark:bg-gray-700">
        <div className="max-w-screen-xl px-4 py-3 mx-auto">
            <div className="flex items-center">
                <ul className="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
                    <li><Link to="/dashboard" className="text-gray-900 dark:text-white hover:underline" aria-current="page">Dashboard</Link></li>
                    <li><Link to="/users" className="text-gray-900 dark:text-white hover:underline" aria-current="page">Users</Link></li>
                    <li><Link to="/products" className="text-gray-900 dark:text-white hover:underline" aria-current="page">Products</Link></li>
                </ul>
            </div>
        </div>
    </nav>
</div>

  )
}

export default Navbar