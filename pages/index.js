import Link from 'next/link';
import styles from '../styles/index.module.css';
import Navbar from '../components/Navbar';

const Index = () => {
  return (
    <div className={styles.container}>
       <Navbar/>
      <h1>Home Page</h1>
      <Link href="/addRecipe">Add your recipes here</Link>
      <Link href="/recipes">Find recipes here</Link>
    </div>
  );
};

export default Index;

