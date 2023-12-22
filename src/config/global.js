export default {
  global: {
    componenteFormativo: 'Oratoria',
    descripcionCurso:
      'La oratoria es el arte de expresarse de manera elocuente y persuasiva mediante la habilidad de hablar en público. Implica el dominio del lenguaje, la estructuración de ideas y la capacidad de cautivar a la audiencia. Su objetivo es comunicar eficazmente, influir y dejar una impresión duradera. Es por esto que en este documento se presentan los elementos base que componen un discurso y los pasos que se deben seguir para construir una buena idea y transmitirla.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      // {
      //   nombreRuta: 'introduccion',
      //   icono: 'fas fa-info-circle',
      //   titulo: 'Introducción',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Mentefacto',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Definición',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Elementos que componen la oratoria',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Características de un Orador',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo:
              'Procesos que se deben tener en cuenta para el desarrollo de un discurso',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Pasos para elaborar un discurso',
            hash: 't_1_5',
          },
          {
            numero: '1.6',
            titulo:
              'Herramientas digitales se pueden utilizar para la elaboración de un discurso ',
            hash: 't_1_6',
          },
          {
            numero: '1.7 ',
            titulo: 'Ejemplo de un discurso',
            hash: 't_1_7',
          },
        ],
      },
      // {
      //   nombreRuta: 'tema2',
      //   numero: '2',
      //   titulo: 'Titulo de primer nivel',
      //   desarrolloContenidos: true,
      // },
      // {
      //   nombreRuta: 'tema3',
      //   numero: '3',
      //   titulo: 'Titulo de primer nivel',
      //   desarrolloContenidos: true,
      // },
    ],
    subMenu: [
      // {
      //   icono: 'fas fa-sitemap',
      //   titulo: 'Síntesis',
      //   nombreRuta: 'sintesis',
      //   desarrolloContenidos: true,
      // },
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      // {
      //   nombreRuta: 'glosario',
      //   icono: 'fas fa-sort-alpha-down',
      //   titulo: 'Glosario',
      // },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar PDF',
        download: 'downloads/Oratoria.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: '',
      referencia: '',
      tipo: '',
      link: 'https://www.google.com/',
    },
    {
      tema: '',
      referencia: '',
      tipo: '',
      descarga: '/downloads/prueba.pdf',
    },
  ],
  glosario: [
    {
      termino: '',
      significado: '',
    },
    {
      termino: '<em></em>',
      significado: '',
    },
  ],
  referencias: [
    {
      referencia:
        'Euroinnova. (2023). Estas son 10 características fundamentales si quieres entrar con pie derecho en el mundo de la oratoria. ',
      link:
        'https://www.euroinnova.co/blog/latam/10-caracteristicas-buen-orador',
    },
    {
      referencia: 'Fude.  (2019) ¿Qué es la oratoria? ',
      link: 'https://www.educativo.net/articulos/que-es-la-oratoria-791.html ',
    },
    {
      referencia:
        'Secretaría de cultura, recreación y deporte. (2023). Lo que debes tener en cuenta para elaborar un buen discurso. ',
      link:
        'https://www.culturarecreacionydeporte.gov.co/es/lectura-y-bibliotecas/noticias/lo-que-debes-tener-en-cuenta-para-elaborar-un-buen-discurso',
    },
    {
      referencia:
        'Técnicas para hablar en público. (2023). 5 sencillos pasos para preparar un discurso extraordinario. ',
      link:
        'https://tecnicashablarenpublico.com/blog/5-sencillos-pasos-para-preparar-un-discurso-extraordinario/',
    },
    {
      referencia:
        'TEDx Talks.  (2020). El poder de la disciplina | Gabriel Batistuta | TEDxEstaciónEwald. ',
      link: 'https://www.youtube.com/watch?v=R7wUI2hAgvU',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizabal',
          cargo: 'Responsable del equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Norma Constanza Morales Cruz',
          cargo: 'Responsable de línea de producción',
          centro: 'Regional Tolima  - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Sergio Augusto Ardila Ortiz',
          cargo: 'Diseñador Instruccional',
          centro: 'Regional Tolima  - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Maria Inés Machado López',
          cargo: 'Asesor Metodológico',
          centro: 'Regional Tolima  - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Luis Fernando Botero Mendoza',
          cargo: 'Diseñador Web',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Davison Gaitán Escobar',
          cargo: 'Desarrollador Fullstack',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Javier Mauricio Oviedo',
          cargo: 'Validación y vinculación en plataforma LMS',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
