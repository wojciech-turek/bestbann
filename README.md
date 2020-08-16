<h1 align="center">
<br>

</h1>

<h4 align="center">Rattan baskets producer website</h4>

<p align="center">
  <a >
    <img src="src/assets/logo-small.png"
         alt="Screenshot">
  </a>
</p>

## Project Overview 🎉

The core of this project is to build a modern, fast, responsive website using mobile first approach for a production company.

The goal of this website is to be a great first impression of the company and to provide information about products and the producer.

## Tech/framework used 🔧

| Tech              | Description                                                                            |
| -----------------  | -------------------------------------------------------------------------------------- |
| [React](X)         | Main framework used, built with CRA tool                                               |
| [React Router](X)  | Library used for routing on the website  
| [React Transition Group](X) | Used for routes switch
| [i18next](X)       | Used for site internationalization, easy switch between languages on the whole website |
| [JavaScript](X)    | Main language used                                                                     |
| [HTML5](X)         | Used mostly inside React as JSX                                                        |
| [CSS3](X)          | Used as CSS Modules                                                                 |

## Screenshots 📺

<img src="https://ibb.co/8nkLPbn"  alt="Main Menu Desktop">

## Code Example/Issues 🔍

Layout Component with Page Transition Code:
```js
const Layout = (props) => {
  const nodeRef = useRef(null);

  const routes = [
    { path: "/bestbann", name: "Home", Component: MainPage },
    {
      path: "/products/breadproofingbaskets",
      name: "Products",
      Component: ProductsPage,
    },
    { path: "/about", name: "About", Component: MainPage },
    { path: "/contact", name: "Contact", Component: MainPage },
  ];

  let routeList = routes.map(({ path, Component }) => (
    <Route key={path} exact path={path} nodeRef={nodeRef}>
      <Component />
    </Route>
  ));

  const AnimatedSwitch = withRouter(({ location }) => (
    <TransitionGroup>
      <CSSTransition
        key={location.key}
        classNames={{
          enter: classes.PageEnter,
          enterActive: classes.PageEnterActive,
          exit: classes.PageExit,
          exitActive: classes.PageExitActive,
        }}
        timeout={1000}
      >
        <Switch>
          {routeList}
          <Route render={() => <Redirect to={{ pathname: "/bestbann" }} />} />
        </Switch>
      </CSSTransition>
    </TransitionGroup>
  ));

  return (
    <>
      <Navigation />
      <ScrollToTop />
      {<AnimatedSwitch />}
      <Footer />
    </>
  );
};

export default Layout;
```

## Available scripts

| Command         | Description            |     |
| --------------- | ---------------------- | --- |
| `npm run start` | Open local server      |     |
| `npm run build` | Create optimized build |     |
| `npm run test`  | Run tests              |     |
