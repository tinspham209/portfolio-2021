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
  useColorModeValue,
  useMediaQuery,
  SimpleGrid
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
import NextLink from 'next/link'
import { Seo } from '../components/seo'

const Home = () => {
  const [isMobile] = useMediaQuery(['(max-width: 600px)'])
  return (
    <Layout>
      <Seo
        data={{
          title: 'Tins Pham Portfolio - Homepage',
          description: `Tins Pham's homepage`,
          url: 'https://tinspham.dev',
          thumbnailUrl:
            'https://firebasestorage.googleapis.com/v0/b/tinspham-209.appspot.com/o/card.png?alt=media&token=db1e220d-d880-4a0b-9372-7bc90ecf9c7e'
        }}
      />
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
              borderColor="whiteAlpha.800"
              // borderWidth={2}
              borderStyle="solid"
              borderBottomWidth={2}
              maxWidth="100px"
              display="inline-block"
              // borderRadius="full"
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
            A Software Engineering, interested in designing websites, especially
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
            {isMobile && <br />}
            Born in Danang, Vietnam.
          </BioSection>
          <BioSection>
            <BioYear>07 - 2021</BioYear>
            {isMobile && <br />}
            Completed the Bachelor&apos;s program in Software Engineering at Duy
            Tan University
          </BioSection>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            Work Experience
          </Heading>

          <BioSection>
            <BioYear>07 - 2021 to Present</BioYear>
            &nbsp;
          </BioSection>
          <BioSection>
            <BioYear>
              {Array.from({ length: isMobile ? 9 : 16 }).map(() => {
                return <>&nbsp;</>
              })}
            </BioYear>
            Software Engineering at{' '}
            <Link href="https://datahouse.com" target="_blank">
              DataHouse Asia
            </Link>
          </BioSection>

          <BioSection>
            <BioYear>04 - 2023</BioYear>
            {isMobile && <br />}
            Freelancer Web Developer
          </BioSection>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            Personal Projects
          </Heading>
          <SimpleGrid columns={[1, 1, 2]} gap={6}>
            <NextLink href="/personal-projects" passHref>
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                View detail
              </Button>
            </NextLink>
          </SimpleGrid>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            Practices
          </Heading>
          <SimpleGrid columns={[1, 1, 2]} gap={6}>
            <NextLink href="/css" passHref>
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                3D w CSS
              </Button>
            </NextLink>
            <NextLink href="/spline" passHref>
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                3D w Spline
              </Button>
            </NextLink>
          </SimpleGrid>
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
}

export default Home
