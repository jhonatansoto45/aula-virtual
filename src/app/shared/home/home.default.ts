import {
  CardItemI,
  CarouselDataI,
  SocialItemI,
} from '../../interfaces/aula-virtual.interfaces';

export const carouselData: CarouselDataI[] = [
  {
    previewImageSrc:
      'https://hanaringo.com/wp-content/uploads/2023/06/descargar-fondos-pantalla-gratis-iphone-1200x675.jpg',
    alt: 'Description for Image 1',
    title: 'Title 1',
  },
  {
    previewImageSrc: 'https://i.blogs.es/d5130c/wallpaper-2.png/840_560.jpeg',
    alt: 'Description for Image 2',
    title: 'Title 2',
  },
];

export const cardData: CardItemI[] = [
  {
    image: '../../../assets/images/illustrations/card1.jpg',
    title: 'Fortalece',
    description:
      'La flexibilidad académica que te brinda este tipo de programas te permite que estudies a tu propio ritmo, eso requiere que seas un estudiante autónomo.',
  },
  {
    image: '../../../assets/images/illustrations/card2.jpg',
    title: 'Online',
    description:
      'Te permite vivir la experiencia universitaria sin dejar a un lado tus actividades personales',
  },
  {
    image: '../../../assets/images/illustrations/card3.jpg',
    title: 'Tiempo',
    description:
      '¿Cuánto tiempo gastas yendo a la universidad desde tu casa? ¿Cuánto dinero inviertes en transporte para poder desplazarte hacia tu lugar de estudio?',
  },
];

export const socialData:SocialItemI[] = [
  {
    icon: 'instagram'
  },
  {
    icon: 'facebook'
  },
  {
    icon: 'twitter'
  }
]
