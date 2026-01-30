import { Box } from '@chakra-ui/react'
import { Route, Routes } from 'react-router-dom'

import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import CreatePage from './pages/CreatePage'
import EditProduct from './pages/EditProduct'

function App() {
  // const { products } = useProductStore()

  return (
    <Box minH={"100vh"}>
      {/* Navbar */}
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/editPage" element={<EditProduct /> } />
      </Routes>
    </Box>
  )
}

export default App
