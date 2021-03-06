import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const OrgRow = props => {
        const {org} = props;        
        return (
            <TouchableOpacity onPress={() => props.selectOrg(org)} style={styles.container}>
                <Text style={styles.label}>{org.orgFullName}</Text>
            </TouchableOpacity>
        );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#E7E7E7',
        padding: 20,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
        marginLeft: 20,
        marginRight: 20,
    },
    label: {
        fontSize: 20,
        fontWeight: '300',
        color: 'midnightblue'
    },
    doneButton: {
        borderRadius: 5,
        backgroundColor: '#EAEAEA',
        padding: 5,
    },
}); 



OrgRow.propTypes = {

}

export default OrgRow;