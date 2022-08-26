// publicRoutes
import Home from '~/pages/Home';
import Following from '~/pages/Followwing';
import Profile from '~/pages/Profile';
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/profile', component: Profile },
];
const privateRoutes = [];
export { publicRoutes, privateRoutes };
