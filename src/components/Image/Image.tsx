import * as React from "react"
import {
  Image
} from "@chakra-ui/react"

interface HeadingProps {
    src: string;
    alt: string;
    boxSize?: string;
}

export const ImageDisplay: React.FC<HeadingProps> = ({...props}) => {
    return (
        <Image 
            src={props.src} 
            alt={props.alt} 
            boxSize={props.boxSize} 
            boxShadow="xl" 
            p={2}
        />
    )
}