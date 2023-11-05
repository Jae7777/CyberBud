'use client'

interface AboutCardProps {
    heading: string
    body: string
}

const AboutCard: React.FC<AboutCardProps> = ({
    heading,
    body
}) => {
    return (
        <div className="
            my-12
            rounded-md
            bg-gradient-to-b
            from-gray-800
            to-violet-900
        ">
            <div className="
                p-4
                outline-double
                outline-violet-900
                bg-gray-800    
            ">
                {heading}
            </div>
            <div className="
                p-4
            ">
                {body}
            </div>
        </div>
    )
}

export default AboutCard