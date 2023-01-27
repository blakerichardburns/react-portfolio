import Navigation from "./Navigation";

const styles = {
  header: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: "center",
    width: '100%',
    margin: '0',
    background: '#275DAD',
  },
  h1: {
    display: 'inlineBlock',
  }
}

export default function Header({ currentPage, handlePageChange }) {
  return (
    <div style={styles.header}>
      <h1 style={styles.h1}>Blake Burns</h1>
      <Navigation
        currentPage={currentPage}
        handlePageChange={handlePageChange}
      />
    </div>
  );
}
