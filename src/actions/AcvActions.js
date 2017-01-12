import { Actions } from 'react-native-router-flux';
import {
    ACV_UPDATE,
    ACV_CREATE,
    ACVS_FETCH_SUCCESS,
    ACV_SAVE_SUCCESS,
    VEHICLE_TYPE,
    TITLE_STATUS,
    TITLE_REMARK,
    BORROWAMOUNT_CHANGED,
    SELLAMOUNT_CHANGED,
    YEAR_CHANGED,
    SPECIALTY_VEHICLE,
    MAKE_CHANGED,
    MODEL_CHANGED,
    SERIES_CHANGED,
    STYLE_CHANGED,
    PAINT_CONDITION,
    BODY_CONDITION,
    TIRES_CONDITION,
    GLASS_CONDITION,
    PHOTO_TAKEN,
    VIN_CHANGED,
    INTERIOR_CONDITION,
    UPHOLSTERY_CONDITION,
    CARPET_CONDITION,
    ENGINE_NOISE_CONDITION,
    TRANSMISSION_SHIFT_CONDITION,
    DASHBOARD_CONDITION,
    ODOMETER_CONDITION,
    ELECTRONICS_CONDITION,
    CONSOLE_CONDITION,
    AIRCONDITION_CONDITION,
    HEAT_CONDITION,
    ODOR_CONDITION,
    ENGINE_APPEARANCE_CONDITION,
    OVERALL_CONDITION,
    NOTES_CHANGED,
    PHOTO_SENT,
    TOTAL_PHOTOS_TO_SEND
} from './types';

export const acvUpdate = ({ prop, value }) => {
    return {
        type: ACV_UPDATE,
        payload: { prop, value }
    };
};

export const acvCreate = ({ acv }) => {
    return {
        type: ACV_CREATE,
        payload: { acv }
    }
    //   const { currentUser } = firebase.auth();

    //   return (dispatch) => {
    //     firebase.database().ref(`/users/${currentUser.uid}/acvs`)
    //       .push({ name, phone, shift })
    //       .then(() => {
    //         dispatch({ type: ACV_CREATE });
    //         Actions.acvList({ type: 'reset' });
    //       });
    //   };
};

export const acvsFetch = () => {
    const { currentUser } = firebase.auth();

    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/acvs`)
            .on('value', snapshot => {
                dispatch({ type: ACVS_FETCH_SUCCESS, payload: snapshot.val() });
            });
    };
};

export const acvSave = ({ name, phone, shift, uid }) => {
    const { currentUser } = firebase.auth();

    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/acvs/${uid}`)
            .set({ name, phone, shift })
            .then(() => {
                dispatch({ type: ACV_SAVE_SUCCESS });
                Actions.acvList({ type: 'reset' });
            });
    };
};

export const acvDelete = ({ uid }) => {
    const { currentUser } = firebase.auth();

    return () => {
        firebase.database().ref(`/users/${currentUser.uid}/acvs/${uid}`)
            .remove()
            .then(() => {
                Actions.acvList({ type: 'reset' });
            });
    };
};

export const vehicleTypeSelect = ({checkListOption}) => {

    return {
        type: VEHICLE_TYPE,
        payload: { checkListOption }
    }
};

export const titleStatusSelect = ({checkListOption}) => {

    return {
        type: TITLE_STATUS,
        payload: { checkListOption }
    }
};

export const titleRemarkSelect = ({checkListOption}) => {

    return {
        type: TITLE_REMARK,
        payload: { checkListOption }
    }
};

export const borrowAmountChanged = (text) => {
    return {
        type: BORROWAMOUNT_CHANGED,
        payload: text
    };
};

export const sellAmountChanged = (text) => {
    return {
        type: SELLAMOUNT_CHANGED,
        payload: text
    };
};

export const yearChanged = (text) => {
    return {
        type: YEAR_CHANGED,
        payload: text
    };
};

export const specialtyVehicleSelect = ({checkListOption}) => {

    return {
        type: SPECIALTY_VEHICLE,
        payload: { checkListOption }
    }
};

export const makeChanged = (text) => {
    return {
        type: MAKE_CHANGED,
        payload: text
    };
};

export const modelChanged = (text) => {
    return {
        type: MODEL_CHANGED,
        payload: text
    };
};

export const seriesChanged = (text) => {
    return {
        type: SERIES_CHANGED,
        payload: text
    };
};

export const styleChanged = (text) => {
    return {
        type: STYLE_CHANGED,
        payload: text
    };
};

export const paintConditionSelect = ({option}) => {

    return {
        type: PAINT_CONDITION,
        payload: { option }
    }
};

export const bodyConditionSelect = ({option}) => {

    return {
        type: BODY_CONDITION,
        payload: { option }
    }
};

export const tiresConditionSelect = ({option}) => {

    return {
        type: TIRES_CONDITION,
        payload: { option }
    }
};

export const glassConditionSelect = ({option}) => {

    return {
        type: GLASS_CONDITION,
        payload: { option }
    }
};

export const photoTaken = ({photoId, path, currentPhoto}) => {

    return {
        type: PHOTO_TAKEN,
        payload: { photoId, path }
    }
};

export const vinChanged = (text) => {
    return {
        type: VIN_CHANGED,
        payload: text
    };
};

export const interiorConditionSelect = ({option}) => {

    return {
        type: INTERIOR_CONDITION,
        payload: { option }
    }
};

export const upholsteryConditionSelect = ({option}) => {

    return {
        type: UPHOLSTERY_CONDITION,
        payload: { option }
    }
};

export const carpetConditionSelect = ({option}) => {

    return {
        type: CARPET_CONDITION,
        payload: { option }
    }
};

export const engineNoiseConditionSelect = ({option}) => {

    return {
        type: ENGINE_NOISE_CONDITION,
        payload: { option }
    }
};

export const transmissionShiftConditionSelect = ({option}) => {

    return {
        type: TRANSMISSION_SHIFT_CONDITION,
        payload: { option }
    }
};

export const dashboardConditionSelect = ({option}) => {

    return {
        type: DASHBOARD_CONDITION,
        payload: { option }
    }
};

export const odometerConditionSelect = ({option}) => {

    return {
        type: ODOMETER_CONDITION,
        payload: { option }
    }
};

export const electronicsConditionSelect = ({option}) => {

    return {
        type: ELECTRONICS_CONDITION,
        payload: { option }
    }
};

export const consoleConditionSelect = ({option}) => {

    return {
        type: CONSOLE_CONDITION,
        payload: { option }
    }
};

export const airconditionConditionSelect = ({option}) => {

    return {
        type: AIRCONDITION_CONDITION,
        payload: { option }
    }
};

export const heatConditionSelect = ({option}) => {

    return {
        type: HEAT_CONDITION,
        payload: { option }
    }
};

export const odorConditionSelect = ({option}) => {

    return {
        type: ODOR_CONDITION,
        payload: { option }
    }
};

export const engineAppearanceConditionSelect = ({option}) => {

    return {
        type: ENGINE_APPEARANCE_CONDITION,
        payload: { option }
    }
};

export const overallConditionSelect = ({option}) => {

    return {
        type: OVERALL_CONDITION,
        payload: { option }
    }
};

export const notesChanged = (text) => {
    return {
        type: NOTES_CHANGED,
        payload: text
    };
};

export const photoSent = (photoId, guid) => {
    return {
        type: PHOTO_SENT,
        payload: { photoId, guid }
    };
};

export const updateTotalPhotosToSend = (totalPhotosToSend) => {
    return {
        type: TOTAL_PHOTOS_TO_SEND,
        payload: totalPhotosToSend
    };
};