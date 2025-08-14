import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Home } from './pages/Home/Home'
import { ResidentialPortfolio } from './pages/ResidentialPortfolio/ResidentialPortfolio'
import { OfficePortfolio } from './pages/OfficePortfolio/OfficePortfolio'
import { HospitalityPortfolio } from './pages/HospitalityPortfolio/HospitalityPortfolio'
import { FarmhousePortfolio } from './pages/FarmhousePortfolio/FarmhousePortfolio'

function App() {

  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/" element={<Home />} />
      <Route path="*" element={<Home />} />
      <Route path="/portfolio/residential" element={<ResidentialPortfolio />} />
      <Route path="/portfolio/office" element={<OfficePortfolio />} />
      <Route path="/portfolio/hospitality" element={<HospitalityPortfolio />} />
      <Route path="/portfolio/farmhouse" element={<FarmhousePortfolio />} />
    </Routes>
  )
}

export default App
