import { Container, Badge, Divider, Box, Button, Link } from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
// import { Title, CSSImage } from '../../components/css'
import { Title } from '../../components/css'
import P from '../../components/paragraph'

const CSS = () => {
  return (
    <Layout title="3d-glowing-cube">
      <Container>
        <Title>
          3D Glowing Cube <Badge>05-Dec-2021</Badge>
        </Title>

        <P>3D Glowing Cube with CSS only</P>
        <Divider mt={4} mb={4} />

        <div className="css-3d-cube">
          <div className="cube">
            <div className="top"></div>
            <div>
              <span className="i-0"></span>
              <span className="i-1"></span>
              <span className="i-2"></span>
              <span className="i-3"></span>
            </div>
          </div>
        </div>
        <style jsx>{`
          .css-3d-cube {
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 50vh;
            background: #050505;
            overflow: hidden;
          }
          .css-3d-cube .cube {
            position: relative;
            width: 150px;
            height: 150px;
            transform-style: preserve-3d;
            transform: rotateX(-30deg);
            animation: animate 4s linear infinite;
          }

          @keyframes animate {
            0% {
              transform: rotateX(-30deg) rotateY(0deg);
            }
            100% {
              transform: rotateX(-30deg) rotateY(360deg);
            }
          }

          .css-3d-cube .cube div {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            transform-style: preserve-3d;
          }

          .css-3d-cube .cube div span {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            transform-style: preserve-3d;
            background: linear-gradient(#151515, #00ec00);
            transform: rotateY(calc(90deg * 0)) translateZ(75px);
          }
          .css-3d-cube .cube div span.i-1 {
            transform: rotateY(calc(90deg * 1)) translateZ(75px);
          }
          .css-3d-cube .cube div span.i-2 {
            transform: rotateY(calc(90deg * 2)) translateZ(75px);
          }
          .css-3d-cube .cube div span.i-3 {
            transform: rotateY(calc(90deg * 3)) translateZ(75px);
          }
          .css-3d-cube .cube .top {
            position: absolute;
            top: 0;
            left: 0;
            width: 150px;
            height: 150px;
            background: #222;
            transform: rotateX(90deg) translateZ(75px);
          }
          .css-3d-cube .cube .top::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 150px;
            height: 150px;
            background: #0f0;
            transform: translateZ(-200px);
            filter: blur(20px);
            box-shadow: 0 0 60px rgba(0, 255, 0, 0.2),
              0 0 100px rgba(0, 255, 0, 0.4), 0 0 150px rgba(0, 255, 0, 0.6),
              0 0 200px rgba(0, 255, 0, 0.8), 0 0 250px rgba(0, 255, 0, 1);
          }
        `}</style>
        {/* <CSSImage src="/images/avatar.webp" alt="amembo" /> */}
        <Divider mt={4} mb={4} />
        <Box my={6} align="center">
          <Link
            href="https://github.com/tinspham209/portfolio-2021/blob/master/pages/css/3d-glowing-cube.js"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button colorScheme="teal">View source code</Button>
          </Link>
        </Box>
      </Container>
    </Layout>
  )
}

export default CSS
