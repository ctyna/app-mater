import { createContext, useContext, useEffect, useState } from 'react';
import './Section.css';

const MueblesContext = createContext()



export const Section = () => {
    const [muebles, setMuebles] = useState([])
    const [section, setSection] = useState(0)
    const {VITE_API} = import.meta.env
  
    const cambiarSection = (valor) => setSection(valor)

    // GET para pedir los datos de los muebles
    const pedirDatos = async () => {
        let controller = new AbortController();
        let options = {
            method: 'get',
            signal: controller.signal
        }

        await fetch(`${VITE_API}`, options)
            .then(res => res.json())
            .then(data => setMuebles(data))
            .catch(err => console.log(err))
            .finally(() => controller.abort())
    }

    useEffect(() => {
        pedirDatos();
    }, [])

    return (
        <MueblesContext.Provider value={{ section, cambiarSection }}>
            <div className="Main-section Section">
                <div className="Section-wrapper">
                    {muebles.length === 0 && <p>Cargando información</p>}
                    {muebles.length !== 0 && muebles.map((eachMueble, index) =>
                        <Info key={index} {...eachMueble} index={index} />
                    )}
                </div>
                <Navegador />
            </div>
        </MueblesContext.Provider>
    )
}

const Info = (props) => {
    const { author, title, info, image, alt, index } = props;
    const { section, cambiarSection } = useContext(MueblesContext);

    return (
        <>
        <div className={`Section-container ${section === index ? 'isActive' : ''}`} onClick={() => cambiarSection(index)}>
            <div className="Section-text">
                <div className="Section-scroll">
                <span className="Section-span"> {author} </span>
                <h2 className="Section-h2"> {title} </h2>
                </div>
                <p className="Section-p"> {info} </p>
                <button className='Section-btn'>
                    <h4 className="Section-h3">Product details</h4>
                </button>
            </div>
            <div className="Section-images">
                <img className='Section-img' src={`/assets/${image}`} alt={alt} />
            </div>
        </div>
        </>
    )
}

const Navegador = () => {
    const { section, cambiarSection } = useContext(MueblesContext);

    return (
        <div className="Tabs">
            <div className="Tabs-wrapper">
                <ul className="Tabs-ul">
                    <li className={`Tabs-li ${section === 0 ? 'isActive' : ''}`} onMouseOver={() => cambiarSection(0) } >
                        <span className="Navegation-span">01</span>
                        <div className="Navegation-title">Shell Dining Chair</div>
                    </li>
                    <li className={`Tabs-li ${section === 1 ? 'isActive' : ''}`} onMouseOver={() => cambiarSection(1)}>
                        <span className="Navegation-span">02</span>
                        <div className="Navegation-title">Dunes Anthrazite Black</div>
                    </li>
                </ul>
            </div>
        </div>
    )
}
