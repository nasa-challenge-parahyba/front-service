import React, { useState, useEffect } from 'react';

export default function Typewriter({ children }) {
    const [textElements, setTextElements] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [currentText, setCurrentText] = useState('');
    const speed = 70;
    const childArray = React.Children.toArray(children);

    useEffect(() => {
        if (currentIndex < childArray.length) {
            const currentElementText = childArray[currentIndex].props.children;
            if (currentText.length < currentElementText.length) {
                const timeoutId = setTimeout(() => {
                    setCurrentText(prevText => prevText + currentElementText.charAt(currentText.length));
                }, speed);
                return () => clearTimeout(timeoutId);
            } else {
                setTextElements(prev => [
                    ...prev,
                    React.cloneElement(childArray[currentIndex], { children: currentText })
                ]);
                setCurrentText('');
                setCurrentIndex(currentIndex + 1);
            }
        }
    }, [currentIndex, currentText, childArray]);

    return (
        <div>
            {textElements}
            {currentIndex < childArray.length && (
                React.cloneElement(childArray[currentIndex], { children: currentText })
            )}
        </div>
    );
}
