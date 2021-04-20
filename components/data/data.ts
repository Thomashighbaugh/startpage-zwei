import pic_1 from './pictures/pic_1.jpg'
import pic_2 from './pictures/pic_2.jpg'
import pic_3 from './pictures/pic_3.jpg'
import pic_4 from './pictures/pic_4.jpg'
import pic_5 from './pictures/pic_5.jpg'
import pic_6 from './pictures/pic_6.jpg'
import pic_7 from './pictures/pic_7.jpg'
import pic_8 from './pictures/pic_8.png'

export type dataElem = {
  label: string
  value: string
}

export type linkGroup = {
  title: string
  links: dataElem[]
}

export const links: linkGroup[] = [
  {
    title: 'LIFE',
    links: [
      {
        label: 'Twitter',
        value: 'https://www.twitter.com/'
      },
      {
        label: 'LinkedIn',
        value: 'https://www.linkedin.com/'
      },
      {
        label: 'Instagram',
        value: 'https://www.instagram.com/'
      },
      {
        label: 'Dribbble',
        value: 'https://www.dribbble.com'
      }
    ]
  },
  {
    title: 'LINUX',
    links: [
      {
        label: 'Arch Wiki',
        value: 'https://archlinux.org/wiki'
      },
      {
        label: 'Distrowatch',
        value: 'https://distrowatch.com'
      },

      {
        label: 'r/unixporn',
        value: 'https://www.reddit.com/r/unixporn/'
      },
      {
        label: 'r/linux',
        value: 'https://www.reddit.com/r/linux/'
      },
      {
        label: 'r/linuxmasterrace',
        value: 'https://www.reddit.com/r/linuxmasterrace/'
      },
      {
        label: 'r/archlinux',
        value: 'https://www.reddit.com/r/archlinux/'
      }
    ]
  },
  {
    title: 'DEV',
    links: [
      {
        label: 'Github',
        value: 'https://github.com'
      },
      {
        label: 'Gitlab',
        value: 'https://gitlab.com'
      },
      {
        label: 'Dev.to',
        value: 'https://pdev.to'
      },
      {
        label: 'Codepen',
        value: 'https://codepen.io/'
      },
      {
        label: 'r/startpages',
        value: 'https://www.reddit.com/r/startpages/'
      }
    ]
  },
  {
    title: 'ART',
    links: [
      {
        label: 'Instagram',
        value: 'https://www.instagram.com/thomashighbaugh/'
      },
      {
        label: 'Google Photos',
        value: 'https://photos.google.com'
      },
      {
        label: 'RedBubble',
        value: 'https://redbubble.com'
      },
      {
        label: '6Society',
        value: 'https://6society.com'
      }
    ]
  }
]

export const images: dataElem[] = [
  { label: 'pic_1', value: pic_1 },
  { label: 'pic_2', value: pic_2 },
  { label: 'pic_3', value: pic_3 },
  { label: 'pic_4', value: pic_4 },
  { label: 'pic_5', value: pic_5 },
  { label: 'pic_6', value: pic_6 },
  { label: 'pic_7', value: pic_7 },
  { label: 'pic_8', value: pic_8 }
]

export const searchEngines: dataElem[] = [
  {
    label: 'DuckDuckGo',
    value: 'duckduckgo.com/'
  },
  {
    label: 'Google',
    value: 'google.com/search'
  },
  {
    label: 'Qwant',
    value: 'qwant.com/'
  }
]

export type FastForwards = {
  [key: string]: string
}

export type Search = {
  engine: string
  fastForward: FastForwards
}

export const searchSettings: Search = {
  engine: searchEngines[0].value,
  fastForward: {
    deepl: 'https://deepl.com/',
    maps: 'https://google.de/maps/',
    reddit: 'https://reddit.com/',
    github: 'https://github.com/',
    gitlab: 'https://gitlab.com/',
    youtube: 'https://youtube.com/'
  }
}

export type colorsType = {
  [key: string]: string
  '--bg-color': string
  '--default-color': string
  '--accent-color': string
  '--accent-color2': string
}

export type Theme = {
  name: string
  colors: colorsType
  image: string
}
