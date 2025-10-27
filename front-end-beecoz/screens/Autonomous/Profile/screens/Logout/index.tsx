import { useContext, useEffect } from "react";
import { Text, View } from "react-native"
import { AuthContext, IAuthContext } from "../../../../../contexts/Auth/AuthContext";

export const LogoutProfileScreen = () => {
    const {handleLogout} = useContext(AuthContext) as IAuthContext
    useEffect(() => {
        handleLogout()
    }, []);
    return (
        <View>
        </View>
    )
}