// publicRoutes
import Home from '~/pages/Home';
import Following from '~/pages/Followwing';
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
];
const privateRoutes = [];
export { publicRoutes, privateRoutes };
