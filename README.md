# Music Video App Assignment

## Getting Started
This project uses [Expo Dev Client](https://docs.expo.dev/development/introduction/). The project is configured specifically for `iOS`. It can technically work fine for `Android` as well with minor UI adjustments but did not spend time on it. We have `Storybook` setup and most of our core components have story files.

The rest of the README assumes you have your mobile development setup ready. Please follow [React Native Environment Setup](https://reactnative.dev/docs/environment-setup) guide if that's not the case.

## Clone and Install
```
git clone https://github.com/yusufyildirim/music-video-assignment.git
cd music-video-assignment
yarn install
npx pod-install
```
## Run on iOS
```
yarn ios
```

## Run `Storybook`
```
yarn storybook
```

# Important Pieces

## How to navigate inside the project?
[Yarn workspaces](https://classic.yarnpkg.com/lang/en/docs/workspaces/) is being used on the project. It helps us to create a structure in which we can draw strict lines for every package in terms of responsibility, so, every team can control it's own territory. It's especially important when a lot of people start working on the same codebase. Our imaginary music video app consists of five different core packages --potentially five different teams as well-- :

### Design System (@xi/design-system.*)
Responsible of building all the widely used components such as `Button`, `Text`, `Image` etc. Also responsible of UI-best practices and standarts such as `theme` support.

### Platform (@xi/platform.*)
Provides vital packages and utilities of the app like `http`, `cache manager`, `performance tracking`, `storage`, `i18n` etc. We only have `http` and `error-handling` packages for our project at the moment, though.

### Browsing Experience (@xi/browsing-experience.*)
Responsible of the user's browsing journey ans showing personalized content. A music video app is full of contents. It must provide a rich, dynamic experience. To do that, we leverage [Server-driven UI](https://www.judo.app/blog/server-driven-ui/) technique that allows us to show completely dynamic content to the user based on the server response. So, every user sees a different content.

### Search and Discovery (@xi/search-and-discovery.*)
**Search** part is helping user to find the exact music videos they're looking for. **Discovery** part is missing in our demo app but, would be crucial for a real-world app.

## Content Painter
`ContentPainter` is a component that takes `ContentCollection[]` as an input. It analyzes the input to indentify which `variants` should be rendered so it can render them, all at the runtime, dynamically. `Variants` are simply React components that are used by the `ContentPainter`. **Whole browsing, searching and discovery experience is rendered by this component**. It can get pretty complex in a real-world application but our implementation is really simple.

## App.tsx
It contains navigators, stacks, and all sorts of stuff. I'd move most of them to their own packages normally but didn't wanna add more and more packages just to make you (the reviewer) jump around a little less. So, it's a bit messy yes, but it's intended.

## Testing Story
Having a good amount of test coverage is not an objective for this project. But, it has some amount of `unit` and `component` testing suits. Adding `Detox` for `E2E` testing was planned but it doesn't have `RN 0.68` support yet. 

Tech Stack: `Jest`, `React Native Testing Library`, `React Native Owl`

### How to run tests?
Simple, just run:
```
yarn test
```