import React from "react";
import {Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { useDispatch, useSelector} from "react-redux";
import { useTheme } from "@react-navigation/native";
import { ThemeModel } from "../../model/theme/themeModel";
import { languageControl, toggleTheme } from "../../redux/slices/appSlice";
import { useAppTheme } from "../../hooks/useTheme";
import { RootState } from "../../redux/store";
import { LanguageType } from "../../localization/translation";
import Assets from "../../assets";

const HomeScreen: React.FC = () => {
    const myStyle = useTheme() as ThemeModel; 
    const style = Styles(myStyle);
    const {theme} = useAppTheme();
    const dispatch = useDispatch(); 
    const appDetails = useSelector((app:RootState)=>app.AppReducer.languageObject);
    const currentLanguage = useSelector((app:RootState)=>app.AppReducer.language) 
    const handleTheme = () =>{
        dispatch(toggleTheme());
    }
    return (
        <View style={style.container}>
            <Image source={Assets.home.logo} style={style.logo}/>
            <Text style={{color: myStyle.colors.text}}>{appDetails.home.name}</Text>
            <Text style={{color: myStyle.colors.text}}>{appDetails.home.theme} : {theme}</Text>
            <Text>{currentLanguage}</Text>
            <TouchableOpacity style={style.button} onPress={handleTheme}>
                <Text style={{color: myStyle.colors.text}}>{appDetails.home.toggle_theme}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={style.button} onPress={()=>dispatch(languageControl(LanguageType.English))}>
                <Text>EN</Text>
            </TouchableOpacity>
            <TouchableOpacity style={style.button} onPress={()=>dispatch(languageControl(LanguageType.Myanmar))}>
                <Text>MM</Text>
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
    logo: {
        width: 200,
        height: 200
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