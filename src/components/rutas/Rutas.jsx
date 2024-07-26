import { Route, Routes } from 'react-router-dom'
import MainSection from '../../views/main/MainSection'

const Rutas = () => {
    return (
        <Routes>
            <Route path='/' element={<MainSection />} />
            {/* <Route path='/contacto' element={<Contacto />} />
            <Route path='/about' element={<About />} />
            <Route path='/tours' element={<Tours />} />
            <Route path='/gallery' element={<Gallery />} /> */}

        </Routes>
    )

}

export default Rutas
