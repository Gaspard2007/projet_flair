'use client'
import { useState, useEffect } from 'react';
import { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import MenuDashboardParticulier from '@/components/menu-dashboard-particulier';
import MenuParticulier from '@/components/menu-particulier';
import Footer from '@/components/footer';

const inter = Inter({ subsets: ['latin'] });



export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);

  // Update window width on mount and on resize
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    handleResize(); // Set initial window width
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="">
          <MenuParticulier />
          <section className="flex flex-row text-5xl text-darkslategray-200 font-poppins">
            {/* Render menu toggle button if window width is <= 400px */}
            {windowWidth <= 400 ? (
              <button className="menu-toggle" onClick={toggleMenu}>
                Menu
              </button>
            ) : (
              <div style={{ marginTop: '25px' }}>
                <MenuDashboardParticulier />
              </div>
            )}

            {/* Render children (main content) */}
            {children}
          </section>
        </div>

        {/* Render the collapsible menu */}
        <div className={`menu-sidebar ${isMenuOpen ? 'open' : ''}`}>
          <MenuDashboardParticulier />
          <button className="close-btn" onClick={toggleMenu}>
            &#x2715;
          </button>
        </div>

        <Footer />
      </body>
    </html>
  );
}
