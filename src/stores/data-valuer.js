const data = {
  injuryType: {
    id: 'injuryType',
    title: 'What type of injury did you have? You can add more injuries later.',
    body: [],
    type: 'Dropdown',
    answers: [
      {
        id: 'tSoft',
        label: 'Soft tissue / ligaments / bruising',
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
        id: 'tNone',
        label: 'None of the above',
        nxtQ: 'contactMe'
      }
    ]
  },
  lSoft: {
    id: 'lSoft',
    title: 'Where was the injury located?',
    type: 'Dropdown',
    answers: [
      {
        id: 'lSoftBrain',
        label: 'Brain injury / concussion',
        nxtQ: 'contactMe'
      },
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
        id: 'lSoftLimb',
        label: 'Arm, leg, hand or foot area',
        nxtQ: 'lSoftLimbDets'
      },
      {
        id: 'softOrgans',
        label: 'Internal Organs',
        nxtQ: 'contactMe'
      }
    ]
  },
  lSoftLimbDets: {
    id: 'lSoftLimbDets',
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
      },
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
      },
      {
        id: 'lSoftToe',
        label: 'Toe',
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
        id: 'lFractureClavicle',
        label: 'Clavicle',
        nxtQ: 'duration'
      },
      {
        id: 'lFractureNeck',
        label: 'Neck',
        nxtQ: 'contactMe'
      },
      {
        id: 'lFractureHumerus',
        label: 'Humerus',
        nxtQ: 'duration'
      },
      {
        id: 'lFractureBack',
        label: 'Back',
        nxtQ: 'contactMe'
      },
      {
        id: 'lFracturePelvis',
        label: 'Pelvis / Hips',
        nxtQ: 'contactMe'
      },
      {
        id: 'lFractureLimb',
        label: 'Arm, leg, hand or foot area',
        nxtQ: 'lFractureLimbDets'
      },
      {
        id: 'lNone',
        label: 'None of the above',
        nxtQ: 'contactMe'
      }
    ]
  },
  lFractureLimbDets: {
    id: 'lFractureLimbDets',
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
      },
      {
        id: 'lFractureThigh',
        label: 'Leg',
        nxtQ: 'duration'
      },
      {
        id: 'lFractureKnee',
        label: 'Foot',
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
        id: 'lBurnFace',
        label: 'face',
        nxtQ: 'duration'
      },
      {
        id: 'lBurnOther',
        label: 'Other',
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
        label: 'between 1 day and 1 week',
        nxtQ: 'addInjury'
      },
      {
        id: '>1wk<2wks',
        label: 'between 1 week and 2 weeks',
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
    title: 'Please detail your finacial losses',
    type: 'FinancialInputs',
    answers: [
      {
        id: 'fTravel',
        title: 'Travel expenses',
        nxtQ: 'valuation'
      },
      {
        id: 'fTreatment',
        title: 'Treatment costs',
        nxtQ: 'valuation'
      },
      {
        id: 'fEarnings',
        title: 'Lost earnings',
        nxtQ: 'valuation'
      },
      {
        id: 'fMedication',
        title: 'Medication',
        nxtQ: 'valuation'
      },
      {
        id: 'fRepairs',
        title: 'Bicycle repairs',
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
    title: 'Your Valuation',
    type: 'Valuation'
  }
};
export default data;
