import { Layout } from "@ui-kitten/components";
import { StatusBar } from "expo-status-bar";
import { Image } from 'react-native';
import { styles } from "./styles";

export const CollectionLayout = ({children}: any) => {
  return (
    <Layout style={styles.layout}>
    <StatusBar style="light" />
    <Image source={require("@assets/pattern.png")} style={styles.pattern} />
    <Image source={require("@assets/tiny-logo.png")} style={styles.icon} />
      {children}
    </Layout>
  )
};
