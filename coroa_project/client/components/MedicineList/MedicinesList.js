import { StyleSheet, View, FlatList, Text } from "react-native";

import { MedicinesListItem } from "../MedicineList/MedicinesListItem/MedicinesListItem";

export function MedicinesList(props) {
    return(
        
        <FlatList 
        data={props.data}
        renderItem={({item} ) =>(
            <Text style={styles.container}>{item.name}</Text>
        )}
        keyExtractor={item => item.key}
        style={styles.container}/>
    );
}

const styles = StyleSheet.create({
    container:{
        margin: 21,
        marginTop: -1,
        fontSize: 24,
        fontWeight: "600",
        marginBottom: 3,
        color: '#f0f0f0',
        backgroundColor: '#741B47',
       

    }
})