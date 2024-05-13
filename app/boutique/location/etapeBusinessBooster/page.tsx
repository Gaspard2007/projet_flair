import PropositionBusinessBooster from "@/components/proposition-business-booster";
import { NextPage } from "next";
import Link from "next/link";
const etapeBusinessBoosterLocation:NextPage=()=>{
    return(
        <div className="flex flex-col" style={{paddingLeft:'5%', paddingRight:'5%'}}>
            <div className="flex justify-center" >
                <img style={{width:'30%'}} src="/2023-12-cropped-1.png" alt="" />
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
            <br />
            <div className="flex justify-end" style={{marginRight:'2%'}}>
            <Link className="no-underline" href={'/boutique/location/etape-validation-de-commande'}><button className="text-white bg-black rounded text-lg flex justify-end" style={{padding:'11px'}}>Continuer</button></Link>
            </div>
            
        </div>
        
    )
}
export default etapeBusinessBoosterLocation;