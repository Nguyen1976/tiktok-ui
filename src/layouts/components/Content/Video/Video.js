import classNames from 'classnames/bind';
import ReactPlayer from 'react-player';
import { useState } from 'react';
import Tippy from '@tippyjs/react/headless';

import styles from './Video.module.scss';
import video from '~/assets/videos/test.mp4';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesUp, faCheckCircle, faEllipsis, faFlag, faHeartCrack, faMusic } from '@fortawesome/free-solid-svg-icons';
import { Wrapper as PopperWrapper } from '~/components/Popper';



const cx = classNames.bind(styles);

function Video() {
    const [isHover, setIsHover] = useState(false);

    const handleHoverIn = () => {
        setIsHover(true);
    };

    const handleHoverOut = () => {
        setIsHover(false);
    };

    return (
        <div className={cx('wrapper')} onMouseEnter={() => handleHoverIn()} onMouseLeave={() => handleHoverOut()}>
            <ReactPlayer url={video} controls={isHover} loop={true} width="100%" height="auto" />
            <div className={cx('overlay', isHover && 'overlay-hover')}>
                <h3 className={cx('name')}>
                    <span>ggs68korea.official</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h3>
                <div className={cx('content')}>
                    <span>Ngại giùm luôn á</span>
                    <a href="/" className={cx('hastag')}>
                        #ggs68
                    </a>
                    <a href="/" className={cx('hastag')}>
                        #ggs68
                    </a>
                    <a href="/" className={cx('hastag')}>
                        #ggs68
                    </a>
                    <a href="/" className={cx('hastag')}>
                        #ggs68
                    </a>
                    <a href="/" className={cx('hastag')}>
                        #ggs68
                    </a>
                    <a href="/" className={cx('hastag')}>
                        #ggs68
                    </a>
                    <a href="/" className={cx('hastag')}>
                        #ggs68
                    </a>
                </div>
                <div className={cx('music')}>
                    <FontAwesomeIcon icon={faMusic} />
                    <div className={cx('music-name')}>Nhạc nền - Bnhi</div>
                </div>
            </div>

            <Tippy
                interactive
                offset={[50, 30]}
                delay={[0, 600]}
                appendTo={document.body}
                placement="right"
                render={(attrs) => (
                    <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                        <PopperWrapper className={cx('menu-popper')}>
                            <div className={cx('item')} tabIndex="-1" {...attrs}>
                                <FontAwesomeIcon className={cx('item__icon')} icon={faAnglesUp}/>
                                <span className={cx('item__title')}>Quận tự động</span>
                            </div>
                            <div className={cx('item')} tabIndex="-1" {...attrs}>
                                <FontAwesomeIcon className={cx('item__icon')} icon={faHeartCrack}/>
                                <span className={cx('item__title')}>Không quan tâm</span>
                            </div>
                            <div className={cx('item')} tabIndex="-1" {...attrs}>
                                <FontAwesomeIcon className={cx('item__icon')} icon={faFlag}/>
                                <span className={cx('item__title')}>Báo cáo</span>
                            </div>
                        </PopperWrapper>
                    </div>
                )}
            >
                <div className={cx('options')}>
                    <FontAwesomeIcon icon={faEllipsis} />
                </div>
            </Tippy>
        </div>
    );
}

export default Video;
