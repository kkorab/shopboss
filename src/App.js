import React from 'react';
import GlobalStyle from 'theme/GlobalStyles';
import NavBar from 'components/organisms/NavBar/NavBar';
import routes from 'routes';
import { ThemeProvider } from 'styled-components';
import { theme } from 'theme/theme';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Blog, Contact, Error, Home, Shop, Product } from 'views';

function App() {
  const { blog, contact, error, home, shop, product } = routes;
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <BrowserRouter>
          <NavBar />
          <Switch>
            <Route path={blog} component={Blog} />
            <Route path={contact} component={Contact} />
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
