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
import thumbTaptaponme from '../public/images/personal-projects/taptaponme.webp'
import thumbKingstonedanang from '../public/images/personal-projects/kingstonedanang.webp'
import thumbNoorKombucha from '../public/images/personal-projects/noor-kombucha.webp'
import thumbCafesang from '../public/images/personal-projects/cafesang.webp'
import thumbCovidTracker from '../public/images/personal-projects/covid-tracker.webp'

const PersonalProjects = () => (
  <Layout title="personal-projects">
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
