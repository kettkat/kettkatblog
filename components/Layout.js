import React from 'react'
import Header from './Header'
import Nav from './Nav'
import Meta from './Meta'
import Footer from './Footer'

function Layout({children}) {
  return (
    <>
    <Meta />
    <Header />
    <Nav />
    <div>
        <main>{children}</main>
    </div>
    <Footer />
    </>
  )
}

export default Layout