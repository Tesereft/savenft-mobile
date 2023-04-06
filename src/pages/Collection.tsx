import { KeyboardAvoidingView, Platform } from "react-native";
import { HomeLayout } from "../layout/HomeLayout";
import { CollectionContainer } from "../containers";

export const CollectionCreationScreen = () => (
    <HomeLayout>
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            <CollectionContainer />
        </KeyboardAvoidingView>
    </HomeLayout>
  );
