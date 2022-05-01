# Tin Pham's portfolio

[https://tinspham.dev/](https://tinspham.dev/)

## Stack

- [Next.js](https://nextjs.org/) - A React framework with hybrid static & server rendering, and route pre-fetching, etc.
- [Chakra UI](https://chakra-ui.com/) - A simple, modular and accessible component library for React
- [Three.js](https://threejs.org/) - 3D library for JavaScript
- [Framer Motion](https://www.framer.com/motion/) - An animation library for React

<img src="./screenshot.png" height="400px">

## Project structure

```
$PROJECT_ROOT
│   # Page files
├── pages
│   # React component files
├── components
│   # Non-react modules
├── lib
│   # Static files for images and 3d model file
└── public
```

## Install dependencies:

```
npm install

npm run dev
```

## Deploy:

```
firebase init
  - select public folder is out
npm run deploy
or
npm run build
npm run export
firebase deploy
```
