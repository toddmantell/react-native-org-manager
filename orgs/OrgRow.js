import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const OrgRow = props => {
        const {org} = this.props;
        return (
            <TouchableOpacity onPress={() => selectOrg(org)} style={styles.container}>
                <Text style={styles.label}>{orgs.orgName}</Text>
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
   func1: React.PropTypes.func.isRequired,
   func2: React.PropTypes.func.isRequired
}

export default OrgRow;