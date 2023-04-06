import { createContext, useContext, useState } from "react";
import { IModalContext, IModalProviderProps } from "./modal.typings";
import { Button, Card, Layout, ModalService, Text } from "@ui-kitten/components";
import { styles } from "./styles";
import { View } from "react-native";

const ModalContext = createContext<IModalContext>({} as IModalContext);

const ModalProvider = ({ children }: IModalProviderProps) => {
    let modalID = '';

    const showModal = (title: string, content: string) => {
        const contentElement = renderModalContentElement(title, content);
        modalID = ModalService.show(contentElement, { onBackdropPress: hideModal });
    };

    const hideModal = () => {
        ModalService.hide(modalID);
    };

    const Header = ({ title }: { title: string }) => (
    <View style={styles.headerContainer}>
        <Text category='h6'>{title}</Text>
    </View>
    );
    
    const Footer = () => (
    <View style={styles.footerContainer}>
        <Button
            onPress={hideModal}
            style={styles.footerControl}
            size='small'>
            CLOSE
        </Button>
    </View>
    );

    const renderModalContentElement = (title: string, content: string) => {
        return (
            <Layout style={styles.container}>
                    <Card style={styles.warning} header={<Header title={title} />} footer={Footer}>
                        <Text>
                            {content}
                        </Text>
                    </Card>
            </Layout>
        );
    };

    return (
        <ModalContext.Provider value={{ showModal, hideModal }}>
        {children}
        </ModalContext.Provider>
    );
};

const useModal = (): IModalContext => {
    const context = useContext(ModalContext);

    if (!context) {
        throw new Error('useModal must be used within a ThemeProvider');
    }

    return context;
};

export { ModalProvider, useModal };