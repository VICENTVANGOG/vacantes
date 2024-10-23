'use client';
import { useState } from 'react';
import { Search } from "lucide-react";
import Input from "@/components/ui/atoms/input/input";
import './NavBar.scss';
import HeroSection from '../hero/hero'; 
import Card from '@/components/ui/molecules/card/card'; 

export default function NavBar() {
  const [activeTab, setActiveTab] = useState<'vacantes' | 'companias'>('vacantes');

  return (
    <>
      <nav className="navbar">
        <div className="navbar__left">
          <div className="navbar__buttons">
            <button 
              className={`navbar__button ${activeTab === 'vacantes' ? 'navbar__button--active' : ''} navbar__button--vacantes`}
              onClick={() => setActiveTab('vacantes')}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Vacantes
            </button>
            <button 
              className={`navbar__button ${activeTab === 'companias' ? 'navbar__button--active' : ''} navbar__button--companias`}
              onClick={() => setActiveTab('companias')}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              Compañías
            </button>
          </div>
        </div>
        <div className="navbar__search">
          <Input type="search" placeholder="Buscar..." className="navbar__search-input" />
          <Search className="navbar__search-icon" size={18} />
        </div>
      </nav>
      
      <HeroSection activeTab={activeTab} />
      <Card activeTab={activeTab} /> 
    </>
  );
}
