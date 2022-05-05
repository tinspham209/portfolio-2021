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

const KeyBoard = () => {
  const [isMobile] = useMediaQuery(['(max-width: 600px)'])

  return (
    <Layout title="key-board">
      <Container>
        <Title href="spline" parentLink="Spline Practices">
          Keyboard <Badge>05-May-2022</Badge>
        </Title>

        <P>
          Scroll, Drag & Drop, Press {`'L', 'G', 'B', 'T'`} to view the
          animation
        </P>
        {isMobile && <P>Switch to Desktop view for best experience</P>}
        <Divider mt={4} mb={4} />

        <SplineWrapper
          onMouseEnter={disableScroll}
          onMouseLeave={enableScroll}
          isMobile={isMobile}
          backgroundColor="#BABABA"
        >
          <Spline
            scene="https://prod.spline.design/sD9uS-40segUVl6L/scene.splinecode"
            onLoad={spline => {
              spline.setZoom(0.8)
            }}
          />
        </SplineWrapper>

        <Divider mt={4} mb={4} />
      </Container>
    </Layout>
  )
}

export default KeyBoard
