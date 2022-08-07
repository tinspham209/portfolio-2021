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

const KeyBoard = () => {
  const [isMobile] = useMediaQuery(['(max-width: 600px)'])

  return (
    <Layout title="key-board">
      <Seo
        data={{
          title: 'Keyboard - Spline - Tins Pham Portfolio',
          description: `Keyboard with Spline`,
          url: 'https://tinspham.dev/spline/key-board/',
          thumbnailUrl: `https://firebasestorage.googleapis.com/v0/b/tinspham-209.appspot.com/o/keyboard.webp?alt=media&token=869eb37c-0539-40f7-aad9-ba678b441e52`
        }}
      />
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
