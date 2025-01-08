import React, { useState, useRef } from "react";

import TShirtCanvas from "./TShirtCanvas";
import DropImage from "./DropImage";

function TShirt() {

    const [tshirtImage, setTshirtImage] = useState(null);
    const [logoImage, setLogoImage] = useState(null);
    const stageRef = useRef(null);


    const loadImage = (file, callback) => {
        const reader = new FileReader();
        reader.onload = () => {
            const img = new Image();
            img.src = reader.result;
            img.onload = () => callback(img);
        };
        reader.readAsDataURL(file);
    };


    const handleTshirtUpload = (files) => {
        const file = Array.isArray(files) ? files[0] : files.target.files[0];
        if (file) loadImage(file, setTshirtImage);
    };


    const handleLogoUpload = (files) => {
        const file = Array.isArray(files) ? files[0] : files.target.files[0];
        if (file) loadImage(file, setLogoImage);
    };

    const handleSaveImage = () => {
        if (stageRef.current) {
            const dataURL = stageRef.current.toDataURL();
            const link = document.createElement("a");
            link.download = "tshirt-design.png";
            link.href = dataURL;
            link.click();
        }
    };

    return (
        <div className="p-8">
            <div className="flex justify-start gap-16">
                <div className="flex justify-center items-center py-5">
                    {tshirtImage ? <TShirtCanvas vas tshirtImage={tshirtImage} logoImage={logoImage} stageRef={stageRef} /> :
                        <DropImage onChange={handleTshirtUpload} text="Drag & Drop image or Click to select image" className="border border-dashed rounded-xl p-3 h-[250px] w-[350px] flex flex-col justify-center items-center" />
                    }

                </div>
                <div className="flex justify-center items-center py-5">
                    <DropImage onChange={handleLogoUpload} text="Drag & Drop Logo or Click to select Logo" className="border border-dashed rounded-xl p-3 h-[150px] w-[250px] flex flex-col justify-center items-center" />
                </div>
            </div>

            <button onClick={handleSaveImage} className="border rounded-lg px-5 py-1.5">Save Image</button>
        </div>
    );
}

export default TShirt;
