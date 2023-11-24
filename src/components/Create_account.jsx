import React from 'react'
import { Grid, GridItem, Box, Heading, 
  Stack,Text,  HStack, VStack, 
  FormControl, Input, Button, Link,InputRightElement,InputGroup,SimpleGrid
} from '@chakra-ui/react'

import {ViewIcon} from '@chakra-ui/icons'
import {ViewOffIcon} from '@chakra-ui/icons'

import Leftpart from './common/Leftpart';

function Create_account() {
    const Years = Array.from({ length: 2023 - 2000 + 1 }, (_, index) => 2000 + index);
    const [show, setShow] = React.useState(false)
    const handleClick = () => setShow(!show)
    return (
        <Grid
          h='100vh'
          templateRows='repeat(1, 1fr)'
          templateColumns='repeat(5, 1fr)'
          gap={1/2}
        > 
        <Leftpart/>
        <GridItem colSpan={3} bg='#fff'  h='100vh' >
        <Stack 
          display='flex'
          justifyContent='center' 
          alignItems='center'
          w = '100%' 
        > 
         <Box   h='90vh' w ='55%' margin='auto' mt='5vh'>
               <VStack spacing={3}> 
                    <Heading mr='51'>Create a new account</Heading>                        
                    <Heading as='h5' size='sm' mr='31'>Create an account by filling the information below</Heading>                       
    
                    <SimpleGrid columns={2} spacing={5}>
                        <Box>
                        <label htmlFor="">First Name</label>
                        <Input type='text' placeholder ="First Name" variant='filled'/> 
                        </Box>

                        <Box>
                        <label htmlFor="">Middle Name</label>
                        <Input type='text' placeholder ="Middle Name" variant='filled'/> 
                        </Box>

                        <Box>
                        <label htmlFor="">Last Name</label>
                        <Input type='text' placeholder ="Last Name" variant='filled'/> 
                        </Box>

                        <Box>
                        <label htmlFor="">Email Address</label>
                        <Input type='email' placeholder ="Email Address" variant='filled'/> 
                        </Box>

                        <Box>
                        <label htmlFor="">Phone Number</label>
                        <Input type='number' placeholder ="Phone Number" variant='filled'/> 
                        </Box>

                        <Box>
                        <label htmlFor="">Password</label>
                        <Input type='password' placeholder ="Password" variant='filled'/> 
                        </Box>

                        <Box>
                        <label htmlFor="">Confirm Password</label>
                        <Input type='password' placeholder ="Confirm Password" variant='filled'/> 
                        </Box>
                       
                    </SimpleGrid>
    
    
                   <FormControl> 
                       <Button colorScheme='green' w= '100%'> Create Account </Button>
                  </FormControl>
    
                   <FormControl> 
                       <Button border='2px' borderColor='blue.200'  w= '100%'> 
                          <Link href='/create-account' color="blue.600">  Check Result Here </Link>
                       </Button>
                   </FormControl>
    
                  <HStack>
                      <Text  mr="20" >Don't have an account?</Text>
                      <Link href='/login' color="green" fontSize='md' mr="30">  Login Here  </Link>
                  </HStack> 
    
              </VStack>
    
            
        </Box>
              
    
        </Stack>
        </GridItem> 
    
        </Grid>
      )
}

export default Create_account