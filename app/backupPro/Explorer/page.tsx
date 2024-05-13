'use client'
import React from 'react'
import { Col, Row } from 'antd';
import CardProfessionnel from '@/components/cardProfessionnel';
import CardAbonnementMensuel from '@/components/cardAbonnementMensuel';
import Link from 'next/link'
import CardAbonnementAnnuel from '@/components/cardAbonnementAnnuel';
const ExplorerLesPro = () => {
  return (
    <div>
        <div>
      <img style={{ width: '100%', marginBottom:'-4%', marginTop:'-4%'}} src="/banneer-Explorer.svg" alt="" />
    </div>
    <div>
    
      <div className='' style={{ background: '#EEEEEE', width:'100%', height:'100%' }}>
        <h2 style={{ paddingTop: '5%' }} className='flex justify-center items-center'>Qu'avez-vous besoin ?</h2>
        <span className='flex justify-center'>Trouvez les services professionnels à proximité</span>
        <br />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1rem" }}>
          <div style={{ marginLeft: '10px', backgroundColor: 'white', borderRadius: '0.5rem', padding: '10px' }}>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <img style={{}} src="/logoCoiffeur.png" alt="" />
            </div>
            <h4 style={{ display: 'flex', justifyContent: 'center' }}>Coiffeur / Coiffeuse</h4>
          </div>

          <div style={{ marginLeft: '10px', backgroundColor: 'white', borderRadius: '0.5rem', padding: '10px' }}>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <img style={{}} src="/style-capillaire.png" alt="" />
            </div>
            <h4 style={{ display: 'flex', justifyContent: 'center' }}>Styliste capillaire</h4>
          </div>

          <div style={{ marginLeft: '10px', backgroundColor: 'white', borderRadius: '0.5rem', padding: '10px' }}>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <img style={{}} src="/logoEstheticienne.png" alt="" />
            </div>
            <h4 style={{ display: 'flex', justifyContent: 'center' }}>Esthéticienne</h4>
          </div>

          <div style={{ marginLeft: '10px', backgroundColor: 'white', marginRight: '10px', borderRadius: '0.5rem', padding: '10px' }}>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <img style={{}} src="/logoMaquille.png" alt="" />
            </div>
            <h4 style={{ display: 'flex', justifyContent: 'center' }}>Maquilleur / Maquilleuse</h4>
          </div>

          <div style={{ marginLeft: '10px', borderRadius: '0.5rem', padding: '10px' }} className='bg-white rounded '>
            <div className=''>
              <div className='flex justify-center'>
                <img className='' src="/logoManucure.png" alt="" />
              </div>
              <h4 className='flex justify-center'>Manucure</h4>
            </div>
          </div>

          <div style={{ marginLeft: '10px', borderRadius: '0.5rem', padding: '10px' }} className='bg-white rounded '>
            <div className=''>
              <div className='flex justify-center'>
                <img className='' src="/logoMasseur.png" alt="" />
              </div>
              <h4 className='flex justify-center'>Masseur / Masseuse</h4>
            </div>
          </div>

          <div style={{ marginLeft: '10px', borderRadius: '0.5rem', padding: '10px' }} className='bg-white rounded ' >
            <div className=''>
              <div className='flex justify-center'>
                <img className='' src="/logoEpilation.png" alt="" />
              </div>
              <h4 className='flex justify-center'>Spécialiste en épilation</h4>
            </div>
          </div>

          <div style={{ marginLeft: '10px', marginRight: '10px', borderRadius: '0.5rem', padding: '10px' }} className='bg-white rounded ' >
            <div className=''>
              <div className='flex justify-center'>
                <img className='' src="/logoBienEtre.png" alt="" />
              </div>
              <h4 className='flex justify-center'>Bien être</h4>
            </div>
          </div>
       
        <br />
      </div>
    </div>
    </div>
    <div>
      <h1 className='flex justify-center'>Des professionnel à votre disposition</h1>
      <span className='flex justify-center text-sm text-gray-200'>Pour des solutions sur mesure</span>
      <br />
      <div className='flex justify-between' style={{marginLeft:'5%', marginRight:'5%'}}>
        <CardProfessionnel />
        <CardProfessionnel />
        <CardProfessionnel />
        </div>
 
    </div>
    <br />
    <div className='flex justify-center'>
      <Link href={'/backupPro/ArchivePro'}><button className='cursor-pointer bg-black text-white text-lg' style={{padding:'11px'}}>Voir plus</button></Link>
    </div>
    <div style={{ background: '#EEEEEE', paddingBottom:'10%', marginBottom:'-10%'}}>
      <div style={{paddingTop:'10px', marginTop:'3%'}}>
      <h1 className='flex justify-center'>Nos abonnements PRO</h1>
      </div>
      <span className='flex justify-center'>Découvrez l'abonnement qui s'aligne parfaitement avec votre profession</span>
   <br />
   <div className='flex  justify-center' style={{marginTop:'3%'}}>
   
    <CardAbonnementMensuel/>
  
    <CardAbonnementAnnuel/>
    </div>
    </div>
   </div>

     
  

  )
}

export default ExplorerLesPro
