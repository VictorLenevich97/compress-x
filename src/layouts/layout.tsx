import React from 'react';

import { Container } from '@/partials/container/container';

export const Layout: React.FC = () => {
  return (
    <main className="m-auto max-w-screen-lg bg-background p-unit-6 text-foreground light">
      <h1 className="text-large font-bold">Image Converter</h1>

      <Container />
    </main>
  );
};
