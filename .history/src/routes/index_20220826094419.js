// publicRoutes
import Home from '~/pages/Home';
import Following from '~/pages/Followwing';
import { publicRoutes } from '~/routes';
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/', following: Following },
];
const privateRoutes = [];
export { publicRoutes, privateRoutes };
