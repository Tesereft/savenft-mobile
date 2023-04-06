import { KeyboardAvoidingView, Platform } from "react-native";
import { HomescreenContainer } from "../containers";
import { HomeLayout } from "../layout/";

export const HomeScreen = () => (
    <HomeLayout>
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            <HomescreenContainer />
        </KeyboardAvoidingView>
    </HomeLayout>
  );
