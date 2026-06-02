import { ComoFunciona } from "../components/ComoFunciona";
import { Footer } from "../components/Footer";
import { Header } from "../components/header";
import { Hero } from "../components/Hero";
import { ParaOngs } from "../components/ParaOngs";

export function LandingPage(){
    return(
        <div>
            <Header/>
            <main>
                <Hero/>
                <ComoFunciona/>
                <ParaOngs/>
            </main>
            <Footer/>
        </div>
    )
}