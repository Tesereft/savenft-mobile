import { KeyboardAvoidingView, Platform } from "react-native";
import { CollectionViewerContainer } from "src/containers";
import { HomeLayout } from "src/layout/";

export const CollectionScreen = () => (
    <HomeLayout>
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            <CollectionViewerContainer />
        </KeyboardAvoidingView>
    </HomeLayout>
  );
