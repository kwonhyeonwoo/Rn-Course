import { StyleSheet} from 'react-native';
import CategoryScreen from './screens/CategoryScreen';

export default function App() {
  return(
      <CategoryScreen/>
  )
}

const {wrapper} = StyleSheet.create({
    wrapper:{
      flex:1,
    }
});
