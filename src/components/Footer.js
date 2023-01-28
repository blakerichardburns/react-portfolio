const styles = {
  footer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    margin: '0',
    padding: '0.5rem',
    background: '#5b616a',
    color: '#fcf7f8',
  },
};

export default function Footer() {
  return <div style={styles.footer}>Footer component</div>;
}
