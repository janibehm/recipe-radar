import Link from 'next/link';
import styles from '../styles/navbar.module.css';
import Image from 'next/image';

const Navbar = () => {
    return (
        <div className={styles.navbar}>
            <div className={styles.logo}>
                <Link href="/">
                    <Image
                        src="/profile.png"
                        width={500}
                        height={500}
                        alt="Logo"
                    />
                </Link>
            </div>
            <div className={styles.links}>
                <Link href="/">Home</Link>
                <Link href="/addRecipe">Add new recipe</Link>
                <Link href="/recipes">Recipes</Link>
            </div>
        </div>
    );
};

export default Navbar;
