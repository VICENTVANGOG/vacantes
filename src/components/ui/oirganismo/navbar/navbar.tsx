"use client"
import React, { useState } from 'react';
import NavBarButtons from '@/components/ui/molecules/NavBarButtons/NavBarButtons';
import SearchBar from '@/components/ui/molecules/search/search';
import HeroSection from '../hero/hero';
import Card from '@/components/ui/oirganismo/card/card';
import './NavBar.scss';

const NavBar: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'vacantes' | 'companias'>('vacantes');

  return (
    <>
      <header className="navbar">
        <div className="navbar__left">
          <div className="navbar__buttons-container">
            <NavBarButtons activeTab={activeTab} setActiveTab={setActiveTab} />
          </div>
        </div>
        <div className="navbar__search">
          <SearchBar />
        </div>
      </header>
      <HeroSection activeTab={activeTab} />
      <Card activeTab={activeTab} />
    </>
  );
};

export default NavBar;
