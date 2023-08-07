import '../styles/globals.css';
import {createTheme, NextUIProvider} from '@nextui-org/react';
import {ThemeProvider as NextThemesProvider} from 'next-themes';
import {Layout} from '../components/layout/layout';
import { appWithTranslation } from 'next-i18next';
import { Provider } from 'react-redux';
import { store } from '../store/store';

const lightTheme = createTheme({
   type: 'light',
   theme: {
      colors: {},
   },
});

const darkTheme = createTheme({
   type: 'dark',
   theme: {
      colors: {},
   },
});

function MyApp({Component, pageProps, router}) {
   const getLayout = Component.getLayout || ((page) => <Layout>{page}</Layout>);

  if (router.route === '/login') {
    return <Component {...pageProps} />;
  }
   return (
      <Provider store={store}>
         <NextThemesProvider
            defaultTheme="system"
            attribute="class"
            value={{
               light: lightTheme.className,
               dark: darkTheme.className,
            }}
         >
            <NextUIProvider>
               {getLayout(<Component {...pageProps} />)}
            </NextUIProvider>
         </NextThemesProvider>
      </Provider>
   );
}

export default appWithTranslation(MyApp);