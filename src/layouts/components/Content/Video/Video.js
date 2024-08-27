import classNames from "classnames/bind";
import ReactPlayer from 'react-player'

import styles from './Video.module.scss';
import video from '~/assets/videos/test.mp4'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);

function Video() {
    return (  
        <div className={cx('video')}>
            <ReactPlayer 
                className={cx('video')}
                url={video} 
                controls={false} 
                width='100%' 
                height='auto'
            />
            <div className={cx('overlay')}>
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
            </div>
        </div>
    );
}

export default Video;