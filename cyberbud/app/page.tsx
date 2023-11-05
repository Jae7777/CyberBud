import ClientOnly from "./components/ClientOnly"
import About from "./components/about/About"
import ScrollToBottomButton from "./components/ScrollToBottomButton"
import Dropdown from "./components/form/Dropdown"
import ProblemForm from "./components/form/ProblemForm"
import Image from "next/image"
import Container from "./components/Container"
import Footer from "./components/footer/Footer"

export default function Home() {
  return (
    <>
      <ClientOnly>
        <div className="
          shadow-md
        ">
          <div className="
              pt-0 
              grid 
              grid-cols-1 
              sm:grid-cols-1 
              md:grid-cols-1 
              lg:grid-cols-2
              xl:grid-cols-2
              2xl:grid-cols-2
              justify-between 
              px-auto 
              items-center
            "
          >
            <Image 
              src="/hacking.png"
              alt="Hero image"
              width={400}
              height={400}
              className="py-12 mx-auto"
            />
            <ProblemForm />
          </div>
        </div>
        <About />
        <Footer />
        <ScrollToBottomButton></ScrollToBottomButton>
      </ClientOnly>
      
    </>
  )
}