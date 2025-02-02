import React from 'react';  

interface MyButtonGreenProps {  
    onClick: () => void; // or the appropriate type  
    label: string;  
} 

export const MyButtonGreen: React.FC<MyButtonGreenProps> = ({ onClick, label }) => {  
    return (  
        <button  
            className='mt-3 w-full rounded-md h-11 bg-[#19d16f] text-white transition-colors duration-300 mb-10 hover:bg-[#e02b76]'  
            onClick={onClick} // Add the onClick handler here  
            >  
            {label}  
        </button>  
    );  
};  

export const MyButton: React.FC<MyButtonGreenProps> = ({ onClick, label }) => {  
    return (  
        <button  
            onClick={onClick} // Pass the onClick prop to the button  
            className='mt-3 w-32 h-11 bg-[#fb2e86] text-white transition-colors duration-300 hover:bg-[#e02b76]'>  
            {label}  
        </button>  
    );  
};