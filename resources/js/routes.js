let routes = [
    {
        path:'/',
        component: require('./pages/promo')
    },

    {
        path:'/uitleg',
        component: require('./pages/explanation')
    }
];

export default new VueRouter({
   routes
});