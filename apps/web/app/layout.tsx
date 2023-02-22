'use client';

import { Navbar } from 'ui';

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html>
            <head />
            <body>
                <Navbar />
                {children}
            </body>
        </html>
    );
}
