import React from 'react';
import Link from 'next/link';
import './globals.css';

export const metadata = {
  title: 'Hotel Booking App',
  description: 'Book your stay at the best hotels',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&display=swap" />
      </head>
      <body className="antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

function Header() {
  return (
    <header className="header">
      <div className="container">
        <h1 className="logo">
          <Link href="/">
            <img src="/thehotel.jpg" alt="BoomShakalacka Hotel" className="logo-image" />
          </Link>
        </h1>
        <nav>
          <ul className="nav">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
            <li>
              <Link href="/bookings">Bookings</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; 2025 Hotel Booking. All rights reserved.</p>
      </div>
    </footer>
  );
}