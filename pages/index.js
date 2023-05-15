import Link from 'next/link';
import styles from '../styles/index.module.css';

const Index = () => {
  return (
    <div className={styles.container}>
      <h1>Home Page</h1>
      <Link href="/recipes">
        Go to Recipe Page
      </Link>
    </div>
  );
};

export default Index;
