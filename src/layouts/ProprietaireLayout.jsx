import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Sidebar from '@/components/Sidebar';
import styles from '@/styles/Layout.module.css';


const ProprietaireLayout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Sidebar />
      <main className={styles.mainContent}>
        {children}
      </main>
    </div>
  );
};

export default ProprietaireLayout;