import React, { useEffect, useState, useRef } from 'react';
import './index.css';

import Key from '../Key/index'
import {
    keyListRow1,
    keyListRow2,
    keyListRow3,
    keyListRow4,
    keyListRow5,
    keyListRow6,
    keyList
} from '../../data/keys';


const Keyboard = () => {

    // hold set of currently pressed codes for fast ops + stable snapshot state for render
    const activeKeysRef = useRef(new Set());
    const [activeKey, setActiveKey] = useState([]);
    const [testedKeys, setTestedKeys] = useState(new Set());
    const [lastKey, setLastKey] = useState(null);

    useEffect(() => {
        const opts = { passive: false }; // ensure preventDefault is allowed

        const shouldPrevent = (e, code) => {
            if (!code) return false;
            // prevent modifier combos that commonly conflict (Ctrl/Meta)
            if (e.ctrlKey || e.metaKey) return true;
            // also prevent Alt alone or Alt+Shift combos that trigger browser/menu behavior
            if (e.altKey && !e.ctrlKey && !e.metaKey) return true;
            // function keys
            if (/^F\d+$/.test(code)) return true;
            const preventList = new Set([
                'Space', 'Tab', 'PrintScreen', 'Backspace', 'Delete',
                'Home', 'End', 'PageUp', 'PageDown',
                'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'
            ]);
            return preventList.has(code);
        };

        const handleKeyDown = (event) => {
            const code = event.code;
            if (!code) return;
            if (shouldPrevent(event, code)) event.preventDefault();

            setLastKey(code);

            if (!activeKeysRef.current.has(code)) {
                activeKeysRef.current.add(code);
                setActiveKey(Array.from(activeKeysRef.current));

                setTestedKeys(prev => {
                    const newSet = new Set(prev);
                    newSet.add(code);
                    return newSet;
                });
            }
        };

        const handleKeyUp = (event) => {
            const code = event.code;
            if (!code) return;
            if (shouldPrevent(event, code)) event.preventDefault();
            if (activeKeysRef.current.has(code)) {
                activeKeysRef.current.delete(code);
                setActiveKey(Array.from(activeKeysRef.current));
            }
        };

        document.addEventListener('keydown', handleKeyDown, opts);
        document.addEventListener('keyup', handleKeyUp, opts);

        return () => {
            document.removeEventListener('keydown', handleKeyDown, opts);
            document.removeEventListener('keyup', handleKeyUp, opts);
        };
    }, []); // run once

    const handleReset = () => {
        setTestedKeys(new Set());
        setLastKey(null);
        // We don't clear activeKeysRef because keys might still be held down
    };

    return (
        <div className="keyboard-container">
            <div className="keyboard-info">
                <div className="info-item">
                    <span className="label">Last Key Code:</span>
                    <span className="value">{lastKey || '-'}</span>
                </div>
                <div className="info-item">
                    <span className="label">Tested Keys:</span>
                    <span className="value">{testedKeys.size}</span>
                </div>
                <button className="reset-btn" onClick={handleReset}>Reset Test</button>
            </div>
            <div className="keyboard">
                <div className="left">
                    <div className="row rowst">
                        {
                            keyListRow1.map((key) => (
                                <Key
                                    activeKey={activeKey}
                                    tested={testedKeys.has(key.keyValue || key.keyName)}
                                    key={key.keyValue || key.keyName}
                                    item={key}
                                />
                            ))
                        }
                    </div>
                    <div className="row">
                        {
                            keyListRow2.map((key) => (
                                <Key
                                    activeKey={activeKey}
                                    tested={testedKeys.has(key.keyValue || key.keyName)}
                                    key={key.keyValue || key.keyName}
                                    item={key}
                                />
                            ))
                        }
                    </div>
                    <div className="row">
                        {
                            keyListRow3.map((key) => (
                                <Key
                                    activeKey={activeKey}
                                    tested={testedKeys.has(key.keyValue || key.keyName)}
                                    key={key.keyValue || key.keyName}
                                    item={key}
                                />
                            ))
                        }
                    </div>
                    <div className="row">
                        {
                            keyListRow4.map((key) => (
                                <Key
                                    activeKey={activeKey}
                                    tested={testedKeys.has(key.keyValue || key.keyName)}
                                    key={key.keyValue || key.keyName}
                                    item={key}
                                />
                            ))
                        }
                    </div>
                    <div className="row">
                        {
                            keyListRow5.map((key) => (
                                <Key
                                    activeKey={activeKey}
                                    tested={testedKeys.has(key.keyValue || key.keyName)}
                                    key={key.keyValue || key.keyName}
                                    item={key}
                                />
                            ))
                        }
                    </div>
                    <div className="row">
                        {
                            keyListRow6.map((key) => (
                                <Key
                                    activeKey={activeKey}
                                    tested={testedKeys.has(key.keyValue || key.keyName)}
                                    key={key.keyValue || key.keyName}
                                    item={key}
                                />
                            ))
                        }
                    </div>
                </div>
                <div className="right">
                    {
                        keyList.map((key) => (
                            <Key
                                activeKey={activeKey}
                                tested={testedKeys.has(key.keyValue || key.keyName)}
                                key={key.keyValue || key.keyName}
                                item={key}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default Keyboard;
