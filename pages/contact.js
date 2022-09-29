import {
  Box,
  Button,
  Container,
  Heading,
  Icon,
  Image,
  Link,
  List,
  ListItem
} from '@chakra-ui/react'
import {
  IoLogoFacebook,
  IoLogoGithub,
  IoLogoLinkedin,
  IoMail
} from 'react-icons/io5'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { Seo } from '../components/seo'

const Home = () => {
  return (
    <Layout>
      <Seo
        data={{
          title: 'Tins Pham Contact',
          description: `Tins Pham's Contact`,
          url: 'https://tinspham.dev/contact',
          thumbnailUrl:
            'https://firebasestorage.googleapis.com/v0/b/tinspham-209.appspot.com/o/card.png?alt=media&token=db1e220d-d880-4a0b-9372-7bc90ecf9c7e'
        }}
      />
      <Container>
        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Tins Pham
            </Heading>
            <p>{`<@tinspham209>`}</p>
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            textAlign="center"
          >
            <Image
              // borderColor="whiteAlpha.800"
              // borderWidth={2}
              // borderStyle="solid"
              maxWidth="100px"
              display="inline-block"
              borderRadius="full"
              src="/images/full-nguoi-edit.webp"
              alt="Profile image"
            />
          </Box>
        </Box>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            Connect with me
          </Heading>
          <List>
            <ListItem>
              <Link href="https://github.com/tinspham209" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoGithub} />}
                >
                  @tinspham209
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="mailto:work@tinspham.dev" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoMail} />}
                >
                  work@tinspham.dev
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="https://www.linkedin.com/in/phamvantins/"
                target="_blank"
              >
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoLinkedin} />}
                >
                  @phamvantins
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://www.fb.com/tinspham.209" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoFacebook} />}
                >
                  @tinspham.209
                </Button>
              </Link>
            </ListItem>
          </List>
        </Section>
      </Container>
    </Layout>
  )
}

export default Home
