let defaultImagePath = '../images/';
let defaultIconPath = '../images/icon/';

const Icons = {
    backIcon: require(`${defaultIconPath}back.png`),
    gridIcon: require(`${defaultImagePath}grid.png`),
    bodyMaleIcon: require(`${defaultImagePath}body_male.png`),
    bodyFemaleIcon: require(`${defaultImagePath}body_female.png`),
    arrowRightIcon: require(`${defaultIconPath}arrowRight.png`),
    arrowDownIcon: require(`${defaultIconPath}arrowDown.png`),
    arrowUpIcon: require(`${defaultIconPath}arrowUp.png`),
    maleHeadNeckIcon: require(`${defaultImagePath}maleHeadNeck.png`),
    foreHeadMaleIcon: require(`${defaultImagePath}forehead_male.png`),
    jawMaleIcon: require(`${defaultImagePath}jaw_male.png`),
    neckMaleIcon: require(`${defaultImagePath}neck_male.png`),
    femaleHeadNeckIcon: require(`${defaultImagePath}femaleHeadNeck.png`),
    foreHeadFemaleIcon: require(`${defaultImagePath}forehead_female.png`),
    jawFemaleIcon: require(`${defaultImagePath}jaw_female.png`),
    neckFemaleIcon: require(`${defaultImagePath}neck_female.png`),
    arrowUpMeasurements2Icon: require(`${defaultIconPath}arrowUp_measurements2.png`),
    arrowUpMeasurementsIcon: require(`${defaultIconPath}arrowUp_measurements.png`),
    maleFullBodyIcon: require(`${defaultImagePath}maleFullBody.png`),
    femaleFullBodyIcon: require(`${defaultImagePath}femaleFullBody.png`),
    maleArmsIcon: require(`${defaultImagePath}maleArms.png`),
    elbowMaleIcon: require(`${defaultImagePath}elbow_male.png`),
    wristMaleIcon: require(`${defaultImagePath}wrist_male.png`),
    handMaleIcon: require(`${defaultImagePath}hand_male.png`),
    femaleArmsIcon: require(`${defaultImagePath}femaleArms.png`),
    elbowFemaleIcon: require(`${defaultImagePath}elbow_female.png`),
    wristFemaleIcon: require(`${defaultImagePath}wrist_female.png`),
    handFemaleIcon: require(`${defaultImagePath}hand_female.png`),
    gluteusFemaleIcon: require(`${defaultImagePath}gluteus_female.png`),
    waistFemaleIcon: require(`${defaultImagePath}waist_female.png`),
    ribcageFemaleIcon: require(`${defaultImagePath}ribcage_female.png`),
    femaleUpperBodyIcon: require(`${defaultImagePath}femaleUpperBody.png`),
    chestFemaleIcon: require(`${defaultImagePath}chest_female.png`),
    gluteusMaleIcon: require(`${defaultImagePath}gluteus_male.png`),
    waistMaleIcon: require(`${defaultImagePath}waist_male.png`),
    ribcageMaleIcon: require(`${defaultImagePath}ribcage_male.png`),
    chestMaleIcon: require(`${defaultImagePath}chest_male.png`),
    maleUpperBodyIcon: require(`${defaultImagePath}maleUpperBody.png`),
    maleLegsIcon: require(`${defaultImagePath}maleLegs.png`),
    midThighMaleIcon: require(`${defaultImagePath}midThigh_male.png`),
    kneeMaleIcon: require(`${defaultImagePath}knee_male.png`),
    calfMaleIcon: require(`${defaultImagePath}calf_male.png`),
    ankleMaleIcon: require(`${defaultImagePath}ankle_male.png`),
    footLengthMaleIcon: require(`${defaultImagePath}footLength_male.png`),
    femaleLegsIcon: require(`${defaultImagePath}femaleLegs.png`),
    midThighFemaleIcon: require(`${defaultImagePath}midThigh_female.png`),
    kneeFemaleIcon: require(`${defaultImagePath}knee_female.png`),
    calfFemaleIcon: require(`${defaultImagePath}calf_female.png`),
    ankleFemaleIcon: require(`${defaultImagePath}ankle_female.png`),
    footLengthFemaleIcon: require(`${defaultImagePath}footLength_female.png`),
    arrowLeftIcon: require(`${defaultIconPath}arrowLeft.png`),
    triangleIcon: require(`${defaultIconPath}triangle.png`),
    fitnessDiaryIcon: require(`${defaultImagePath}fitnessDiary.png`),
    wearablesIcon: require(`${defaultImagePath}wearables.png`),
    bodyProgressIcon: require(`${defaultImagePath}bodyProgress.png`),
    healthSnapsIcon: require(`${defaultImagePath}healthSnaps.png`),
    heartHealthIcon: require(`${defaultImagePath}heartHealth.png`),
    foodDiaryIcon: require(`${defaultImagePath}foodDiary.png`),
    testResultIcon: require(`${defaultImagePath}testResult.png`),
    linesIcon: require(`${defaultImagePath}lines.png`),
    avatarIcon: require(`${defaultImagePath}avatar.png`),
    biologicalIcon: require(`${defaultImagePath}biological.png`),
    bmiIcon: require(`${defaultImagePath}bmi.png`),
    bodyFatIcon: require(`${defaultImagePath}bodyFat.png`),
    bodyMeasureIcon: require(`${defaultImagePath}bodyMeasure.png`),
    energyExpenditureIcon: require(`${defaultImagePath}energyExpenditure.png`),
    fitnessIndexIcon: require(`${defaultImagePath}fitnessIndex.png`),
    weightIcon: require(`${defaultImagePath}weight.png`),
    linesTopIcon: require(`${defaultImagePath}linesTop.png`),
    bloodPressureControlToolIcon: require(`${defaultImagePath}bloodPressureControlTool.png`),
    distanceIcon: require(`${defaultImagePath}distance.png`),
    flightsClimbedIcon: require(`${defaultImagePath}flightsClimbed.png`),
    heartRateIcon: require(`${defaultImagePath}heartRate.png`),
    hrvIcon: require(`${defaultImagePath}hrv.png`),
    kaclIcon: require(`${defaultImagePath}kacl.png`),
    stepsIcon: require(`${defaultImagePath}steps.png`),
    sleepIcon: require(`${defaultImagePath}sleep.png`),
    mattRenderedIcon: require(`${defaultImagePath}mattRendered.png`),
    bmiAvatarIcon: require(`${defaultImagePath}bmiAvatar.png`),
    fatIcon: require(`${defaultImagePath}fat.png`),
    weightAvatarIcon: require(`${defaultImagePath}weightAvatar.png`),
    waistIcon: require(`${defaultImagePath}waist.png`),
    bodyFatBgIcon: require(`${defaultImagePath}bodyFatBg.png`),
    bmiBgIcon: require(`${defaultImagePath}bmiBg.png`),
    energyBgIcon: require(`${defaultImagePath}energyBg.png`),
    fitnessIndexbgIcon: require(`${defaultImagePath}fitnessIndexbg.png`),
    weightBgIcon: require(`${defaultImagePath}weightBg.png`),
    basalMetabolicWeightIcon: require(`${defaultImagePath}basalMetabolicWeight.png`),
    calfNeckRatioIcon: require(`${defaultImagePath}calfNeckRatio.png`),
    bodyRoundnessIndexIcon: require(`${defaultImagePath}bodyRoundnessIndex.png`),
    conicityIndexIcon: require(`${defaultImagePath}conicityIndex.png`),
    leanWeightIcon: require(`${defaultImagePath}leanWeight.png`),
    waistToHeightRatioIcon: require(`${defaultImagePath}waistToHeightRatio.png`),
    waterWeightIcon: require(`${defaultImagePath}waterWeight.png`),
    waistHipRatioIcon: require(`${defaultImagePath}waistHipRatio.png`),
    leanWeightBgIcon: require(`${defaultImagePath}leanWeightBg.png`),
    waterWeightBgIcon: require(`${defaultImagePath}waterWeightBg.png`),
    basalMetabolicBgIcon: require(`${defaultImagePath}basalMetabolicBg.png`),
    bodyRoundessBgIcon: require(`${defaultImagePath}bodyRoundessBg.png`),
    conicityIndexBgIcon: require(`${defaultImagePath}conicityIndexBg.png`),
    waistToHeightBgIcon: require(`${defaultImagePath}waistToHeightBg.png`),
    waistToHipBgIcon: require(`${defaultImagePath}waistToHipBg.png`),
    calfNeckBgIcon: require(`${defaultImagePath}calfNeckBg.png`),
    plusIconIcon: require(`${defaultIconPath}plus_icon.png`),
    circuitSessionBgIcon: require(`${defaultImagePath}circuitSessionBg.png`),
    cardioSessionBgIcon: require(`${defaultImagePath}cardioSessionBg.png`),
    exerciseClassBgIcon: require(`${defaultImagePath}exerciseClassBg.png`),
    cardioVolumeBgIcon: require(`${defaultImagePath}cardioVolumeBg.png`),
    workoutTimeBgIcon: require(`${defaultImagePath}workoutTimeBg.png`),
    repsBgIcon: require(`${defaultImagePath}repsBg.png`),
    foodDairyIcon: require(`${defaultImagePath}foodDairy.png`),
    foodRatingsIcon: require(`${defaultImagePath}foodRatings.png`),
    foodDairyIcon: require(`${defaultImagePath}foodDairy.png`),
    foodDairyIcon: require(`${defaultImagePath}foodDairy.png`),
    foodDairyIcon: require(`${defaultImagePath}foodDairy.png`),
    foodDairyIcon: require(`${defaultImagePath}foodDairy.png`),
};

export default Icons;