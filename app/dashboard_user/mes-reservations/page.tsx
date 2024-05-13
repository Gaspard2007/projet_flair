'use client'
import type { NextPage } from "next";

import React from 'react';
import StarRating from "@/components/star-rating";

import Link from 'next/link'
import RaisonRDVannule from "@/components/raison-rdv-annule";
import SupprimeRéservation from "@/components/supprimer-reservation";


const MesReservations: NextPage = ()=>{

  return (
  <div className="flex flex-col items-start justify-start box-border">
    <div className="flex flex-row" style={{marginTop:'25px', width:'100%', paddingBottom:'10%'}}>
      <div className="w-[227px] rounded-lg box-border overflow-hidden shrink-0 flex flex-col items-center justify-start pt-[22px] px-1 pb-[21px] gap-[10px_0px] min-w-[227px] text-center text-lg text-black font-roboto border-[2px] border-solid border-whitesmoke-300 mq1050:pt-5 mq1050:pb-5 mq1050:box-border mq750:flex-1">
        <div className="w-[88px] flex flex-row items-start justify-start pt-0 px-0 pb-2.5 box-border">
          <button className="cursor-pointer [border:none] p-[9px] bg-gray-600 flex-1 rounded overflow-hidden flex flex-row items-center justify-center hover:bg-darkslategray-400">
            <div className="relative text-smi leading-[13px] font-roboto text-black text-center">
              Coiffeuse
            </div>
          </button>
        </div>
        <div className="flex flex-row items-start justify-start pt-0 px-0 pb-2.5">
          <img
            className="h-[90px] w-[90px] relative rounded-41xl object-cover"
            alt=""
            src='/profil.avif'
          />
        </div>
        <div className="flex flex-row items-start justify-start pt-0 px-0 pb-2.5 gap-[0px_5px]">
          <StarRating/>
        </div>
        <div className="self-stretch flex flex-col items-center justify-start py-0 px-[21px] gap-[10px_0px]">
          <Link className='no-underline'href={'/backupPro/profilPublique'}><div  className="text-black self-stretch relative leading-[21.6px]">
            Milana Beauty
          </div></Link>
          <div className="w-[152px] relative text-sm leading-[22.4px] text-dimgray inline-block">
            Membre depuis 2024
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-2.5 text-sm text-gray-300">
          <div className="flex-1 relative [text-decoration:underline] leading-[21.6px]">
            0033(0)6 02 03 03 05
          </div>
        </div>
        <div className="flex flex-row items-start justify-start py-0 px-4 gap-[0px_5px]">
          <div className="h-[42px] w-[42px] rounded-81xl bg-whitesmoke-300 box-border overflow-hidden shrink-0 flex flex-row items-start justify-start py-[11px] pr-[13px] pl-[9px] border-[2px] border-solid border-gainsboro-200">
            <Link href={'https://www.facebook.com'}>
              <img
              className="h-5 w-5 relative overflow-hidden shrink-0"
              loading="lazy"
              alt=""
              src='/facebook.svg'
              />
            </Link>
          </div>
          <div className="h-[42px] w-[42px] rounded-81xl bg-whitesmoke-300 box-border overflow-hidden shrink-0 flex flex-row items-start justify-start py-[11px] pr-[13px] pl-[9px] border-[2px] border-solid border-gainsboro-200">
            <Link href={'https://www.instagram.com'}>
              <img
                className="h-5 w-5 relative overflow-hidden shrink-0"
                loading="lazy"
                alt=""
                src='/instagram.svg'
              />
            </Link>
          </div>
          <div className="h-[42px] w-[42px] rounded-81xl bg-whitesmoke-300 box-border overflow-hidden shrink-0 flex flex-row items-start justify-start py-[11px] pr-[13px] pl-[9px] border-[2px] border-solid border-gainsboro-200">
            <Link href={'https://www.linkedin.com'}>
              <img
                className="h-5 w-5 relative overflow-hidden shrink-0"
                loading="lazy"
                alt=""
                src='/linkedin.svg'
              />
            </Link>
          </div>
          <div className="h-[42px] w-[42px] rounded-81xl bg-whitesmoke-300 box-border overflow-hidden shrink-0 flex flex-row items-start justify-start py-[11px] pr-[13px] pl-[9px] border-[2px] border-solid border-gainsboro-200">
          <Link href={'https://www.youtube.com'}>
            <img
              className="h-5 w-5 relative overflow-hidden shrink-0"
              loading="lazy"
              alt=""
              src='/youtube.svg'
            />
          </Link>
        </div>
      </div>
    </div>
    <div className="grid grid-cols-2 rounded-lg box-border gap-[26px] min-w-[342px] max-w-full border-[2px] border-solid border-whitesmoke-300 mq1050:box-border mq1050:min-w-full mq750:flex-wrap"style={{ width: '600px', marginLeft:'20px' }}>
      <div className="flex justify-end" style={{marginRight:'25px', marginTop:'20px'}}>
      <img className='' src="/indic_annule.svg" alt="" />
      </div>
    <div className="flex flex-row" style={{marginTop:'15px',marginLeft:'40px'}}>
    <div className="text-sm text-darkslategray-300">Service réservé</div>
    <span className="text-sm text-slategray" style={{marginLeft:'100px',marginRight:'30px'}}>: {`Lissage Brésilien`}</span>
   </div>
    <div className="flex flex-row" style={{marginTop:'35px',marginLeft:'40px'}}>
    <div className="text-sm text-darkslategray-300">Date de reservations</div>
    <span className="text-sm text-slategray" style={{marginLeft:'70px',marginRight:'30px'}}>: {`09.10.2024  de 17:00 à 18:00`}</span>
    </div>
    <div className="flex flex-row" style={{marginTop:'35px',marginLeft:'40px'}}>
    <div className="text-sm text-darkslategray-300">Lieu</div>
    <span className="text-sm text-slategray " style={{marginLeft:'175px',marginRight:'30px'}}>: {`02 rue des Alpes, 75000 Paris, France`}</span>
    </div>
    <div className="flex flex-row" style={{marginTop:'35px',marginLeft:'40px'}}>
    <div className="text-sm text-darkslategray-300">Tarifs</div>
    <span className="text-sm text-slategray" style={{marginLeft:'170px',marginRight:'30px'}}>: {`100 €`}</span>
    </div>
    <div className="flex flex-row" style={{marginTop:'35px',marginLeft:'40px'}}>
    <div className="text-sm text-darkslategray-300">Notes client</div>
    <span className="text-sm text-slategray" style={{marginLeft:'170px', marginRight:'30px'}}>: {`Lorem ipsum dolor sit amet, cia ut fringilla in dolor sit amet, cia ut frin dolor sit amet, cia ut frin dolor sit amet, cia ut frin.`}</span>
    </div>
    <div className="flex flex-row justify-end" style={{marginTop:'20px', marginRight:'20px'}}>
    <div>
    <RaisonRDVannule/>
    </div>
    <div>
  <SupprimeRéservation/>
    </div>
    </div>
    <br />
  </div>
  </div>
  </div>
  )
}
export default MesReservations;