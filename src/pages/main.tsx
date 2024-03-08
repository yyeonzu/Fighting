import {LeftSideBar} from '../widgets/left-side-bar/ui';
import {PhoneView} from '../widgets/phone-view/ui';
import {RightSideBar} from '../widgets/right-side-bar/ui';
import * as styles from './styles.css';

export function MainPage() {
  return (
    <div className={styles.layout}>
      <LeftSideBar />
      <PhoneView />
      <RightSideBar />
    </div>
  );
}
