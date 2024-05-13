'use client'
import type { NextPage } from "next";
import PanierDeLaFormation from "@/components/panierFormation"
const PanierFormation:NextPage = () => {
  return (
    <div>
        <div className="flex justify-center"><img src="/2023-12-cropped-1.png" alt="" /></div>
        <h1 className="flex justify-center">Panier</h1>
        <br />
       <div style={{padding:'10%'}}>
            <br /><br />
            <PanierDeLaFormation/>
          </div>
          </div>

   
  )
}

export default PanierFormation
