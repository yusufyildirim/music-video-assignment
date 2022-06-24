import { TouchableOpacity, TouchableOpacityProps } from 'react-native'

export const Button: React.FC<TouchableOpacityProps> = ({ children, ...props }) => {
  return <TouchableOpacity {...props}>{children}</TouchableOpacity>
}
