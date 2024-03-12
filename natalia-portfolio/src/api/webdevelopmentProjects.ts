import { StaticImageData } from 'next/image'
import dancegroup from '../assets/developedProjects/dancegroup.png'
import drinkswebsite from '../assets/developedProjects/drinkswebsite.png'
import bakeryapp from '../assets/uxdesignprojects/oficialbakery.png'
import homewedding from '../assets/uxdesignprojects/homeweddingcutted.png'
import homefood from '../assets/uxdesignprojects/oficialhealthy.png'

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
  tools: string
  url: string
  imageCover: StaticImageData
  mobileurl: string
}

export const presentations: IPresentations[] = [
  {
    title: 'Website do Grupo de Dança',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In at lorem et neque rhoncus sagittis vel vitae urna. Aenean feugiat orci in fermentum malesuada. Donec libero erat, bibendum eget vehicula nec, vestibulum id mauris.',
    date: 'October 21, 2020',
    url: 'https://dance-group-website-template.vercel.app/',
    videoUrl: dancegroup,
  },
  {
    title: 'Websites com receitas de drinks diversos',
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
      'Aplicativo criado com o intuito de facilitar os pedidos feitos pelos clientes. Neste projeto atuei como Ux design, fazendo pesquisas com usuários  e coletando feedbacks. Além disso, foram feitos wireframes de papel e digitais que após os testes foram aprimorados e assim pûde desenvolver o protótipo de alta fidelidade. O projeto foi o primeiro realizado para o curso de UX design do Google e foi desafiador, pois foi necessário aprender novos conceitos, focar nas necessidades do usuário, a criação de uma aplicação de fácil manuseio e fluxo intuitivo',
    date: 'October 21, 2020',
    tools: 'Figma',
    url: 'https://www.figma.com/proto/XpO1isL7UeGeLzxF39Batm/bakery_mockup(final)?type=design&node-id=516-379&t=N7DW6KJsBZwpnD5V-1&scaling=scale-down&page-id=516%3A2&starting-point-node-id=516%3A379&mode=design',
    imageCover: bakeryapp,
    mobileurl:
      'https://www.figma.com/proto/XpO1isL7UeGeLzxF39Batm/bakery_mockup(final)?type=design&node-id=516-379&t=N7DW6KJsBZwpnD5V-1&scaling=scale-down&page-id=516%3A2&starting-point-node-id=516%3A379&mode=design',
  },
  {
    title: 'Sistema de cadastramento online de casamentos no Garden Wedding',
    description:
      'Aplicação feita para permitir o cadastramento de casamentos online.',
    date: 'October 21, 2020',
    tools: 'Adobe XD',
    url: 'https://xd.adobe.com/view/17c16dd5-be1e-4751-be89-d6028c526ed8-4292/?fullscreen&hints=off',
    imageCover: homewedding,
    mobileurl: '',
  },
  {
    title: 'Aplicação para ensinar pessoas a preparar refeições saudáveis',
    description:
      'Aplicação com o intuito de fornecer diversas receitas saudáveis para aqueles que buscam uma refeição mais equilibrada.',
    date: 'October 21, 2020',
    tools: 'Figma',
    url: 'https://www.figma.com/proto/ihhfCMv6zeEWYwbxH34IDn/cooking-health_high_fidelity-(web_version)?type=design&node-id=701-52&t=hrigMiH7rkYC5p5f-1&scaling=scale-down&page-id=0%3A1&starting-point-node-id=701%3A52&show-proto-sidebar=1&mode=design',
    imageCover: homefood,
    mobileurl:
      'https://www.figma.com/proto/qsg0uQ9sSl5rZprFzS9S0L/cooking-health_high_fidelity?type=design&node-id=1-3&t=pB0TgjEfaWyqgrCb-1&scaling=scale-down&page-id=0%3A1&starting-point-node-id=1%3A3',
  },
]
