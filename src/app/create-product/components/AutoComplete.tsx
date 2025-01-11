'use client'
import React, { useState } from 'react';

interface AutocompleteTextareaProps {
    suggestions: string[]; // Array of suggestions to display
}

const AutocompleteTextarea: React.FC<AutocompleteTextareaProps> = ({ suggestions }) => {
    const [inputValue, setInputValue] = useState<string>('');
    const [filteredSuggestions, setFilteredSuggestions] = useState<string[]>([]);
    const [showSuggestions, setShowSuggestions] = useState<boolean>(false);

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const value = e.target.value;
        setInputValue(value);

        // Filter suggestions based on the current input value
        if (value) {
            const filtered = suggestions.filter(suggestion =>
                suggestion.toLowerCase().includes(value.toLowerCase())
            );
            setFilteredSuggestions(filtered);
            setShowSuggestions(true);
        } else {
            setShowSuggestions(false);
        }
    };

    const handleSuggestionClick = (suggestion: string) => {
        // Add the selected suggestion to the textarea
        setInputValue(prev => (prev ? `${prev}, ${suggestion}` : suggestion));
        setShowSuggestions(false);
    };

    return (
        <div className="relative mt-[-10px] pb-2">
            <textarea
                className='border border-[#00000033] focus:outline-none h-20 rounded-xl w-full px-4 py-2'
                name="description"
                id="collection"
                placeholder='Product Collection'
                value={inputValue}
                onChange={handleChange}
            />
            {showSuggestions && filteredSuggestions.length > 0 && (
                <ul className="absolute z-10 bg-white border border-gray-300 rounded-md w-full mt-1 max-h-60 overflow-auto">
                    {filteredSuggestions.map((suggestion, index) => (
                        <li
                            key={index}
                            className="px-4 py-2 cursor-pointer hover:bg-gray-200"
                            onClick={() => handleSuggestionClick(suggestion)}
                        >
                            {suggestion}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default AutocompleteTextarea;