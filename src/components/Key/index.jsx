import React from "react";
import './index.css'

function Key(props) {
    const { activeKey } = props
    const { keyName, keyValue, keyClassName } = props.item

    return (
        <div className={`key ${activeKey.includes(keyValue) ? 'active' : ''} ${keyClassName ? keyClassName : ''}`}>
            {keyName}
        </div>
    )
}

export default Key;
