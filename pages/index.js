import {
  Link,
  Container,
  Heading,
  Box,
  Image,
  Button,
  List,
  ListItem,
  Icon,
  useColorModeValue
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import {
  IoLogoGithub,
  IoLogoLinkedin,
  IoLogoFacebook,
  IoMail
} from 'react-icons/io5'

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
      >
        Hello, I&apos;m a software engineer based in Vietnam!
      </Box>

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

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          What I Do?
        </Heading>
        <Paragraph>
          A Junior Developer, interested in designing websites, especially
          things related to Front-end stacks and UIX Designer.
        </Paragraph>
        <Box align="center" my={4}>
          <Link href="/cv.pdf" target="_blank">
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              My portfolio
            </Button>
          </Link>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>09 - 1999</BioYear>
          Born in Danang, Vietnam.
        </BioSection>
        <BioSection>
          <BioYear>07 - 2021</BioYear>
          Completed the Bachelor&apos;s program in Software Engineering at Duy
          Tan University
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Work Experience
        </Heading>
        <BioSection>
          <BioYear>05 - 2021</BioYear>
          Tech-Startup at{' '}
          <Link href="https://taptapon.me" target="_blank">
            TapTapOn.Me
          </Link>
        </BioSection>
        <BioSection>
          <BioYear>07 - 2021</BioYear>
          Software Engineering Intern at{' '}
          <Link href="https://datahouse.asia" target="_blank">
            Datahouse Asia
          </Link>
        </BioSection>
        <BioSection>
          <BioYear>10 - 2021</BioYear>
          Junior Software Engineering at{' '}
          <Link href="https://datahouse.asia" target="_blank">
            Datahouse Asia
          </Link>
        </BioSection>
      </Section>

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
            <Link href="mailto:tinphamvan123@gmail.com" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoMail} />}
              >
                tinphamvan123@gmail.com
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

export default Home
