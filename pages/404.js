import NextLink from 'next/link'
import {
  Box,
  Heading,
  Text,
  Container,
  Divider,
  Button
} from '@chakra-ui/react'
import { Seo } from '../components/seo'

const NotFound = () => {
  return (
    <Container>
      <Seo
        data={{
          title: 'Tins Pham Portfolio - Homepage',
          description: `Tins Pham's homepage`,
          url: 'https://tinspham.dev',
          thumbnailUrl:
            'https://firebasestorage.googleapis.com/v0/b/tinspham-209.appspot.com/o/card.png?alt=media&token=db1e220d-d880-4a0b-9372-7bc90ecf9c7e'
        }}
      />
      <Heading as="h1">Làm gì có trang này ông nội</Heading>
      <Text>Wow! The page you&apos;re looking for was not found.</Text>
      <Divider my={6} />

      <Box my={6} align="center">
        <NextLink href="/">
          <Button colorScheme="teal">Back to home</Button>
        </NextLink>
      </Box>
    </Container>
  )
}

export default NotFound
