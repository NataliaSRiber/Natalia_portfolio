import { StaticImageData } from 'next/image'
import dancegroup from '../assets/developedProjects/dancegroup.png'
import drinkswebsite from '../assets/developedProjects/drinkswebsite.png'
import bakeryapp from '../assets/uxdesignprojects/backeryapp.png'

export interface IPresentations {
  title: string
  description: string
  date: string
  url: string
  videoUrl: StaticImageData
}

export interface IUxdesign {
  title: string
  description: string
  date: string
  url: string
  videoUrl: StaticImageData
}

export const presentations: IPresentations[] = [
  {
    title: 'Apresentação dia das mães',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In at lorem et neque rhoncus sagittis vel vitae urna. Aenean feugiat orci in fermentum malesuada. Donec libero erat, bibendum eget vehicula nec, vestibulum id mauris.',
    date: 'October 21, 2020',
    url: 'https://dance-group-website-template.vercel.app/',
    videoUrl: dancegroup,
  },
  {
    title: 'Apresentação de Natal',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In at lorem et neque rhoncus sagittis vel vitae urna. Aenean feugiat orci in fermentum malesuada. Donec libero erat, bibendum eget vehicula nec, vestibulum id mauris.',
    date: 'October 21, 2020',
    url: 'https://drinks-website.vercel.app/',
    videoUrl: drinkswebsite,
  },
]

export const uxdesign: IUxdesign[] = [
  {
    title: 'Aplicativo da Padaria Doces Sonhos',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In at lorem et neque rhoncus sagittis vel vitae urna. Aenean feugiat orci in fermentum malesuada. Donec libero erat, bibendum eget vehicula nec, vestibulum id mauris.',
    date: 'October 21, 2020',
    url: 'https://www.figma.com/proto/XpO1isL7UeGeLzxF39Batm/bakery_mockup(final)?type=design&node-id=516-379&t=N7DW6KJsBZwpnD5V-1&scaling=scale-down&page-id=516%3A2&starting-point-node-id=516%3A379&mode=design',
    videoUrl: bakeryapp,
  },
  {
    title: 'Apresentação de Natal',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In at lorem et neque rhoncus sagittis vel vitae urna. Aenean feugiat orci in fermentum malesuada. Donec libero erat, bibendum eget vehicula nec, vestibulum id mauris.',
    date: 'October 21, 2020',
    url: '',
    videoUrl: drinkswebsite,
  },
  {
    title: 'Apresentação de Natal',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In at lorem et neque rhoncus sagittis vel vitae urna. Aenean feugiat orci in fermentum malesuada. Donec libero erat, bibendum eget vehicula nec, vestibulum id mauris.',
    date: 'October 21, 2020',
    url: '',
    videoUrl: drinkswebsite,
  },
]
