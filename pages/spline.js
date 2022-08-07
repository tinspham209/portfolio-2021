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

import thumbIslandHouse from '../public/images/spline/island-house.webp'
import thumbMacbookPro from '../public/images/spline/macbook-pro.webp'
import thumbNintendoSwitch from '../public/images/spline/nintendo-switch.png'
import thumbCalculator from '../public/images/spline/calculator.webp'
import thumbSpotify from '../public/images/spline/spotify.webp'
import thumbClockDigital from '../public/images/spline/clock-digital.webp'
import thumbKeyboard from '../public/images/spline/keyboard.webp'
import { Seo } from '../components/seo'

const Title = 'Spline Practice'

const Spline = () => {
  const items = [
    {
      id: 'island-house',
      title: 'Island House',
      thumbnail: thumbIslandHouse
    },
    {
      id: 'macbook-pro',
      title: 'Macbook Pro',
      thumbnail: thumbMacbookPro
    },
    {
      id: 'nintendo-switch',
      title: 'Nintendo Switch',
      thumbnail: thumbNintendoSwitch
    },
    {
      id: 'calculator',
      title: 'Calculator',
      thumbnail: thumbCalculator
    },
    {
      id: 'spotify',
      title: 'Spotify',
      thumbnail: thumbSpotify
    },
    {
      id: 'clock-digital',
      title: 'Clock Digital',
      thumbnail: thumbClockDigital
    },
    {
      id: 'key-board',
      title: 'Keyboard',
      thumbnail: thumbKeyboard
    }
  ]

  return (
    <Layout title="spline">
      <Seo
        data={{
          title: 'Spline - Tins Pham Portfolio',
          description: `Showcase of Spline - Design`,
          url: 'https://tinspham.dev/spline',
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
            {Title}
          </Heading>
        </Box>
        <Divider />

        <Heading as="h3" fontSize={20} mb={4} mt={4}>
          {Title}
        </Heading>

        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          {items.map(item => {
            return (
              <Section key={item.id}>
                <CSSGridItem
                  id={item.id}
                  title={item.title}
                  thumbnail={item.thumbnail}
                  href="spline"
                >
                  {/* 3D Animated Stairs with CSS only */}
                  &nbsp;
                </CSSGridItem>
              </Section>
            )
          })}
        </SimpleGrid>
        <Divider mb={2} />
      </Container>
    </Layout>
  )
}

export default Spline
