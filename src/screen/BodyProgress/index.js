
import React, { Component } from "react";
import { View, Text, Image, TouchableOpacity, FlatList, SafeAreaView } from "react-native";
import { Icons } from "../../common";
import styles from './style';

class BodyProgress extends Component {

    constructor(props) {
        super(props)
        this.state = {
            bodyProgressList: [
                { name: 'My Avatar', des: 'Watch your body progress', icon: Icons.avatarIcon },
                { name: 'Body Measures', des: 'Track your measurements', icon: Icons.bodyMeasureIcon },
                { name: 'Body Fat', des: 'Track your body fat', icon: Icons.bodyFatIcon },
                { name: 'BMI', des: 'Track your BMI', icon: Icons.bmiIcon },
                { name: 'Energy Expenditure', des: 'Relevent Sub-headline here', icon: Icons.energyExpenditureIcon },
                { name: 'Fitness Index', des: 'Relevent Sub-headline here', icon: Icons.fitnessDiaryIcon },
                { name: 'Weight', des: 'Relevent Sub-headline here', icon: Icons.weightIcon },
                { name: 'Biological Data', des: 'Relevent Sub-headline here', icon: Icons.biologicalIcon },
            ]
        }
    }

    // onBodyProgressPress = (item) => {
    //     switch (item.name) {
    //         case 'My Avatar':
    //             return this.props.navigation.navigate('MyAvatar');
    //         case 'Body Measures':
    //             return this.props.navigation.navigate('BodyMeasurements');
    //         case 'Body Fat':
    //             return this.props.navigation.navigate('BodyProgressTypeChart', {
    //                 title: 'Body Fat', unit: 'metric', unitValues: ["%", "%"],
    //                 color: "rgb(231, 102, 69)", colorAlpha: "rgba(231, 102, 69,0.1)",
    //             });
    //         case 'BMI':
    //             return this.props.navigation.navigate('BodyProgressTypeChart', {
    //                 title: 'BMI', unit: 'metric', unitValues: ["%", "%"],
    //                 color: "rgb(158,29,83)", colorAlpha: "rgba(158,29,83,0.1)"
    //             });
    //         case 'Energy Expenditure':
    //             return this.props.navigation.navigate('BodyProgressTypeChart', {
    //                 title: 'Energy Expenditure', unit: 'metric', unitValues: ["%", "%"],
    //                 color: "rgb(242,172,48)", colorAlpha: "rgba(242,172,48,0.1)",
    //             });
    //         case 'Fitness Index':
    //             return this.props.navigation.navigate('BodyProgressTypeChart', {
    //                 title: 'Fitness Index', unit: 'metric', unitValues: ["%", "%"],
    //                 color: "rgb(66,132,226)", colorAlpha: "rgba(66,132,226,0.1)",
    //             });
    //         case 'Weight':
    //             return this.props.navigation.navigate('BodyProgressTypeChart', {
    //                 title: 'Weight', unit: 'metric', unitValues: ["%", "%"],
    //                 color: "rgb(0,58,115)", colorAlpha: "rgba(0,58,115,0.1)",
    //             });
    //         case 'Biological Data':
    //             return this.props.navigation.navigate('Biological');
    //     }
    // }

    renderBodyProgressItem = (item, index) => {
        return (
            <TouchableOpacity
                // onPress={() => this.onBodyProgressPress(item)}
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
        const { bodyProgressList } = this.state;
        return (
            <View style={styles.container}>
                <Image style={styles.linerView} source={Icons.linesTopIcon} />
                <SafeAreaView style={styles.backgroundColorView} />
                <View style={styles.headerView}>
                    <View style={styles.headerContainer}>
                        <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                            <Image
                                source={Icons.arrowLeftIcon}
                                style={styles.arrowLeftIconStyle}
                                resizeMode="contain"
                            />
                        </TouchableOpacity>
                        <Text style={styles.headerTitle}>Body Progress</Text>
                    </View>
                </View>
                <View style={styles.subContainer}>
                    <FlatList
                        data={bodyProgressList}
                        style={styles.flatlistStyle}
                        showsVerticalScrollIndicator={false}
                        renderItem={({ item, index }) => this.renderBodyProgressItem(item, index)}
                        keyExtractor={(item, index) => index.toString()}
                    />
                </View>
            </View>
        )
    }
}

export default BodyProgress;