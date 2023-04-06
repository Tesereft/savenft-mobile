import React from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry, ModalService } from '@ui-kitten/components';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { EvaIconsPack } from '@ui-kitten/eva-icons';

import { routes } from './src/constants/';
import { IRoutes } from './src/interfaces/route.typing';
import * as Linking from "expo-linking";
import { ModalProvider } from './src/context';

ModalService.setShouldUseTopInsets = true 

const Stack = createNativeStackNavigator();

const prefix = Linking.createURL("/");

const App = () => (
  <ModalProvider>
  <IconRegistry icons={EvaIconsPack} />
  <ApplicationProvider {...eva} theme={eva.dark}>
    <NavigationContainer linking={{
      prefixes: [prefix],
      config: {
        screens: {
          Home: "home",
          Create: "create",
          Collection: "collection",
        },
      }
    }}>
      <Stack.Navigator>
        {routes.map((route: IRoutes) => 
        (
          <Stack.Screen 
          key={route.name}
          name={route.name}
          component={route.component} 
          options={
            {
              headerShown: false
            }
          }
          />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  </ApplicationProvider>
  </ModalProvider>
);

export default App;