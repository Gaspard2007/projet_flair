'use client'
import { NextPage } from "next";
import { useState } from "react";
import Link from 'next/link';

const EtapeDocument: NextPage = () => {
  const [kbisFile, setKbisFile] = useState<File | null>(null);
  const [idFile, setIdFile] = useState<File | null>(null);

  const handleDrop = (event: React.DragEvent<HTMLDivElement>, fileType: string) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    if (fileType === 'kbis') {
      setKbisFile(file);
    } else if (fileType === 'id') {
      setIdFile(file);
    }
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  return (
    <div className="flex flex-col items-center">
      <img src="/2023-12-cropped-1.png" alt="" />
      <div className="flex flex-col justify-center" style={{ width: '80%' }}>
        <h2>Document de réservation</h2>
        <p>- Pour finaliser votre réservation, veuillez nous renvoyer les documents suivants:</p>
        <p>Une copie de votre KBIS, ainsi qu'une copie recto-verso de votre CIN, passeport ou carte de séjour.</p>
        <br />
        <div className="flex flex-row">
          <div
            style={{ border: '2px dashed', width: '49%', paddingTop: '50px', paddingBottom: '50px' }}
            onDrop={(e) => handleDrop(e, 'kbis')}
            onDragOver={(e) => handleDragOver(e)}
          >
            <div className="flex flex-col justify-center items-center">
              {kbisFile ? (
                <div>
                  <p>File Name: {kbisFile.name}</p>
                  
                </div>
              ) : (
                <div>
                  <img className="flex justify-center items-center" style={{ width: '50px', height: '50px' }} src="/foder-3.svg" alt="" />
                  <h4>Déposer une copie de votre KBIS ici</h4>
                  <h4>Fichier accepté: JPEG; PNG; PDF</h4>
                </div>
              )}
            </div>
          </div>

          <div
            style={{ border: '2px dashed', marginLeft: '2%', width: '49%', paddingTop: '50px', paddingBottom: '50px', display: 'flex', alignItems: 'center' }}
            onDrop={(e) => handleDrop(e, 'id')}
            onDragOver={(e) => handleDragOver(e)}
          >
            <div className="flex flex-col justify-center items-center">
              {idFile ? (
                <div>
                  <p>File Name: {idFile.name}</p>
                 
                </div>
              ) : (
                <div>
                  <img style={{ width: '50px', height: '50px' }} src="/carte-didentite-2.png" alt="" />
                  <h4 className="flex text-center">Déposer les copies de votre CIN / Passeport / Carte de séjour recto/verso ici</h4>
                  <h4 className="flex text-center justify-center items-center">Fichier accepté: JPEG; PNG; PDF</h4>
                </div>
              )}
            </div>
          </div>
        </div>

        <h5>
          <input type="checkbox" className="rounded-none" style={{ padding: '30px' }} />
          En cochant cette case, je confirme avoir lu et accepté les termes de notre politique de confidentialité et autorise le téléchargement de ma pièce d'identité (CIN) ainsi que l'extrait KBIS, en conformité avec les dispositions du RGPD.
        </h5>

        <div className="flex flex-row justify-center">
          <Link href={''}><button className="text-white bg-black text-lg" style={{ padding: '11px' }}>Je le ferai plus tard *</button></Link>
          <Link href={'/boutique/location/etapeDossierValidation'} style={{ marginLeft: '2%' }}>
            <button className="text-white bg-black text-lg" style={{ padding: '11px' }}>Je valide mes fichiers</button>
          </Link>
        </div>

        <div className="flex flex-row justify-center items-center text-sm">
          <p className="flex justify-center items-center flex-col">
            * Tant que les données ne sont pas traitées et que la commande n'est pas validée, elle est considérée comme étant en cours de traitement et en attente de validation. Cela signifie que le processus de traitement de la commande est en cours, mais tant que toutes les vérifications nécessaires ne sont pas effectuées et que la validation finale n'est pas confirmée, la commande demeure en phase d'attente. Vous pouvez le faire plus tard dans <p style={{ fontWeight: '700' }}>Mon compte {'>'} Mes informations</p>
          </p>
        </div>
      </div>
    </div>
  );
};

export default EtapeDocument;
