'use client'
import type { NextPage } from "next";
import Link from 'next/link'


const TableauDeBordParticulier: NextPage = () => {
  
  return (
      <div className="flex flex-col items-start justify-start pt-3.5 px-0 pb-0 box-border min-w-[830px] max-w-full mq1050:min-w-full">

        <div className="flex flex-col items-start justify-start gap-[30px_0px]">
          <h2 className=" w-[251px] relative text-inherit leading-[28.8px] font-normal font-inherit inline-block mq750:text-lgi mq750:leading-[23px]">
            Bienvenue
          </h2>
          <div className="text-sm" style={{width:'100%'}}>Bonjour Miss kitty (vous n’êtes pas Miss kitty ? <Link href={'/deconnexion'}>Déconnexion</Link><br/>
            À partir du tableau de bord de votre compte, vous pouvez visualiser vos commandes récentes, gérer vos réservations  ainsi que changer votre mot de passe et les détails de votre compte.
          </div>
        </div>
    

</div>


);
};
export default TableauDeBordParticulier;
