<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Oratoria

    .titulo-segundo.color-acento-contenido
      h2#t_1_1 1.1 Definición
    
    .row.justify-content-center 
      .col-lg-5.col-8.mb-3
        figure(data-aos="fade-right")
          img(src='@/assets/curso/temas/1.png', alt='Imagen decorativa')
      .col-lg-7.col-8.mb-3
        .row
          .col-lg-12.mb-5.mb-lg-0
            .bloque-texto-f.color-primario.pt-4.px-5.mb-5
              .bloque-texto-f__comillas
                i.fas.fa-quote-left
                i.fas.fa-quote-right
              h4.text-regular.bloque-texto-f__texto Hablar en público u oratoria es el arte o la práctica de pronunciar un discurso ante una audiencia. Exponer en público un determinado asunto de manera clara, atractiva y sobre todo comprensible, en eventos grupales o en clase. Las habilidades oratorias permiten convencer, persuadir y atraer al público por eso son tan importantes en el ámbito de la política, la publicidad y el entretenimiento.
              .bloque-texto-f__autor.mb-3
                h3.mb-0 Fude, 2019
            
    separador 
    .titulo-segundo.color-acento-contenido
      h2#t_1_2 1.2 Elementos que componen la oratoria

    .row 
      .col-lg-8.col-12
        ol.lista-ol--cuadro
          li 
            .lista-ol--cuadro__vineta
              span(style="color: #12263F") <b>1</b>
            | #[b El orador:] una persona que habla formalmente ante una audiencia, quien debe tener el conocimiento adecuado y las herramientas claras para transmitir ideas.
          li 
            .lista-ol--cuadro__vineta
              span(style="color: #12263F") <b>2</b>
            | #[b Discurso:] es una charla formal que se da a una audiencia.
          
        .row.justify-content-center.align-items-center
          .col-lg-8.col-12.mb-3
            .row.justify-content-center 
              .col-lg-10.col-12
                li #[b Título:] nombre del discurso. 
                li #[b Introducción:] la introducción del discurso establece el primer contacto crucial entre el hablante y la audiencia. Para la mayoría de los discursos en el aula, la introducción debe durar menos de un minuto.
                li #[b Cuerpo:] es el punto en el que entran todos los detalles sobre cada uno de tus puntos principales.
                li #[b Conclusión:] es un resumen de las ideas principales y el propósito específico.

        ol.lista-ol--cuadro
          li 
            .lista-ol--cuadro__vineta
              span(style="color: #12263F") <b>3</b>
            | #[b Público:] audiencia que va escuchar el discurso, ya que de ellos depende la manera como se deba expresar la idea o los métodos que se puedan aplicar para el desarrollo del discurso.
      .col-lg-4.col-8.mb-3
        figure(data-aos="fade-right")
          img(src='@/assets/curso/temas/2.svg', alt='Imagen decorativa')

    separador 
    .titulo-segundo.color-acento-contenido
      h2#t_1_3 1.3 Características de un Orador 

    p(data-aos="fade-left").mb-5 Se debe tener en cuenta que el hablar en publico es una de las actividades que más estrés y miedo genera, es por esto que quien decida estar frente a una audiencia debe contar con las siguientes características:

    .tarjeta(style="background-color:#CDF5E2").p-4
      SlyderA(tipo="b")
        .row
          .col-md-6.mb-4.mb-md-0
            h4 Confianza
            p Ya que debe transmitir seguridad a los oyentes para que la idea que desea expresar sea lo mas clara posible. Tener una postura segura, un lenguaje corporal abierto y un tono de voz convincente para generar credibilidad.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/3.png', alt='Texto que describa la imagen')
        .row
          .col-md-6.mb-4.mb-md-0
            h4 Conocimiento del tema
            p Debe contar con un manejo del tema a tratar dejando de lado la improvisación, es por esto que se hace necesaria una investigación y documentación previa.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/4.png', alt='Texto que describa la imagen')
        .row
          .col-md-6.mb-4.mb-md-0
            h4 Escucha activa
            p Estar al tanto de las preguntas o solicitudes que hace la audiencia con el fin de aprender e intercambiar inquietudes.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/5.png', alt='Texto que describa la imagen')
        .row
          .col-md-6.mb-4.mb-md-0
            h4 Capacidad de adaptación
            p Aunque es claro que no se debe improvisar sobre el tema, el orador debe tener en cuenta el publico al que se esta dirigiendo para ir midiendo el grado de atención de los mismos, con esto saber si debe hacer una pausa, repetir una idea o plantearla de otra manera. Además, saber tomar lo que sucede en el momento a su favor ya sea por cosas que ocurran en el escenario o por la misma forma como se va desarrollando la idea.

          .col-md-6
            figure
              img(src='@/assets/curso/temas/6.png', alt='Texto que describa la imagen')
        .row
          .col-md-6.mb-4.mb-md-0
            h4 Dominio del tiempo
            p Administrar las temáticas para no quedarse corto o alargarse en el desarrollo del discurso.

          .col-md-6
            figure
              img(src='@/assets/curso/temas/7.png', alt='Texto que describa la imagen')

        .row 
          .col-md-6.mb-4.mb-md-0
            h4 Lenguaje corporal
            p Los gestos y movimientos hacen parte de las herramientas que se deben usar para dar a conocer un punto de vista o explicar una idea.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/8.png', alt='Texto que describa la imagen')

    separador 
    .titulo-segundo.color-acento-contenido
      h2#t_1_4 1.4 Procesos que se deben tener en cuenta para el desarrollo de un discurso

    p(data-aos="fade-left").mb-5 Existen procesos establecidos que permiten que la organización de los componentes del discurso sea más sencilla de tratar. En este caso se podría tener en cuenta:
      
    .tarjeta--container.row.mb-5
      .col-md.tarjeta(style="background-color:#CDF5E2").p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/9.svg', alt='Texto que describa la imagen')
          
        h2.text-center Lluvia de ideas
        p Proceso creativo en el que un grupo genera libremente ideas sobre un tema o problema específico. Se fomenta la participación abierta y, sin críticas para estimular la creatividad. El objetivo es generar una amplia variedad de ideas, que luego pueden evaluarse y desarrollarse para encontrar soluciones innovadoras.

      .col-md.tarjeta(style="background-color:#FAFFD7").p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/10.svg', alt='Texto que describa la imagen')
          
        h2.text-center Esquema
        p Define la estructura del discurso y la manera como cada idea anteriormente generada va a ir organizada.

      .col-md.tarjeta(style="background-color:#DBE5F3").p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/11.svg', alt='Texto que describa la imagen')
          
        h2.text-center Mapa mental
        p Es una representación gráfica y visual de ideas, conceptos o información, que ayuda a organizar y estructurar el pensamiento. Se crea a partir de un tema central, que se coloca en el centro de la página, y se ramifica con líneas conectadas a ideas secundarias.

    separador 
    .titulo-segundo.color-acento-contenido
      h2#t_1_5 1.5 Pasos para elaborar un discurso

    p(data-aos="fade-left").mb-5 Los pasos que se deben tener en cuenta a la hora de escribir un discurso que permita transmitir de una manera correcta una idea, son los siguientes :

    .row 
      .col-lg-8.col-12
        ol.lista-ol--cuadro
          li 
            .lista-ol--cuadro__vineta
              span(style="color: #12263F") <b>1</b>
            | #[b Elija un tema que le interese:] un tema que le entusiasme y su entusiasmo vendrá a través de su discurso. 
          li 
            .lista-ol--cuadro__vineta
              span(style="color: #12263F") <b>2</b>
            | #[b Escriba el discurso:] utilice cualquier método de lluvia de ideas y bosquejos que funcione mejor para usted. Asegúrese de tener claro el tema y la tesis, luego describa los puntos principales que desea abordar en el camino hacia su conclusión. Este también es el momento de encontrar los datos de apoyo que desee utilizar.
          li 
            .lista-ol--cuadro__vineta
              span(style="color: #12263F") <b>3</b>
            | #[b Introducción:] tiene dos partes, la apertura y la declaración del propósito específico. En la apertura, los oradores captan la atención de su audiencia y despertar el interés en su tema. Pueden hacer esto diciéndole a un broma o historia, o proporcionando un hecho o estadística. Pueden citar algo o hacer una pregunta. En su declaración de propósito específico, le dicen a la audiencia precisamente lo que pretenden hacer en su discurso y qué valor tiene este tema para la audiencia.

          li 
            .lista-ol--cuadro__vineta
              span(style="color: #12263F") <b>4</b>
            | #[b Cuerpo:] esta es la parte del contenido principal de su discurso. Exactamente lo que necesita incluir será dependen del propósito de su discurso. Escriba los puntos clave que va abordar en el discurso y desarróllelos; pase de lo simple a lo más complejo.
          li 
            .lista-ol--cuadro__vineta
              span(style="color: #12263F") <b>5</b>
            | #[b Conclusión:] esta parte debe ser un resumen de las ideas principales y el propósito específico. 
          li 
            .lista-ol--cuadro__vineta
              span(style="color: #12263F") <b>6</b>
            | #[b Revisa y edite el texto:] una vez que haya creado un borrador, vuelva atrás y revíselo. Busque específicamente lugares donde pueda ajustar las cosas o lugares donde necesite agregar más información. 
      .col-lg-4.col-8.mb-3
        figure(data-aos="fade-right")
          img(src='@/assets/curso/temas/12.svg', alt='Imagen decorativa')

    p(data-aos="fade-left").mb-5 Ya teniendo un discurso claro y estructurado según los pasos anteriores es bueno conocer la mejor forma para transmitir esa información, es por esto que estos son los pasos que se deben tener en cuenta a la hora de dar un discurso:

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/13.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        ul.lista-ul
          li 
            i.fas.fa-angle-right
            | Su presentación debe captar inmediatamente la atención y el interés de su audiencia.
          br
          li 
            i.fas.fa-angle-right
            | Su introducción debe brindarle a su audiencia una vista previa de lo que pueden esperar escuchar durante su discurso.
          br
          li 
            i.fas.fa-angle-right
            | Organice sus pensamientos en un flujo lógico y coherente de ideas.
          br
          li 
            i.fas.fa-angle-right
            | Cada punto principal de su discurso debe respaldar el propósito de su discurso.
          br
          li 
            i.fas.fa-angle-right
            | Utilice una variedad de ejemplos para ilustrar los puntos principales, desde investigaciones, hechos y cifras, hasta anécdotas y referencias personales.
          br
          li 
            i.fas.fa-angle-right
            | Utilice su conclusión como una oportunidad para resumir los puntos principales de su discurso.
          br
          | 
    separador 
    .titulo-segundo.color-acento-contenido
      h2#t_1_6 1.6 Herramientas digitales se pueden utilizar para la elaboración de un discurso 

    p(data-aos="fade-left").mb-5 Hay que tener en cuenta que, con el avance de la tecnología, surgen herramientas que ayudan y permiten estructurar de una mejor manera un discurso, sin dejar de lado que muchos oradores aun utilizan lápiz y papel para organizar y modificar las ideas que quieren transmitir. Aquí se indican algunas de las herramientas tecnológicas que ayudan a desarrollar de la mejor manera este proceso:

    .tarjeta--container.row.mb-5
      .col-md.tarjeta(style="background-color:#CDF5E2").p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/14.svg', alt='Texto que describa la imagen')
          
        h2.text-center Microsoft Word
        p Es quizás la herramienta principal que se utiliza al momento de redactar un discurso de manera digital, esta herramienta brinda ayuda en cuanto a ortografía.

      .col-md.tarjeta(style="background-color:#FAFFD7").p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/15.svg', alt='Texto que describa la imagen')
          
        h2.text-center Herramientas sincrónicas
        p La oratoria se realiza a través de una herramienta de video conferencia como:  blackboard collaborate, Zoom, Meet, depende de la herramienta que el instructor seleccione, y debe quedar.

    separador 
    .titulo-segundo.color-acento-contenido
      h2#t_1_7 1.7 Ejemplo de un discurso 

    .BGIMG01.p-3.mb-5
      .row.justify-content-around.align-items-center
        .col-auto
          img(src="@/assets/curso/temas/16.svg").img65
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h4.mb-1 El poder de la disciplina - Gabriel Batistuta 
              p.text-small.mb-0 En el siguiente video pueden observar y escuchar un ejemplo claro de un discurso realizado por el ex futbolista Gabriel Omar Batistuta sobre el poder de la disciplina.
            .col-sm-auto
              a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=R7wUI2hAgvU" target="_blank")
                span Abrir video
                i.fas.fa-file-download

    .row.justify-content-center
      .col-10
        p(data-aos="fade-left") En el video se pueden apreciar los tres pilares fundamentales que el futbolista quiere expresar y en las cuales divide su discurso:
        <hr>
        .row.justify-content-center
          .col-3
            i.fas.fa-angle-right
            |  Objetivo claro.
          .col-3
            i.fas.fa-angle-right
            |  Objetivo claro.
          .col-3
            i.fas.fa-angle-right
            |  Objetivo claro.
        <hr>
        p(data-aos="fade-left") Y la manera como explica cada uno de ellos, intentando ser lo más claro posible con el punto al que quiere llegar y la idea que desea transmitir.

</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
