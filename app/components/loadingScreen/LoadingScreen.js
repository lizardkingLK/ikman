import React from 'react'
import { AppRegistry, StyleSheet, View, Text } from 'react-native'
import { CustomButton } from '../customButton/CustomButton'
import strings from '../../src/meta/strings.json'

export default loadingscreen = ({ navigation }) => {
    return (
        <View style={styles.homeView}>
            <Text style={styles.starsText}>&#8902;&#8902;&#8902;&#8902;&#8902;</Text>
            <Text style={styles.brandText}>{strings.appName}</Text>
            <Text style={styles.starsText}>&#8902;&#8902;&#8902;&#8902;&#8902;</Text>
            <Text style={styles.captionText}>{strings.appCaption}</Text>
            <View style={styles.goButtonContainer}>
                <CustomButton
                    title={strings.btnTitleBrowse}
                    onPress={() =>
                        navigation.navigate(strings.scrHome)
                    }
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    homeView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: strings.primaryLight
    },
    starsText: {
        color: strings.primaryAccent,
        fontWeight: 'bold',
        fontSize: 25,
        letterSpacing: 20,
    },
    brandText: {
        color: strings.primaryAccent,
        fontWeight: 'bold',
        fontSize: 25,
        letterSpacing: 30,
        borderTopWidth: 2,
        borderBottomWidth: 2,
        borderColor: strings.primaryAccent,
        padding: 5,
    },
    captionText: {
        marginTop: 10,
        color: strings.primaryAccent,
        padding: 5,
        fontSize: 10,
        letterSpacing: 1,
    },
    goButtonContainer: {
        marginTop: 30
    }
})

AppRegistry.registerComponent(strings.loadingscreen, () => loadingscreen)