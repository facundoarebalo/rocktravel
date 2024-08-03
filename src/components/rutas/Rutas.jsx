import { Route, Routes } from 'react-router-dom'
import Home from '../../views/home/Home'

const Rutas = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            {/* <Route path='/contacto' element={<Contacto />} />
            <Route path='/about' element={<About />} />
            <Route path='/tours' element={<Tours />} />
            <Route path='/gallery' element={<Gallery />} /> */}

        </Routes>
    )

}

export default Rutas
