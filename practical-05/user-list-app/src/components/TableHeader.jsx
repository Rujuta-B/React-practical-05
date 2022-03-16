import styles from './TableHeader.module.css'

const TableHeader = () => {
  return (
    <>
      <div className={styles.title}>
        <div>Name</div>
        <div className={styles.status}>Status</div>
        <div className={styles.access}>Access</div>
      </div>
    </>
  );
};

export default TableHeader;
