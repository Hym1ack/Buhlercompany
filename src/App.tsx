import { I18nextProvider } from 'react-i18next';
import { Header } from './components/Header';
import i18n from './i18n';

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <div className={'container'}>
        <Header />
      </div>
    </I18nextProvider>
  );
}

export default App;
