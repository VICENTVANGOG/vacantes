import MyHeader from "@/components/ui/molecules/header/header";
import Mynavbar from "@/components/ui/molecules/navbar/navbar";
import React from "react";
import "./body.css";

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="body">
      <MyHeader/>
      <Mynavbar/>
      {children}
    </div>
  );
}
