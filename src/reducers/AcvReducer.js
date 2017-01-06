import {
    EMPLOYEE_UPDATE,
    ACV_CREATE,
    VEHICLE_TYPE,
    TITLE_STATUS,
    TITLE_REMARK,
    BORROWAMOUNT_CHANGED,
    SELLAMOUNT_CHANGED,
    EMPLOYEE_SAVE_SUCCESS,
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
    NOTES_CHANGED

} from '../actions/types';

const INITIAL_STATE = {
    currentAcv: null,
    currentPhoto: null,
    acvCollection: [],
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ACV_CREATE:
            return { ...state, currentAcv: action.payload.acv };
        case VEHICLE_TYPE:
            return { ...state, currentAcv: { ...state.currentAcv, vehicleType: action.payload.checkListOption } };
        case TITLE_STATUS:
            return { ...state, currentAcv: { ...state.currentAcv, preQualificationInfo: {...state.currentAcv.preQualificationInfo, titleStatus: action.payload.checkListOption } } };
        case TITLE_REMARK:
            return { ...state, currentAcv: { ...state.currentAcv, preQualificationInfo: {...state.currentAcv.preQualificationInfo, titleRemarks: action.payload.checkListOption } } };
        case BORROWAMOUNT_CHANGED:
            return { ...state, currentAcv: { ...state.currentAcv, preQualificationInfo: {...state.currentAcv.preQualificationInfo, borrowAmount: action.payload } } };
        case SELLAMOUNT_CHANGED:
            return { ...state, currentAcv: { ...state.currentAcv, preQualificationInfo: {...state.currentAcv.preQualificationInfo, sellAmount: action.payload } } };
        case YEAR_CHANGED:
            return { ...state, currentAcv: { ...state.currentAcv, vehicleInformation: {...state.currentAcv.vehicleInformation, year: action.payload } } };
        case SPECIALTY_VEHICLE:
            return { ...state, currentAcv: { ...state.currentAcv, isSpecialty: action.payload.checkListOption } };
        case MAKE_CHANGED:
            return { ...state, currentAcv: { ...state.currentAcv, vehicleInformation: {...state.currentAcv.vehicleInformation, make: action.payload } } };
        case MODEL_CHANGED:
            return { ...state, currentAcv: { ...state.currentAcv, vehicleInformation: {...state.currentAcv.vehicleInformation, model: action.payload } } };
        case SERIES_CHANGED:
            return { ...state, currentAcv: { ...state.currentAcv, vehicleInformation: {...state.currentAcv.vehicleInformation, series: action.payload } } };
        case STYLE_CHANGED:
            return { ...state, currentAcv: { ...state.currentAcv, vehicleInformation: {...state.currentAcv.vehicleInformation, style: action.payload } } };
        case PAINT_CONDITION:
            return { ...state, currentAcv: { ...state.currentAcv, vehicleCondition: {...state.currentAcv.vehicleCondition, vehicleRating: {...state.currentAcv.vehicleCondition.vehicleRating, paint: action.payload.option.value } } } };
        case BODY_CONDITION:
            return { ...state, currentAcv: { ...state.currentAcv, vehicleCondition: {...state.currentAcv.vehicleCondition, vehicleRating: {...state.currentAcv.vehicleCondition.vehicleRating, body: action.payload.option.value } } } };
        case TIRES_CONDITION:
            return { ...state, currentAcv: { ...state.currentAcv, vehicleCondition: {...state.currentAcv.vehicleCondition, vehicleRating: {...state.currentAcv.vehicleCondition.vehicleRating, tires: action.payload.option.value } } } };
        case GLASS_CONDITION:
            return { ...state, currentAcv: { ...state.currentAcv, vehicleCondition: {...state.currentAcv.vehicleCondition, vehicleRating: {...state.currentAcv.vehicleCondition.vehicleRating, glass: action.payload.option.value } } } };
        case PHOTO_TAKEN:
            // return { ...state, currentPhoto: action.payload.currentPhoto, currentAcv: { ...state.currentAcv, photos: state.currentAcv.photos.map((photo) => photo.id === action.payload.photoId ? {...photo, url: action.payload.path} : photo) } };
            let id = action.payload.photoId;
            return { ...state, currentPhoto: action.payload.currentPhoto, currentAcv: { ...state.currentAcv, photos: {...state.currentAcv.photos, [id]: { ...state.currentAcv.photos[id], url: action.payload.path } } } };
        case VIN_CHANGED:
            return { ...state, currentAcv: { ...state.currentAcv, vehicleInformation: {...state.currentAcv.vehicleInformation, vin: action.payload } } };
        case INTERIOR_CONDITION:
            return { ...state, currentAcv: { ...state.currentAcv, vehicleCondition: {...state.currentAcv.vehicleCondition, vehicleRating: {...state.currentAcv.vehicleCondition.vehicleRating, interior: action.payload.option.value } } } };
        case UPHOLSTERY_CONDITION:
            return { ...state, currentAcv: { ...state.currentAcv, vehicleCondition: {...state.currentAcv.vehicleCondition, vehicleRating: {...state.currentAcv.vehicleCondition.vehicleRating, upholstery: action.payload.option.value } } } };
        case CARPET_CONDITION:
            return { ...state, currentAcv: { ...state.currentAcv, vehicleCondition: {...state.currentAcv.vehicleCondition, vehicleRating: {...state.currentAcv.vehicleCondition.vehicleRating, carpet: action.payload.option.value } } } };
        case ENGINE_NOISE_CONDITION:
            return { ...state, currentAcv: { ...state.currentAcv, vehicleCondition: {...state.currentAcv.vehicleCondition, vehicleRating: {...state.currentAcv.vehicleCondition.vehicleRating, engineNoise: action.payload.option.value } } } };
        case TRANSMISSION_SHIFT_CONDITION:
            return { ...state, currentAcv: { ...state.currentAcv, vehicleCondition: {...state.currentAcv.vehicleCondition, vehicleRating: {...state.currentAcv.vehicleCondition.vehicleRating, transmission: action.payload.option.value } } } };
        case DASHBOARD_CONDITION:
            return { ...state, currentAcv: { ...state.currentAcv, vehicleCondition: {...state.currentAcv.vehicleCondition, vehicleRating: {...state.currentAcv.vehicleCondition.vehicleRating, dash: action.payload.option.value } } } };
        case ODOMETER_CONDITION:
            return { ...state, currentAcv: { ...state.currentAcv, vehicleCondition: {...state.currentAcv.vehicleCondition, vehicleRating: {...state.currentAcv.vehicleCondition.vehicleRating, odometer: action.payload.option.value } } } };
        case ELECTRONICS_CONDITION:
            return { ...state, currentAcv: { ...state.currentAcv, vehicleCondition: {...state.currentAcv.vehicleCondition, vehicleRating: {...state.currentAcv.vehicleCondition.vehicleRating, electronics: action.payload.option.value } } } };
        case CONSOLE_CONDITION:
            return { ...state, currentAcv: { ...state.currentAcv, vehicleCondition: {...state.currentAcv.vehicleCondition, vehicleRating: {...state.currentAcv.vehicleCondition.vehicleRating, console: action.payload.option.value } } } };
        case AIRCONDITION_CONDITION:
            return { ...state, currentAcv: { ...state.currentAcv, vehicleCondition: {...state.currentAcv.vehicleCondition, vehicleRating: {...state.currentAcv.vehicleCondition.vehicleRating, airCondition: action.payload.option.value } } } };
        case HEAT_CONDITION:
            return { ...state, currentAcv: { ...state.currentAcv, vehicleCondition: {...state.currentAcv.vehicleCondition, vehicleRating: {...state.currentAcv.vehicleCondition.vehicleRating, heat: action.payload.option.value } } } };
        case ODOR_CONDITION:
            return { ...state, currentAcv: { ...state.currentAcv, vehicleCondition: {...state.currentAcv.vehicleCondition, vehicleRating: {...state.currentAcv.vehicleCondition.vehicleRating, odor: action.payload.option.value } } } };
        case ENGINE_APPEARANCE_CONDITION:
            return { ...state, currentAcv: { ...state.currentAcv, vehicleCondition: {...state.currentAcv.vehicleCondition, vehicleRating: {...state.currentAcv.vehicleCondition.vehicleRating, engineAppearance: action.payload.option.value } } } };
        case OVERALL_CONDITION:
            return { ...state, currentAcv: { ...state.currentAcv, vehicleCondition: {...state.currentAcv.vehicleCondition, overallCondition: action.payload.option.value } } };
        case NOTES_CHANGED:
            return { ...state, currentAcv: { ...state.currentAcv, vehicleCondition: {...state.currentAcv.vehicleCondition, notes: action.payload } } };


        case EMPLOYEE_SAVE_SUCCESS:
            return INITIAL_STATE;
        default:
            return state;
    }
};
