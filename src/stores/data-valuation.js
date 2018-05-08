const data = {
  injuryType: {
    id: 'injuryType',
    title: 'What type of injury did you have?',
    body: [],
    placeholder: 'Choose the type of injury',
    type: 'Dropdown',
    answers: [
      {
        id: 'tSoft',
        label: 'Soft tissue injury',
        nxtQ: 'lSoft'
      },
      {
        id: 'tFracture',
        label: 'Fracture',
        nxtQ: 'lFracture'
      },
      {
        id: 'tBurn',
        label: 'Burn / laceration / scarring',
        nxtQ: 'lBurn'
      },
      {
        id: 'tPsych',
        label: 'Psychiatric',
        nxtQ: 'lPsych'
      },
      {
        id: 'tDental',
        label: 'Damage to Teeth',
        nxtQ: 'duration'
      },
      {
        id: 'tBrain',
        label: 'Brain injury',
        nxtQ: 'duration'
      },
      {
        id: 'tSpinalChord',
        label: 'Spinal chord injury',
        nxtQ: 'duration'
      }
    ]
  },
  lSoft: {
    id: 'lSoft',
    title: 'Where was the injury located?',
    type: 'Dropdown',
    answers: [
      {
        id: 'lSoftNeck',
        label: 'Neck',
        nxtQ: 'duration'
      },
      {
        id: 'lSoftShoulders',
        label: 'Shoulders',
        nxtQ: 'duration'
      },
      {
        id: 'lSoftBack',
        label: 'Back',
        nxtQ: 'duration'
      },
      {
        id: 'lSoftPelvis',
        label: 'Pelvis / hips',
        nxtQ: 'duration'
      },
      {
        id: 'lSoftArm',
        label: 'Arm or hand area',
        nxtQ: 'lSoftArmDets'
      },
      {
        id: 'lSoftLeg',
        label: 'Leg or foot area',
        nxtQ: 'lSoftLegDets'
      }
    ]
  },
  lSoftArmDets: {
    id: 'lSoftArmDets',
    title: 'Where was the injury located?',
    type: 'Dropdown',
    answers: [
      {
        id: 'lSoftHand',
        label: 'Hand',
        nxtQ: 'duration'
      },
      {
        id: 'lSoftWrist',
        label: 'Wrist',
        nxtQ: 'duration'
      },
      {
        id: 'lSoftElbow',
        label: 'Elbow',
        nxtQ: 'duration'
      }
    ]
  },
  lSoftLegDets: {
    id: 'lSoftLegDets',
    title: 'Where was the injury located?',
    type: 'Dropdown',
    answers: [
      {
        id: 'lSoftLeg',
        label: 'Leg',
        nxtQ: 'duration'
      },
      {
        id: 'lSoftFoot',
        label: 'Foot',
        nxtQ: 'duration'
      },
      {
        id: 'lSoftAnkle',
        label: 'Ankle',
        nxtQ: 'duration'
      },
      {
        id: 'lSoftKnee',
        label: 'Knee',
        nxtQ: 'duration'
      }
    ]
  },
  lFracture: {
    id: 'lFracture',
    title: 'Where was the injury located?',
    type: 'Dropdown',
    answers: [
      {
        id: 'lFractureHead',
        label: 'Head (other than nose)',
        nxtQ: 'duration'
      },
      {
        id: 'lFractureNose',
        label: 'Nose',
        nxtQ: 'duration'
      },
      {
        id: 'lFractureCollarBone',
        label: 'Collar bone',
        nxtQ: 'duration'
      },
      {
        id: 'lFractureHumerus',
        label: 'Humerus',
        nxtQ: 'duration'
      },
      {
        id: 'lFractureRib',
        label: 'Rib',
        nxtQ: 'duration'
      },
      {
        id: 'lFracturePelvis',
        label: 'Pelvis / Hips',
        nxtQ: 'duration'
      },
      {
        id: 'lFractureArm',
        label: 'Arm / hand',
        nxtQ: 'lFractureArmDets'
      },
      {
        id: 'lFractureLeg',
        label: 'Leg / foot',
        nxtQ: 'lFractureLegDets'
      }
    ]
  },
  lFractureArmDets: {
    id: 'lFractureArmDets',
    title: 'Where was the injury located?',
    type: 'Dropdown',
    answers: [
      {
        id: 'lFractureArm',
        label: 'Arm',
        nxtQ: 'duration'
      },
      {
        id: 'lFractureWrist',
        label: 'Wrist',
        nxtQ: 'duration'
      },
      {
        id: 'lFractureElbow',
        label: 'Elbow',
        nxtQ: 'duration'
      },
      {
        id: 'lFractureFinger',
        label: 'Finger',
        nxtQ: 'duration'
      },
      {
        id: 'lFractureThumb',
        label: 'Thumb',
        nxtQ: 'duration'
      }
    ]
  },
  lFractureLegDets: {
    id: 'lFractureLegDets',
    title: 'Where was the injury located?',
    type: 'Dropdown',
    answers: [
      {
        id: 'lFractureThigh',
        label: 'Thigh',
        nxtQ: 'duration'
      },
      {
        id: 'lFractureKnee',
        label: 'Knee',
        nxtQ: 'duration'
      },
      {
        id: 'lFractureAnkle',
        label: 'Ankle',
        nxtQ: 'duration'
      },
      {
        id: 'lFractureToe',
        label: 'Toe',
        nxtQ: 'duration'
      }
    ]
  },
  lBurn: {
    id: 'lBurn',
    title: 'Where was the injury located?',
    type: 'Dropdown',
    answers: [
      {
        id: 'lBurnFacial',
        label: 'Facial',
        nxtQ: 'duration'
      },
      {
        id: 'lBurnNotFace',
        label: 'Non-facial',
        nxtQ: 'duration'
      }
    ]
  },
  lPsych: {
    id: 'lPsych',
    title: 'Where was the injury located?',
    type: 'Dropdown',
    answers: [
      {
        id: 'lPsychTravel',
        label: 'Travel Anxiety',
        nxtQ: 'duration'
      },
      {
        id: 'lPsychOther',
        label: 'Other',
        nxtQ: 'duration'
      }
    ]
  },
  duration: {
    id: 'duration',
    title: 'How long did this injury last for?',
    type: 'Dropdown',
    answers: [
      {
        id: '<1wk',
        label: 'between a day and a week',
        nxtQ: 'addInjury'
      },
      {
        id: '>1wk<2wks',
        label: 'between a week and 2 weeks',
        nxtQ: 'addInjury'
      },
      {
        id: '>2wks<3wks',
        label: 'between 2 weeks and 3 weeks',
        nxtQ: 'addInjury'
      },
      {
        id: '>3wks<4wks',
        label: 'between 3 weeks and a month',
        nxtQ: 'addInjury'
      },
      {
        id: '>4wks<8wks',
        label: 'between a month and 2 months',
        nxtQ: 'addInjury'
      },
      {
        id: '>8wks<13wks',
        label: 'between 2 months and 3 months',
        nxtQ: 'addInjury'
      },
      {
        id: '>13wks<26wks',
        label: 'between 3 months and 6 months',
        nxtQ: 'addInjury'
      },
      {
        id: '>26wks<52wks',
        label: 'between 6 months and a year',
        nxtQ: 'addInjury'
      },
      {
        id: '>52wks<76wks',
        label: 'between a year and a year and a half',
        nxtQ: 'addInjury'
      },
      {
        id: '>76wks<104wks',
        label: 'between a year and a half and 2 years',
        nxtQ: 'addInjury'
      },
      {
        id: '>104wks',
        label: 'more than 2 years',
        nxtQ: 'addInjury'
      }
    ]
  },
  addInjury: {
    id: 'addInjury',
    title: 'Would you like to add another injury?',
    type: 'Dropdown',
    answers: [
      {
        id: 'addInjuryYes',
        label: 'Yes',
        nxtQ: 'injuryType'
      },
      {
        id: 'addInjuryNo',
        label: 'No',
        nxtQ: 'financial'
      }
    ]
  },
  financial: {
    id: 'financial',
    title: 'Please detail your financial losses',
    type: 'FinancialInputs',
    answers: [
      {
        id: 'fTravel',
        title: 'Travel expenses',
        nxtQ: 'valuation'
      },
      {
        id: 'fTreatment',
        title: 'Treatment / medication',
        nxtQ: 'valuation'
      },
      {
        id: 'fEarnings',
        title: 'Lost earnings',
        nxtQ: 'valuation'
      },
      {
        id: 'fPropertyDamage',
        title: 'Property damage',
        nxtQ: 'valuation'
      },
      {
        id: 'fRepairs',
        title: 'Bicycle repairs',
        nxtQ: 'valuation'
      },
      {
        id: 'fCareAssitance',
        title: 'Care and assistance',
        popover: {
          title: 'Care and Assistance',
          body: 'Care and Assistance'
        },
        nxtQ: 'valuation'
      },
      {
        id: 'fOther',
        title: 'Other',
        nxtQ: 'valuation'
      }
    ]
  },
  contactMe: {
    id: 'contactMe',
    title: '',
    type: 'ContactForm'
  },
  valuation: {
    id: 'valuation',
    title: '',
    type: 'Valuation'
  }
};
export default data;
