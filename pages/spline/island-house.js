import { Container, Badge, Divider, useMediaQuery } from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
// import { Title, CSSImage } from '../../components/css'
import { Title } from '../../components/css'
import P from '../../components/paragraph'
import styled from '@emotion/styled'
import { disableScroll, enableScroll } from './utils'
import dynamic from 'next/dynamic'

const SplineWrapper = styled.div(props => ({
  width: props.isMobile ? '80vw !important' : '485px !important',
  height: props.isMobile ? '30vh !important' : '100% !important',
  overflow: 'hidden',
  backgroundColor: '#A6D5E9',
  borderRadius: '8px',
  border: '1px solid #fff',
  boxShadow: '2px 2px 8px rgba(0, 0, 0, 0.2)',
  margin: '0 auto',

  '& canvas': {
    width: '100% !important',
    height: '100% !important',
    borderRadius: '8px'
  }
}))

const Spline = dynamic(() => import('@splinetool/react-spline'), {
  ssr: false
})

const IslandHouse = () => {
  const [isMobile] = useMediaQuery(['(max-width: 600px)'])

  return (
    <Layout title="island-house">
      <Container>
        <Title href="spline" parentLink="Spline Practices">
          Island House <Badge>01-May-2022</Badge>
        </Title>

        {isMobile ? (
          <P>
            3D component is not optimized for Mobile View, please switch to
            Desktop for Fully Experience
          </P>
        ) : (
          <P>Scroll, Drag & Drop, anything you want in this Island</P>
        )}
        <Divider mt={4} mb={4} />

        {isMobile ? (
          <SplineWrapper isMobile={isMobile}></SplineWrapper>
        ) : (
          <SplineWrapper
            onMouseEnter={disableScroll}
            onMouseLeave={enableScroll}
            isMobile={isMobile}
          >
            <Spline
              scene="https://prod.spline.design/UekhSiujr09iCtzb/scene.spline"
              onLoad={spline => {
                spline.setZoom(0.5)
              }}
            />
          </SplineWrapper>
        )}

        <Divider mt={4} mb={4} />
      </Container>
    </Layout>
  )
}

export default IslandHouse
