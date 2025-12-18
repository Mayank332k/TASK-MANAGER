import React from 'react';

const Parent = ({ children }) => {
    const parentStyle = {
        border: '3px dashed grey',
        borderRadius : '20px',
        padding: '20px',
        margin: '20px auto',
        width: '90%',
        maxWidth: '600px',
        fontFamily: 'monospace',
    };

    return (
        <div style={parentStyle}>
            {children}
        </div>
    );
};

export default Parent;
