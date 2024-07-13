import Link from 'next/link'
import React from 'react'


function Layout({children}) {
  return (
    <div>
      <div className=" text-gray-800 bg-red-300">
        <Link href={'dashboard/user'}>Users</Link>
        { children}
        <div className="bg-blue-300">footer</div>
      </div>
    </div>
  )
}

export default Layout
