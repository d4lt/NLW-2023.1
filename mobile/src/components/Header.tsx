import { View, TouchableOpacity, Text } from "react-native";
import Logo from "../assets/logo.svg";
import { Feather} from "@expo/vector-icons"
import colors from "tailwindcss/colors"

export function Header() {
    return(
     <View className=" w-full flex-row justify-between items-center">
        <Logo />

        <TouchableOpacity 
            activeOpacity={0.7}
            className="border border-violet-500 rounded-lg flex-row items-center px-4 h-11"
         >

            <Feather 
                name='plus'
                color={colors.violet[500]}
                size={20}
            />

            <Text className="text-white ml-3 font-semibold text-base">
                Novo
            </Text>
        </TouchableOpacity>

     </View>   
    )
}