import * as React from "react"
import {
  Box,
  Button
} from "@chakra-ui/react"
import landing from "../../json/landing.json"
import banner from "../../assets/banner.jpg"

const wrapperSx = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    flexWrap: "wrap",
    flexDirection: "row",
    py: 4,
    bgPosition: "center",
    bgRepeat: "no-repeat",
    mb: 2
}

export const ButtonList: React.FC = () => {
    return (
        <Box sx={wrapperSx} bgImage={banner}>
            {landing.buttons.map(({ title, cta, colour }) => 
                <Button m={8} as="a" href={cta} colorScheme={colour}>
                    {title}
                </Button>
            )}
        </Box>
    )
}