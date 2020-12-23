import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'theme/GlobalStyles';
import { theme } from 'theme/theme';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavBar from 'components/organisms/NavBar/NavBar';
import routes from 'routes';
import { Blog, Contact, Error, Home, Shop, Product } from 'views';
import { Menu } from 'components/molecules';

function App() {
  const { blog, contact, error, home, shop, product } = routes;
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <NavBar />
        <BrowserRouter>
          <Menu />
          <Switch>
            <Route path={blog} component={Blog} />
            <Route path={contact} component={Contact} />
            <Route exact path={home} component={Home} />
            <Route exact path={shop} component={Shop} />
            <Route path={product} component={Product} />
            <Route path={error} component={Error} />
          </Switch>
        </BrowserRouter>
      </>
    </ThemeProvider>
  );
}

export default App;
