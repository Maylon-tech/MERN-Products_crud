import { Box, Button } from '@chakra-ui/react'
import Navbar from './components/Navbar'


function App() {

  return (
    <Box minH={"100vh"}>
      {/* Navbar */}
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage /> } />
      </Routes>
    </Box>
  )
}

export default App
