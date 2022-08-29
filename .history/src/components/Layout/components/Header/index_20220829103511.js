import { useEffect, useState } from 'react';
import styles from './Header.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleXmark,
    faSpinner,
    faMagnifyingGlass,
    faPlus,
    faEllipsisVertical,
    faGlobe,
    faCircleQuestion,
    faKeyboard,
} from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';
import Menu from '~/components/Popper/Menu';
import Button from '~/components/Button';
import classNames from 'classnames/bind';
import images from '~/asset/image';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';

const cx = classNames.bind(styles);
const MENU_ITEAM = [
    {
        icon: <FontAwesomeIcon icon={faGlobe}></FontAwesomeIcon>,
        title: 'tieng viet',
        children: {
            title: 'language',
            data: [
                { type: 'language', code: 'en', title: 'English' },
                { type: 'language', code: 'vi', title: 'Viet' },
                { type: 'language', code: 'loa', title: 'Lao' },
            ],
        },
    },
    { icon: <FontAwesomeIcon icon={faCircleQuestion}></FontAwesomeIcon>, title: 'Feedback and Help', to: '/feedback' },
    { icon: <FontAwesomeIcon icon={faKeyboard}></FontAwesomeIcon>, title: 'Keyboard shortcuts' },
];
function Header() {
    const [searchResult, setSearchResult] = useState([]);
    useEffect(() => {
        setTimeout(() => {
            setSearchResult([]);
        }, 0);
    }, []);
    // handle logic
    const handleMenuChange = (menuItem) => {
        console.log(menuItem);
    };
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div>
                    <img src={images.logo} alt="logo" />
                </div>
                <Tippy
                    interactive
                    visible={searchResult.length > 0}
                    render={(attrs) => (
                        <div className={cx('search-results')} tabIndex="-1" {...attrs}>
                            <PopperWrapper>
                                <h4 className={cx('search-title')}>Acc</h4>
                                <AccountItem />
                                <AccountItem />
                            </PopperWrapper>
                        </div>
                    )}
                >
                    <div className={cx('seach')}>
                        <input type="text" placeholder="Enter your name" spellCheck={false}></input>
                        <button className={cx('clear')}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                        <FontAwesomeIcon icon={faSpinner} className={cx('loading')} />
                        <button className={cx('search-btn')}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </div>
                </Tippy>
                <div className={cx('actions')}>
                    <Button text href={'/upload'} leftIcon={<FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>}>
                        upload
                    </Button>
                    <Button primary>log in</Button>
                    <Menu items={MENU_ITEAM} onChange={handleMenuChange}>
                        <button className={cx('more-btn')}>
                            <FontAwesomeIcon icon={faEllipsisVertical}></FontAwesomeIcon>
                        </button>
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
