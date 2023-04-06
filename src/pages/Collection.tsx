import { KeyboardAvoidingView, Platform } from "react-native";
import { HomeLayout } from "src/layout/HomeLayout";
import { CollectionContainer } from "src/containers";

export const CollectionCreationScreen = () => (
    <HomeLayout>
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            <CollectionContainer />
        </KeyboardAvoidingView>
    </HomeLayout>
  );
