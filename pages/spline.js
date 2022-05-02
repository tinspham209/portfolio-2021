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
    }
  ]

  return (
    <Layout title="spline">
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
