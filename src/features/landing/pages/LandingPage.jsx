import { BannerCTA } from "../components/BannerCTA";
import { ComoFunciona } from "../components/ComoFunciona";
import { Depoimentos } from "../components/Depoimentos";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
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
                <Depoimentos/>
                <BannerCTA/>
            </main>
            <Footer/>
        </div>
    )
}