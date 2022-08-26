import { HeaderOnly } from '~/components/Layout';
// pages
import Home from '~/pages/Home';
import Following from '~/pages/Followwing';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Seach from '~/pages/Seach';
// publicRoutes
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/profile', component: Profile },
    { path: '/upload', component: Upload, layout: HeaderOnly },
    { path: '/seach', component: Seach, layout: null },
];
const privateRoutes = [];
export { publicRoutes, privateRoutes };
