'use client'
import MyFormComponent from "@/src/pagina1";
import Image from "next/image";
import { useState } from "react";
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    
    <Router>
      <Routes>
        <Route path="/" element={<MyFormComponent />} /> {/* Página inicial */}
      </Routes>
    </Router>
    
  );
}

export default App;
