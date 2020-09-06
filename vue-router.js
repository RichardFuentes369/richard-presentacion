const Profile = Vue.component('Profile', {
 template: 
 `<div class="card-body scrolly">
		<div class="contenido row">
			<div v-show = "this.hidden === true" class="col-sm-12">
				<div class="col-sm-12">
					<div class="row">
						<h3 class="mb-5 mt-4 titulos">Quien soy</h3>
					</div>
				</div>
				<div class="row">
					<div class="col-sm-9">
						<div class="row contenidofont">
							Mi nombre es Javier Ricardo Baron Fuentes, nací el 01 de Junio del año 1996 en la ciudad de Bucaramanga en el departamento de Santander(Colombia).
							<br><br>
							Soy amante de la tecnologia y apasionado por el desarrollo y la implementación de nuevas tecnologias que se van desarrollando dia a dia, así
							logrando los objetivos propuestos y las metas a realizar. Soy de los que piensa que con cualquier tipo de esfuerzo y dedicación se pueden lograr
							grandes cosas.
							Ademas de esto, también cuento con una tecnologia en Desarrollo de Sistemas Informaticos de las Unidades Tecnologicas de Santander, tecnologia la cual me ah permitido desenvolverme a nivel personal y profesional llevando a cabo el desarrollo de software a otro nivel, integrando asi mismo, las tecnologias que van saliendo al mercado y las que mas se acomodan al proyecto que este desarrollando.
							<br><br>
							Actualmente me encuentro desarrollando software propio con animos de aprender y a su vez emprender, con las tecnologias SPA, aprovechando los frameworks como Vue y Angular, y tambien los frameworks backend como Laravel.
							<br><br>
							Mi especialidad es el backend, pero como entuciasta de los cambios tecnologicos también eh estado estudiando lineamientos de diseño y modelos de negocio (CMS, ERP, CRM, ...).
						</div>				
					</div>
					<div class="col-sm-3">
						<div class="text-center mt-5 photo">
							<img class="border border-success rounded-circle" src="./imagenes/personales/richard_fuentes.jpg" alt="Generic placeholder image">
						</div>
						<div class="mt-4">
						</div>
					</div>
				</div>
			</div>
			<div v-show="this.hidden === false" id="contenedor" class="mx-auto" style="margin-top: 14rem !important">
        <div class="loader" id="loader">Loading...</div>
			</div>
		</div>
	</div>`,
	data() {
		return {
			hidden: false
		}
	},
	mounted() {
		this.charge()
	},
	methods: {
		charge(){
			setTimeout(() => {
				this.hidden = true
		  }, 500)
		}
	}
});
const Tecnologies = Vue.component('Tecnologies', {
 template: 
	`<div class="card-body scrolly">
		<div class="contenido row">
			<div v-show = "this.hidden === true" class="col-sm-12">
				<div class="col-sm-12">
					<div class="row">
						<h3 class="mb-5 mt-4 titulos">Tecnologias que manejo</h3>
					</div>
					</div>
					<div class="mt-2">
						<hr class="line">
						<div class="col-sm-12">
							<div class="row">
								<div class="col-sm-3 my-auto text-center">
									<h5 class="subtitulos">Lenguajes backend</h5>
								</div>
								<div class="col-sm">
									<div class="row justify-content-center">
										<div class="card my-2 mx-2" v-for="lb in model.languaguebackend" :style="{ width: '14rem', height:'6rem', backgroundImage: 'url(' + lb.logo + ')', backgroundSize: '30%', backgroundPosition: '50% 50%', backgroundRepeat: 'no-repeat'}">
											<div class="card-body">
												<h5 class="text-up">
													{{lb.nombre}}
												</h5>
											</div>
										</div>						
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="mt-2">
						<div class="line"></div>
						<div class="col-sm-12">
							<div class="row">
								<div class="col-sm-3 my-auto text-center">
									<h5 class="subtitulos">Frameworks frontend</h5>
								</div>
								<div class="col-sm">
									<div class="row justify-content-center">
										<div class="card my-2 mx-2" v-for="ff in model.frameworkfront" :style="{ width: '14rem', height:'7rem', backgroundImage: 'url(' + ff.logo + ')', backgroundPosition: '50% 50%', backgroundSize: '35%', backgroundRepeat: 'no-repeat'}">
											<div class="card-body"> 
												<h5 class="text-up">
													{{ff.nombre}}
												</h5>
											</div>
										</div>					
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="mt-2">
						<div class="line"></div>
						<div class="col-sm-12">
							<div class="row">
								<div class="col-sm-3 my-auto text-center">
									<h5 class="subtitulos">Herramientas de estilo</h5>
								</div>
								<div class="col-sm">
									<div class="row justify-content-center">
										<div class="card my-2 mx-2" v-for="ts in model.toolstyle" :style="{ width: '14rem', height:'7rem', backgroundImage: 'url(' + ts.logo + ')', backgroundPosition: '50% 50%', backgroundSize: '35%', backgroundRepeat: 'no-repeat'}">
											<div class="card-body">
												<h5 class="text-up">{{ts.nombre}}</h5>
											</div>
										</div>				
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="mt-2">
						<div class="line"></div>
						<div class="col-sm-12">
							<div class="row">
								<div class="col-sm-3 my-auto text-center">
									<h5 class="subtitulos">Lenguaje de Base de datos</h5>
								</div>
								<div class="col-sm">
									<div class="row justify-content-center">
										<div class="card my-2 mx-2" v-for="db in model.dataBase" :style="{ width: '14rem', height:'7rem', backgroundImage: 'url(' + db.logo + ')', backgroundPosition: '50% 50%', backgroundSize: '35%', backgroundRepeat: 'no-repeat'}">
											<div class="card-body"> 
												<h5 class="text-up"> {{db.nombre}}
												</h5>
											</div>
										</div>		
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="mt-2">
						<div class="line"></div>
						<div class="col-sm-12">
							<div class="row">
								<div class="col-sm-3 my-auto text-center">
									<h5 class="subtitulos">Versionamiento</h5>
								</div>
								<div class="col-sm">
									<div class="row justify-content-center">
										<div class="card mx-2 my-2" v-for="v in model.versionamiento" :style="{ width: '14rem', height:'7rem', backgroundImage: 'url(' + v.logo + ')', backgroundPosition: '50% 50%', backgroundSize: '35%', backgroundRepeat: 'no-repeat'}">
											<div class="card-body"> 
												<h5 class="text-up">{{v.nombre}}</h5>
											</div>		
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
			</div>
			<div v-show="this.hidden === false" id="contenedor" class="mx-auto" style="margin-top: 14rem !important">
        <div class="loader" id="loader">Loading...</div>
			</div>
		</div>
	</div>`,
	data() {
		return {
			model:{
				languaguebackend: [
				{
					'nombre':'Java',
					'size': '26%',
					'porcentaje': '55%',
					'logo': 'imagenes/iconos/java.png',
				},
				{
					'nombre':'Php',
					'size': '38%',
					'porcentaje': '75%',
					'logo': 'imagenes/iconos/php.png',
				}
				],			
				frameworkback: [
				{
					'nombre':'Jsf',
					'size': '26%',
					'porcentaje': '55%',
					'logo': 'imagenes/iconos/jsf.png'
				},
				{
					'nombre':'Laravel',
					'size': '38%',
					'porcentaje': '75%',
					'logo': 'imagenes/iconos/laravel.png'
				}
				],
				frameworkfront: [
				{
					'nombre':'Javascript',
					'size': '67%',
					'porcentaje': '45%',
					'logo': 'imagenes/iconos/javascript.png'
				},
				{
					'nombre':'Vue',
					'size': '70%',
					'porcentaje': '60%',
					'logo': 'imagenes/iconos/vue.png'
				},
				{
					'nombre':'Angular',
					'size': '40%',
					'porcentaje': '30%',
					'logo': 'imagenes/iconos/angular.png'
				}
				],		
				toolstyle: [
				{
					'nombre':'Css',
					'size': '38%',
					'porcentaje': '65%',
					'logo': 'imagenes/iconos/css.png'
				},
				{
					'nombre':'Bootstrap',
					'size': '40%',
					'porcentaje': '85%',
					'logo': 'imagenes/iconos/bootstrap.png'
				},
				{
					'nombre':'Element',
					'size': '40%',
					'porcentaje': '59%',
					'logo': 'imagenes/iconos/element.png'
				},
				{
					'nombre':'GoogleFonts',
					'size': '47%',
					'porcentaje': '99.9%',
					'logo': 'imagenes/iconos/googlefonts.png'
				},
				{
					'nombre':'PrimeFaces',
					'size': '47%',
					'porcentaje': '99.9%',
					'logo': 'imagenes/iconos/primefaces.png'
				}
				],		
				dataBase: [
				{
					'nombre':'Sql',
					'size': '30%',
					'porcentaje': '60%',
					'logo': 'https://bit.ly/2y9BEi0'
				}
				],		
				versionamiento: [
				{
					'nombre':'Git',
					'size': '43%',
					'porcentaje': '45%',
					'logo': 'imagenes/iconos/git.png'
				}
				]
			},
			hidden: false	
		}
	},
	mounted() {
		this.charge()
	},
	methods: {
		charge(){
			setTimeout(() => {
				this.hidden = true
		  }, 500)
		}
	}
});
const Project = Vue.component('Project', {
 template: 
	`<div class="card-body scrolly">
		<div class="contenido row">
			<div v-show = "this.hidden === true" class="col-sm-12">
				<h3 class="mb-5 mt-4 titulos">Proyectos realizados</h3>
				<div class="row justify-content-center">
					<div class="card my-2 mx-4" v-for="proyecto in model.proyectos" :style="{width: '14rem', height: '22rem', backgroundColor: '#0B9F97'}">
						<div class="card-header">
							<h5 class="card-title titulos-proyectos text-white m-0">{{proyecto.nombre}}</h5>
						</div>
						<div class="card-body m-0" style="background-color: #B1BFCC;">
							<p class="card-text text-dark" v-if="proyecto.consiste != ''">{{proyecto.consiste}}</p>
							<p class="card-text text-dark" v-else>Aún no tiene una descripcion...</p>
						</div>
						<div class="card-footer">
							<a v-if="proyecto.isActive =='true'" class="btn btn-block btn-primary border-light" :href="proyecto.url" target="_blank">Ver proyecto</a>
							<a v-else class="btn btn-block btn-secondary border-light text-white" style="cursor: no-drop">Enlace no disponible</a>
						</div>
					</div>
				</div>
			</div>
			<div v-show="this.hidden === false" id="contenedor" class="mx-auto" style="margin-top: 14rem !important">
        <div class="loader" id="loader">Loading...</div>
			</div>
		</div>
	</div>`,
	data() {
		return {
			model: {
				proyectos: [
				{
					'nombre': 'Sisconotas',
					'consiste': 'Desarrollo de una plataforma web offline, para las notas de los estudiantes de x colegio.',
					'url': 'https://www.instagram.com/p/CDhUUhuA2DA/',
					'isActive': 'true'
				},
				{
					'nombre': 'Inventarios',
					'consiste': 'Desarrollo de una plataforma web offline para mirar el stock en bodegas como tiendas, ferreterias etc.',
					'url': 'url',
					'isActive': 'false'
				},
				{
					'nombre': 'Monedero',
					'consiste': 'Desarrollo de una plataforma web para que el cliente pueda observar los gastos de sobre su sueldo que tiene en el mes.',
					'url': 'https://www.instagram.com/p/CDhVHw3gD26/',
					'isActive': 'true'
				},
				{
					'nombre': 'ValetParking',
					'consiste': 'Desarrollo de una plataforma web para el control de entradas y salidas de dinero de x parqueadero',
					'url': 'https://www.instagram.com/tv/CDhaV3qgNoj/',
					'isActive': 'true'
				},
				{

					'nombre': 'RestauranteApp',
					'consiste': 'Desarrollo de una plataforma web para el control de entradas y salidas de dinero de x parqueadero',
					'url': 'https://www.instagram.com/p/CDNN-HBA9AQ/',
					'isActive': 'true'
				},
				]
			},
			hidden: false
		}
	},
	mounted() {
		this.charge()
	},
	methods: {
		charge(){
			setTimeout(() => {
				this.hidden = true
		  }, 500)
		}
	}
});
const Contact = Vue.component('Contact', {
 template: 
	`<div class="card-body scrolly">
		<div class="contenido row">
			<div v-show = "this.hidden === true" class="col-sm-12">
				<h3 class=" mb-5 mt-4 titulos">Contactame</h3>
				<div class="row">
					<div class="card my-2 mx-4" v-for="re in model.redes" title="click" :style="{ width: '14rem', height:'6rem', backgroundImage: 'url(' + re.logo + ')', backgroundSize: '30%', backgroundPosition: '50% 50%', backgroundRepeat: 'no-repeat'}">
						<a :href="re.url" target="_blank">
							<div class="card-body my-4">
							</div>
						</a>
					</div>
				</div>
			</div>
			<div v-show="this.hidden === false" id="contenedor" class="mx-auto" style="margin-top: 14rem !important">
        <div class="loader" id="loader">Loading...</div>
 			</div>
		</div>				
	</div>`,
	data() {
		return {
			model: {    
				redes: [
					{
						'nombre': 'Facebook',
						'logo': 'imagenes/iconos/fb.jpg',
						'url': 'https://www.facebook.com/richard.fuentes.369'
					},
					{
						'nombre': 'Instagram', 
						'logo': 'imagenes/iconos/ig.png', 
						'url': 'https://www.instagram.com/bjr_96/?hl=es-la',
					}, 
					{
						'nombre': 'Whatsapp', 
						'logo': 'imagenes/iconos/wp.png', 
						'url': 'https://api.whatsapp.com/send?phone=573504284093'
					}, 
					{
						'nombre': 'GitHub',
						'logo': 'imagenes/iconos/git.png',
						'url': 'https://github.com/RichardFuentes369'
					},		
					{
						'nombre': 'Linkedin',
						'logo': 'imagenes/iconos/ld.png',
						'url': 'https://www.linkedin.com/mwlite/in/javier-ricardo-baron-fuentes-4265281a4'
					}, 
					{
						'nombre': 'Curriculum',
						'logo': 'imagenes/iconos/cv.svg',
						'url': 'https://bit.ly/357GR8B'
					}, 
				],
			},
			hidden: false
		}
	},
	mounted() {
		this.charge()
	},
	methods: {
		charge(){
			setTimeout(() => {
				this.hidden = true
		  }, 500)
		}
	}
});

const routes = [
  { path: '/profile', component: Profile },
  { path: '/tecnologies', component: Tecnologies },
  { path: '/project', component: Project },
  { path: '/contact', component: Contact }
]

const router = new VueRouter({
  routes // short for `routes: routes`
})

const app = new Vue({
  router,
  methods: {
  	isActive(){
  		console.log(this.$route.path)
  	}
  }
}).$mount('#app')
