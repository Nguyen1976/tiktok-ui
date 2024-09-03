import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import React from 'react';

import styles from './Content.module.scss';
import Video from './Video';
import config from '~/config';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark, faCommentDots, faHeart, faPlus, faShare } from '@fortawesome/free-solid-svg-icons';
import Image from '~/components/Image';
const cx = classNames.bind(styles);

function Content({ isPlay }) {
    return (
        <div 
            className={cx('wrapper')}
        >
            <div className={cx('video')}>
                <Video isPlay={isPlay}/>
            </div>
            <div className={cx('section-bar')}>
                <div className={cx('avatar', 'container')}>
                    <Link to={config.routes.profile}>
                        <Image
                            className={cx('btn')}
                            src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/to…oZSlw0LPHMOBaVlhurs%3D&shp=a5d48078&shcp=b59d6b55"
                            alt="Nguyen van A"
                        />
                    </Link>
                    <button className={cx('avatar-btn')}>
                        <FontAwesomeIcon className={cx('avatar-icon')} icon={faPlus}/>
                    </button>
                </div>
                <div className={cx('heart', 'container')}>
                    <div className={cx('btn')}>
                        <FontAwesomeIcon icon={faHeart} />
                    </div>
                    <strong>49.6k</strong>
                </div>
                <div className={cx('comments', 'container')}>
                    <div className={cx('btn')}>
                        <FontAwesomeIcon icon={faCommentDots} />
                    </div>
                    <strong>492</strong>
                </div>
                <div className={cx('save', 'container')}>
                    <div className={cx('btn')}>
                        <FontAwesomeIcon icon={faBookmark} />
                    </div>
                    <strong>850</strong>
                </div>
                <div className={cx('share', 'container')}>
                    <div className={cx('btn')}>
                        <FontAwesomeIcon icon={faShare} />
                    </div>
                    <strong>417</strong>
                </div>
            </div>
        </div>
    );
}

export default Content;
