import { Container, Badge, Divider, Box, Button, Link } from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
// import { Title, CSSImage } from '../../components/css'
import { Title } from '../../components/css'
import P from '../../components/paragraph'

const CSS = () => {
  return (
    <Layout title="3d-animated-stairs">
      <Container>
        <Title>
          3D Animated Stairs <Badge>04-Dec-2021</Badge>
        </Title>

        <P>3D Animated Stairs with CSS Only</P>
        <Divider mt={4} mb={4} />

        <div className="css-stairs">
          <div className="stairs">
            <div className="base"></div>
            <div className="step step-1">
              <i></i>
              <i></i>
            </div>
            <div className="step step-2">
              <i></i>
              <i></i>
            </div>
            <div className="step step-3">
              <i></i>
              <i></i>
            </div>
            <div className="step step-4">
              <i></i>
              <i></i>
            </div>
            <div className="step step-5">
              <i></i>
              <i></i>
            </div>
            <div className="step step-6">
              <i></i>
              <i></i>
            </div>
          </div>
        </div>
        <style jsx>{`
          .css-stairs {
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 50vh;
            background: radial-gradient(#eac4ff, #9e57c5);
            overflow: hidden;
          }
          .css-stairs .stairs {
            position: relative;
            width: 500px;
            height: 300px;
            transform-style: preserve-3d;
            transform: rotateX(-30deg) rotateY(250deg);
            animation: animate 10s linear infinite;
          }
          @keyframes animate {
            0% {
              transform: rotateX(-30deg) rotateY(0deg);
            }
            100% {
              transform: rotateX(-30deg) rotateY(360deg);
            }
          }
          .css-stairs .stairs .base {
            position: absolute;
            top: 0;
            left: 60px;
            width: 360px;
            height: 300px;
            background: #a54bcf;
            transform: rotateX(90deg) translateZ(-150px) scale(1.25);
            filter: blur(20px);
            opacity: 0.5;
          }
          .css-stairs .stairs .step {
            position: absolute;
            bottom: 0;
            width: 60px;
            transform-style: preserve-3d;
          }

          .css-stairs .stairs .step::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 60px;
            height: 300px;
            background: #cf8df1;
            transform: rotateX(90deg) translateZ(150px);
          }
          .css-stairs .stairs .step:hover::before {
            filter: brightness(1.1);
            cursor: pointer;
          }
          .css-stairs .stairs .step::after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 300px;
            height: 60px;
            background: #ae52dd;
            transform: rotateY(90deg) translateZ(-150px);
          }

          .css-stairs .stairs .step i {
            position: absolute;
            display: block;
            width: 60px;
            height: 100%;
            background: #a54bcf;
            transform-style: preserve-3d;
          }
          .css-stairs .stairs .step i:nth-child(1) {
            transform: translateZ(150px);
          }
          .css-stairs .stairs .step i:nth-child(2) {
            transform: translateZ(-150px);
          }
          .css-stairs .stairs .step:last-child i:nth-child(2)::before {
            content: '';
            position: absolute;
            left: 0;
            width: 300px;
            height: 100%;
            background: #ae52dd;
            transform: rotateY(90deg) translate3d(-150px, 0, -90px);
          }

          .css-stairs .stairs .step.step-1 {
            left: calc(60px * 1);
            height: calc(60px * 1);
          }
          .css-stairs .stairs .step.step-2 {
            left: calc(60px * 2);
            height: calc(60px * 2);
          }
          .css-stairs .stairs .step.step-3 {
            left: calc(60px * 3);
            height: calc(60px * 3);
          }
          .css-stairs .stairs .step.step-4 {
            left: calc(60px * 4);
            height: calc(60px * 4);
          }
          .css-stairs .stairs .step.step-5 {
            left: calc(60px * 5);
            height: calc(60px * 5);
          }
          .css-stairs .stairs .step.step-6 {
            left: calc(60px * 6);
            height: calc(60px * 6);
          }
        `}</style>
        {/* <CSSImage src="/images/avatar.webp" alt="amembo" /> */}
        <Divider mt={4} mb={4} />
        <Box my={6} align="center">
          <Link
            href="https://github.com/tinspham209/portfolio-2021/blob/master/pages/css/3d-animated-stairs.js"
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
