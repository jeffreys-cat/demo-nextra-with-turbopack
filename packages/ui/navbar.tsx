import Link from 'next/link';
import type { FC } from 'react';

export const Navbar: FC<{ isDocsApp?: boolean }> = ({ isDocsApp }) =>
    isDocsApp ? (
        <ul className="inline-flex mb-4">
            <li>
                <a href="/">Home (Multi Zones)</a>
            </li>
            <li className="ml-4">
                <Link href="/">Docs</Link>
            </li>
            <li className="ml-4">
                <Link href="/about">About Docs</Link>
            </li>
        </ul>
    ) : (
        <ul className="inline-flex mb-4">
            <li>
                <Link href="/">Home</Link>
            </li>
            <li className="ml-4">
                <Link href="/about">About</Link>
            </li>
            <li className="ml-4">
                <a href="/docs">Docs (Multi Zones)</a>
            </li>
        </ul>
    );
