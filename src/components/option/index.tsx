import { MaterialIcons } from "@expo/vector-icons"
import { Text, TouchableOpacity, type TouchableOpacityProps } from "react-native"
import { styles } from "./styles"
import { colors } from "@/styles/colors"

type Props = TouchableOpacityProps & {
  name: string
  icon: keyof typeof MaterialIcons.glyphMap
  variant?: "primary" | "secondary"
}

export function Option({
  name,
  icon,
  variant = "primary",
  ...rest
}: Props) {
  const isPrimary = variant === "primary"
  
  return (
    <TouchableOpacity style={styles.container} {...rest}>
      <MaterialIcons 
        name={icon} 
        size={20} 
        color={isPrimary ? colors.green[300] : colors.gray[400]}
      />

      <Text 
        style={isPrimary ? styles.primaryTitle : styles.secondaryTitle}
      >
        {name}
      </Text>
    </TouchableOpacity>
  )
}