import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import './Home.css';
import Navbar from '../components/Navbar/Navbar';
import ExerciseData from '../components/Exercise/Exercise';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <Navbar></Navbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader>
      </IonContent>
    </IonPage>
  );
};

export default Home;
