import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import demoExercises from '../../assets/exercises/demo/demo.json';
import { loadExercises } from '../../utils/ExerciseLoader/ExerciseLoader';
import { useState } from 'react';
import Exercise from '../../components/Exercise/Exercise';
import { ExerciseOption } from '../../types/ExerciseTypes/ExerciseTypes';
import SessionNavbar from '../../components/Navbar/SessionNavbar/SessionNavbar';
import ExerciseResult from '../../components/Exercise/ExerciseResult/ExerciseResult';

const DemoExercises: React.FC = () => {
  const session = loadExercises(demoExercises);
  const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0);
  const [currentStreak, setCurrentStreak] = useState(0);
  const [totalCoins, setTotalCoins] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [resultCorrect, setResultCorrect] = useState(false);
  const currentExercise = session.exercises[currentExerciseIndex];
  const onAnswerClick = (option: ExerciseOption) => {
    if (option.correct) {
      setCurrentStreak(currentStreak + 1);
      setTotalCoins(totalCoins + 10);
      setResultCorrect(true);
    } else {
      setCurrentStreak(0);
      setResultCorrect(false);
    }
    setShowResult(true);
  };

  const handleContinueClick = () => {
    setCurrentExerciseIndex(currentExerciseIndex + 1);
    setShowResult(false);
  };

  return (
    <IonPage>
      <IonHeader>
        <SessionNavbar
          currentStreak={currentStreak}
          currentStep={currentExerciseIndex}
          totalSteps={session.totalExercises}
          totalCoins={totalCoins}
        ></SessionNavbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Demo</IonTitle>
          </IonToolbar>
        </IonHeader>
        {showResult ? (
          <ExerciseResult
            exerciseData={currentExercise}
            correct={resultCorrect}
            onContinueClick={handleContinueClick}
          />
        ) : (
          <Exercise
            exerciseData={currentExercise}
            onAnswerClick={onAnswerClick}
          ></Exercise>
        )}
      </IonContent>
    </IonPage>
  );
};

export default DemoExercises;
