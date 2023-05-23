import Link from 'next/link';
import styles from '../styles/index.module.css';
import Navbar from '../components/Navbar';

const Index = () => {

  return (
    <div>
    <Navbar />
    <div className={styles.container}>
      <h1>Home Page</h1>
      <Link href="/recipes">Go to Recipe Page</Link>   
    </div>
    </div>
  );
};

export default Index;

