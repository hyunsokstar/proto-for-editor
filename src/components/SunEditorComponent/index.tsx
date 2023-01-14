import React, { useRef, useEffect, useState } from "react";
import SunEditor from 'suneditor-react';
import SunEditorCore from "suneditor/src/lib/core";
import 'suneditor/dist/css/suneditor.min.css';


const MyComponent = (props: any) => {
    const editor = useRef<SunEditorCore>();
    const getSunEditorInstance = (sunEditor: SunEditorCore) => {
        editor.current = sunEditor;
    };
    const [image, setImage] = useState("");

    function handleInput(event: any) {
        console.log("handle event 발생 : ", event);
    }

    function handleDrop(event: any) {
        console.log("handle drop : ", event);
        // const canvas = document.createElement('canvas');
        // let ctx = canvas.getContext("2d");
        // let img = "https://image2.1004gundam.com/item_images/goods/380/1376376018.jpg"
        // ctx?.drawImage(img, 0, 0);
        // MyComponent.insertImage(event.target.files) 

    }


    return (
        <div>
            <p> My Other Contents </p>
            <SunEditor
                onDrop={handleDrop}
                onInput={handleInput}
                lang="en"
                getSunEditorInstance={getSunEditorInstance}
                setOptions={{
                    buttonList: [
                        ["undo", "redo"],
                        ["font", "fontSize"],
                        // ['paragraphStyle', 'blockquote'],
                        [
                            "bold",
                            "underline",
                            "italic",
                            "strike",
                            "subscript",
                            "superscript"
                        ],
                        ["fontColor", "hiliteColor"],
                        ["align", "list", "lineHeight"],
                        ["outdent", "indent"],

                        ["table", "horizontalRule", "link", "image", "video"],
                        // ['math'] //You must add the 'katex' library at options to use the 'math' plugin.
                        // ['imageGallery'], // You must add the "imageGalleryUrl".
                        // ["fullScreen", "showBlocks", "codeView"],
                        ["preview", "print"],
                        ["removeFormat"]

                        // ['save', 'template'],
                        // '/', Line break
                    ],
                }} />
        </div>
    );
};


export default MyComponent;