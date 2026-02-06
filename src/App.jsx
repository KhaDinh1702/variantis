import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Inquiry from './components/Inquiry/Inquiry';
import NewsInsights from './components/NewsInsights/NewsInsights';
import PageFooter from './components/PageFooter/PageFooter';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/inquiry" element={<Inquiry />} />
        <Route path="/news-insights" element={<NewsInsights />} />
      </Routes>
      <PageFooter />
    </div>
  );
}

export default App;
