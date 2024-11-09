import React from "react";
import {StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { useDispatch} from "react-redux";
import { useTheme } from "@react-navigation/native";
import { ThemeModel } from "../../model/theme/themeModel";
import { toggleTheme } from "../../redux/slices/appSlice";
import { useAppTheme } from "../../hooks/useTheme";

const HomeScreen: React.FC = () => {
    const myStyle = useTheme() as ThemeModel; 
    const style = Styles(myStyle);
    const {theme} = useAppTheme();
    const dispatch = useDispatch();  
    const handleTheme = () =>{
        dispatch(toggleTheme());
    }
    return (
        <View style={style.container}>
            <Text style={{color: myStyle.colors.text}}>Home Page</Text>
            <Text style={{color: myStyle.colors.text}}>Current Theme : {theme}</Text>
            <TouchableOpacity style={style.button} onPress={handleTheme}>
                <Text style={{color: myStyle.colors.text}}>Toggle Theme</Text>
            </TouchableOpacity>
        </View>
    )
}

export const Styles = (theme:ThemeModel) => StyleSheet.create({
    container: {
        backgroundColor: theme.colors.background,
        flex: 1,
        justifyContent: "center",
        alignItems: 'center'
    },
    button: {
        backgroundColor: theme.colors.primary,
        paddingVertical: 10,
        paddingHorizontal: 20,
        margin: 10,
        borderRadius: 10,
    }
})

export default HomeScreen;