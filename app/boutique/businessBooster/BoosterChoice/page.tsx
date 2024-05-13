'use client'

import PropositionBusinessBooster from "@/components/proposition-business-booster"
import { NextPage } from "next"

const BusinessBooster: NextPage=()=>{
    return(
        <div className="flex flex-col" style={{padding:'5%'}}>
            <div className="">
                <img style={{width:'100%'}} src="/bannièreBusinessBooster.png" alt="" />
            </div>
            <br />
            <div className="flex justify-center">
            <PropositionBusinessBooster/>
            </div>
            <br />
            <div className="flex justify-center">
            <PropositionBusinessBooster/>
            </div>
            <br />
            <div className="flex justify-center">
            <PropositionBusinessBooster/>
            </div>
        </div>
    )
}
export default BusinessBooster