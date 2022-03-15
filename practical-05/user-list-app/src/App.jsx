import UserList from './components/UserList';
import styles from './index.module.css'
import HoverCard from './components/HoverCard';

function App() {
  return (
    <div className={styles.card}>
        <UserList />  
        {/* <HoverCard />       */}
      
    </div>
  );
}

export default App;
