import { FlatList } from "react-native";
import { styles } from "./styles";
import { categories } from "@/utils/categories";
import { Category } from "../category";

type Props = {
  selected: string
  onChange: (category: string) => void
}

export function Categories({ onChange, selected }: Props) {
  
  return (
    <FlatList 
      style={styles.container}
      contentContainerStyle={styles.content}
      showsHorizontalScrollIndicator={false}
      horizontal
      data={categories} 
      keyExtractor={(item) => item.id}
      renderItem={({item}) => (
        <Category
          icon={item.icon} 
          name={item.name} 
          isSelected={item.name === selected}
          onPress={() => onChange(item.name)}
        />)
      }
    />
  )
}