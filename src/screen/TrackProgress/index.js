
import React, { Component } from "react";
import { View, Text, Image, TouchableOpacity, FlatList, SafeAreaView } from "react-native";
import { Icons } from "../../common";
import styles from './style';

class TrackProgress extends Component {

    constructor() {
        super()
        this.state = {
            trackList: [
                { name: 'Wearables', des: 'Track your calories & heart rate', icon: Icons.wearablesIcon },
                { name: 'Body Progress', des: 'Track body composition', icon: Icons.bodyProgressIcon },
                { name: 'Health Snaps', des: 'Snapshots your health journey', icon: Icons.healthSnapsIcon },
                { name: 'Heart Health', des: 'Hypertension, CVD & Heart age', icon: Icons.heartHealthIcon },
                { name: 'Food Diary', des: 'Track your nutritional intake', icon: Icons.foodDiaryIcon },
                { name: 'Fitness Diary', des: 'Track your workouts', icon: Icons.fitnessDiaryIcon },
                { name: 'Test Results', des: 'Track your test results', icon: Icons.testResultIcon }
            ]
        }
    }

    onTrackProgressPress = (item) => {
        switch (item.name) {
            case 'Wearables':
                return;
            case 'Body Progress':
                return this.props.navigation.navigate('BodyProgress');
            case 'Health Snaps':
                return;
            case 'Heart Health':
                return;
            case 'Food Diary':
                return;
            case 'Fitness Diary':
                return;
            case 'Test Results':
                return;
        }
    }

    renderTrackProgressItem = (item, index) => {
        return (
            <TouchableOpacity
                onPress={() => this.onTrackProgressPress(item)}
                style={[styles.renderItemView, { marginTop: index == 0 ? 25 : 0 }]}
            >
                <Image
                    source={item.icon}
                    style={styles.renderIcon}
                    resizeMode='contain'
                />
                <View style={{ flex: 1 }}>
                    <Text style={styles.renderTitle}>{item.name}</Text>
                    <Text style={styles.renderDesText}>{item.des}</Text>
                </View>
                <Image
                    source={Icons.arrowRightIcon}
                    style={styles.arrow}
                    resizeMode='contain'
                />
            </TouchableOpacity>
        )
    }

    render() {
        const { trackList } = this.state;
        return (
            <View style={styles.container}>
                <SafeAreaView style={styles.backgroundColorView} />
                <View style={styles.headerStyle}>
                    <Image
                        source={Icons.linesIcon}
                        style={styles.headerBackgoundImg}
                        resizeMode="contain"
                    />
                    <View style={styles.headerTitleView}>
                        <Text style={styles.headerTitle}>Track</Text>
                        <Text style={styles.headerSubTitle}>Food, Fitness & Body Progress</Text>
                    </View>
                </View>
                <View style={styles.subContainer}>
                    <FlatList
                        data={trackList}
                        style={styles.flatlistStyle}
                        showsVerticalScrollIndicator={false}
                        renderItem={({ item, index }) => this.renderTrackProgressItem(item, index)}
                        keyExtractor={(item, index) => index.toString()}
                    />
                </View>
            </View>
        )
    }
}

export default TrackProgress;