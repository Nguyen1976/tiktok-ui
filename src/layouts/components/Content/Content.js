import classNames from "classnames/bind";

import styles from './Content.module.scss';
import Video from './Video'

const cx = classNames.bind(styles);

function Content() {
    return (  
        <div className={cx('wrapper')}>
            <div className={cx('video')}>
                <Video />
            </div>
        </div>
    );
}

export default Content;