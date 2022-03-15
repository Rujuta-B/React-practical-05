import styles from './TableHeader.module.css'

const TableHeader = () => {
  return (
    <>
      <tr className={styles.titles}>
        <th>Name</th>
        <th>Status</th>
        <th>Access</th>
      </tr>
    </>
  );
};

export default TableHeader;
