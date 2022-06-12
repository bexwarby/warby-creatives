import * as React from "react"
import {
  Box,
  Heading
} from "@chakra-ui/react"

interface HeadingProps {
    title: string;
    subtitle?: string
}

export const Title: React.FC<HeadingProps> = ({...props}) => {
    return (
        <Box boxShadow="2xl" bg="green.500" color="white">
            <Heading as='h1' p={6} size='4xl' noOfLines={1}>
                {props.title}
            </Heading>
            <Heading as='h2' p={4} size='xl' noOfLines={1}>
                {props.subtitle}
            </Heading>
        </Box>
    )
}