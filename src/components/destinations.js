import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { destinationData } from "../constants";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { LinearGradient } from "expo-linear-gradient";
import { HeartIcon } from "react-native-heroicons/solid";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

export default function Destinations() {
    const navigation = useNavigation()

    return (
        <View className="flex-wrap mx-4 flex-row justify-between pb-10">
            {destinationData.map((item, index) => {
                return <DestinationCard item={item} key={index} navigation={navigation}/>;
            })}
        </View>
    );
}

const DestinationCard = ({ item, navigation }) => {
    const [isFavorite, setFavorite] = useState(false)

    return (
        <TouchableOpacity
            onPress={()=> navigation.navigate('Destination', {...item, isFavorite})}
            style={{ width: wp(44), height: wp(65) }}
            className="flex justify-end relative p-4 space-y-2 mb-5"
        >
            <Image
                source={item.image}
                style={{ width: wp(44), height: wp(65), borderRadius: 35 }}
                className="absolute"
            />

            <LinearGradient
                colors={["transparent", "rgba(0,0,0,0.8)"]}
                style={{
                    width: wp(44),
                    height: hp(15),
                    borderBottomLeftRadius: 35,
                    borderBottomRightRadius: 35,
                }}
                start={{ x: 0.5, y: 0 }}
                end={{ x: 0.5, y: 1 }}
                className="absolute bottom-0"
            />

            <TouchableOpacity
                onPress={()=> setFavorite(!isFavorite)}
                className="absolute top-1 p-3 right-3 rounded-full"
                style={{ backgroundColor: "rgba(255, 255, 255, 0.4)" }}
            >
                <HeartIcon size={wp(5)} color={isFavorite? 'red':   "white"} />
            </TouchableOpacity>

            <Text
                style={{ fontSize: wp(4) }}
                className="text-white font-semibold"
            >
                {item.title}
            </Text>
            <Text style={{ fontSize: wp(2.2) }} className="text-white">
                {item.shortDescription}
            </Text>
        </TouchableOpacity>
    );
};
