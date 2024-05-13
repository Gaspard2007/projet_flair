'use client'
import React, { useState } from "react";
import dynamic from "next/dynamic";
import { Switch } from "antd";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Link from "next/link";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';




interface Service {
  titre: string;
  catégorie: string;
  tarifs: string;
  description: string;
  durée: string;
  [key: string]: string; 
}

const AjouterUnService = () => {
  const [services, setServices] = useState<Service[]>([{titre: "", catégorie: "", tarifs: "", description: "", durée: ""}]);

  const addService = () => {
    setServices([...services, {titre: "", catégorie: "", tarifs: "", description: "", durée: ""}]);
  };

  const handleServiceChange = (index: number, key: string, value: string) => {
    const newServices = [...services];
    newServices[index][key] = value;
    setServices(newServices);
  };

  const handleChange = (event: SelectChangeEvent, index: number) => {
    handleServiceChange(index, 'durée', event.target.value as string);
  };

  return (
    <div style={{ paddingRight: "5%", width:'100%' }}>
      <br />
      <div>
        <span>Ajouter un service</span>
        <p>Information sur ce service</p>
      </div>
      <div style={{ width: "100%", height: "1px", background: "#EAEAEA" }}></div>
      <br />
      {services.map((service, index) => (
        <div key={index}>
          <div>
            <label>Titre du service</label>
            <input
              className="text-lg rounded outline-none"
              style={{
                width: "100%",
                padding: "11px",
                border: "solid 2px #EAEAEA",
                marginTop: "2%"
              }}
              type="text"
              value={service.titre}
              onChange={(e) => handleServiceChange(index, 'titre', e.target.value)}
              placeholder="Exemple: Coloration + Shampoing + Brushing"
              required
            />
          </div>
          <br />
          <div className="flex">
            <div className="flex flex-col">
              <div>
                Catégorie
                <input
                  className="text-lg rounded outline-none"
                  style={{
                    width: "100%",
                    padding: "11px",
                    border: "solid 2px #EAEAEA",
                    marginTop: "2%"
                  }}
                  type="text"
                  value={service.catégorie}
                  onChange={(e) => handleServiceChange(index, 'catégorie', e.target.value)}
                  required
                  placeholder="Exemple: Coloration + Shampoing + Brushing"
                />
              </div>
              <br />
              <div>
               Tarifs
                <input
                  className="text-lg rounded outline-none"
                  style={{
                    width: "105%",
                    padding: "11px",
                    border: "solid 2px #EAEAEA",
                    marginTop: "2%"
                  }}
                  type="text"
                  value={service.tarifs}
                  onChange={(e) => handleServiceChange(index, 'tarifs', e.target.value)}
                  required
                  placeholder="Exemple: Coloration + Shampoing + Brushing"
                />
              </div>
            </div>
            <br />
            <div className="flex flex-col" style={{marginLeft:'20%'}}>
              <div className="flex flex-col">
                <label>Service à domicile ?</label>
                <span className="text-sm">
                  Ce service bénéficiera des services à domicile que vous fournissez
                </span>
                <div style={{ marginTop: "5px" }}>
                  <Switch />
                </div>
              </div>
              <br />
              <div className="flex flex-col" style={{ width:'200px' }}>
              <div>Durée</div>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Durée</InputLabel>
                <Select
                  value={service.durée}
                  label="Durée"
                  onChange={(e) => handleChange(e, index)}
                >
                  <MenuItem value={15}>15 minutes</MenuItem>
    <MenuItem value={30}>30 minutes</MenuItem>
    <MenuItem value={45}>45 minutes</MenuItem>
    <MenuItem value={60}>1 heures</MenuItem>
    <MenuItem value={75}>1h 15 minutes</MenuItem>
    <MenuItem value={90}>1 heure 30 minutes</MenuItem>
    <MenuItem value={105}>1 heure 45 minutes</MenuItem>
    <MenuItem value={120}>2 heures</MenuItem>
    <MenuItem value={135}>2 heures 15 minutes</MenuItem>
    <MenuItem value={150}>2 heures 30 minutes</MenuItem>
    <MenuItem value={165}>2 heures 45 minutes</MenuItem>
    <MenuItem value={180}>3 heures</MenuItem>
    <MenuItem value={195}>3 heures 15 minutes</MenuItem>
    <MenuItem value={210}>3 heures 30 minutes</MenuItem>
    <MenuItem value={225}>3 heures 45 minutes</MenuItem>
    <MenuItem value={240}>4 heures</MenuItem>
    <MenuItem value={255}>4 heures 15 minutes</MenuItem>
    <MenuItem value={270}>4 heures 30 minutes</MenuItem>
    <MenuItem value={285}>4 heures 45 minutes</MenuItem>
    <MenuItem value={300}>5 heures</MenuItem>
    <MenuItem value={315}>5 heures 15 minutes</MenuItem>
    <MenuItem value={330}>5 heures 30 minutes</MenuItem>
    <MenuItem value={345}>5 heures 45 minutes</MenuItem>
    <MenuItem value={360}>6 heures</MenuItem> 
    
                </Select>
              </FormControl>
              </div>
            </div>
          </div>
          <div style={{ marginTop: "20px" }}>
            <label>Paragraphe</label>
            <br />
            <br />
            <ReactQuill
              theme="snow"
              value={service.description}
              onChange={(value) => handleServiceChange(index, 'description', value)}
              style={{ border: "solid 2px #EAEAEA", marginTop: "2%" }}
              placeholder="Saisissez la description ici..."
            />
          </div>
          <br />
        </div>
      ))}
      <u><p className="text-base" style={{fontWeight:'700', cursor: 'pointer'}} onClick={addService}>+ Ajouter un autre service</p></u>
      <br />
      <div className="flex justify-end"><button type="submit" className="bg-black text-white text-lg rounded" style={{padding:'9px', paddingLeft:'30px', paddingRight:'30px'}}>Publier</button></div>
    </div>
  );
};

export default AjouterUnService;