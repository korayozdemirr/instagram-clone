import React from 'react'
import Header from '../components/Header'

function Layout({ children }) {
    return (
        <>
        <Header />
            <div className="container mx-auto pt-4">
                {children}
            </div>
        </>
    )
}

export default Layout