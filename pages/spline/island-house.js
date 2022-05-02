import { Container, Badge, Divider, useMediaQuery } from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { Title } from '../../components/css'
import P from '../../components/paragraph'
import styled from '@emotion/styled'
import dynamic from 'next/dynamic'

export const SplineWrapper = styled.div(props => ({
  width: props.isMobile ? '300px !important' : '485px !important',
  height: props.isMobile ? '300px !important' : '100% !important',
  overflow: 'hidden',
  backgroundColor: props.backgroundColor ? props.backgroundColor : '#A6D5E9',
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

export const Spline = dynamic(() => import('@splinetool/react-spline'), {
  ssr: false
})

export const disableScroll = () => {
  document.addEventListener('wheel', preventDefault, {
    passive: false
  })
}

export const enableScroll = () => {
  document.removeEventListener('wheel', preventDefault, false)
}

export const preventDefault = e => {
  e = e || window.event
  if (e.preventDefault) {
    e.preventDefault()
  }
  e.returnValue = false
}

const IslandHouse = () => {
  const [isMobile] = useMediaQuery(['(max-width: 600px)'])

  return (
    <Layout title="island-house">
      <Container>
        <Title href="spline" parentLink="Spline Practices">
          Island House <Badge>01-May-2022</Badge>
        </Title>

        <P>Scroll, Drag & Drop, anything you want in this Island</P>
        {isMobile && <P>Switch to Desktop view for best experience</P>}
        <Divider mt={4} mb={4} />

        <SplineWrapper
          onMouseEnter={disableScroll}
          onMouseLeave={enableScroll}
          isMobile={isMobile}
          backgroundColor="#A6D5E9"
        >
          <Spline
            scene="https://prod.spline.design/UekhSiujr09iCtzb/scene.spline"
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

export default IslandHouse
