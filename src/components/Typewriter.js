import React, { useState, useEffect } from 'react';

export default function Typewriter({ children, textSpeed = 50 }) {
    const [textElements, setTextElements] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [currentText, setCurrentText] = useState('');
    const speed = textSpeed;
    const childArray = React.Children.toArray(children);

    useEffect(() => {
        if (currentIndex < childArray.length) {
            const currentElement = childArray[currentIndex];
            const currentElementText = currentElement.props.children;

            if (typeof currentElementText === 'string' && currentText.length < currentElementText.length) {
                const timeoutId = setTimeout(() => {
                    setCurrentText(prevText => prevText + currentElementText.charAt(currentText.length));
                }, speed);
                return () => clearTimeout(timeoutId);
            } else {
                setTextElements(prev => [
                    ...prev,
                    typeof currentElementText === 'string'
                        ? React.cloneElement(currentElement, { children: currentText })
                        : currentElement // Render the component directly if it's not a string
                ]);
                setCurrentText('');
                setCurrentIndex(currentIndex + 1);
            }
        }
    }, [currentIndex, currentText, childArray]);

    return (
        <div>
            {textElements}
            {currentIndex < childArray.length && typeof childArray[currentIndex].props.children === 'string' && (
                React.cloneElement(childArray[currentIndex], { children: currentText })
            )}
        </div>
    );
}
