import classNames from "classnames/bind";
import React from "react";
import { useState } from 'react'

import style from "./MainContent.module.scss";
import Content from "./Content";

const cx = classNames.bind(style)
function MainContent() {
    const [ autoScrolling, setAutoScrolling ] = useState(false);

    const handleAutoScrollingToggle = () => {
        setAutoScrolling(!autoScrolling);
    };

    return (  
        <div className={cx('wrapper')}>
            <Content 
                 autoScrolling={autoScrolling} 
                 onToggleAutoScrolling={handleAutoScrollingToggle} 
            />
            <Content 
                 autoScrolling={autoScrolling} 
                 onToggleAutoScrolling={handleAutoScrollingToggle} 
            />
            <Content 
                 autoScrolling={autoScrolling} 
                 onToggleAutoScrolling={handleAutoScrollingToggle} 
            />
        </div>
    );
}

export default MainContent;