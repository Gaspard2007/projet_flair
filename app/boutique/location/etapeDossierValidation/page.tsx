'use client'
import type { NextPage } from "next";
import Link from 'next/link'
const EtapeDossierValidation:NextPage = () => {
    return(
        <div style={{marginTop:'30px'}}  className="flex flex-col justify-center items-center">
            <img style={{width:'150px', height:'150px'}} src="/teaWait.png" alt="" />
            <h1>Votre dossier est actuellement en cours de validation.</h1>
            <h4>Une fois validé, nous vous enverrons une confirmation de commande.</h4>
            <br />
            <Link href={'/boutique/location/commande'}><button className="text-white text-lg bg-black" style={{padding:'11px'}}>Voir ma commande</button></Link>
        </div>
    )
}
export default EtapeDossierValidation