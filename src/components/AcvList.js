import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { acvCreate } from '../actions';
import { Button, Card, CardSection, Input, Spinner } from './common';

class AcvList extends Component {

    guid() {
        function _p8(s) {
            var p = (Math.random().toString(16) + "000000000").substr(2, 8);
            return s ? "-" + p.substr(0, 4) + "-" + p.substr(4, 4) : p;
        }
        return _p8() + _p8(true) + _p8(true) + _p8();
    }

    createNewAcv() {
        let acv = {};

        acv.opjectType = "storeACV";
        acv.vehicleType = '';
        acv.status = 'WorkInProgress';
        acv.createdDateTime = new Date().toISOString();
        acv.id = this.guid();
        acv.userName = '';
        acv.isSpecialty = '';
        acv.vehicleInformation = {
            year: '',
            make: '',
            model: '',
            series: '',
            style: '',
            vin: '',
            mileage: ''
        };

        acv.vehicleCondition = {
            overallCondition: '',
            notes: '',
            vehicleRating: {
                paint: '',
                body: '',
            },
            vehicleDamage: {
                front: '',
                rear: '',
                interior: '',
                passengerSide: '',
                driverSide: ''
            }
        };
        acv.preQualificationInfo = {
            borrowAmount: '',
            sellAmount: '',
            titleRemarks: '',
            titleStatus: ''
        };

        acv.photos = this.createAcvPhotos();

        acv.isValid = false;
        return acv;
    }

    createAcvPhotos() {

        let acvPhotos = {
            govId : {
                id: 'govId',
                serverId: 'Gov. Pic ID',
                title: 'GOV. PIC ID',
                hintText: "Capture a photo of the borrower's GOV. PIC ID. Be sure the photo is clear and legible.",
                url: '',
                placeholderUrl: 'photo_guide_govid'
            },
            vehicleTitle : {
                id: 'vehicleTitle',
                serverId: 'Title',
                title: 'VEHICLE TITLE',
                hintText: "Capture a photo of the VEHICLE TITLE. Be sure the photo is clear and legible.",
                url: '',
                placeholderUrl: 'photo_guide_vehicle_title'
            },
            vinFromTitle : {
                id: 'vinFromTitle',
                serverId: 'VIN from title',
                title: 'VIN from TITLE',
                hintText: "Capture a close-up photo of the VIN on the TITLE. Be sure the photo is clear and legible.",
                url: '',
                placeholderUrl: 'photo_guide_vin_from_title'
            },
            front: { 
                id: 'front', 
                title: 'VEHICLE FRONT', 
                serverId: 'Front', 
                hintText: 'Capture a photo of the VEHICLE FRONT. Be sure the photo is in focus and well lit.',
                url: '',
                placeholderUrl: 'photo_guide_front', 
                sortOrder: 4 
            }, 
            driverSide: { 
                id: 'driverSide', 
                title: 'DRIVER SIDE', 
                serverId: 'Driver Side', 
                hintText: 'Capture a photo of the VEHICLE DRIVER SIDE. Be sure the photo is in focus and well lit.',
                url: '',
                placeholderUrl: 'photo_guide_driver_side', 
                sortOrder: 6 
            },    
            rear: { 
                id: 'rear', 
                title: 'VEHICLE REAR', 
                serverId: 'Rear', 
                hintText: 'Capture a photo of the VEHICLE REAR. Be sure the photo is in focus and well lit.',
                url: '',
                placeholderUrl: 'photo_guide_rear', 
                sortOrder: 8 
            },       
            passengerSide: { 
                id: 'passengerSide', 
                title: 'PASSENGER SIDE', 
                serverId: 'Passenger Side',
                hintText: 'Capture a photo of the VEHICLE PASSENGER SIDE. Be sure the photo is in focus and well lit.', 
                url: '',
                placeholderUrl: 'photo_guide_passenger_side', 
                sortOrder: 10 
            },
            series: { 
                id: 'series', 
                title: 'SERIES', 
                serverId: 'Series', 
                hintText: 'Capture a photo of the vehicle SERIES. Be sure the photo is in focus and well lit.',
                url: '',
                placeholderUrl: 'photo_guide_series', 
                sortOrder: 22 
            },
            vinFromVehicle: { 
                id: 'vinFromVehicle', 
                title: 'VIN from VEHICLE', 
                serverId: 'VIN from vehicle', 
                hintText: 'Capture a photo of the VIN FROM VEHICLE. Be sure the photo is in focus and well lit.',
                url: '',
                placeholderUrl: 'photo_guide_vin_from_vehicle', 
                sortOrder: 12 
            },
            interior: { 
                id: 'interior', 
                title: 'INTERIOR', 
                serverId: 'Interior',
                hintText: 'Capture a photo of the vehicle INTERIOR with the door open. Be sure the photo is in focus and well lit.',
                url: '', 
                placeholderUrl: 'photo_guide_interior', 
                sortOrder: 13 
            },
            odometer: { 
                id: 'odometer', 
                title: 'ODOMETER', 
                serverId: 'Odometer', 
                hintText: 'Capture a photo of the ODOMETER showing how many miles driven. Be sure the photo is clear and legible.',
                url: '',
                placeholderUrl: 'photo_guide_odometer', 
                sortOrder: 21 
            },

        };
        return acvPhotos;        
    }

    onButtonPress() {
        const acv = this.createNewAcv();
        this.props.acvCreate({ acv });
        Actions.vehicleType();
        // Actions.acvPhotoCapture({photoId: 'govId'});
    }

    render() {
        return (
            <Card>
                <CardSection>
                    <Text style={styles.textTitle}>
                        VEHICLE ASSESSMENTS
                    </Text>
                </CardSection>

                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}>
                        Start Vehicle Assessment
                    </Button>
                </CardSection>

            </Card>
        );
    }
}

const styles = StyleSheet.create({
    textTitle: {
        fontSize: 25,
        fontWeight: 'bold',
        alignSelf: 'stretch',
        marginLeft: 10
    }
});

export default connect(null, { acvCreate })(AcvList);
