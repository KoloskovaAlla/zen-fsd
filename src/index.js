import App from './App';
import {createRoot} from 'react-dom/client'

const $root = document.querySelector('#root')
const root = createRoot($root);

root.render(
    <App />
);



