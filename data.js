const data = {
  categories: [
    {
      slug: 'screwdrivers',
      catName: 'Отвёртки',
      catImage: 'screwdrivers.jpg',
      description: [
        'Простой инструмент&nbsp;&mdash; отвертка имеет широкую среду применения. Отвертки для сухой и&nbsp;агрессивной среды, прецизионные отвертки для точных работ, варианты с&nbsp;деревянной ручкой или с&nbsp;керамическим жалом, динамометрические или антистатические. Все это вы&nbsp;найдете в&nbsp;ассортименте отверток Wiha.',
        'Так-же у&nbsp;нас имеются наборы экстракторов&nbsp;&mdash; инструментов для безопасного удаления поврежденных или обломанных винтов.',
      ],
      products: [
        {
          name: 'товар 1',
          description: 'описание продукта 1',
          image: 'product1.jpg',
        },
        {
          name: 'товар 2',
          description: 'описание продукта 2',
          image: 'product2.jpg',
        },
      ],
    },
    {
      slug: 'l-keys',
      catName: 'Шестигранные ключи',
      catImage: 'l-keys.jpg',
      description: ['Шестигранные ключи WIHA - это профессиональный инструмент с эргономичными формами рукояток и применением современных технологий для повышения качества работы. Предназначены для работы с крепежом различных профилей.'],
      products: [
        {
          name: 'товар 1',
          description: 'описание продукта 1',
          image: 'product1.jpg',
        },
        {
          name: 'товар 2',
          description: 'описание продукта 2',
          image: 'product2.jpg',
        },
      ],
    },
    {
      slug: 'pliers',
      catName: 'Шарнирно-Губцевый инструмент',
      catImage: 'pliers.jpg',
      description: ['Шарнирно-губцевый инструмент Wiha - качественный и эргономичный инструмент, ориентированный на потребности пользователя. Многокомпонентные ручки с расширенной наружной частью рукоятки и продуманным распределением твердых и мягких зон сделают вашу работу комфортной.'],
      products: [
        {
          name: 'товар 1',
          description: 'описание продукта 1',
          image: 'product1.jpg',
        },
        {
          name: 'товар 2',
          description: 'описание продукта 2',
          image: 'product2.jpg',
        },
      ],
    },
    {
      slug: 'bits',
      catName: 'Биты',
      catImage: 'bits.jpg',
      description: ['Высококачественные биты Wiha - используются как вручную с битодержателями или рукоятками, так и при работе с шуруповертами/винтовертами. Разнообразный выбор профилей и хвостовиков гарантирует точный подбор необходимого вам инструмента.'],
      products: [
        {
          name: 'товар 1',
          description: 'описание продукта 1',
          image: 'product1.jpg',
        },
        {
          name: 'товар 2',
          description: 'описание продукта 2',
          image: 'product2.jpg',
        },
      ],
    },
    {
      slug: 'hammers',
      catName: 'Молотки',
      catImage: 'hammers.jpg',
      description: ['Молотки WIHA - это превосходный инструмент, обеспечивающий оптимальную передачу силы удара и гарантирующий безопасность и комфорт при работе.'],
      products: [
        {
          name: 'товар 1',
          description: 'описание продукта 1',
          image: 'product1.jpg',
        },
        {
          name: 'товар 2',
          description: 'описание продукта 2',
          image: 'product2.jpg',
        },
      ],
    },
    {
      slug: 'vernier-callipers',
      catName: 'Измерительный инструмент',
      catImage: 'vernier-callipers.jpg',
      description: ['Измерительные инструменты WIHA - практичные и удобные в обращении инструменты, устойчивые к разного рода физическим воздействиям и обладающие повышенным сроком службы.'],
      products: [
        {
          name: 'товар 1',
          description: 'описание продукта 1',
          image: 'product1.jpg',
        },
        {
          name: 'товар 2',
          description: 'описание продукта 2',
          image: 'product2.jpg',
        },
      ],
    },
    {
      slug: 'nut-drivers',
      catName: 'Ключи и трещётки',
      catImage: 'nut-drivers.jpg',
      description: ['Ключи с трещёткой WIHA - практичные и удобные в обращении инструменты, устойчивые к разного рода физическим воздействиям и обладающие повышенным сроком службы.'],
      products: [
        {
          name: 'товар 1',
          description: 'описание продукта 1',
          image: 'product1.jpg',
        },
        {
          name: 'товар 2',
          description: 'описание продукта 2',
          image: 'product2.jpg',
        },
      ],
    },
    {
      slug: 'crimping-tools',
      catName: 'Обжимной инструмент',
      catImage: 'crimping-tools.jpg',
      description: ['Обжимные ключи WIHA - практичные и удобные в обращении инструменты, устойчивые к разного рода физическим воздействиям и обладающие повышенным сроком службы.'],
      products: [
        {
          name: 'товар 1',
          description: 'описание продукта 1',
          image: 'product1.jpg',
        },
        {
          name: 'товар 2',
          description: 'описание продукта 2',
          image: 'product2.jpg',
        },
      ],
    },
    {
      slug: 'sets',
      catName: 'Наборы инструментов',
      catImage: 'sets.jpg',
      description: ['Наборы инструментов WIHA – это широкий набор различных инструментов под рукой, позволяющие решать сразу несколько задач как в производстве, так и в быту.'],
      products: [
        {
          name: 'товар 1',
          description: 'описание продукта 1',
          image: 'product1.jpg',
        },
        {
          name: 'товар 2',
          description: 'описание продукта 2',
          image: 'product2.jpg',
        },
      ],
    },
  ],
};

module.exports = data;
