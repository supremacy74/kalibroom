export interface footerLinksI {
  title: string,
  blockList: {
    name: string,
    link: string,
  }[]
}

export const footerLinks: footerLinksI[] = [
  {
    title: 'Товары',
    blockList: [
      {
        name: 'Диваны',
        link: '',
      },
      {
        name: 'Кровати',
        link: '',
      },
      {
        name: 'Стулья',
        link: '',
      },
      {
        name: 'Кресла',
        link: '',
      },
      {
        name: 'Аксессуары',
        link: '',
      },
      {
        name: 'Столы',
        link: '',
      },
    ],
  },
  {
    title: 'Компания',
    blockList: [
      {
        name: 'О нас',
        link: '',
      },
      {
        name: 'Шоурум',
        link: '',
      },
      {
        name: 'В наличии',
        link: '',
      },
      {
        name: 'Доставка',
        link: '',
      },
    ],
  },
  {
    title: 'Услуги',
    blockList: [
      {
        name: 'Сборка мебели',
        link: '',
      },
      {
        name: 'Погрузка',
        link: '',
      },
      {
        name: 'Отправка в другой город',
        link: '',
      },
      {
        name: 'Изготовление на заказ',
        link: '',
      },
    ],
  },
]