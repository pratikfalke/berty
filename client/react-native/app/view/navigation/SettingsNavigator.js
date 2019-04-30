import { createStackNavigator } from 'react-navigation'
import I18n from 'i18next'
import React from 'react'

import { Header } from '@berty/view/component'
import AboutNavigator from './AboutNavigator'
import DevtoolsNavigator from './DevtoolsNavigator'
import HelpNavigator from './HelpNavigator'
import LegalNavigator from './LegalNavigator'
import List from '../screen/Settings/List'
import MyAccount from '../screen/Settings/MyAccount/MyAccount'
import Notifications from '../screen/Settings/Notifications'
import Update from '../screen/Settings/Update'

export default createStackNavigator(
  {
    'settings/list': List,
    'settings/my-account': MyAccount,
    'settings/notifications': Notifications,
    'settings/about': {
      screen: AboutNavigator,
      navigationOptions: ({ navigation }) => ({
        header: null,
      }),
    },
    'settings/help': {
      screen: HelpNavigator,
      navigationOptions: ({ navigation }) => ({
        header: null,
      }),
    },
    'settings/legal': {
      screen: LegalNavigator,
      navigationOptions: ({ navigation }) => ({
        header: null,
      }),
    },
    'settings/devtools': {
      screen: DevtoolsNavigator,
      navigationOptions: ({ navigation }) => ({
        header: null,
      }),
    },
    'settings/update': Update,
  },
  {
    initialRouteName: 'settings/list',
    navigationOptions: ({ navigation, screenProps }) => ({
      header: (
        <Header
          navigation={navigation}
          title={I18n.t('settings.title')}
          titleIcon='settings'
        />
      ),
      tabBarVisible: true,
    }),
  }
)