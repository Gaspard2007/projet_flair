'use client'
import Footer from "@/components/footer";
import GridFormation from "@/components/grid-formation";
import GridPosteaLouer from "@/components/grid-postealouer";
import GridServiceSupp from "@/components/grid-services-supp";
import type { NextPage } from "next";

import Link from "next/link";

const Boutique: NextPage = () => {
  
  return (
    <div className="">
      <div id="location">
        <img style={{width:'100%'}} src="/Header.svg" alt="" />
      </div>
      <br  />
      
  
      <div >
        <div  className="flex justify-center" style={{marginTop:'35px'}}>
          <h1>Nos postes à louer</h1>
        </div>
      </div>
      <div  className="flex flex-row justify-center">
        <GridPosteaLouer/>
      </div>
      <div id="formation"></div>
      <div></div>
       <div  className="flex justify-center" style={{marginTop:'40px'}}>
          <h1>Nos formations</h1>
        </div>
        <div  className="flex flex-row justify-center">
        <GridFormation/>
      </div>
      <div id='serviceSupp' className="flex justify-center" style={{marginTop:'40px'}}>
          <h1>Nos services supplementaires</h1>
        </div>
        <div className="flex flex-row justify-center">
        <GridServiceSupp/>
      </div>
  
    </div>
    
  );
};
export default Boutique;
