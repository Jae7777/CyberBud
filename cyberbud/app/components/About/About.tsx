import { buffer } from "stream/consumers"
import AboutCard from "./AboutCard"

const About = () => {
    const bufferOverflowBody = "A buffer overflow is a type of software vulnerability that occurs when a program writes more data to a buffer (a temporary storage area) than it can hold, causing the excess data to overflow into adjacent memory locations. This can lead to unintended consequences, such as overwriting critical data, crashing the program, or potentially allowing an attacker to execute malicious code. Buffer overflows are a common security issue and can be exploited to compromise a system's security. To mitigate this risk, developers use various programming techniques and security measures to prevent buffer overflow vulnerabilities."
    const SQLInjectionBody = "SQL injection is a type of cyberattack where malicious SQL (Structured Query Language) code is injected into a web application's input fields. This code can manipulate a database's operations, potentially allowing unauthorized access, data theft, or other malicious actions. SQL injection occurs when a web application doesn't properly validate or sanitize user input, allowing attackers to exploit vulnerabilities. To prevent SQL injection, developers should use prepared statements or parameterized queries and input validation techniques to ensure that user input is safe and doesn't interfere with the SQL commands executed by the application."
    const spoofingAttackBody = "A spoofing attack is a type of cyberattack in which an attacker disguises their identity or the source of their communication to gain unauthorized access or deceive a target. This can involve impersonating legitimate entities, such as websites, email addresses, or IP addresses, to trick users or systems into revealing sensitive information or accepting malicious content. Common types of spoofing attacks include IP spoofing, email spoofing, and website spoofing. Spoofing attacks can be used for various malicious purposes, such as phishing, data theft, or launching other forms of cyberattacks. To defend against spoofing attacks, security measures like authentication and encryption are crucial."

    return(
        <div className="text-center pt-10"> 
            <h1 className="text-6xl" id="learn">
                What is CyberBud?
            </h1>
            <br/>
            <p>
                CyberBud is a learning platform designed to teach you cybersecurity.
            </p>
            <br/>
            <p>
                How do we do that? By teaching you how to break code!
            </p>
            <div className="
                w-4/5
                grid
                lg:grid-cols-3
                md:grid-cols-3
                sm:grid-col-1
                justify-center
                text-center
                mx-auto
                gap-4
            ">
                <AboutCard 
                    heading="Buffer Overflow"
                    body={bufferOverflowBody}
                />
                <AboutCard 
                    heading="SQL Injection"
                    body={SQLInjectionBody}
                />
                <AboutCard 
                    heading="Spoofing Attack"
                    body={spoofingAttackBody}
                />
            </div>
        </div>
    )
}
export default About