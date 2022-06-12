import * as React from "react"
import {
  Box,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Portal,
  Button
} from "@chakra-ui/react"

const wrapperSx = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    p: 4,
    bgColor: "rgba(255, 255, 255,)"
}

export const MenuBar: React.FC = ({...props}) => {
    return (
        <Box sx={wrapperSx}>
            <Menu>
                <MenuButton fontWeight="bold" color="green.500">Discover More</MenuButton>
                <Portal>
                    <MenuList bg="green.100">
                        <MenuItem>Photography</MenuItem>
                        <MenuItem>Poetry</MenuItem>
                        <MenuItem>Dance</MenuItem>
                    </MenuList>
                </Portal>
            </Menu>
            <Menu>
                <MenuButton as={Button} colorScheme='green'>
                    Contact Us
                </MenuButton>
            </Menu>
        </Box>
    )
}