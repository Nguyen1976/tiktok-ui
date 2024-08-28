import classNames from "classnames/bind";
import ReactPlayer from 'react-player'
import { useState } from 'react'

import styles from './Video.module.scss';
import video from '~/assets/videos/test.mp4'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faMusic } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);

function Video() {

    const [ isHover, setIsHover ] = useState(false);

    const handleHoverIn = () => {
        setIsHover(true);
    }

    const handleHoverOut = () => {
        setIsHover(false);
    }

    return (  
        <div className={cx('video')}
            onMouseEnter={() => handleHoverIn()}
            onMouseLeave={() => handleHoverOut()}
        >
            <ReactPlayer 
                className={cx('video')}
                url={video} 
                controls={isHover} 
                width='100%' 
                height='auto'
            />
            <div className={cx('overlay')} 
                onMouseEnter={() => handleHoverIn()}
                onMouseLeave={() => handleHoverOut()}
            >
                <h3 className={cx('name')}>
                    <span>ggs68korea.official</span> 
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle}/>
                </h3>
                <div className={cx('content')}>
                    <span>Ngại giùm luôn á</span>
                    <a href="/" className={cx('hastag')}>#ggs68</a>
                    <a href="/" className={cx('hastag')}>#ggs68</a>
                    <a href="/" className={cx('hastag')}>#ggs68</a>
                    <a href="/" className={cx('hastag')}>#ggs68</a>
                    <a href="/" className={cx('hastag')}>#ggs68</a>
                    <a href="/" className={cx('hastag')}>#ggs68</a>
                    <a href="/" className={cx('hastag')}>#ggs68</a>
                </div>
                <div className={cx('music')}>
                    <FontAwesomeIcon icon={faMusic}/>
                    <div className={cx('music-name')}>
                        Nhạc nền - Bnhi
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Video;