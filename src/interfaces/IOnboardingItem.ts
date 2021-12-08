import { ImageSourcePropType } from "react-native";

export interface IOnboardingItem {
    id: string;
    title: string;
    description: string;
    image: ImageSourcePropType
}