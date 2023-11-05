'use client'

import Container from "../Container"

interface ProblemProp {
    key: number
    title: string 
    difficulty: number
    description: string
    href: string
}
const Problem: React.FC<ProblemProp> = ({
    key,
    title, 
    difficulty,  
    description,
    href
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
                <a href={href}>
                    <div className="flex flex-row justify-between">
                        <div className="pr-4 pl-3">
                            {key}.
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
                </a>
            </Container>
        </div>
    )
}

export default Problem