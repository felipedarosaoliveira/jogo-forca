import {Forca,Element} from './forca/forca';

const el:Element = document.querySelector('#forca');
const btnNext:HTMLElement = document.querySelector("#btnNext");
const btnPrevious:HTMLElement = document.querySelector("#btnPrevious");
const forca = new Forca(el);
forca.render(); 
