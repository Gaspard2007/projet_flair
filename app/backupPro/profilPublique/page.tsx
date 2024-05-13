'use client'
import { useState } from "react";
import ModelService from "@/components/modelServices";
import StarRating from "@/components/star-rating";
import Link from "next/link";
import ModelCommentaire from "@/components/modelComentaire";

const ProfilPublic = () => {
  const [visibleServices, setVisibleServices] = useState(4);
  const [showMoreServices, setShowMoreServices] = useState(false);

  const handleLoadMore = () => {
    setShowMoreServices(true); 
  };

  const handleLoadLess = () => {
    setVisibleServices(4); 
    setShowMoreServices(false); 
  };
 const [visibleComments, setVisibleComments] = useState(4);
  const [showMoreComments, setShowMoreComments] = useState(false);

  const handleLoadMoreComment = () => {
    setShowMoreComments(true); // Affiche les services supplémentaires
  };

  const handleLoadLessComment = () => {
    setVisibleComments(4); // Réinitialise le nombre de services visibles à 4
    setShowMoreComments(false); // Cache à nouveau les services supplémentaires
  };

  return (
    <div className="p-5">
      <br />
      <br />
      <div style={{width:'100%'}} className="flex justify-center">
        <img style={{height:'100%'}} src="/imageComptePublique.svg" alt="" />
        <div style={{marginLeft:'1%'}} className="flex flex-col"><img  src="/imageComptePublique2.svg" alt="" /><img style={{marginTop:'3%'}} src="/imageComptePublique3.svg" alt="" />
        </div>
      </div>
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

      <div className="mt-4 flex">
        <div style={{width:'65%'}}>
          <h3>A propos de Melina Beauty</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus facilis eos consequatur nesciunt fuga laborum earum? Qui provident dolores reiciendis expedita? Minus eum sapiente facilis mollitia, voluptatum expedita perferendis quod.</p>
          <h3 className="text-xl font-semibold mb-2">Services</h3>
            {[...Array(visibleServices)].map((_, index) => (
              <div key={index}>
                <ModelService />
              </div>
            ))}
          {!showMoreServices && visibleServices < 10 && (
            <p
              className="cursor-pointer"
              onClick={handleLoadMore}
            >
              Voir plus de : Coupe femme...
            </p>
          )}
          {showMoreServices && (
          <div>
            {[...Array(10)].map((_, index) => (
              <div key={index}>
                <ModelService />
              </div>
            ))}
          <p
              className="mt-4 rounded px-3 py-1 bg-gray-300  cursor-pointer"
              onClick={handleLoadLess}
            >
              Voir moins : coupe Femme
            </p>
          </div>
        )}
        <div>
          <h3>Avis</h3>
          {[...Array(visibleComments)].map((_, index) => (
              <div key={index}>
                <ModelCommentaire />
              </div>
            ))}
          {!showMoreComments && visibleComments < 10 && (
            <p
              className="cursor-pointer"
              onClick={handleLoadMoreComment}
            >
              Voir plus d'avis ...
            </p>
          )}
          {showMoreComments && (
          <div>
            {[...Array(10)].map((_, index) => (
              <div key={index}>
                <ModelCommentaire />
              </div>
            ))}
          <p
              className="mt-4 rounded px-3 py-1 bg-gray-300  cursor-pointer"
              onClick={handleLoadLessComment}
            >
              Voir moins d'avis
            </p>
          </div>
        )}
          
          
        </div>
      </div>
   
      
      <div className="rounded" style={{ width:'35%', display: "flex", flexDirection:'column', border:'solid 1px #F4F4F4',padding:'2%', paddingTop:'4%', marginLeft:'3%'}}>
       <div className="rounded " style={{background:'#F4F4F4', paddingTop:'5%'}}>
        <span className="flex justify-center">Horaires d'ouverture</span>
        <div style={{marginLeft:'13%'}}>
        <div style={{ display: "flex", justifyContent: "space-between", marginTop: "10px" }}>
          <div style={{ flex: 1 }}>
            <div>Lundi :</div>
            <br />
            <div>Mardi :</div>
            <br />
            <div>Mercredi :</div>
            <br />
            <div>Jeudi :</div>
            <br />
            <div>Vendredi :</div>
            <br />
            <div>Samedi :</div>
            <br />
            <div>Dimanche :</div>
            <br />
          </div>
          <div style={{ flex: 1 }}>
            <div>9:30 - 17:00</div>
            <br />
            <div>9:30 - 17:00</div>
            <br />
            <div>9:30 - 17:00</div> 
            <br />
            <div>9:30 - 17:00</div>
            <br />
            <div>9:30 - 17:00</div>
            <br />
            <div>9:30 - 17:00</div>
            <br />
            <div className="text-red-100">Fermé</div>
            <br />
          </div>
          </div>
          </div>
        </div>
        <br />
        <div className="flex flex-col justify-center items-center rounded" style={{background:'#F4F4F4', paddingTop:'5%', padding:'5%'}}>
          <span>Lieu</span>
          <br />
          <img  style={{width:'90%'}} src="/imageGoogleMap.png" alt="" />
        </div>
        <br />
        <button style={{padding:'11px'}} className="rounded text-white bg-black text-lg">Itinéraires</button>
      </div>
    </div>
    </div>
    </div>
  );
};



const SocialLink = ({ href, icon }: { href: string; icon: string }) => (
  <div className="h-[42px] w-[42px] rounded-81xl bg-whitesmoke-300 box-border overflow-hidden shrink-0 flex flex-row items-start justify-start py-[11px] pr-[13px] pl-[9px] border-[2px] border-solid border-gainsboro-200">
    <Link href={href}>
      <img className="h-5 w-5 relative overflow-hidden shrink-0" loading="lazy" alt="" src={icon} />
    </Link>
  </div>
);

export default ProfilPublic;
