import { I18nextProvider } from 'react-i18next';
import { Header } from './components/Header';
import i18n from './i18n';
import { Hero } from './components/Hero';
import mainPhoto from './assets/mainPhoto.png';

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <div className={'relative container-max'}>
        <img
          className={
            'backgroundImage max-w-[968px] absolute -top-48 right-0 -z-30 overflow-hidden md:max-w-xl md:-top-24 sm:max-w-md sm:-right-36'
          }
          src={mainPhoto}
          alt={'main'}
        />
      </div>
      <div className={'container'}>
        <Header />
        <Hero />
      </div>
    </I18nextProvider>
  );
}

export default App;
