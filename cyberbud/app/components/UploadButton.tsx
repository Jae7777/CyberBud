'use client'

import Button from "./Button"
import { AiOutlineUpload } from "react-icons/ai"

const UploadButton = () => {
    return (
        <div>
            <Button 
                outline
                label="Upload"
                icon={AiOutlineUpload}
                onClick={() => {}}
            />
        </div>
    )
}

export default UploadButton