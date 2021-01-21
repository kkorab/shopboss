import React from 'react';
import GlobalStyle from 'theme/GlobalStyles';
import routes from 'routes';
import { ThemeProvider } from 'styled-components';
import { theme } from 'theme/theme';
import { MobileBottomBar, NavBar } from 'components/organisms';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Catalog, Contact, Error, Home, Shop, Product } from 'views';

function App() {
  const { contact, error, home, shop, product, catalog } = routes;
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <BrowserRouter>
          <NavBar />
          <MobileBottomBar />
          <Switch>
            <Route path={contact} component={Contact} />
            <Route path={catalog} component={Catalog} />
            <Route exact path={shop} component={Shop} />
            <Route path={product} component={Product} />
            <Route exact path={home} component={Home} />
            <Route path={error} component={Error} />
          </Switch>
        </BrowserRouter>
      </>
    </ThemeProvider>
  );
}

export default App;
