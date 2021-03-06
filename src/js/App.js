import React from 'react';
import { IntlProvider, addLocaleData } from 'react-intl';
import en from 'react-intl/locale-data/en';
import { getCurrentLocale, getLocaleData } from 'grommet/utils/Locale';
import { Provider } from 'react-redux';
import store from './store';
import Main from './components/Main';

const locale = getCurrentLocale();
addLocaleData(en);
let messages;
try {
  messages = require(`./messages/${locale}`);
} catch (e) {
  messages = require('./messages/en-US');
}
const localeData = getLocaleData(messages, locale);


export default () => (
  <Provider store={store}>
    <IntlProvider locale={'zh-CN'} messages={localeData.messages}>
      <Main />
    </IntlProvider>
  </Provider>
);
