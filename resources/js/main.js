import './bootstrap';
import routes from './routes';
import navigation from './components/navigation';

const  app = new Vue({
    el:"#app",
    components:{
        'navigation': navigation
    },
    router: routes,
    methods:{}
});