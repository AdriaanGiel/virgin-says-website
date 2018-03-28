let routes = [
    {
        path:'/',
        component: require('./pages/promo')
    },
    {
        path:'/home',
        component: require('./pages/promo')
    }
];

export default new VueRouter({
   routes
});