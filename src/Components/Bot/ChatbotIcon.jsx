
import React, { useEffect } from 'react';
import './ChatbotIcon.css';

const ChatbotIcon = () => {
    useEffect(() => {

    const injectScript = document.createElement('script');
    injectScript.src = 'https://cdn.botpress.cloud/webchat/v1/inject.js';
    injectScript.async = true;
    document.body.appendChild(injectScript);

    const configScript = document.createElement('script');
    configScript.src = 'https://mediafiles.botpress.cloud/42081fff-5da2-4dc2-8211-d8bd9cf0f804/webchat/config.js';
    configScript.defer = true;
    document.body.appendChild(configScript);

    return () => {
        document.body.removeChild(injectScript);
        document.body.removeChild(configScript);
    };
    }, []);

    const handleClick = () => {
        window.botpressWebChat.sendEvent({
        type: 'show',
    });
};
};

export default ChatbotIcon;
