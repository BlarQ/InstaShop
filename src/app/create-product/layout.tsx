import React, { ReactNode } from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Create a Product",
    description: "Create your first product",
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