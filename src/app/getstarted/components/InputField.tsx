import React from 'react';

interface InputFieldProps {
    label?: string;          // Optional label for the input field
    placeholder?: string;    // Placeholder text for the input field
    type?: string;           // Type of the input (e.g., text, password, email)
    value?: string;          // Value of the input field
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void; // Change event handler
    required?: boolean; 
    className?: string     // Whether the input is required
}

const InputField: React.FC<InputFieldProps> = ({
    label,
    placeholder,
    type = 'text',           // Default type is text
    value,
    onChange,
    required = false, 
    className      // Default to not required
}) => {
    return (
        <div className="flex flex-col mb-4">
            {label && <label className="mb-2 text-sm font-medium">{label}</label>}
            <input
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                required={required}
                className={`border ${className} border-[#00000033] rounded-xl px-4 py-3 focus:outline-none`}
            />
        </div>
    );
};

export default InputField;