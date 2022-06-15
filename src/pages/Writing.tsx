import * as React from "react"
import {
  Box,
  Text
} from "@chakra-ui/react"

interface WritingProps {
    alt?: string;
}

export const Writing: React.FC<WritingProps> = ({...props}) => {
    return (
        <Box>
            <Text>Writing: In progress</Text>         
        </Box>
    )
}