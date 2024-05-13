'use client'
import dayjs from 'dayjs';
import 'dayjs/locale/fr';
import ModelService from "@/components/modelServices";
import StarRating from "@/components/star-rating"
import { NextPage } from "next"
import Link from "next/link";
import Calendar from '@/components/calendrierPriserdv';
import HoraireList from '@/components/horaires';
import ConfirmationPriseRdv from '@/components/confirmationPriseRDV';


dayjs.locale('fr');

const PriseDeRDV:NextPage=()=>{
    const SocialLink = ({ href, icon }: { href: string; icon: string }) => (
        <div className="h-[42px] w-[42px] rounded-81xl bg-whitesmoke-300 box-border overflow-hidden shrink-0 flex flex-row items-start justify-start py-[11px] pr-[13px] pl-[9px] border-[2px] border-solid border-gainsboro-200">
          <Link href={href}>
            <img className="h-5 w-5 relative overflow-hidden shrink-0" loading="lazy" alt="" src={icon} />
          </Link>
        </div>
      );
    return(
        <div style={{padding:'5%'}}>
             <div className="flex flex-row items-center">
          <img
            className="h-[49px] w-[49px] relative rounded-[50%] object-cover"
            src="/profil.avif"
            alt=""
          />
          <div style={{marginLeft:'10px'}} className="text-3xl">Melina Beauty</div>
          <StarRating />(255 avis)
        </div>
        <br />
        <div className="flex flex-row items-center">
          <button className="rounded text-lg" style={{padding:'6px', background:'#DBDBDB'}}>
            Coiffeuse
          </button>
          <img style={{marginLeft:'10px'}} src="/map-pin-gray.svg" alt="" />
          <span className="text-gray-200">02 rue des alpes, Paris, France</span>
        </div>
        <br/>

        <div className="flex justify-start space-x-4 mb-4">
          <SocialLink href="https://www.facebook.com" icon="/facebook.svg" />
          <SocialLink href="https://www.instagram.com" icon="/instagram.svg" />
          <SocialLink href="https://www.linkedin.com" icon="/linkedin.svg" />
          <SocialLink href="https://www.youtube.com" icon="/youtube.svg" />
        </div>
        <h1>Prestation:</h1>
        <div style={{border:'solid 2px #ECECEC', padding:'25px', marginTop:'2%'}} className="flex justify-between items-start rounded">
        <div className="flex flex-col justify-start items-start" style={{width:'70%'}}>
            <button style={{background:'#ECECEC'}} className="text-lg rounded py-2 px-4">Coupe femme</button>
            <h2>Lissage brésilien</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti beatae ex temporibus culpa quis blanditiis
                eligendi. Quidem aliquam iste possimus ratione reiciendis pariatur odit maiores sunt omnis. Suscipit, non
                aspernatur.
            </p>
        </div>
        <div className="flex flex-col items-end justify-between p-4">
            <h1 style={{fontSize:'250%'}} className="font-bold">65 €</h1>
            <span>Durée: 30 minutes</span>
        </div>
    </div>
        <h1>Réservation:</h1>
        <div className="flex">
            <div style={{width:'35%'}}>
              <span>Sélectionner la date du rendez-vous</span>
              <br />
              <br />
              <Calendar/>
            </div>
            <div style={{width:'50%'}}>
              <span>Choisir l'heure du rendez-vous</span>
              <HoraireList/>
            </div>   
        </div>
        <br />
        <span>Une note pour cette réservation ?</span>
       
        <br />
        <br />
        <textarea className='rounded text-lg' style={{width:'99%', height:'250px', border:'solid 2px #EFEFEF'}} name="" id=""></textarea>
        <br />
        <br />
        <ConfirmationPriseRdv/>
    </div>
    )
}
export default PriseDeRDV