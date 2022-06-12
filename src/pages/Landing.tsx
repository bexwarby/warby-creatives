import * as React from "react"
import {
  Box,
  Text,
  Flex
} from "@chakra-ui/react"
import { MenuBar } from "../components/Menu/Menu"
import { Title } from "../components/Heading/Heading"
import { ImageDisplay as Image } from "../components/Image/Image"

interface LandingProps {
    title: String;
}

const introSx = {
    p: 6,
    display: "flex",
    flexDirection: "row",
    wrap: "wrap",
}

export const Landing: React.FC<LandingProps> = ({...props}) => {
    return (
        <Box>
            <MenuBar />
            <Title title="Warby'Creatives" subtitle="Photography, poetry and dancing!"/>
            <Flex p={6}>
                <Image 
                    src="https://scontent-cdt1-1.xx.fbcdn.net/v/t1.18169-9/13043467_10153381032597827_4729354981766043637_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=bPfLqQM83PkAX9Q6X45&_nc_ht=scontent-cdt1-1.xx&oh=00_AT-6LDCmYWY29o0X6EO5sUPL_iPxi3Gld9QipzXwu6HRRg&oe=62C9C263" 
                    alt="Family photo"
                />
                <Box>
                    <Text>
                        With over <b>40 years of combined experience</b>, Rebekah and David are a father-daughter duo originating from Leeds and living in Yarm in North Yorkshire. <br/><br/>
                        They thoroughly love photography and creative writing with a passion.<br/><br/>
                        Rebekah even dabbles in a spot of dancing in her free time!
                    </Text>
                </Box>
                
            </Flex>
            
        </Box>
    )
}