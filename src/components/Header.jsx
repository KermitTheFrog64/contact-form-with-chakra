import {
    Box,
    Image,
    Button,
    Flex,
    Spacer
} from "@chakra-ui/react";
import { HamburgerIcon } from '@chakra-ui/icons'
import logo from "../common/logo.svg";

const Header = () => {
    return (
        <Box as="header">
            <Flex align="center" justify="center">
                <HamburgerIcon w={15} h={10} />

                <Spacer />

                <Image src={logo} h='27px' />

                <Spacer />

                <Button 
                w='60px' 
                h='27px' 
                bg='#ED64A6' 
                color='white' 
                fontWeight='600' 
                fontSize='12px' 
                line-height='15px'
                >Sign up</Button>
            </Flex>
        </Box>
    )
}

export default Header;