import React from 'react';
import './variables.css';
import './global.css';
import Navigation from './Navigation';
import Footer from './Footer';
const Template = ({ children }) => (
  <>
    <Navigation />
    <main>{children}</main>
    <Footer />
  </>
);


export default Template;
