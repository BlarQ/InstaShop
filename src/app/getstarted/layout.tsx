import React, { ReactNode } from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Getting Started",
    description: "Account creation Page",
};

interface LayoutProps {
    children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <html lang="en">
      <body>
        {children}
      </body>
    </html>
    );
};

export default Layout;