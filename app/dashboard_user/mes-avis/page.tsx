import type { NextPage } from "next";
import AvisModel from "@/components/avis-model";
import {  Pagination } from 'antd';

const MesAvis: NextPage = () => {
  return (
    <div>
     <section className="w-[1236px] flex flex-row items-start justify-start py-0 px-5 box-border max-w-full shrink-0 text-left text-5xl text-darkslategray-200 font-poppins">
       <div className="flex flex-row items-start justify-start gap-[0px_18px] max-w-full">
        <main className="w-[1224px] flex flex-row items-start justify-start py-0 pr-0 pl-3.5 box-border max-w-full">
          <section className="flex-1 flex flex-col items-end justify-start gap-[21px_0px] max-w-full text-center text-lg text-black font-roboto">
            <div className="self-stretch flex flex-row items-start justify-start gap-[0px_48px] max-w-full mq750:gap-[0px_48px]">
              <div className="flex-1 flex flex-col items-start justify-start pt-2.5 px-0 pb-0 box-border min-w-[556px] max-w-full text-left text-5xl text-darkslategray-200 font-poppins mq750:min-w-full">
                <div className="self-stretch flex flex-col items-start justify-start gap-[45px_0px] max-w-full mq1050:gap-[45px_0px]">
                  <div className="self-stretch flex flex-col items-start justify-start gap-[7px_0px] max-w-full">
                    <h1 className="">
                      Mes avis
                    </h1>
                    <AvisModel />
                    <AvisModel />
                  </div>
                
              </div>
            </div>
            </div>
            <br />
            <br />
            
            <Pagination defaultCurrent={1} total={1} />

              </section>
            </main>
          </div>
        </section>
      </div>

    
  );
};
export default MesAvis;