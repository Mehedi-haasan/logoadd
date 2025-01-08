import React, { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'

function DropImage({ onChange,className='',text }) {
    const onDrop = useCallback((acceptedFiles) => {

        if (onChange) {
            onChange(acceptedFiles);
        }
        acceptedFiles.forEach(file => {
            // console.log('File name:', file.name);
            // console.log('File size:', file.size);
            // console.log('File type:', file.type);
            // console.log('File object:', file);
        });

    }, []);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

    return (
        <div {...getRootProps()} className={className}>
            <input {...getInputProps()} />
            {isDragActive ? <p>Drop the files here ...</p> : <div className='flex flex-col justify-center items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><path fill="currentColor" d="M14.702 28.838c-1.757 0-3.054-.031-4.248-.061c-1.014-.024-1.954-.047-3.043-.047a6.454 6.454 0 0 1-6.447-6.446a6.4 6.4 0 0 1 2.807-5.321a10.6 10.6 0 0 1-.217-2.138C3.554 8.983 8.307 4.23 14.15 4.23c3.912 0 7.495 2.164 9.332 5.574a6.4 6.4 0 0 1 4.599-1.929a6.454 6.454 0 0 1 6.258 8.008a6.45 6.45 0 0 1 4.699 6.207a6.455 6.455 0 0 1-6.447 6.448c-1.661 0-2.827.013-3.979.024c-1.126.012-2.239.024-3.784.024a.5.5 0 0 1 0-1c1.541 0 2.65-.012 3.773-.024c1.155-.012 2.325-.024 3.99-.024a5.447 5.447 0 0 0 1.025-10.798a.5.5 0 0 1-.379-.653a5.452 5.452 0 0 0-5.156-7.213a5.41 5.41 0 0 0-4.318 2.129a.498.498 0 0 1-.852-.101a9.62 9.62 0 0 0-8.76-5.674c-5.291 0-9.596 4.304-9.596 9.595c0 .76.09 1.518.267 2.252a.5.5 0 0 1-.227.545a5.41 5.41 0 0 0-2.63 4.662a5.453 5.453 0 0 0 5.447 5.446c1.098 0 2.045.022 3.067.048c1.188.028 2.477.06 4.224.06a.5.5 0 1 1-.001 1.002" /><path fill="currentColor" d="M26.35 22.456a.5.5 0 0 1-.347-.14l-6.777-6.535l-6.746 6.508a.5.5 0 1 1-.694-.721l7.093-6.841a.5.5 0 0 1 .694-.001l7.123 6.869a.5.5 0 0 1-.346.861" /><path fill="currentColor" d="M19.226 35.769a.5.5 0 0 1-.5-.5V15.087a.5.5 0 0 1 1 0V35.27a.5.5 0 0 1-.5.499" /></svg>
                <p className='text-center'>{text}</p>
            </div>}
            

        </div>
    )
}

export default DropImage