'use client'

import Container from "../Container"

const Footer = () => {
    return (
        <div className="
            px-auto
            py-4
            border-t-2 border-violet-200
        ">
            <Container>
                <div className="flex justify-between">
                    <div>
                        Developed by the winners of HackRPI X
                    </div>
                    <div>
                        CyberBud @ 2023, All Rights Reserved
                    </div>
                </div>
            </Container>

        </div>
    )
}

export default Footer