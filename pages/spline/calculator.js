import { Container, Badge, Divider, useMediaQuery } from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
// import { Title, CSSImage } from '../../components/css'
import { Title } from '../../components/css'
import P from '../../components/paragraph'
import {
  disableScroll,
  enableScroll,
  Spline,
  SplineWrapper
} from './island-house'
import { Seo } from '../../components/seo'

const Calculator = () => {
  const [isMobile] = useMediaQuery(['(max-width: 600px)'])

  return (
    <Layout title="calculator">
      <Seo
        data={{
          title: 'Calculator - Spline - Tins Pham Portfolio',
          description: `Calculator with Spline`,
          url: 'https://tinspham.dev/spline/calculator/',
          thumbnailUrl: `https://firebasestorage.googleapis.com/v0/b/tinspham-209.appspot.com/o/calculator.webp?alt=media&token=120ac9b0-4fb6-40ca-a6f0-48d0a06eb34a`
        }}
      />
      <Container>
        <Title href="spline" parentLink="Spline Practices">
          Calculator <Badge>02-May-2022</Badge>
        </Title>

        <P>Scroll, Drag & Drop, anything you want to view the Calculator</P>
        {isMobile && <P>Switch to Desktop view for best experience</P>}
        <Divider mt={4} mb={4} />

        <SplineWrapper
          onMouseEnter={disableScroll}
          onMouseLeave={enableScroll}
          isMobile={isMobile}
          backgroundColor="#FAD6BF"
        >
          <Spline
            scene="https://prod.spline.design/T4xhl3w18w08WlAi/scene.spline"
            onLoad={spline => {
              spline.setZoom(0.5)
            }}
          />
        </SplineWrapper>

        <Divider mt={4} mb={4} />
      </Container>
    </Layout>
  )
}

export default Calculator
