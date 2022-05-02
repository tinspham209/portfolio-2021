import Logo from './logo'
import NextLink from 'next/link'
import {
  Container,
  Box,
  Link,
  // Stack,
  Heading,
  Flex,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton,
  useColorModeValue
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import ThemeToggleButton from './theme-toggle-button'

// const LinkItem = ({ href, path, _target, children, ...props }) => {
//   const active = path === href
//   const inactiveColor = useColorModeValue('gray200', 'whiteAlpha.900')
//   return (
//     <NextLink href={href} passHref>
//       <Link
//         p={2}
//         bg={active ? 'grassTeal' : undefined}
//         color={active ? '#202023' : inactiveColor}
//         _target={_target}
//         rel="noopener noreferrer"
//         {...props}
//       >
//         {children}
//       </Link>
//     </NextLink>
//   )
// }

const Navbar = props => {
  // const { path } = props

  const navbarItems = [
    {
      title: '3d w CSS',
      href: 'css'
    },
    {
      title: '3d w ThreeJS',
      href: 'spline'
    }
  ]

  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={useColorModeValue('#ffffff40', '#20202380')}
      style={{ backdropFilter: 'blur(1px)' }}
      zIndex={1}
      {...props}
    >
      <Container
        display="flex"
        p={2}
        maxW="container.md"
        wrap="wrap"
        align="center"
        justify="space-between"
      >
        <Flex align="center" mr={5}>
          <Heading as="h1" size="lg" letterSpacing={'tighter'}>
            <Logo />
          </Heading>
        </Flex>

        {/* <Stack
          direction={{ base: 'column', md: 'row' }}
          display={{ base: 'none', md: 'flex' }}
          width={{ base: 'full', md: 'auto' }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 4, md: 0 }}
        >
          {navbarItems.map(item => (
            <LinkItem key={item.href} href={`/${item.href}`} path={path}>
              {item.title}
            </LinkItem>
          ))}
        </Stack> */}
        <Box flex={1} align="right">
          <ThemeToggleButton />

          <Box ml={2} display={{ base: 'inline-block' }}>
            <Menu isLazy id="navbar-menu">
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
                aria-label="Options"
              />
              <MenuList>
                {navbarItems.map(item => (
                  <NextLink key={item.href} href={`/${item.href}`} passHref>
                    <MenuItem as={Link}>{item.title}</MenuItem>
                  </NextLink>
                ))}
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default Navbar
