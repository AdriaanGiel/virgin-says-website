import './bootstrap';
import routes from './routes';
import navigation from './components/navigation';
import footer from './components/v-footer';

const  app = new Vue({
    el:"#app",
    components:{
        'navigation': navigation,
        'v-footer': footer
    },
    router: routes,
    methods:{}
});