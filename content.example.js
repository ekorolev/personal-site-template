const path = require('path')
const fs = require('fs')

module.exports = {
  firstname: 'Имя',
  lastname: 'Фамилия',
  jobtitle: 'Разработчик крутых сайтов',
  shortabout: 'Немножко о себе',
  avatar: '', // Изображение в Base64, ну или ссылка на изображение на сервере
  contacts: {
    email: 'mail@example.com',
    phone: '8 800 900 24 24', // например
    github: 'ekorolev' // ник на гитхабе
  },
  languages: [
    { name: 'Русский', status: 'Родной' }, 
    { name: 'Английский', status: 'Чтение проф. литературы' }
  ],
  interests: [
    'Первый интерес', 'Второй', 'Ну и третий'
  ],
  education: [
    {
      name: 'Философия и наукознание',
      university: 'Мадагаскарский частный университет',
      city: 'Антананариву',
      dates: '2014 - 2018'
    }
  ],
  expirience: [
    {
      name: 'Повелитель мух',
      company: {
        name: 'Лучшая компания',
        link: 'https://google.com',
        city: 'Рио-да-Жанейро'
      },
      dates: '1923 - настоящее время',
      description: `
        Делал и делаю лучшие в мире капкейки.
      `
    }
  ],
  skills: [
    {
      section: 'Frontend',
      technologies: [
        { name: 'Vue', level: 100 }
      ]
    },
    {
      section: 'Backend',
      technologies: [
        { name: 'Hapi', level: 100 }
      ]
    }
  ],
  projects: [
    {
      name: 'Example',
      link: 'javascript:;',
      descriptiotn: 'Простое описание простого проекта'
    }
  ]
}