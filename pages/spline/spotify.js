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

const Spotify = () => {
  const [isMobile] = useMediaQuery(['(max-width: 600px)'])

  return (
    <Layout title="spotify">
      <Container>
        <Title href="spline" parentLink="Spline Practices">
          Spotify <Badge>02-May-2022</Badge>
        </Title>

        <P>Scroll, Drag & Drop, anything you want to view the Spotify</P>
        {isMobile && <P>Switch to Desktop view for best experience</P>}
        <Divider mt={4} mb={4} />

        <SplineWrapper
          onMouseEnter={disableScroll}
          onMouseLeave={enableScroll}
          isMobile={isMobile}
          backgroundColor="#69FF75"
        >
          <Spline
            scene="https://prod.spline.design/ND-dzjz9AQq4Kl29/scene.spline"
            onLoad={spline => {
              spline.setZoom(0.4)
            }}
          />
        </SplineWrapper>

        <Divider mt={4} mb={4} />
      </Container>
    </Layout>
  )
}

export default Spotify
