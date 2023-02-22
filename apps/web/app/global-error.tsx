'use client';

import { Router } from 'next/router';

export default function GlobalError({ error, reset }: { error: Error; reset: () => void }) {
    return (
        <html>
            <head></head>
            <body>
                <h2>Something went wrong!</h2>
                <button onClick={() => reset()}>Try again</button>
            </body>
        </html>
    );
}
