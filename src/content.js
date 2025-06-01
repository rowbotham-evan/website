export default [
  { id:'home',       label:'Home',       page:()=>import('./pages/Home.jsx') },
  { id:'experience', label:'Experience', page:()=>import('./pages/Experience.jsx') },
  { id:'projects',   label:'Projects',   page:()=>import('./pages/Projects.jsx') },
  { id:'blog',       label:'Essays',     page:()=>import('./pages/Blog.jsx') },
  { id:'quotes',     label:'Quotes',     page:()=>import('./pages/Quotes.jsx') }
];
