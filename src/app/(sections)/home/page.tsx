import React from 'react'
import "./page.css";
import { companyService } from '@/services/company.services';
import Card from '@/components/ui/oirganismo/card/card';
import { vacantsService } from '@/services/vacantes.services ';



export default async function page() {
    const datacompany = await companyService.findAll();
    console.log(datacompany);
    const datavacants = await vacantsService.findAll();
    console.log(datavacants);
  return  (
  
    <div className='body'>
<Card companies={[]} vacants={[]} activeTab={'vacantes'}/>
    </div> 
  )
}
