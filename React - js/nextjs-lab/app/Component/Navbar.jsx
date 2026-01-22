import React from 'react'
import Link from "next/link";

const Navbar = () => {
  return (
    <div>
        <nav style={{ padding:"15px", background:"#222"}}>
            <Link href="/" style={{ color:"#fff", marginRight: "15px"}}>
            Home
            </Link>
              <Link href="/About" style={{ color:"#fff", marginRight: "15px"}}>
            About
            </Link>

              <Link href="/Contact" style={{ color:"#fff", marginRight: "15px"}}>
            Contact
            </Link>
        </nav>
      
    </div>
  )
}

export default Navbar


