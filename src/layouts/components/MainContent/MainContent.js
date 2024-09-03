import classNames from "classnames/bind";

import style from "./MainContent.module.scss";
import Content from "./Content";

const cx = classNames.bind(style)
function MainContent() {
    return (  
        <div className={cx('wrapper')}>
            <Content isPlay={true}/>
            <Content />
            <Content />
            <Content />
        </div>
    );
}

export default MainContent;