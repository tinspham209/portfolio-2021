import {
  Container,
  Heading,
  SimpleGrid,
  Divider,
  Box,
  Link
} from '@chakra-ui/react'
import NextLink from 'next/link'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { ProjectsGridItem } from '../components/grid-item'
import { ChevronRightIcon } from '@chakra-ui/icons'
import thumbNoorCf from '../public/images/personal-projects/noor-cafe.webp'
import thumbInut from '../public/images/personal-projects/inut-design.webp'
import thumbTaptaponme from '../public/images/personal-projects/taptaponme.webp'
import thumbKingstonedanang from '../public/images/personal-projects/kingstonedanang.webp'
import thumbNoorKombucha from '../public/images/personal-projects/noor-kombucha.webp'
import thumbCafesang from '../public/images/personal-projects/cafesang.webp'
import thumbCovidTracker from '../public/images/personal-projects/covid-tracker.webp'
import { Seo } from '../components/seo'

const PersonalProjects = () => (
  <Layout title="personal-projects">
    <Seo
      data={{
        title: 'Personal Projects - Tins Pham Portfolio',
        description: `Showcase of Personal Projects`,
        url: 'https://tinspham.dev/personal-projects/',
        thumbnailUrl:
          'https://firebasestorage.googleapis.com/v0/b/tinspham-209.appspot.com/o/card.png?alt=media&token=db1e220d-d880-4a0b-9372-7bc90ecf9c7e'
      }}
    />
    <Container>
      <Box>
        <NextLink href="/">
          <Link>Home</Link>
        </NextLink>
        <span>
          {' '}
          <ChevronRightIcon />{' '}
        </span>
        <Heading display="inline-block" as="h3" fontSize={20} mb={4}>
          Personal Projects
        </Heading>
      </Box>
      <Divider />

      <Heading as="h3" fontSize={20} mb={4} mt={4}>
        Personal Projects
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        {[
          {
            id: 'inut-design',
            title: 'INUT Design',
            thumbnail: thumbInut,
            href: `https://inutdesign.com/`
          },
          {
            id: 'noor-cafe',
            title: 'NOOR Coffee & Tea',
            thumbnail: thumbNoorCf,
            href: `https://noor-cf.web.app/`
          },
          {
            id: 'taptaponme',
            title: 'Taptapon.me',
            thumbnail: thumbTaptaponme,
            href: `https://taptapon.me/`
          },
          {
            id: 'kingstonedanang',
            title: 'Kingstonedanang.com',
            thumbnail: thumbKingstonedanang,
            href: `https://kingstonedanang.com/`
          },
          {
            id: 'cafesang',
            title: 'cafesang',
            thumbnail: thumbCafesang,
            href: `https://cafe-sang.web.app/`
          },
          {
            id: 'noor-kombucha',
            title: 'NOOR Kombucha',
            thumbnail: thumbNoorKombucha,
            href: `https://noor-kombucha.web.app/`
          },
          {
            id: 'covid-tracker',
            title: 'Covid Tracker',
            thumbnail: thumbCovidTracker,
            href: `https://covid-tracker-dksgsd.surge.sh/`
          }
        ].map((project, index) => (
          <Section key={`${project.id}-${index}`}>
            <ProjectsGridItem
              id={project.id}
              title={project.title}
              thumbnail={project.thumbnail}
              href={project.href}
            >
              {/* {project.title} */}
              &nbsp;
            </ProjectsGridItem>
          </Section>
        ))}
      </SimpleGrid>
      <Divider mb={2} />
    </Container>
  </Layout>
)

export default PersonalProjects
