export interface CarouselDataI {
  previewImageSrc: string;
  alt: string;
  title: string;
}

export enum SectionHomeE {
  carousel = 'carousel',
  acerca = 'acerca',
  cursos = 'cursos',
  servicios = 'servicios',
  contacto = 'contacto',
}

export interface CardItemI {
  image: string;
  title: string;
  description: string;
}

export interface SocialItemI {
  icon: string;
}

export interface AsideItem {
  icon: string;
  text: string;
  path: string;
}

export interface CardCourseI {
  id: number;
  title: string;
  progress: number;
  path: string;
}

export enum Tab {
  curso,
  participantes,
  calificaciones,
  competencia,
}
