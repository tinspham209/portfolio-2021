import { Container, Badge, Divider, useMediaQuery } from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { Title } from '../../components/css'
import P from '../../components/paragraph'
import {
  disableScroll,
  enableScroll,
  Spline,
  SplineWrapper
} from './island-house'
import { Seo } from '../../components/seo'

const MacbookPro = () => {
  const [isMobile] = useMediaQuery(['(max-width: 600px)'])
  return (
    <Layout title="macbook-pro">
      <Seo
        data={{
          title: 'Macbook Pro - Spline - Tins Pham Portfolio',
          description: `Macbook Pro with Spline`,
          url: 'https://tinspham.dev/spline/macbook-pro/',
          thumbnailUrl: `https://firebasestorage.googleapis.com/v0/b/tinspham-209.appspot.com/o/macbook-pro.webp?alt=media&token=60deb36c-7e35-46a3-84a3-a68f7e80f9ef`
        }}
      />
      <Container>
        <Title href="spline" parentLink="Spline Practices">
          Macbook Pro <Badge>02-May-2022</Badge>
        </Title>

        <P>Scroll, Drag & Drop, anything you want to view the Macbook</P>
        {isMobile && <P>Switch to Desktop view for best experience</P>}
        <Divider mt={4} mb={4} />

        <SplineWrapper
          onMouseEnter={disableScroll}
          onMouseLeave={enableScroll}
          isMobile={isMobile}
          backgroundColor="#322741"
        >
          <Spline
            scene="https://prod.spline.design/YxbkzhRip8AUixwe/scene.splinecode"
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

export default MacbookPro
