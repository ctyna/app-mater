import { useState } from 'react'
import './Header.css'

export const Header = () => {

    // Menú responsive 
    const [menu, setMenu] = useState(false)
    const [hover, setHover] = useState(false)
    const toogle = () => setMenu(!menu)

    return (
        <>
            <header className={`Header ${menu ? 'isActive' : ''}`}>
                <h1 className="Header-h1">Mater</h1>
                <div className="Header-btn">
                    <svg onClick={toogle} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="Header-svg" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
                    </svg>
                    <nav className={`Header-nav Nav ${menu ? 'isActive' : ''}`}>
                        <div className="Nav-wrapper">
                            <div className="Nav-container">
                                <ul className="Nav-ul">
                                    <li className="Nav-li">
                                        Collection
                                        <ul className="Subnav-ul">
                                            <li className="Subnav-li"
                                                onMouseOver={() => setHover(true)}
                                                onMouseOut={() => setHover(false)}>
                                                Furniture

                                            </li>
                                            <li className="Subnav-li">Lighting</li>
                                            <li className="Subnav-li">Accesories</li>
                                        </ul>
                                    </li>
                                    <li className="Nav-li">Desgin</li>
                                    <li className="Nav-li">Craftmanshift</li>
                                    <li className="Nav-li">Ethics</li>




                                </ul>
                                {hover && <img src='assets/sofa_blanco.png' alt="sofa blanco colección verano" title='sofa blanco' className="Nav-img" />}
                            </div>

                            <div className="Apartados">
                                <ul className="Apartados-ul">
                                    <li className="Apartados-li">About</li>
                                    <li className="Apartados-li">Contact</li>
                                    <li className="Apartados-li">Dealers</li>
                                </ul>
                                <ul className="Apartados-ul">
                                    <li className="Apartados-li">News</li>
                                    <li className="Apartados-li">Care</li>
                                    <li className="Apartados-li">Press</li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>

            </header>
        </>
    )
}