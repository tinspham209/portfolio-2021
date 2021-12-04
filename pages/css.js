import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { CSSGridItem } from '../components/grid-item'
import thumbAnimatedStairs from '../public/images/css/3d-animated-stairs.png'
const CSS = () => (
  <Layout title="css">
    <Container>
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
          >
            3D Animated Stairs with CSS only
          </CSSGridItem>
        </Section>
        {/* <Section>
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
