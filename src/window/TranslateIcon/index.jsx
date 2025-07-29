import React, { useState } from 'react';
import { BsTranslate } from 'react-icons/bs';
import { useSpring, animated } from '@react-spring/web';
import Translate from '../Translate';

export default function TranslateIcon() {
    const [iconView, setIconView] = useState(true);
    const animation = useSpring({
        loop: true,
        to: [
            { transform: 'rotate(-15deg) scale(1.05)' },
            { transform: 'rotate(15deg) scale(1)' }
        ],
        config: { tension: 120, friction: 20 }
    });

    return iconView ? (
        <div
            className="w-screen h-screen bg-background flex items-center justify-center"
            onMouseEnter={() => setIconView(false)}
            data-tauri-drag-region="true"
        >
            <animated.div style={animation}>
                <BsTranslate className="text-4xl text-primary cursor-pointer" />
            </animated.div>
        </div>
    ) : (
        <Translate
            closeOnBlur={true}
            alwaysOnTop={true}
            windowPosition="pre_state"
            rememberWindowSize={true}
            onRequestClose={() => setIconView(true)}
        />
    );
}
