
import MyHeader from "@/components/ui/molecules/header/header";
import NavBar from "@/components/ui/oirganismo/navbar/navbar";
import React from "react";
import { companyService } from '@/services/company.services';
import { vacantsService } from '@/services/vacantes.services ';

export default async function Layout({ children }: Readonly<{ children: React.ReactNode }>) {

    const companies = await companyService.findAll();
    const vacants = await vacantsService.findAll();

    return (
        <div className="layout">
            <MyHeader />
            <NavBar companies={companies} vacants={vacants} />
            {children}
        </div>
    );
}
