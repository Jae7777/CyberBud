import {FaArrowDown} from 'react-icons/fa'
import Link from 'next/link'
export default function ScrollToBottomButton(){
    return(
        <Link className="fixed bottom-0 right-0 p-2" href="#about">
            <FaArrowDown/>
        </Link>
    )
}