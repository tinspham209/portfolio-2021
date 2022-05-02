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

const ClockDigital = () => {
  const [isMobile] = useMediaQuery(['(max-width: 600px)'])

  return (
    <Layout title="clock-digital">
      <Container>
        <Title href="spline" parentLink="Spline Practices">
          Clock Digital <Badge>03-May-2022</Badge>
        </Title>

        <P>Scroll, Drag & Drop, anything you want to view the Clock Digital</P>
        {isMobile && <P>Switch to Desktop view for best experience</P>}
        <Divider mt={4} mb={4} />

        <SplineWrapper
          onMouseEnter={disableScroll}
          onMouseLeave={enableScroll}
          isMobile={isMobile}
          backgroundColor="#C5C4C5"
        >
          <Spline
            scene="https://prod.spline.design/NGkuKsGWIYjX-UqY/scene.spline"
            onLoad={spline => {
              spline.setZoom(0.7)
            }}
          />
        </SplineWrapper>

        <Divider mt={4} mb={4} />
      </Container>
    </Layout>
  )
}

export default ClockDigital
