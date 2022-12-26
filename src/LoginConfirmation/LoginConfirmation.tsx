import React, { useState } from 'react';

import { SafeAreaView, Text, Image, Dimensions, StyleSheet, TouchableOpacity, View } from "react-native"


import {
    CodeField,
    Cursor,
    useBlurOnFulfill,
    useClearByFocusCell,
} from 'react-native-confirmation-code-field';

const CELL_COUNT = 4;

const width = Dimensions.get("screen").width
const height = Dimensions.get("screen").height
const LoginConfirmation = ({navigation}) => {

    const [value, setValue] = useState('');
    const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
    const [props, getCellOnLayoutHandler] = useClearByFocusCell({
        value,
        setValue,
    });
    return (
        <SafeAreaView style={styles.root}>

<View  style={styles?.views}>
            <Image source={require("../../assets/logo.png")} style={{
                width:width/2,
                height: 200,
                resizeMode:"contain"
            }} />
        </View>

            <View><Text style={styles?.title}> Verify Phone</Text></View>
            <View>
                <Text style={styles.minititle}>
                    The Code has been sent to the number 0896857480
                </Text>
            </View>
            <View style={{ alignItems: "center", justifyContent: "center" }}>
                <CodeField
                    ref={ref}
                    {...props}
                    // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
                    value={value}
                    onChangeText={setValue}
                    cellCount={CELL_COUNT}
                    rootStyle={styles.codeFieldRoot}
                    keyboardType="number-pad"
                    textContentType="oneTimeCode"
                    renderCell={({ index, symbol, isFocused }) => (
                        <Text
                            key={index}
                            style={[styles.cell, styles.focusCell]}
                            onLayout={getCellOnLayoutHandler(index)}>
                            {symbol || (isFocused ? <Cursor /> : null)}
                        </Text>
                    )}
                />
            </View>

            {/* Didn’t receive the code? Request again */}

            <View>
                <Text style={{ color: "#1D1F20", fontWeight: "500", fontSize: 20, textAlign: "center", marginBottom: 20, marginTop: 30 }}>Didn’t receive the code? <Text style={{ color: "#0016BB", fontWeight: "500", fontSize: 20, textAlign: "center", marginBottom: 20, marginTop: 30 }}>Request again </Text></Text>
            </View>

            <View style={styles?.views}>
                <TouchableOpacity style={styles.button}><Text style={{ color: "white", fontSize: 24 }}> Verify </Text></TouchableOpacity>
            </View>

            <View>
                <Text onPress={()=>navigation.navigate("SignUp")} style={{ color: "#1D1F20", fontWeight: "500", fontSize: 20, textAlign: "center", marginBottom: 20, marginTop: 30 }}>
                    Don’t you have an account? <Text style={{ color: "#0D28F4" }}> Press here.</Text>
                </Text>
            </View>
        </SafeAreaView>
    )
}

export default LoginConfirmation

const styles = StyleSheet.create({
    root: { flex: 1, padding: 20 },
    title: { textAlign: 'center', fontSize: 30, color: "#0016BB", fontWeight: "700" },
    minititle: { textAlign: 'center', fontSize: 18, color: "#1D1F20", fontWeight: "400", marginTop: 20 },

    codeFieldRoot: { marginTop: 20, alignItems: "center", justifyContent: "center" },
    cell: {
        width: width / 8,
        height: 60,
        lineHeight: 38,
        fontSize: 24,
        borderWidth: 2,
        borderColor: '#000',
        textAlign: 'center',
        margin: 20,
        textAlignVertical: "center"
    },
    focusCell: {
        borderColor: '#000',
    },
    button: {
        backgroundColor: "#0D28F4",
        borderRadius: 20,
        elevation: 10,
        width: width / 1.2,
        padding: 20,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 20,

    },
    views: {
        alignItems: "center",
        justifyContent: "center"
    },
});

