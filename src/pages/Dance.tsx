import * as React from "react"
import {
  Box,
  Text
} from "@chakra-ui/react"

interface DanceProps {
    description?: string;
}

export const Dance: React.FC<DanceProps> = ({...props}) => {
    return (
        <Box>
            <Text>Dance: In progress</Text>         
        </Box>
    )
}