import React from 'react'
import { Grid, GridItem, Box, Heading, 
  Stack,Text,  HStack, VStack, 
  FormControl, Input, Button, Link,InputRightElement,InputGroup
} from '@chakra-ui/react'
import {ViewIcon} from '@chakra-ui/icons'
import {ViewOffIcon} from '@chakra-ui/icons'

import Leftpart from './common/Leftpart';

function Login() {
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
                <Heading fontSize='2xl'>Login to your account</Heading>                        
                <Heading as='h5' size='sm'>Login with your email address & password.</Heading>                       

               <FormControl > 
                <label htmlFor="">Email Address</label>
                  <Input type='email' placeholder ="godwin2016@gmil.com" variant='filled'/> 
              </FormControl>

               <FormControl>
                  <label htmlFor="">Password</label>
                  <InputGroup size='md'>
                      <Input
                        pr='4.5rem'
                        type={show ? 'text' : 'password'}
                        placeholder='Enter password'
                      
                      />
                      <InputRightElement width='4.5rem'>
                        <Button h='1.75rem' size='sm' onClick={handleClick}>
                          {show ? <ViewIcon/> : <ViewOffIcon/>}
                        </Button>
                      </InputRightElement>
                  </InputGroup>

              </FormControl>

               <FormControl> 
                   <Button colorScheme='green' w= '100%'> Login </Button>
              </FormControl>

              <Link href='/Forgot_Password' color="green" fontSize='md' mr="300"> Forgot Password  </Link>

               <FormControl> 
                   <Button border='2px' borderColor='blue.200'  w= '100%'> 
                      <Link href='/login' color="blue.600">  Check Result Here </Link>
                   </Button>
               </FormControl>

              <HStack>
                  <Text  mr="20" >Don't have an account?</Text>
                  <Link href='/Create_account' color="green" fontSize='md' mr="30">  Create account here  </Link>
              </HStack> 

          </VStack>

        
    </Box>
          

    </Stack>
    </GridItem> 

    </Grid>
  )
}

export default Login