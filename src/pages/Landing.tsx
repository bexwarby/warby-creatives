import * as React from "react"
import {
  Box,
  Text
} from "@chakra-ui/react"
import { MenuBar } from "../components/Menu/Menu"
import { Title } from "../components/Heading/Heading"
import { ImageDisplay as Image } from "../components/Image/Image"
import { ButtonList as Buttons } from "../components/Button/Button"
import { Footer } from "../components/Footer/Footer"
import landing from "../json/landing.json"


interface LandingProps {
    title: String;
}

const introSx = {
    p: 6,
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center"
}

const introTextSx = {
    w: { base: 72, sm: "36rem", md: 72, lg: 96 },
    pl: { base: 0, md: 6 },
    pt: 4
}

export const Landing: React.FC<LandingProps> = ({...props}) => {
    return (
        <Box>
            <MenuBar />
            <Title title="Warby'Creatives" subtitle="Photography, poetry and dancing!"/>
            <Box sx={introSx} >
                <Image 
                    src="https://scontent-cdt1-1.xx.fbcdn.net/v/t1.18169-9/13043467_10153381032597827_4729354981766043637_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=bPfLqQM83PkAX9Q6X45&_nc_ht=scontent-cdt1-1.xx&oh=00_AT-6LDCmYWY29o0X6EO5sUPL_iPxi3Gld9QipzXwu6HRRg&oe=62C9C263" 
                    alt="Family photo"
                />
                <Box sx={introTextSx}>
                    <Text dangerouslySetInnerHTML={{__html: landing.introText}}/>
                </Box>
            </Box>  
            <Buttons />
            <Footer />            
        </Box>
    )
}