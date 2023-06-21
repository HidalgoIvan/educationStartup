import { IonPage, IonHeader, IonContent } from '@ionic/react';
import { FunctionComponent } from 'react';

interface FullScreenPageProps {
  header?: React.ReactNode;
  content?: React.ReactNode;
}

const FullScreenPage: FunctionComponent<FullScreenPageProps> = ({
  header,
  content,
}) => {
  return (
    <IonPage>
      <IonHeader>{header}</IonHeader>
      <IonContent fullscreen style={{ overflowY: 'hidden' }}>
        {content}
      </IonContent>
    </IonPage>
  );
};

export default FullScreenPage;
