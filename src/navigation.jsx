import React from 'react'

function Navigation() {
    return (
        <div>
            <>
                <nav className='navbar'>
                    <div className="logo">
                        <h5>VISHAL</h5>

                    </div>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#contact">Contact</a></li>
                        <li><a href="#service">Service</a></li>
                    </ul>

                    <button>Login</button>

                </nav>
            </>
        </div>
    )
}

export default Navigation
