import { v4 as uuidv4 } from 'uuid'

export const aboutMe = {
  mainInfo: [
    { id: uuidv4(), label: 'Возраст', value: '28 лет' },
    { id: uuidv4(), label: 'Опыт работы', value: '3 года 3 месяца' },
    {
      label: 'Контакты',
      value: [
        { id: uuidv4(), label: 'тел', value: '+7 (999) 157-21-62' },
        { id: uuidv4(), label: 'почта', value: 'slavadevbox1@gmail.com' },
        { id: uuidv4(), label: 'телеграм', value: '@slavaslava889' },
      ],
    },
  ],
  education: [
    {
      id: uuidv4(),
      label: 'Образование',
      value:
        'Казанский национальный исследовательский технический университет им. А.Н. Туполева, Казань (Магистратура, 2021-2023)',
    },
  ],
  techStack: [
    {
      id: uuidv4(),
      label: 'Основной стек',
      value: [
        { id: uuidv4(), label: 'Языки программирования', value: 'TypeScript, JavaScript.' },
        {
          id: uuidv4(),
          label: 'Фреймворки и библиотеки',
          value: 'React, Redux Toolkit, RTK Query.',
        },
        {
          id: uuidv4(),
          label: 'Стилизация',
          value: 'Tailwind, CSS, Shadcn, Radix UI, Material UI.',
        },
        { id: uuidv4(), label: 'Система контроля версий', value: 'Git.' },
      ],
    },
  ],
  experience: [
    {
      id: uuidv4(),
      place: 'RMH Rus, Казань',
      site: 'rmhrus.ru',
      sector: 'Сельское хозяйство',
      period: 'Декабрь 2024 — настоящее время (7 месяцев)',
      desc: 'В настоящий момент занимаюсь разработкой UI-kit для системы на микрофронтендах, котораявключает в себя различные сервисы, необходимые для молочного производства, например: мониторинг надоев, отслеживание работоспособности оборудования в реальном времени,системы кормления КРС и т.д.',
    },
    {
      id: uuidv4(),
      place: 'EffectiveSoft, Минск',
      site: 'effectivesoft.by',
      sector: 'Информационные технологии, системная интеграция, интернет',
      period: 'Июль 2023 — Декабрь 2024 (1 год 6 месяцев)',
      desc: 'На данном месте работы участвовал в командной разработке кросс-платформенного веб-приложения для строительной отрасли, в целях удобного поиска подрядчиков, управления проектами и мониторинга прогресса строительства в реальном времени.',
    },
    {
      id: uuidv4(),
      place: 'Promwad, Минск',
      site: 'promwad.com',
      sector: 'IT, системная интеграция',
      period: 'Май 2022 — Июнь 2023 (1 год 2 месяца)',
      desc: 'Разрабатывал и поддерживал внутреннюю систему управления проектами, осуществлял контроль за аппаратной составляющей офисного отдела.',
    },
  ],

  about: [
    {
      id: uuidv4(),
      text: 'Frontend-разработчик с опытом 3 года разработки интерфейсов. В данный момент повышаю навыки в применяемых технологиях, а также улучшаю уровень английского для повышения своей экспертизы и профессионализма в области IT.',
    },
    {
      id: uuidv4(),
      text: 'Ищу слаженную и опытную команду для совместной работы и развития.',
    },
    {
      id: uuidv4(),
      text: 'На данный момент нахожусь в Казани.',
    },
    {
      id: uuidv4(),
      text: 'Открыт для ваших предложений)',
    },
  ],
}
