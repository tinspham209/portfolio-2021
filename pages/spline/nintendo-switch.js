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

const NintendoSwitch = () => {
  const [isMobile] = useMediaQuery(['(max-width: 600px)'])

  return (
    <Layout title="nintendo-switch">
      <Seo
        data={{
          title: 'Nitendo Switch - Spline - Tins Pham Portfolio',
          description: `Nitendo Switch with Spline`,
          url: 'https://tinspham.dev/spline/nintendo-switch/',
          thumbnailUrl: `https://firebasestorage.googleapis.com/v0/b/tinspham-209.appspot.com/o/nintendo-switch.png?alt=media&token=de716e2f-9f8e-4d63-95aa-cd88572a646b`
        }}
      />
      <Container>
        <Title href="spline" parentLink="Spline Practices">
          Nitendo Switch <Badge>02-May-2022</Badge>
        </Title>

        <P>Scroll, Drag & Drop, anything you want to view the Nitendo Switch</P>
        {isMobile && <P>Switch to Desktop view for best experience</P>}
        <Divider mt={4} mb={4} />

        <SplineWrapper
          onMouseEnter={disableScroll}
          onMouseLeave={enableScroll}
          isMobile={isMobile}
          backgroundColor="#FFB2B2"
        >
          <Spline
            scene="https://prod.spline.design/bsXV52LOq7UrKiRn/scene.spline"
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

export default NintendoSwitch
