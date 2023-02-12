import { App } from 'app';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

const $root = document.querySelector('#root');
const root = createRoot($root);

root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);
