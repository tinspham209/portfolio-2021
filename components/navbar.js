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
          <LinkItem href="/css" path={path}>
            CSS
          </LinkItem>
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
                <NextLink href="/css" passHref>
                  <MenuItem as={Link}>CSS Practice</MenuItem>
                </NextLink>

                {/* <MenuItem
                  as={Link}
                  href="https://github.com/craftzdog/craftzdog-homepage"
                >
                  View Source
                </MenuItem> */}
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default Navbar
