import * as React from "react"
import {
    Box,
    Text
} from "@chakra-ui/react"

interface FooterProps {
    background?: string
}

const wrapperSx = {
    display: "flex",
    bg:"green.700",
    width:"100%",
    justifyContent:"center",
    alignItems:"center",
    direction: "row",
    flexWrap: "wrap",
    boxShadow:"0 -1px 6px -1px rgba(0, 0, 0, 0.1)",
    padding: 4,
    w: "auto"
}

const titleSx = {
    width: { base: "100%", md:"40%" },
    fontWeight: "bold",
    color: "white"
}

const infoSx = {
    width: { base: "100%", md:"40%" },
    textAlign: "center",
    color: "gray.200",
    fontSize: "sm"
}

export const Footer: React.FC<FooterProps> = ({...props}) => {
    return (
        <Box sx={wrapperSx}>
            <Text color="gray.200" mr={8}>Privacy</Text>
            <Text color="gray.200">Terms of Use</Text>
            <Text sx={titleSx}>Warby Creatives</Text>
            <Text sx={infoSx}>
                Last Login 14.06.2022 - 14:00 | Last updated on 14.06.2022 - 12:00
            </Text>
        </Box>
    )
}