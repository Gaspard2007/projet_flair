import type { NextPage } from "next";
import DashboardCommande from "@/components/dashboard-commande";

const MesCommandes: NextPage = () => {
  return (
    
    <div>
    <section className="w-[1236px] flex flex-row items-start justify-start py-0 px-5 box-border max-w-full shrink-0 text-left text-5xl text-darkslategray-200 font-poppins">
   
      <div className="flex flex-row items-start justify-start gap-[0px_18px] max-w-full">
        
        <div className="flex flex-col items-start justify-start pt-3.5 px-0 pb-0 box-border min-w-[830px] max-w-full mq1050:min-w-full">
          <h1>Mes commandes</h1>
          <div className="flex flex-col items-start justify-start gap-[30px_0px]">
          <DashboardCommande/>
          </div>
        </div>
      </div>
    </section>
  </div>

  );
};
export default MesCommandes;