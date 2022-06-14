import * as React from "react"
import {
  Box,
  Button,
  ButtonGroup
} from "@chakra-ui/react"
import landing from "../../json/landing.json"
import banner from "../../assets/banner.jpg"

interface ButtonProps {
    background?: string
}

const wrapperSx = {
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    width:'100%',
    py:4,
    bgPosition:'center',
    bgRepeat:'no-repeat',
    mb:2
}

export const ButtonList: React.FC<ButtonProps> = ({...props}) => {
    return (
        <Box sx={wrapperSx} bgImage={banner}>
            <ButtonGroup gap='4'>
                {landing.buttons.map(
                    ({ title, cta, colour }) => 
                        <Button as="a" href={cta} colorScheme={colour}>
                            {title}
                        </Button>
                )}
            </ButtonGroup>
        </Box>
    )
}