import { Formik, Form, ErrorMessage } from "formik";
import {
    Box,
    Button,
    Flex,
    FormControl,
    Input,
    VStack,
    Textarea,
    Text,
    FormErrorMessage
} from "@chakra-ui/react";
import * as Yup from 'yup';

export default function ContactForm() {
    return (
        <Flex align="center" justify="center" h="568px">
            <Box p={6} rounded="md" w="320px">
                <h1>Contact Us</h1>
                <Text
                    fontWeight='500'
                    fontSize='16px'
                    lineHeight='19px'
                    color='#6C6D6F'
                    w="288px"
                    h="57px"
                    mt="24px"
                    mb="24px">
                    If you have any questions please < br />don't hesitate to contact us. < br />
                    We're here to help!
                </Text>
                <Formik

                    initialValues={{
                        email: "",
                        message: ""
                    }}

                    onSubmit={async (values) => {
                        await new Promise((r) => setTimeout(r, 500));
                        alert(JSON.stringify(values, null, 2));
                    }}
                >

                    
                    <Form>

                        <VStack spacing={4} align="flex-start">

                            <FormControl isRequired>
                                <Input
                                    bg="white"
                                    w="288px"
                                    h="59px"
                                    id="email"
                                    name="email"
                                    type="email"
                                    placeholder="Your email"
                                    validate={(value) => {
                                        let error;
                  
                                        if (value.length === 0) {
                                          error = "Email is required";
                                        }
                  
                                        return error;
                                      }}
                                />
                            </FormControl>

                            <FormControl isRequired>
                                <Textarea
                                    bg="white"
                                    w="288px"
                                    h="115px"
                                    as={Input}
                                    id="message"
                                    name="message"
                                    type="message"
                                    placeholder="Your message"
                                />
                            </FormControl>

                            <Button
                                type="submit"
                                bg="#4DBA7A"
                                color="white"
                                w="70px"
                                h="37px" >
                                Send
                            </Button>
                        </VStack>
                    </Form>

                </Formik>
            </Box>
        </Flex>
    );
}