let routes = [
    {
        path:'/',
        component: require('./pages/home')
    },
    {
        path:'/home',
        component: require('./pages/home')
    },
    {
        path:'/about',
        component: require('./pages/about')
    },
    {
        path:'/game',
        component: require('./pages/game')
    },
    {
        path:'/location',
        component: require('./pages/location')
    },
    {
        path:'/contact',
        component: require('./pages/contact')
    }
];

export default new VueRouter({
   routes
});