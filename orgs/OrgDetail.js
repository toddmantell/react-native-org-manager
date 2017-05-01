import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export class OrgDetail extends React.Component {
    constructor() {
        super();
    }
    static navigationOptions = ({ navigation }) => ({
    title: `${navigation.state.params.org.orgName}`,
  });
    render() {
        const {org} = this.props.navigation.state.params;
        return (
            <View style={styles.container}>
                <Text>Org Name: {org.orgName}</Text>
                <Text>Is Active: {org.isActive.toString()}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    flex: 1
}); 

OrgDetail.propTypes = {
   func1: React.PropTypes.func.isRequired,
   func2: React.PropTypes.func.isRequired
}

export default OrgDetail;