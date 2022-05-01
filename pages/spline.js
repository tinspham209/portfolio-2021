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

const Title = 'Spline Practice'

const Spline = () => {
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
          <Section>
            <CSSGridItem
              id="island-house"
              title="Island House"
              thumbnail={thumbIslandHouse}
              href="spline"
            >
              {/* 3D Animated Stairs with CSS only */}
              &nbsp;
            </CSSGridItem>
          </Section>
        </SimpleGrid>
        <Divider mb={2} />
      </Container>
    </Layout>
  )
}

export default Spline
