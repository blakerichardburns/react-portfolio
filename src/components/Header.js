import Navigation from './Navigation';

const styles = {
  header: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    width: '100%',
    background: '#275DAD',
    color: '#fcf7f8',
  },
  h1: {
    display: 'flex',
    justifyContent: 'flex-start',
    marginTop: '1.5rem',
    marginBottom: '1rem',
    marginLeft: '2.5rem',
    padding: '0.5rem',
    fontSize: '3rem',

  },
  lineSpan: {
    margin: '',
    color: '#5b616a',
  },
  portfolioSpan: {
    color: '#ced3dc',
  },
};

export default function Header({ currentPage, handlePageChange }) {
  return (
    <div style={styles.header}>
      <h1 style={styles.h1}>PORTFOLIO <span style={styles.lineSpan}> | </span> <span style={styles.portfolioSpan}> Blake Burns</span></h1>
        <Navigation
          currentPage={currentPage}
          handlePageChange={handlePageChange}
        />
    </div>
  );
}
