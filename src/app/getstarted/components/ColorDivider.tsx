import React from 'react';

interface ColoredDividerProps {
    colors: string[]; 
}

const ColoredDivider: React.FC<ColoredDividerProps> = ({ colors }) => {
    return (
        <div className='grid grid-cols-3 gap-2 px-4'>
            {colors.map((color, index) => (
                <div key={index} className='py-2'>
                    <hr className={`border-[${color}] border-2 rounded-full`} />
                </div>
            ))}
        </div>
    );
};

export default ColoredDivider;