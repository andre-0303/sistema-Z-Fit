import {ActivityIndicator, View} from 'react-native'
import { styles } from './styles'
import { theme } from '../../theme/index'

export function Loading() {
    return (
    <ActivityIndicator
        style={styles.loading}
        color={theme.colors.green}
        />
    )
}