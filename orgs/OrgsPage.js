import React from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import {routes} from '../constants';
import DataService from './DataService';
import OrgRow from './OrgRow';

class OrgsPage extends React.Component {
    constructor() {
        super();        

        this.state = {
            orgs: []
        }
    }
    componentWillMount() {
        const {orgs} = this.state;
        this.state.orgs = DataService.getOrgs();

        this.setState({orgs});
    }
    selectOrg(org) {
        const {navigate} = this.props.navigation;

        navigate(routes.Orgs, org);
    }
    static navigationOptions = {
        title: "Your Orgs"
    };
    render() {
        const {orgs} = this.state;
        return (
            <ScrollView style={styles.container}>
                {orgs.map((org, index) => {
                    return <OrgRow org={org} selectOrg={this.selectOrg} key={index} />
                })}
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 40,        
        backgroundColor: '#F7F7F7',
        flex: 1,
        justifyContent: 'flex-start'
    }
});


export default OrgsPage;