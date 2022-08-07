import {
  Container,
  Heading,
  SimpleGrid,
  Divider,
  Box,
  Link
} from '@chakra-ui/react'
import NextLink from 'next/link'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { CSSGridItem } from '../components/grid-item'
import { ChevronRightIcon } from '@chakra-ui/icons'

import thumbAnimatedStairs from '../public/images/css/3d-animated-stairs.png'
import thumbGlowingCube from '../public/images/css/3d-glowing-cube.png'
import { Seo } from '../components/seo'

const CSS = () => (
  <Layout title="css">
    <Seo
      data={{
        title: 'CSS - Tins Pham Portfolio',
        description: `Showcase of CSS practice - Design`,
        url: 'https://tinspham.dev/css',
        thumbnailUrl:
          'https://firebasestorage.googleapis.com/v0/b/tinspham-209.appspot.com/o/card.png?alt=media&token=db1e220d-d880-4a0b-9372-7bc90ecf9c7e'
      }}
    />
    <Container>
      <Box>
        <NextLink href="/">
          <Link>Home</Link>
        </NextLink>
        <span>
          {' '}
          <ChevronRightIcon />{' '}
        </span>
        <Heading display="inline-block" as="h3" fontSize={20} mb={4}>
          CSS Practice
        </Heading>
      </Box>
      <Divider />

      <Heading as="h3" fontSize={20} mb={4} mt={4}>
        CSS Practice
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <CSSGridItem
            id="3d-animated-stairs"
            title="3D Animated Stairs"
            thumbnail={thumbAnimatedStairs}
            href="css"
          >
            {/* 3D Animated Stairs with CSS only */}
            &nbsp;
          </CSSGridItem>
        </Section>
        <Section>
          <CSSGridItem
            id="3d-glowing-cube"
            title="3D Glowing Cube"
            thumbnail={thumbGlowingCube}
            href="css"
          >
            {/* 3D Glowing Cube with CSS only */}
            &nbsp;
          </CSSGridItem>
        </Section>
        {/*
        <Section delay={0.1}>
          <CSSGridItem
            id="3d-animated-stairs"
            title="3D Animated Stairs"
            thumbnail={thumbAnimatedStairs}
          >
            3D Animated Stairs with CSS only
          </CSSGridItem>
        </Section>
        <Section delay={0.1}>
          <CSSGridItem
            id="3d-animated-stairs"
            title="3D Animated Stairs"
            thumbnail={thumbAnimatedStairs}
          >
            3D Animated Stairs with CSS only
          </CSSGridItem>
        </Section> */}
      </SimpleGrid>
      <Divider mb={2} />
    </Container>
  </Layout>
)

export default CSS
