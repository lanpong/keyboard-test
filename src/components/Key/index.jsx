import React, { useState, useCallback } from 'react';
import './index.css';

const Key = ({ item, activeKey = [] }) => {
    const [pointerActive, setPointerActive] = useState(false);

    const handlePointerDown = useCallback((e) => {
        if (e.preventDefault) e.preventDefault();
        setPointerActive(true);
    }, []);

    const handlePointerUp = useCallback(() => {
        setPointerActive(false);
    }, []);

    const code = item.keyValue || item.keyName;
    const isActive = pointerActive || (Array.isArray(activeKey) && activeKey.includes(code));

    return (
        <div
            role="button"
            tabIndex={0}
            aria-pressed={isActive}
            aria-label={item.keyName}
            className={`key ${item.keyClassName || ''} ${isActive ? 'active' : ''}`}
            onPointerDown={handlePointerDown}
            onPointerUp={handlePointerUp}
            onPointerLeave={handlePointerUp}
            onKeyDown={(e) => {
                if (e.code === 'Space' || e.code === 'Enter') {
                    if (e.preventDefault) e.preventDefault();
                    setPointerActive(true);
                }
            }}
            onKeyUp={() => setPointerActive(false)}
        >
            <span className="key-label">{item.keyName}</span>
        </div>
    );
};

export default React.memo(Key);
