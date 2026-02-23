import React from "react";
import type { Preview } from "@storybook/react";

// Import your global styles if any
// import '../src/index.css';

const preview: Preview = {
    parameters: {
        actions: { argTypesRegex: "^on[A-Z].*" },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },
    decorators: [(Story) => <Story />],
};

export default preview;
