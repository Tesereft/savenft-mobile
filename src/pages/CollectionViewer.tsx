import { KeyboardAvoidingView, Platform } from "react-native";
import { CollectionViewerContainer } from "../containers";
import { HomeLayout } from "../layout/";

export const CollectionScreen = () => (
    <HomeLayout>
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            <CollectionViewerContainer />
        </KeyboardAvoidingView>
    </HomeLayout>
  );
