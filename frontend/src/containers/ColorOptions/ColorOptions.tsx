import React from 'react';

import {
    ColorOptionsContainer,
    ColorOptionsTitle,
    ColorCirclesContainer,
    ColorCircle,
} from './ColorOptions.styled.ts';


interface ColorOptionsProps {
    colorOptions: string[];
    selectedColor: string | null;
    onColorSelect: (color: string | null) => void;
}

const ColorOptions: React.FC<ColorOptionsProps> = ({ colorOptions, selectedColor, onColorSelect }) => {
    return (
        <ColorOptionsContainer
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <ColorOptionsTitle>Color</ColorOptionsTitle>
            <ColorCirclesContainer>
                {colorOptions.map((color) => (
                    <ColorCircle
                        key={color}
                        color={color}
                        isSelected={selectedColor === color}
                        onClick={() => onColorSelect(color)}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                    />
                ))}
            </ColorCirclesContainer>
        </ColorOptionsContainer>
    );
};

export default ColorOptions;