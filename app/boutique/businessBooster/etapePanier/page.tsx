'use client'
import PanierDeBusinessBooster from '@/components/panierBusiness';
import Next, { NextPage } from 'next'
const PanierBusinessBooster:NextPage=()=>{
    return(
        <div>
            <div className='flex flex-col items-center justify-center'>
                <img style={{width:'50%', height:'50%'}} src="/2023-12-cropped-1.png" alt="" />
                <h1>Panier</h1>
                <PanierDeBusinessBooster/>
            </div>
        </div>
    )
}
export default PanierBusinessBooster;