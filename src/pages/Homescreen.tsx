import { KeyboardAvoidingView, Platform } from "react-native";
import { HomescreenContainer } from "src/containers";
import { HomeLayout } from "src/layout/";

export const HomeScreen = () => (
    <HomeLayout>
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            <HomescreenContainer />
        </KeyboardAvoidingView>
    </HomeLayout>
  );
