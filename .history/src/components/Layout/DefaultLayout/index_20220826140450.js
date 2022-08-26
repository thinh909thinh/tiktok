import Header from '~/components/Layout/components/Header';
import styles from './DefaultLayout.module.scss';
import classNames from 'classnames/bind';
import Sidebar from './Sidebar';
const cx = classNames.bind(styles);
function DefaultLayout({ children }) {
    return (
        <div>
            <Header />
            <div className="container">
                <Sidebar />
                <div className="content">{children}</div>
            </div>
        </div>
    );
}

export default DefaultLayout;
