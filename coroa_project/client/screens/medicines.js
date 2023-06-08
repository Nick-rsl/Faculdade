import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { CoroaImgText } from '../components/CoroaImgText/CoroaImgText';
import styles from '../styles/styleMedicines';

import { MedicinesList } from '../components/MedicineList/MedicinesList';
import { MedicinesHeader } from '../components/MedicinesHeader/MedicinesHeader';



const data = [
  {key: 1, name: 'Dipirona'},
  {key: 2, name: 'Paracetamol'},
  {key: 3, name: 'Amoxicilina'},
  {key: 4, name: 'Genérico 4'},
]

export function MedicinesScreen({route, navigation}) {

  return(
    <View style={styles.container}>
      <View style={styles.alignItemsCenter}> 
        <CoroaImgText/>
      </View>   
      <MedicinesHeader/>
      <View>
        <View style={styles.titletoMedicines}>
          <Text style={{color: '#f0f0f0', fontSize: 22, fontFamily: 'serif', fontWeight: 'bold'}}>Remédios Cadastrados</Text>
        </View>
      </View>
      <MedicinesList data={data}/>
    </View>
  );
}
