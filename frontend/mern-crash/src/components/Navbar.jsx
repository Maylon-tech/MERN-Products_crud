import { Button, Container, Flex, HStack, Text  } from "@chakra-ui/react"
import { Link } from "react-router-dom"

import { FaPlus } from "react-icons/fa"
import { FaCartPlus } from "react-icons/fa"
import { FaSun } from "react-icons/fa"
import { FaMoon } from "react-icons/fa"
import { IoMoon } from "react-icons/io5"
import { IoSunnyOutline } from "react-icons/io5"

// import { PlusSquareIcon } from '@chakra-ui/icons'

const Navbar = () => {
  // const { colorMode, toggleColorMode } = useColorMode()

  return (
    <Container
      maxW={"1140px"}
      px={4}
    >
      <Flex
        h={16}
        alignItems={"center"}
        justifyContent={"space-between"}
        flexDir={{
          base: "column",
          sm: "row"
        }}
      >
        <Text
          fontSize={{ base: "22", sm: "28" }}
          fontWeight={"bold"}
          textTransform={"uppercase"}
          textAlign={"center"}
          bgGradient={"linear(to-r, cyan.400, blue.500)"}
          bgClip={"text"}
        >
          <Link
            to={"/"}
            style={{ color: "#eee", fontSize: "20px"}}
          >
            Product Store
          </Link>
        </Text>

        <HStack spacing={2} alignItems={"center"}>
          <Link to={"/create"}>
            <Button>
              <FaPlus />
              Cart
            </Button>
          </Link>

          {/* <Button onClick={toggleColorMode}>
            {
              colorMode === "light"
                ? <IoMoon />
                : <IoSunnyOutline />
            }
          </Button> */}
        </HStack>


      </Flex>
    </Container>
  )
}

export default Navbar
