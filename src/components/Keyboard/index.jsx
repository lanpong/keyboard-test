import React, { useEffect, useState, useRef } from 'react';
import './index.css';

import Key from '../Key/index'


const keyListRow1 = [
    { keyName: 'ESC', keyValue: 'Escape' },
    { keyName: 'F1', keyValue: 'F1', keyClassName: 'f1' },
    { keyName: 'F2', keyValue: 'F2' },
    { keyName: 'F3', keyValue: 'F3' },
    { keyName: 'F4', keyValue: 'F4' },
    { keyName: 'F5', keyValue: 'F5', keyClassName: 'f5' },
    { keyName: 'F6', keyValue: 'F6' },
    { keyName: 'F7', keyValue: 'F7' },
    { keyName: 'F8', keyValue: 'F8' },
    { keyName: 'F9', keyValue: 'F9', keyClassName: 'f9' },
    { keyName: 'F10', keyValue: 'F10' },
    { keyName: 'F11', keyValue: 'F11' },
    { keyName: 'F12', keyValue: 'F12' },
    { keyName: 'PRTSC', keyValue: '', keyClassName: 'margin-s' },
    { keyName: 'LOCK', keyValue: 'ScrollLock' },
    { keyName: 'PAUSE', keyValue: 'Pause' }
]
const keyListRow2 = [
    { keyName: '`', keyValue: 'Backquote1' },
    { keyName: '1', keyValue: 'Digit1' },
    { keyName: '2', keyValue: 'Digit2' },
    { keyName: '3', keyValue: 'Digit3' },
    { keyName: '4', keyValue: 'Digit4' },
    { keyName: '5', keyValue: 'Digit5' },
    { keyName: '6', keyValue: 'Digit6' },
    { keyName: '7', keyValue: 'Digit7' },
    { keyName: '8', keyValue: 'Digit8' },
    { keyName: '9', keyValue: 'Digit9' },
    { keyName: '0', keyValue: 'Digit0' },
    { keyName: '-', keyValue: 'Minus' },
    { keyName: '=', keyValue: 'Equal' },
    { keyName: 'Backspace', keyValue: 'Backspace', keyClassName: 'backspace' },
    { keyName: 'Insert', keyValue: 'Insert', keyClassName: 'margin-s' },
    { keyName: 'Home', keyValue: 'Home' },
    { keyName: 'Page Up', keyValue: 'PageUp' },
    { keyName: 'Num Lock', keyValue: 'NumLock', keyClassName: 'margin-s' },
    { keyName: '/', keyValue: 'NumpadDivide' },
    { keyName: '*', keyValue: 'NumpadMultiply' },
]
const keyListRow3 = [
    { keyName: 'Tab', keyValue: 'Tab', keyClassName: 'tab' },
    { keyName: 'Q', keyValue: 'KeyQ' },
    { keyName: 'W', keyValue: 'KeyW' },
    { keyName: 'E', keyValue: 'KeyE' },
    { keyName: 'R', keyValue: 'KeyR' },
    { keyName: 'T', keyValue: 'KeyT' },
    { keyName: 'Y', keyValue: 'KeyY' },
    { keyName: 'U', keyValue: 'KeyU' },
    { keyName: 'I', keyValue: 'KeyI' },
    { keyName: 'O', keyValue: 'KeyO' },
    { keyName: 'P', keyValue: 'KeyP' },
    { keyName: '[', keyValue: 'BracketLeft' },
    { keyName: ']', keyValue: 'BracketRight' },
    { keyName: '\\', keyValue: 'Backslash', keyClassName: 'backslash' },
    { keyName: 'Delete', keyValue: 'Delete', keyClassName: 'margin-s' },
    { keyName: 'End', keyValue: 'End' },
    { keyName: 'Page Down', keyValue: 'PageDown' },
    { keyName: '7', keyValue: 'Numpad7', keyClassName: 'margin-s' },
    { keyName: '8', keyValue: 'Numpad8' },
    { keyName: '9', keyValue: 'Numpad9' },
]
const keyListRow4 = [
    { keyName: 'Caps Lock', keyValue: 'CapsLock', keyClassName: 'caps-lock' },
    { keyName: 'A', keyValue: 'KeyA' },
    { keyName: 'S', keyValue: 'KeyS' },
    { keyName: 'D', keyValue: 'KeyD' },
    { keyName: 'F', keyValue: 'KeyF' },
    { keyName: 'G', keyValue: 'KeyG' },
    { keyName: 'H', keyValue: 'KeyH' },
    { keyName: 'J', keyValue: 'KeyJ' },
    { keyName: 'K', keyValue: 'KeyK' },
    { keyName: 'L', keyValue: 'KeyL' },
    { keyName: ';', keyValue: 'Semicolon' },
    { keyName: '\'', keyValue: 'Quote' },
    { keyName: 'Enter', keyValue: 'Enter', keyClassName: 'enter' },
    { keyName: '4', keyValue: 'Numpad4', keyClassName: 'numpad4' },
    { keyName: '5', keyValue: 'Numpad5' },
    { keyName: '6', keyValue: 'Numpad6' },
]
const keyListRow5 = [
    { keyName: 'Shift', keyValue: 'ShiftLeft', keyClassName: 'left-shift' },
    { keyName: 'Z', keyValue: 'KeyZ' },
    { keyName: 'X', keyValue: 'KeyX' },
    { keyName: 'C', keyValue: 'KeyC' },
    { keyName: 'V', keyValue: 'KeyV' },
    { keyName: 'B', keyValue: 'KeyB' },
    { keyName: 'N', keyValue: 'KeyN' },
    { keyName: 'M', keyValue: 'KeyM' },
    { keyName: ',', keyValue: 'Comma' },
    { keyName: '.', keyValue: 'Period' },
    { keyName: '/', keyValue: 'Slash' },
    { keyName: 'Shift', keyValue: 'ShiftRight', keyClassName: 'right-shift' },
    { keyName: '↑', keyValue: 'ArrowUp', keyClassName: 'arrowup' },
    { keyName: '1', keyValue: 'Numpad1', keyClassName: 'numpad1' },
    { keyName: '2', keyValue: 'Numpad2' },
    { keyName: '3', keyValue: 'Numpad3' },
]
const keyListRow6 = [
    { keyName: 'Ctrl', keyValue: 'ControlLeft', keyClassName: 'left-ctrl' },
    { keyName: 'Sys', keyValue: 'MetaLeft', keyClassName: 'sys' },
    { keyName: 'Alt', keyValue: 'AltLeft', keyClassName: 'left-alt' },
    { keyName: 'Space', keyValue: 'Space', keyClassName: 'space' },
    { keyName: 'Alt', keyValue: 'AltRight', keyClassName: 'right-alt' },
    { keyName: 'Sys', keyValue: 'MetaRight', keyClassName: 'sys' },
    { keyName: 'Menu', keyValue: 'MetaRight', keyClassName: 'left-alt' },
    { keyName: 'Ctrl', keyValue: 'ControlRight', keyClassName: 'right-ctrl' },
    { keyName: '←', keyValue: 'ArrowLeft', keyClassName: 'margin-s' },
    { keyName: '↓', keyValue: 'ArrowDown' },
    { keyName: '→', keyValue: 'ArrowRight' },
    { keyName: '0', keyValue: 'Numpad0', keyClassName: 'numpad0 margin-s' },
    { keyName: '.', keyValue: 'NumpadDecimal' },
]
const keyList = [
    { keyName: '-', keyValue: 'NumpadSubtract' },
    { keyName: '+', keyValue: 'NumpadAdd', keyClassName: 'numpadadd' },
    { keyName: 'Enter', keyValue: 'NumpadEnter', keyClassName: 'numpadenter' },
]

const Keyboard = () => {

    const [activeKey, setActiveKey] = useState([]);
    const prevKeyRef = useRef('');

    useEffect(() => {
        const handleKeyDown = (event) => {
            event.preventDefault();
            if (event.code !== prevKeyRef.current) {
                setActiveKey([...activeKey, event.code]);
                prevKeyRef.current = event.code
            }
        };

        const handleKeyUp = (event) => {
            prevKeyRef.current = ''
            let newActiveKey = activeKey.filter(item => item !== event.code)
            setActiveKey([...newActiveKey]);
        };

        document.addEventListener("keydown", handleKeyDown);
        document.addEventListener("keyup", handleKeyUp);

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
            document.removeEventListener("keyup", handleKeyUp);
        };
    }, [activeKey]);


    return (
        <div className="keyboard">
            <div className="left">
                <div className="row rowst">
                    {
                        keyListRow1.map((key, index) => (
                            <Key activeKey={activeKey} key={index} item={key} />
                        ))
                    }
                </div>
                <div className="row">
                    {
                        keyListRow2.map((key, index) => (
                            <Key activeKey={activeKey} key={index} item={key} />
                        ))
                    }
                </div>
                <div className="row">
                    {
                        keyListRow3.map((key, index) => (
                            <Key activeKey={activeKey} key={index} item={key} />
                        ))
                    }
                </div>
                <div className="row">
                    {
                        keyListRow4.map((key, index) => (
                            <Key activeKey={activeKey} key={index} item={key} />
                        ))
                    }
                </div>
                <div className="row">
                    {
                        keyListRow5.map((key, index) => (
                            <Key activeKey={activeKey} key={index} item={key} />
                        ))
                    }
                </div>
                <div className="row">
                    {
                        keyListRow6.map((key, index) => (
                            <Key activeKey={activeKey} key={index} item={key} />
                        ))
                    }
                </div>
            </div>
            <div className="right">
                {
                    keyList.map((key, index) => (
                        <Key activeKey={activeKey} key={index} item={key} />
                    ))
                }
            </div>
        </div>
    );
}

export default Keyboard;
