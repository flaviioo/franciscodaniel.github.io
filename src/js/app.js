import spinner from "../components/spinner.js";
import mapa from "../components/mapa.js";

const app = Vue.createApp({
    components: { spinner, mapa },
    data() {
        return {
            isMenu: false,
            isDarkMode: localStorage.getItem('isDarkMode') === 'true',
            isDarkModePreferred: window.matchMedia('(prefers-color-scheme: dark)').matches, // Verifica o modo preferido do navegador
            spinnerTime: true,
            showContentProject: false,
            ano: null,
            porfolio: false,
        }
    },
    watch: {
        isDarkMode(novoValor) {
            localStorage.setItem('isDarkMode', novoValor);
        }
    },
    created() {
        this.spinner()
    },
    mounted() {
        const appElement = document.getElementById('app');
        if (this.isDarkMode) {
            appElement.classList.add('dark-mode');
        }

        this.year()
        this.particulas()
        AOS.init();

        const swiper = new Swiper('.swiper', {
            // Optional parameters
            direction: 'horizontal',
            loop: true,

            effect: 'fade', // Adicione o efeito "fade"
            fadeEffect: {
                crossFade: true
            },

            autoplay: {
                delay: 10000, // Tempo de espera entre os slides em milissegundos
                disableOnInteraction: false, // Define se o autoplay deve ser pausado quando o usuário interagir com o carrossel (false para continuar a reprodução após interação)
            },

            // If we need pagination
            pagination: {
                el: '.swiper-pagination',
            },

        });


        return swiper
    },
    destroyed() {
        this.spinnerTime = false;
    },
    methods: {
        spinner() {
            setTimeout(() => {
                this.spinnerTime = false
            }, 3000);
        },
        toggleDarkMode() {
            this.isDarkMode = !this.isDarkMode;
            const appElement = document.getElementById('app');
            appElement.classList.toggle('dark-mode');
        },
        showMenu() {
            this.isMenu = !this.isMenu
            const btnMenu = document.querySelector('.btn-open > i')
            const btnMode = document.querySelector('.btn-mode > i')
            btnMenu.style.color = 'white'
            btnMode.style.color = 'white'

            if (this.isMenu == false) {
                btnMenu.style.color = 'white'
                btnMode.style.color = 'white'

            }
            else if (this.isDarkMode == true) {
                btnMenu.style.color = 'white'
                btnMode.style.color = 'white'

            }
            else {
                btnMenu.style.color = '#007bff'
                btnMode.style.color = '#007bff'

            }
        },
        overContentProject() {
            console.log(1);
        },
        year() {
            const date = new Date()
            this.ano = date.getFullYear()
        },
        particulas() {
            if (window.particlesJS) {
                particlesJS('particles-js', {
                    "particles": {
                        "number": {
                            "value": 80,
                            "density": {
                                "enable": true,
                                "value_area": 800
                            }
                        },
                        "color": {
                            "value": "#ffffff"
                        },
                        "shape": {
                            "type": "polygon",
                            "stroke": {
                                "width": 0,
                                "color": "#ffffff"
                            },
                            "polygon": {
                                "nb_sides": 5
                            },
                            "image": {
                                "src": "img/github.svg",
                                "width": 100,
                                "height": 100
                            }
                        },
                        "opacity": {
                            "value": 0.5,
                            "random": false,
                            "anim": {
                                "enable": false,
                                "speed": 1,
                                "opacity_min": 0.1,
                                "sync": false
                            }
                        },
                        "size": {
                            "value": 3,
                            "random": true,
                            "anim": {
                                "enable": false,
                                "speed": 40,
                                "size_min": 0.1,
                                "sync": false
                            }
                        },
                        "line_linked": {
                            "enable": true,
                            "distance": 150,
                            "color": "#ffffff",
                            "opacity": 0.4,
                            "width": 1
                        },
                        "move": {
                            "enable": true,
                            "speed": 6,
                            "direction": "none",
                            "random": false,
                            "straight": false,
                            "out_mode": "out",
                            "bounce": false,
                            "attract": {
                                "enable": false,
                                "rotateX": 600,
                                "rotateY": 1200
                            }
                        }
                    },
                    "interactivity": {
                        "detect_on": "canvas",
                        "events": {
                            "onhover": {
                                "enable": true,
                                "mode": "repulse"
                            },
                            "onclick": {
                                "enable": true,
                                "mode": "push"
                            },
                            "resize": true
                        },
                        "modes": {
                            "grab": {
                                "distance": 400,
                                "line_linked": {
                                    "opacity": 1
                                }
                            },
                            "bubble": {
                                "distance": 400,
                                "size": 40,
                                "duration": 2,
                                "opacity": 8,
                                "speed": 3
                            },
                            "repulse": {
                                "distance": 200,
                                "duration": 0.4
                            },
                            "push": {
                                "particles_nb": 4
                            },
                            "remove": {
                                "particles_nb": 2
                            }
                        }
                    },
                    "retina_detect": true
                }
                )
            }
        }
    },
});

app.component(spinner)
app.component(mapa)

app.mount('#app')

export default app