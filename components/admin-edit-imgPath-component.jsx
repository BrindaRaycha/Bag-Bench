import React from "react";
import { Label,Box,DropZone,BasePropertyProps,DropZoneProps,DropZoneItem } from "admin-bro/design-system";

const Edit = (props)=>{
    const{property,onChange,record}=props
    function handlechange(files) {
        onChange(property.name, files[0]);
    }

    const uploadedphoto = record.params.imagePath
    const phototoupload = record.params[property.name]
    return(
        <Box>
            <Label>Image</Label>
            <DropZone onChange={(files)=>console.log(files)}/>
            {uploadedphoto && !phototoupload && 
            (
                <DropZoneItem src={uploadedphoto}/>
            )}
        </Box>

    )
}

export default Edit;