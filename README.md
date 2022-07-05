This repository is the dependency to incorporate quickly this design to every extern projects.

## Installation

``` shell
npm install
npm run fractal

# This project is using SCSS instead of CSS, so if 
#you want to do some modification, remember to compile 
#the SCSS to CSS but running on another console window :

sass --watch public/css/styles.scss
```


### Error case

Delete dist and .cache folders (`rm -rf dist/ .cache/`) and restart.

## Resources

### Atomic Design

- [Atomic Design by Brad Frost](https://atomicdesign.bradfrost.com/chapter-2/)
- [Design Tokens](https://medium.com/eightshapes-llc/tokens-in-design-systems-25dd82d58421)

### Design systems

- [City of Ghent](https://stijlgids.stad.gent/v3/components/detail/header.html)
- [Mailchimp](http://ux.mailchimp.com/patterns/icons)
- [Firefox](https://protocol.mozilla.org/)
- [Design systems examples](https://designsystemsrepo.com/design-systems/) !

### Tools

- [StoryBook](https://storybook.js.org/)
- [PatternLab](https://patternlab.io/)
- [Fractal](http://fractal.build/)

### BEM

- [BEM Cheat Sheet](https://9elements.com/bem-cheat-sheet/?utm_source=CSS-Weekly&utm_campaign=Issue-406&utm_medium=web)

### Atomic Design + BEM

- Ion : `i-block__element--modifier`
- Atom : `a-block__element--modifier`
- Molecule : `m-block__element--modifier`
- Organism : `o-block__element--modifier`
- Layout : `l-block__element--modifier`
