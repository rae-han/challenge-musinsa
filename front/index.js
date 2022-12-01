import React from 'react';
import { createRoot } from 'react-dom/client';

import App from './src/layouts/App';

const root = createRoot(document.querySelector('#app'))

root.render(<App />)