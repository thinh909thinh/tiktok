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
    faUpload,
    faMessage,
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
        title: 'Language',
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
        switch (menuItem.type) {
            case 'language':
                break;
            default:
        }
    };
    var currentUser = true;
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
                    {currentUser ? (
                        <>
                            <button>
                                <FontAwesomeIcon className={cx('actions-btn')} icon={faSpinner}></FontAwesomeIcon>
                            </button>
                            <button>
                                <FontAwesomeIcon className={cx('actions-btn')} icon={faMessage}></FontAwesomeIcon>
                            </button>
                        </>
                    ) : (
                        <>
                            <Button text href={'/upload'} leftIcon={<FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>}>
                                Upload
                            </Button>
                            <Button primary>Log in</Button>
                        </>
                    )}
                    <Menu items={MENU_ITEAM} onChange={handleMenuChange}>
                        {currentUser ? (
                            <img
                                className={cx('user-avatar')}
                                alt="nguyen van a"
                                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/16c43ae5f2e5bc862c43ea2c1777c9ae~c5_100x100.jpeg?x-expires=1661936400&x-signature=FwyBT9IByPYxO4XB7cphcOAaNIY%3D"
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical}></FontAwesomeIcon>
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
