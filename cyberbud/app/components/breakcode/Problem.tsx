'use client'

import Container from "../Container"

interface ProblemProp {
    id: number
    title: string 
    difficulty: number
    description: string

}
const Problem: React.FC<ProblemProp> = ({
    id,
    title, 
    difficulty,  
    description
}) => {
    return (
        <div className="
            bg-slate-600 
            my-4 py-4 
            mx-10
            lg:mx-16
            outline-4
            outline-violet-900
            cursor-pointer
            hover:bg-slate-500
        ">
            <Container>
                <div className="flex flex-row justify-between">
                    <div className="pr-4 pl-3">
                        {id}.
                    </div>
                    <div className="pr-12">
                        {title}
                    </div>
                    <div className="hidden lg:block">
                        {description}
                    </div>
                    <div className={`
                        ${difficulty <= 2.0 && "text-green-600"}
                        ${difficulty <= 3.5 && difficulty > 2.0 && "text-yellow-600"}
                        ${difficulty <= 5.0 && difficulty > 3.5 && "text-red-600"}
                    `}>
                        {difficulty}<span className="text-slate-100">/5.0</span>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Problem