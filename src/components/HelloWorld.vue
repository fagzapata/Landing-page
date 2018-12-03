<!--
//Fabian Gallegos Zapata
//fgallegos_097@hotmail.com
//copyright®FabianGallegosZapata
-->
<template>
  <v-app>
    <v-content>
      <header class="header_area animated f-puto">
        <div class="container-fluid">
            <div class="row align-items-center">
                <!-- Menu Area Start -->
                <div class="col-12 col-lg-10">
                    <div class="menu_area">
                      <b-navbar class="f-puto default-header container-fluid" toggleable="md" fixed="top" id="nav">
           <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
           <b-collapse is-nav id="nav_collapse">
                <b-navbar-nav class="container d-flex px-5 py-1 ml-auto">
                   <b-nav-item class="b" href="#home" flat><span class="color">Inicio</span></b-nav-item>
                   <b-nav-item href="#Acerca" flat><span class="color">Acerca</span></b-nav-item>
                   <b-nav-item href="#Galeria" flat><span class="color">Galeria</span></b-nav-item>
                   <b-nav-item href="#Perfil" flat><span class="color">Perfiles</span></b-nav-item>
                   <div class="sing-up-button d-lg-none">
                                    <a href="#"><span class="color">Plataforma</span></a>
                                </div>
               </b-navbar-nav>
               <div class="col-lg-3">
                    <div class="sing-up-button d-none d-lg-block">
                      <a data-toggle="tooltip" title="Uso Estudiantil" href="https://istmo-administrativo.firebaseapp.com/login" target="blank"><span class="color">Plataforma</span></a>
                    </div>
                </div>
                <div class="tooltip bs-tooltip-top" role="tooltip">
  <div class="arrow"></div>
  <div class="tooltip-inner">
    Uso Estudiantil
  </div>
</div>
           </b-collapse>
        </b-navbar>               
            </div>
        </div>
            </div>
        </div>
      </header>
       <v-parallax class="parallax" height="659">
        <v-layout column align-center justify-center id="home">
          <img src="https://firebasestorage.googleapis.com/v0/b/imagenes-a512c.appspot.com/o/Landing_page%2FLogoFacultad.png?alt=media&token=3c8eaaa6-6a62-471f-9dd2-d0cebeef795d" class="img-1" alt="universidad logo">
          <h1 class="head mb-5 display-3 text-xs-center">Facultad de Ingeniería en <br> Desarrollo y Gestión de Software</h1>
          <div class="headline white--text mb2 display-2 text-xs-center">Humildad, Ciencia y Honestidad</div>
           <v-btn class="pull-sm-left btn-xs-block" slot="activator" type="button" color="#5d3b77" dark large @click="dialog = true">
                <span class="color">Bienvenido</span>
              </v-btn>
              <v-dialog v-model="dialog" width="550">
        <v-card>
          <v-img class="white--text"
          height="200px"  aspect-ratio="5"
          src="https://universidad-istmo-americana.webnode.mx/_files/200000270-111fb1278a/50000000.png?ph=d18f04088e" gradient="to top right, rgba(0, 0, 0, 0.459), rgba(1, 1, 1, 0.459)">
          <v-container fill-height fluid>
            <v-layout fill-height>
              <v-flex xs12 align-end flexbox>
                <span id="color_1" class="font-weight-medium display-1 text-xs-center">Ingeniería en Desarrollo y Gestión de software</span>
              </v-flex>
            </v-layout>
          </v-container>
        </v-img>
        <v-card-text class="font-weight-small text-xs-justify" id="color_3">
          Es un gusto saludarle y darles la bienvenida a este espacio en donde seguramente encontraras la respuesta a esta oferta educativa como lo es la 
          Licenciatura en Ingenieria en Desarrollo y Gestión de Software, en el cual adquiriras Conocimientos, Habilidades en el Diseño y La Gestión de proyectos en dasarrollo de Software
          y desarrollaras la capacidad de formular propuestas innovadoras en Modelos de Negocios que contribuyan al incremento de la Productividad y Competitividad de la 
          industria del Software.
          Con Actitud y Ética de Colaboración, responsabilidad Sosial, proponiendo soluciones innovadoras en la automatización de los Sistemas de Información con la tecnología e Ingeniería del 
          Software y sus Aplicaciones en todos los Ámbitos.
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" flat @click="dialog = false">Cerrar</v-btn>
        </v-card-actions>
      </v-card>
        </v-dialog>
        </v-layout>
        </v-parallax>
      <!--primera seccion ACERCA DE -->
        <!--v-parallax class="para" height="800"-->
          <v-container style="margin-top: 26px;">
          <v-layout column wrap class="my-0 container clearfix" align-center id="Acerca">
            <div class="row">
                <div class="col-xs-12">
                    <!-- Section Heading Area -->
                    <div class="section-heading text-center py-5">
                        <h2>Acerca de la Carrera</h2>
                        <div class="line-shape"></div>
                    </div>
                </div>
            </div>
            <div class="special_description_area mt-100">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6">
                        <div class="special_description_img">
                            <img src="https://firebasestorage.googleapis.com/v0/b/imagenes-a512c.appspot.com/o/Landing_page%2Fspecial.png?alt=media&token=4532ad75-15a7-485c-8cd5-231b0bf68b0c" alt="">
                        </div>
                    </div>
                    <div class="col-lg-6 col-xl-5 ml-xl-auto">
                        <div class="special_description_content text_2">
                            <h2>Objetivo de la Carrera</h2>
                            <p>Diseñar y desarollar sistemas de información aplicables en áreas de negocios, investigación científica, medica, producción, logística, banca, metodologica, derecho, internet, intranet, Etc.</p>
                            <v-divider id="divider"></v-divider>
                            <h2>Actividades específicas a Desempeñar</h2>
                            <ol class="text_2">
                              <li><i class="fa fa-check"></i><span>Dirige la Programación, estudia el diseño y la escritura de programas en un lenguaje algorítmico</span></li>
                              <v-divider id="divider"></v-divider>
                              <li><i class="fa fa-check"></i><span>Supervisa las pruebas de calidad</span></li>
                              <v-divider id="divider"></v-divider>
                              <li><i class="fa fa-check"></i><span>Supervisa el Mantenimiento</span></li>
                            </ol>
                            <div class="app-download-area">
                                <div class="app-download-btn wow fadeInUp" data-wow-delay="0.2s">
                                    <!-- Google Store Btn -->
                                    <a href="https://firebasestorage.googleapis.com/v0/b/imagenes-a512c.appspot.com/o/Landing_page%2FPDF_Plan_De_Estudios%2FPlan%20de%20estudios.pdf?alt=media&token=b3eb8a70-f6d4-4a95-9e53-038c649c9414" target="blank">
                                        <i class="fa fa-file-download"></i>
                                        <p class="mb-0"><span>Descargar Plan de</span>Estudios Profesionales</p>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </v-layout>
        </v-container>
        <!--/v-parallax-->
      <!--Galeria section-->
       <v-layout id="Galeria" column wrap class="my-0 container clearfix" align-center>
                <div class="col-xs-12">
                    <!-- Section Heading Area -->
                    <div class="section-heading text-center py-5">
                        <h2>Galeria</h2>
                        <div class="line-shape"></div>
                    </div>
                </div>
        <v-container>
     <v-layout row wrap style="margin-top: -60px;">
      <v-flex d-flex class="col-sm-6">
  <b-carousel id="carousel1" class="carousel-fade" style="text-shadow: 1px 1px 2px #333;" controls indicators background="#000000" :interval="4000" img-width="1024" img-height="480" v-model="slide" @sliding-start="onSlideStart" @sliding-end="onSlideEnd">     <!-- Text slides with image -->
      <b-carousel-slide img-src="https://scontent.fmex5-1.fna.fbcdn.net/v/t1.0-9/45522242_2113540218713188_3459403531939741696_n.jpg?_nc_cat=107&_nc_eui2=AeEAXRPBlEBGaMn0sg54Awy9_Lj4CjnDLUYE6PBIajvomhBXs38C6OCH7N3wDrrEbuVGjxv9mE71zoWQEw-S9rI0tZ_bU3_fbMRE4CF4EQV-3w&_nc_ht=scontent.fmex5-1.fna&oh=ba172bfb70f499d2b8994ccb44733a08&oe=5C6D15CA">
      <h1>TITULOMANÍA!</h1>
      </b-carousel-slide>
      <!-- Slides with custom text -->
      <b-carousel-slide img-src="https://scontent.fmex5-1.fna.fbcdn.net/v/t1.0-9/45474941_2109312029136007_1560686833560453120_n.jpg?_nc_cat=109&_nc_eui2=AeEX37E955oHmJpu5blmJ-YXmYla5-bZGH53JwlPvv3JVapiQFU1mbPBrFm0Ackw013KmIdD92V1IknFbFIXU2SbdzstwcIEJey0OuNfT4xoPA&_nc_ht=scontent.fmex5-1.fna&oh=a52015c95c95e783a63ec156c7fabe97&oe=5C6D3746">
        <h1>TITULOMANÍA</h1>
      </b-carousel-slide>
      <!-- Slides with image only -->
      <b-carousel-slide img-src="https://scontent.fmex5-1.fna.fbcdn.net/v/t1.0-9/14051673_1166666243400595_1797060636885234_n.jpg?_nc_cat=109&_nc_eui2=AeEJfuJ7iDnQwZmVQKxex5F81GOhCTf-dtBfpjaIfEl4Sa_1VtFHoadX9HwepqbhSaLosEEPYTelsQNhCHJIxwzCBqCQVpHMH3bpHW1tUpAh0g&_nc_ht=scontent.fmex5-1.fna&oh=60d4ea4d519478b9f352a1ba44f6a90f&oe=5C712AA0">
      <h1>TITULOMANÍA</h1>
      </b-carousel-slide>
      <b-carousel-slide img-src="https://scontent.fmex5-1.fna.fbcdn.net/v/t1.0-9/15965878_1373359536064597_2299228208118516734_n.jpg?_nc_cat=109&_nc_eui2=AeHtYXkJYQrqG59l-q3y-7jzJ3rU4_SivcvkrluF1mGtI9TCZbGmhZl1pu-Xc3WA0L4oAfa0IBpWfdZxEKiwEl9wxQS5xlKyRRGJeU160Nvq7A&_nc_ht=scontent.fmex5-1.fna&oh=4da68d4bd81b78a030c754a54080b87f&oe=5CA5AD5E">
      <h1>TITULOMANÍA</h1>
      </b-carousel-slide>
    </b-carousel>
  </v-flex>
  <!--segundo-->
  <v-flex d-flex class="col-sm-6">
  <b-carousel id="carousel1" class="carousel-fade" style="text-shadow: 1px 1px 2px #333;" controls indicators background="#000000" :interval="4000" img-width="1024" img-height="480" v-model="slide2" @sliding-start="onSlideStart2" @sliding-end="onSlideEnd2">
      <!-- Text slides with image -->
       <b-carousel-slide text="Ing. en Desarrollo y Gestión de Software" img-src="https://firebasestorage.googleapis.com/v0/b/imagenes-a512c.appspot.com/o/Landing_page%2Ftodos.jpg?alt=media&token=8468521a-b9c3-4d6a-bafd-5a81a5817895">
        <h1>PROYECTOS</h1>
      </b-carousel-slide>
           <!-- Slides with custom text -->
      <b-carousel-slide text="Ing. en Desarrollo y Gestión de Software" img-src="https://firebasestorage.googleapis.com/v0/b/imagenes-a512c.appspot.com/o/Landing_page%2Frector.jpg?alt=media&token=a62ab677-db29-4f7d-a43b-74f38991cfa6">
      <h1>PROYECTOS</h1>
      </b-carousel-slide>
      <!-- Slides with image only -->
      <b-carousel-slide text="Ign. en Desarrollo y Gestión de Software" img-src="https://firebasestorage.googleapis.com/v0/b/imagenes-a512c.appspot.com/o/Landing_page%2FDD.jpg?alt=media&token=3eb8f255-9127-4607-b3ce-f8515eac39bb">
      <h1>PROYECTOS</h1>
      </b-carousel-slide>
      <b-carousel-slide text="Ign. en Desarrollo y Gestión de Software" img-src="https://firebasestorage.googleapis.com/v0/b/imagenes-a512c.appspot.com/o/Landing_page%2FFABIA.jpg?alt=media&token=00f812d9-17b2-4a65-8616-7ee861568b3d">
      <h1>PROYECTOS</h1>
      </b-carousel-slide>
       <b-carousel-slide text="Ing. en Desarrollo y Gestión de Software" img-src="https://firebasestorage.googleapis.com/v0/b/imagenes-a512c.appspot.com/o/Landing_page%2FLUIS.jpg?alt=media&token=2848852d-5df2-4eee-a7d5-afe660c8d0f8">
      <h1>SEMANA ACADEMICA</h1>
      </b-carousel-slide>
    </b-carousel>
  </v-flex>
  </v-layout>
</v-container>
</v-layout>
      <!--section-->
      <v-container style="margin-top: -60px;">
        <v-layout id="Perfil" column wrap class="my-0 container clearfix" align-center>
          <div class="row">
                <div class="col-xs-12">
                    <!-- Section Heading Area -->
                    <div class="section-heading text-center py-5">
                        <h2>Perfil</h2>
                        <div class="line-shape"></div>
                    </div>
                </div>
            </div>
          <v-flex xs12> 
            <v-container grid-list-xl style="margin-top: -60px;">
              <v-layout row wrap>
                <v-flex xs12>
                  <v-card class="elevation-1 bordes_special">
                    <v-card-text  class="text-xs-center">
                      <v-icon x-large color="#5d3b77">group</v-icon>
                    </v-card-text>
                    <v-card-title class="layout justify-center">
                      <div class="headline text-xs-center color_2">Perfil del Egresado</div>
                    </v-card-title>
                    <v-card-text class="text-xs-justify">
                      <div class="text_1">
                  <span>El <strong>Egresado</strong> de esta carrera se caracterizará por una sólida formación integral que el permitirá desempeñarse exitosamente en el ámbito Profesional.
                      <br>Aplicando los conocimientos adquiridos a partir de su formación básica, disciplinar y profesional con el objetivo de tener una visión más amplia para desarrollar y dar
                      soluciones con el desarrollo de Software.</span>
                      </div>
                    </v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs12 md4>
                  <v-card class="elevation-1 bordes">
                    <v-card-text  class="text-xs-center">
                      <v-icon x-large color="#5d3b77">local_library</v-icon>
                    </v-card-text>
                    <v-card-title class="layout justify-center">
                      <div class="headline text-xs-center color_2">Conocimientos</div>
                    </v-card-title>
                    <v-card-text class="text-xs-justify">
                      <ol class="text_1">
                        <li><i class="fa fa-check"></i>
                        <span>Desarrollará Aplicaciones de Software</span>
                        </li>
                        <v-divider></v-divider>
                        <li><i class="fa fa-check"></i>
                        <span>Aplicará tecnología bajo Plataformas en Desarrollo Web</span>
                        </li>
                        <v-divider></v-divider>
                        <li><i class="fa fa-check"></i>
                        <span>Aplicará herramientas y metodologias en el desarrollo de Software</span>
                        </li>
                        <v-divider></v-divider>
                        <li><i class="fa fa-check"></i>
                        <span>Desarrollará proyectos en Modelos de Negocios Aplicados</span>
                        </li>
                        <v-divider></v-divider>
                        <li><i class="fa fa-check"></i>
                        <span>Desarrollará a través de base de datos y modelos físicos</span>
                        </li>
                      </ol>
                    </v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs12 md4>
                  <v-card class="elevation-1 bordes">
                    <v-card-text  class="text-xs-center">
                      <v-icon x-large color="#5d3b77">directions_run</v-icon>
                    </v-card-text>
                    <v-card-title class="layout justify-center">
                      <div class="headline text-xs-center color_2">Habilidades</div>
                    </v-card-title>
                    <v-card-text class="text-xs-justify">
                     <ol class="text_1">
                        <li><i class="fa fa-check"></i>
                        <span>Comunicación efectiva con los diferentes intereses realacionados a Ingeniería de Software</span>
                        </li>
                        <v-divider></v-divider>
                        <li><i class="fa fa-check"></i>
                        <span>Trabajo en equipo para el desarrollo de proyectos relacionados con las diversas aplicaciones del Software</span>
                        </li>
                        <v-divider></v-divider>
                        <li><i class="fa fa-check"></i>
                        <span>Habilidades para conciliar conflictos y generar compromisos que tiendan a beneficiar a las organizaciones</span>
                        </li>
                        <v-divider></v-divider>
                        <li><i class="fa fa-check"></i>
                        <span>Habilidad para ejercer el liderazgo en ambientes laborables</span>
                        </li>
                      </ol>
                    </v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs12 md4>
                  <v-card class="elevation-1 bordes">
                    <v-card-text  class="text-xs-center">
                      <v-icon x-large color="#5d3b77">gamepad</v-icon>
                    </v-card-text>
                    <v-card-title class="layout justify-center">
                      <div class=" headline text-xs-center color_2">Actitudes y Destrezas</div>
                    </v-card-title>
                    <v-card-text class="text-xs-justify">
                      <ol class="text_1">
                        <li><i class="fa fa-check"></i>
                        <span>Propicia el respeto a las Normas y Leyes</span>
                        </li>
                        <v-divider></v-divider>
                        <li><i class="fa fa-check"></i>
                        <span>Fomenta la ética Profesional</span>
                        </li>
                        <v-divider></v-divider>
                        <li><i class="fa fa-check"></i>
                        <span>Fomenta el trabajo en Equipo, responsabilidad y el Respeto</span>
                        </li>
                        <v-divider></v-divider>
                        <li><i class="fa fa-check"></i>
                        <span>Propicia el trabajo Participativo y Colaborativo</span>
                        </li>
                        <v-divider></v-divider>
                        <li><i class="fa fa-check"></i>
                        <span>Fomenta la Creatividad</span>
                        </li>
                        <v-divider></v-divider>
                        <li><i class="fa fa-check"></i>
                        <span>Promueve la Equidad, Tolerancia y Confiabilidad</span>
                        </li>
                      </ol>
                    </v-card-text>
                  </v-card>
                </v-flex>
              </v-layout>
            </v-container>
          </v-flex>
        </v-layout>
      
      </v-container>
      <!--footer-->    
  <v-footer dark height="auto">
    <v-layout row wrap>
      <v-flex xs12>
        <v-card flat tile id="color_principal" class="lighten-1 white--text text-xs-center flex">
      <v-card-text>
          <div class="app-download-btn wow fadeInUp" data-wow-delay="0.2s">
       <div class="btn-group">
           <a class="btn btn-default" href="https://web.facebook.com/UniversidadIstmoAmericana/" target="blank"><i class="fa fa-facebook fa-3x"></i></a>
           <a class="btn btn-default" href="https://twitter.com/uistmoamericana" target="blank"><i class="fa fa-twitter fa-3x"></i></a>
           <a class="btn btn-default" href="https://www.instagram.com/uistmoamericana/?hl=es-la" target="blank"><i class="fa fa-instagram fa-3x"></i></a>
           <a class="btn btn-default" href="http://www.istmoamericana.com/" target="blank"><i class="fa fa-chrome fa-3x"></i></a>
       </div>
          </div>
      </v-card-text>     
      <v-card-text class="white--text">
      <h3><i class="fa fa-phone">Telefono: </i>(921) 21 0 95 90 (94) Ext. 103</h3><br>
        &copy;2018 — <strong class="color_f color">Universidad Istmo Americana A.C.</strong>
      </v-card-text>
    </v-card>
      </v-flex>
    </v-layout>
  </v-footer>
    </v-content>
  </v-app>
</template>


<script>
import 'vuetify/dist/vuetify.min.css'
import 'vuetify/dist/vuetify.js'
import 'vuetify/dist/vuetify.css'

//bootstrap-vue
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap-vue/es/components/navbar/navbar'
import 'bootstrap-vue/es/components/navbar/navbar-nav'
import 'bootstrap-vue/es/components/navbar/navbar-brand'
import 'bootstrap-vue/es/components/navbar/navbar-toggle'

import 'vue-material/dist/vue-material.min.css'

export default {
  name: 'HelloWorld',
  data () {
      return {
        slide: 0,
      sliding: null
    }
  },
  methods: {
    onSlideStart (slide) {
      this.sliding = true
    },
    onSlideEnd (slide) {
      this.sliding = false
    },
    onSlideStart2 (slide2){
      this.sliding2 = true
    },
    onSlideEnd2 (slide2){
      this.sliding2= true
    },
    onSlideStart3 (slide){
      this.sliding3 = true
    },
    onSlideEnd3 (slide3){
      this.sliding3 = true
    }
  }
}
</script>