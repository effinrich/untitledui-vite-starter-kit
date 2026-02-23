import type { Preview } from '@storybook/react';
import '../src/index.css'; // or your global CSS with Tailwind
import React from 'react';

// If you have a ThemeProvider, import and use it here
// import { ThemeProvider } from '../src/components/theme-provider';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#ffffff' },
        { name: 'dark', value: '#020817' },
      ],
    },
  },
  decorators: [
    (Story) => (
      <div className="font-sans antialiased">
        <Story />
      </div>
    ),
    // Uncomment if using ThemeProvider:
    // (Story) => (
    //   <ThemeProvider attribute="class" defaultTheme="light">
    //     <Story />
    //   </ThemeProvider>
    // ),
  ],
};

export default preview;
