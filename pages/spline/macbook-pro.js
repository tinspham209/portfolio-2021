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

const MacbookPro = () => {
  const [isMobile] = useMediaQuery(['(max-width: 600px)'])
  return (
    <Layout title="macbook-pro">
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
            scene="https://prod.spline.design/YxbkzhRip8AUixwe/scene.spline"
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
