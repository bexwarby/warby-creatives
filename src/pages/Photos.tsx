import * as React from "react"
import {
  Box,
  Text
} from "@chakra-ui/react"

interface PhotoProps {
    alt?: string;
}

export const Photos: React.FC<PhotoProps> = ({...props}) => {
    return (
        <Box>
            <Text>Photos: In progress</Text>         
        </Box>
    )
}