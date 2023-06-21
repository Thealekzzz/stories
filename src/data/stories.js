// [
//   {
//     name: string,
//     image: string,
//     chapters: [
//       {
//         background: {
//           type: string, ("image" || "color")
//           url?: string,
//           color?: string,
//           overlayOpacity?: number,
//         },
//         texts: [
//           {
//             text: string,
//             position: [number, number],
//             fontSize: number,
//             color: string,
//             isBold?: boolean
//             width?: number,
//           },
//           ...
//         ],
//         buttons: [
//           {
//             text: string,
//             textColor: string,
//             fontSize: number,
//             isBold?: boolean,
//             bgColor: string,
//             url: string,
//             size: [number, number],
//             position: [number, number],
//           },
//           ...
//         ], 

//       },
//       ...
//     ]
//   },
//   ...

// ]


const data = [
  {
    name: "Что это такое?",
    image: "flower4.png",
    chapters: [
      {
        background: {
          type: "image",
          url: "https://sun9-80.userapi.com/impf/c845018/v845018746/209269/Y48YBsoClp4.jpg?size=1728x2160&quality=96&sign=c9e594200927aaf0d59508b16540bd43&type=album",
          overlayOpacity: 0.3
        },
        texts: [ 
          {
            text: "Привет! Я - Леша Кузнецов",
            position: [10, 140],
            fontSize: 16,
            color: "white",
            isBold: true,
          },
          {
            text: "Это проект, который я сделал в рамках тестового задания",
            position: [10, 170],
            fontSize: 12,
            color: "white",
            width: 300
          },
        ],

      },
      {
        background: {
          type: "image",
          url: "https://sun9-73.userapi.com/impg/efBjm6eMKAMVwu2zSasGVh9-g3Fv1A4wq8VmCw/0FQZi5ivJco.jpg?size=1440x2160&quality=96&sign=e00f60f9665ad401b54bb7752da634da&type=album",
          overlayOpacity: 0.3
        },
        texts: [
          {
            text: "В чем суть?",
            position: [10, 430],
            fontSize: 24,
            color: "white",
            isBold: true,
          },
          {
            text: "Цель - написать фронтенд часть приложения для отображения новостей на основе данных, полученных с сервера в виде JSON объекта",
            position: [10, 470],
            fontSize: 14,
            color: "white",
            width: 400
          },
          {
            text: "Объект содержит информацию о названии, превью, историях, их фонах и текстах",
            position: [10, 535],
            fontSize: 14,
            color: "white",
            width: 400
          },
          {
            text: "Эти данные рендерятся с заданными в объекте параметрами, и получаются то, что ты видишь на экране",
            position: [10, 580],
            fontSize: 14,
            color: "white",
            width: 400
          },
        ],

      },
    ]
  },
  {
    name: "А подробнее?",
    image: "flower1.jpg",
    chapters: [
      {
        background: {
          type: "image",
          url: "https://sun9-78.userapi.com/impf/c831409/v831409347/1b7624/rIzAMLSJFak.jpg?size=1654x2160&quality=96&sign=af371df53c93cd244242e0266f37aa96&type=album",
          overlayOpacity: 0.4
        },
        texts: [
          {
            text: "Если коротко:",
            position: [20, 490],
            fontSize: 16,
            color: "white",
            isBold: true,
          },
          {
            text: "1. Придумать формат данных для API",
            fontSize: 12,
            position: [20, 520],
            color: "rgba(255,255,255,0.9)",
          },
          {
            text: "2. Создать mock данных",
            fontSize: 12,
            position: [20, 540],
            color: "rgba(255,255,255,0.9)",
          },
          {
            text: "3. Реализовать список историй",
            fontSize: 12,
            position: [20, 560],
            color: "rgba(255,255,255,0.9)",
          },
          {
            text: "4. Реализовать показ историй",
            fontSize: 12,
            position: [20, 580],
            color: "rgba(255,255,255,0.9)",
          },
        ],
        buttons: [
          {
            text: "Подробное ТЗ",
            textColor: "white",
            fontSize: 16,
            isBold: true,
            bgColor: "#dd9922",
            url: "/about",
            position: [380, 20],
            size: [undefined, 50]
          },
        ]

      },
      {
        background: {
          type: "color",
          color: "#339965",
          overlayOpacity: 0.4
        },
        texts: [
          {
            text: "Данные о новостях задаются через JSON",
            position: [20, 100],
            fontSize: 16,
            color: "white",
            isBold: true,
          },
          {
            text: "Пока что он создан мной самостоятельно, но с написанием бэкенда появится возможность получать новости из базы данных",
            fontSize: 12,
            position: [20, 140],
            width: 320,
            color: "rgba(255,255,255,0.9)",
          },
        ]

      },
      {
        background: {
          type: "color",
          color: "#ff44cc",
          overlayOpacity: 0.4
        },
        texts: [
          {
            text: "Реализован список новостей",
            position: [20, 160],
            fontSize: 16,
            color: "white",
            isBold: true,
          },
          {
            text: "И его можно было увидеть сразу после попадания на страницу!",
            fontSize: 12,
            position: [20, 200],
            width: 340,
            color: "rgba(255,255,255,0.9)",
          },
          {
            text: "А если новостей будет слишком много - появляется горизонтальный скролл",
            fontSize: 12,
            position: [20, 240],
            width: 340,
            color: "rgba(255,255,255,0.9)",
          },
        ]

      },
      {
        background: {
          type: "color",
          color: "#23aaff",
          overlayOpacity: 0.4
        },
        texts: [
          {
            text: "Реализовано окно просмотра новостей",
            position: [20, 240],
            fontSize: 16,
            color: "white",
            isBold: true,
          },
          {
            text: "Его видно прямо сейчас.",
            fontSize: 12,
            position: [20, 280],
            width: 340,
            color: "rgba(255,255,255,0.9)",
          },
          {
            text: "В нем рендерятся все элементы, которые есть в JSON объекте",
            fontSize: 12,
            position: [20, 300],
            width: 340,
            color: "rgba(255,255,255,0.9)",
          },
        ]

      },
      {
        background: {
          type: "image",
          url: "https://sun9-1.userapi.com/impf/c840628/v840628152/35261/0Bj-mNcKr0I.jpg?size=2560x1440&quality=96&sign=b7d123bc15cd05a84c8be3854c7f9356&type=album",
          overlayOpacity: 0.1
        },
        texts: [
          {
            text: "Дальше больше!",
            position: [10, 80],
            fontSize: 16,
            color: "white",
            isBold: true,
          },
          {
            text: "У меня есть и другие проекты.",
            position: [10, 120],
            fontSize: 12,
            color: "rgba(255,255,255,0.9)",
          },
          {
            text: "Их всех можно найти, перейдя по кнопке ниже!",
            position: [10, 140],
            fontSize: 12,
            color: "rgba(255,255,255,0.9)",
          },
        ],
        buttons: [
          {
            text: "Другие проекты",
            textColor: "white",
            fontSize: 16,
            isBold: true,
            bgColor: "#dd9900",
            url: "/about",
            position: [580, 20],
            size: [420, 50]
          },
        ]

      },
    ]
  },
]

export default data;