import React from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import {routes} from '../constants';
import DataService from '../DataService';
import OrgRow from './OrgRow';

class OrgsPage extends React.Component {
    constructor() {
        super();        

        this.state = {
            orgs: []
        }

        this.selectOrg = this.selectOrg.bind(this);
    }
    selectOrg(org) {
        const {navigate} = this.props.navigation;

        navigate(routes.OrgDetail, {org});
    }
    static navigationOptions = {
        title: "Your Orgs"
    };
    render() {
        const orgs = DataService.getOrgs();        
        return (
            <View style={styles.container}>
                <ScrollView>
                    {
                        orgs.map((org, index) => {                            
                        return <OrgRow org={org} selectOrg={this.selectOrg} key={index} />
                    })}
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {        
        backgroundColor: '#F7F7F7',
        flex: 1,
        justifyContent: 'flex-start'
    }
});


export default OrgsPage;