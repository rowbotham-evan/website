import theme from './theme';
export default ({children}) =>
  <section style={{maxWidth:theme.maxW,margin:'0 auto',padding:'80px 24px'}}>
    {children}
  </section>;
