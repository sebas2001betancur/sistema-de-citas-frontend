import React from 'react'
import { Link } from 'react-router-dom'

const HeaderComponent = () => {
    return (
        <div>
            <header>
                <nav className = "navbar navbar-expand-md navbar-dark bg-dark">
                    <div>
                        <Link to="/" className = "navbar-brand">
                            Sistema De Citas Medicas
                        </Link>
                    </div>

                </nav>
            </header>
        </div>
    )
}

export default HeaderComponent