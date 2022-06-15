import * as React from "react"
import {
  Box,
  Menu,
  MenuButton,
  MenuList,
  Portal,
  Button
} from "@chakra-ui/react"
import { Link } from "react-router-dom"

const wrapperSx = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    p: 4,
    bgColor: "rgba(255, 255, 255,)",
    alignItems: "center"
}

export const MenuBar: React.FC = ({...props}) => {
    return (
        <Box sx={wrapperSx}>
            <Menu>
                <Box p={2} color="green.500"><Link to="/">Home</Link></Box>
                <MenuButton fontWeight="bold" color="white" bg="green.800" borderRadius={4} p={2}>Discover More</MenuButton>
                <Portal>
                    <MenuList bg="green.100" textAlign="center">
                        <Box p={2}><Link to="/photography">Photography</Link></Box>
                        <Box p={2}><Link to="/poetry">Poetry</Link></Box>
                        <Box p={2}><Link to="/dance">Dance</Link></Box>
                    </MenuList>
                </Portal>
                <Box  color="green.800" borderRadius={4} p={2}>
                    <Link to="/contact">Contact us</Link>
                </Box>
            </Menu>
        </Box>
    )
}