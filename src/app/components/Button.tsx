import React from 'react';

interface ButtonProps {
    label?: string;          // The text displayed on the button
    onClick?: () => void;   // Function to handle click events
    className?: string;     // Additional classes for customization
    type?: 'button' | 'submit' | 'reset'; // Button type
    disabled?: boolean;      // Disable the button if needed
}

const Button: React.FC<ButtonProps> = ({
    label = "Get Started",  // Default label
    onClick,                // Function to handle click events
    className = "",         // Additional classes for customization
    type = "button",        // Button type (button, submit, reset)
    disabled = false        // Disable the button if needed
}) => {
    return (
        <div className='w-full'>
            <button 
                type={type} 
                onClick={onClick} 
                disabled={disabled}
                className={`justify-end w-full bg-[#8A226F] text-white rounded-full py-[10px] ${className}`}
            >
                {label}
            </button>
        </div>
    );
};

export default Button;