'use client'
import Next, 
{ NextPage } from 'next'
import React from 'react';
import PanierDeLaFORMATION from '@/components/panier-formation'
const PanierFormation: NextPage = () => {
    return(
            <div>
         
               
                    <div className='flex justify-center'>
                        <img src="/2023-12-cropped-1.png" alt="" />
                    </div>
                    <div className='flex flex-row justify-center'>
                        <h1>Panier</h1>
                    </div>
                  <br />
                   <PanierDeLaFORMATION/>
                   <br></br>
                </div>
    )
}
export default PanierFormation