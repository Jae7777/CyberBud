'use client'

import Button from "./Button"
import { AiOutlineUpload } from "react-icons/ai"

const UploadButton = () => {
    return (
        <div className="w-56 px-4">
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