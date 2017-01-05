import React from 'react';
import { Platform } from 'react-native';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import MainMenu from './components/MainMenu';
import AcvList from './components/AcvList';
import VehicleType from './components/VehicleType';
import FullScreenPhoto from './components/FullScreenPhoto';
import PhotoReview from './components/common/PhotoReview';
import TitleStatus from './components/TitleStatus';
import TitleRemark from './components/TitleRemark';
import CustomerBorrow from './components/CustomerBorrow';
import YearModel from './components/YearModel';
import SpecialtyVehicle from './components/SpecialtyVehicle';
import VehicleInfo from './components/VehicleInfo';
import Paint from './components/Paint';
import Body from './components/Body';
import Tires from './components/Tires';
import Glass from './components/Glass';
import Carpet from './components/Carpet';
import Dashboard from './components/Dashboard';
import Interior from './components/Interior';
import Odometer from './components/Odometer';
import Upholstery from './components/Upholstery';
import Vin from './components/Vin';
import EngineNoise from './components/EngineNoise';
import TransmissionShift from './components/TransmissionShift';
import AcvPhotoCapture from './components/acvPhotos/AcvPhotoCapture';
import AcvPhotoReview from './components/acvPhotos/AcvPhotoReview';

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="auth">
        <Scene key="login" component={LoginForm} hideNavBar={true} sceneStyle={{ paddingTop: 0 }} />
      </Scene>

      <Scene key="main">

          <Scene key='mainMenu' hideNavBar={true} component={MainMenu} initial />
          <Scene key='acvList' component={AcvList} title='TLX Mobile RN' />
          <Scene key='vehicleType' component={VehicleType} title='TLX Mobile RN' onRight={() => Actions.govId()} rightTitle="Next >"/>
          <Scene key='acvPhotoCapture' hideNavBar={true} component={AcvPhotoCapture} title='TLX Mobile RN' onRight={() => Actions.glass()} rightTitle="Next >" />       
          <Scene key='titleStatus' component={TitleStatus} title='TLX Mobile RN' onRight={() => Actions.titleRemark()} rightTitle="Next >"/>
          <Scene key='titleRemark' component={TitleRemark} title='TLX Mobile RN' onRight={() => Actions.customerBorrow()} rightTitle="Next >"/>          
          <Scene key='customerBorrow' component={CustomerBorrow} title='TLX Mobile RN' onRight={() => Actions.yearModel()} rightTitle="Next >"/>       
          <Scene key='yearModel' component={YearModel} title='TLX Mobile RN' onRight={() => Actions.specialtyVehicle()} rightTitle="Next >"/>          
          <Scene key='specialtyVehicle' component={SpecialtyVehicle} title='TLX Mobile RN' onRight={() => Actions.vehicleInfo()} rightTitle="Next >"/>
          <Scene key='vehicleInfo' component={VehicleInfo} title='TLX Mobile RN' onRight={() => Actions.paint()} rightTitle="Next >"/>          
          <Scene key='paint' component={Paint} title='TLX Mobile RN' onRight={() => Actions.body()} rightTitle="Next >" />          
          <Scene key='body' component={Body} title='TLX Mobile RN' onRight={() => Actions.tires()} rightTitle="Next >" />          
          <Scene key='tires' component={Tires} title='TLX Mobile RN' onRight={() => Actions.glass()} rightTitle="Next >" />          
          <Scene key='glass' component={Glass} title='TLX Mobile RN' onRight={() => Actions.glass()} rightTitle="Next >" />          

          <Scene key='carpet' component={Carpet} />          
          <Scene key='dashboard' component={Dashboard} />          
          <Scene key='interior' component={Interior} />          
          <Scene key='odometer' component={Odometer} />          
          <Scene key='upholstery' component={Upholstery} />          
          <Scene key='vin' component={Vin} />          
          <Scene key='engineNoise' component={EngineNoise} />          
          <Scene key='transmissionShift' component={TransmissionShift} />          


          <Scene key='fullScreenPhoto' component={FullScreenPhoto} hideNavBar={true} sceneStyle={{ paddingTop: 0 }} />
          <Scene key='acvPhotoReview' component={AcvPhotoReview} hideNavBar={true} title='TLX Mobile RN' />
          <Scene key='photoReview' component={PhotoReview} hideNavBar={true} title='TLX Mobile RN' />

      </Scene>
    </Router>

  );
};

export default RouterComponent;
