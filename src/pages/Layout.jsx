import React from 'react'
import Header from '../components/Header'
import SideBar from '../components/SideBar'

function Layout({ children }) {
    return (
        <>
            <div className="flex">
                <SideBar/>
                {children}
            </div>
        </>
    )
}

export default Layout