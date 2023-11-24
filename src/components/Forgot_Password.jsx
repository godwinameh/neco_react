
import React from 'react'
import { Grid, Box, Image, Heading, Text, 
          FormControl, Input , Link ,Button} from '@chakra-ui/react'
import Lock from '../assets/lock.svg'
import {ArrowBackIcon} from '@chakra-ui/icons'

function Forgot_Password() {
  return (
    <Grid align='center' mt='75'>
        <Box >
        
            <Image src={Lock} />
            <Heading  as='h4' size='md'>Reset Password</Heading>
            <Text>
                Enter the email associated with your account and we <br />
                will send an email with instructions to reset your <br />
                password.
             </Text>

             <FormControl > 
                  <Input type='email' placeholder ="onogwu2016@gmail.com" variant='filled' w={400}/> 
              </FormControl>

              <FormControl> 
                   <Button border='2px' colorScheme='green'  w={400}  mt='30'> 
                      <Link href='#'>  Reset Password </Link>
                   </Button>
               </FormControl>

                <Box   >

                <ArrowBackIcon/>
                <Link href='/login' color="white.600">Back To Login</Link>
                </Box>

        </Box>
    </Grid>
  )
}

export default Forgot_Password 