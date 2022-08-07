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

const Spotify = () => {
  const [isMobile] = useMediaQuery(['(max-width: 600px)'])

  return (
    <Layout title="spotify">
      <Seo
        data={{
          title: 'Spotify - Spline - Tins Pham Portfolio',
          description: `Spotify with Spline`,
          url: 'https://tinspham.dev/spline/spotify/',
          thumbnailUrl: `https://firebasestorage.googleapis.com/v0/b/tinspham-209.appspot.com/o/spotify.webp?alt=media&token=f2148c91-94a3-4958-8231-63b7d7efbd32`
        }}
      />
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
