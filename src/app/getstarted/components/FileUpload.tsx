import Image from 'next/image';
import React, { useRef, useState } from 'react';

interface FileUploadProps {
    onImageUpload: (image: string) => void; // Callback to pass the uploaded image to the parent
}

const FileUpload: React.FC<FileUploadProps> = ({ onImageUpload }) => {
    const [image, setImage] = useState<string | null>(null);
    const [uploadStatus, setUploadStatus] = useState<string | null>(null);
    const inputRef = useRef<HTMLInputElement | null>(null);

    const handleImageClick = () => {
        inputRef.current?.click();
    };

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImage(reader.result as string); // Set the image preview
                setUploadStatus(null);
                onImageUpload(reader.result as string); // Pass the image to the parent
            };
            reader.readAsDataURL(file);
        }
    };

    const handleUpload = async () => {
        if (!image) {
            setUploadStatus('No image selected.');
            return;
        }

        // Convert the base64 string back to a Blob for uploading
        const response = await fetch(image);
        const blob = await response.blob();
        const formData = new FormData();
        formData.append('file', blob, 'uploaded_image.png'); // Change the filename as needed

        try {
            const uploadResponse = await fetch('/api/upload', { // Replace with your API endpoint
                method: 'POST',
                body: formData,
            });

            if (uploadResponse.ok) {
                setUploadStatus('Image uploaded successfully!');
            } else {
                const errorText = await uploadResponse.text(); // Get the error message from the response
                setUploadStatus(`Failed to upload image: ${errorText}`);
            }
        } catch (error) {
            // Log the error to the console for debugging
            console.error('Upload error:', error);
            setUploadStatus('Error uploading image. Please try again.');
        }
    };

    return (
        <div onClick={handleImageClick} className='cursor-pointer'>
            <input
                className='hidden'
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                ref={inputRef}
                title='Upload Image'
            />
            {image ? (
                <div className='relative flex items-center justify-center'>
                    <div className='absolute backdrop-brightness-75 w-[80%] h-full flex items-center justify-center rounded-full'>
                        <Image className='size-8' src={'/add_a_photo.svg'} alt='Upload' width={80} height={80} />
                    </div>
                    <Image className='rounded-full' src={image} alt="Uploaded" width={80} height={80} />
                </div>
            ) : (
                <Image src={'/AvatarProfile.svg'} alt='Upload Icon' width={80} height={80} />
            )}
            {image && (
                <div>
                    <p 
                        onClick={handleUpload} 
                        className='text-blue-500 no-underline cursor-pointer mt-2'
                    >
                        Upload Image
                    </p>
                    {uploadStatus && <p className='text-red-500'>{uploadStatus}</p>}
                </div>
            )}
        </div>
    );
};

export default FileUpload;