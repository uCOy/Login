import React from 'react';
import { Button, Flex, Stack } from '@chakra-ui/react';
import { Input } from '@chakra-ui/input';


export default function Login() {
  return (
    <Flex w="100vw" h="100vh" align="center" justify="center">
      <Flex
        as="form"
        width="100%"
        maxW={360}
        bg="gray.800"
        p="8"
        borderRadius={8}
        flexDir="column"
      >
        <Stack spacing="2">
          <label htmlFor="">Email</label>
         <Input name="E-mail" type="email"/>
         <label htmlFor="">Senha</label>
         <Input name="Senha" type="password"/>
        </Stack>

        <Button type="submit" mt="6" colorScheme="pink">Entrar</Button>
      </Flex>
    </Flex>
  )
}