import Navigation from './Navigation';

export default function Header({ currentPage, handlePageChange }) {
  return (
    <header>
      <h1>PORTFOLIO <span> | </span> <span> Blake Burns</span></h1>
        <Navigation
          currentPage={currentPage}
          handlePageChange={handlePageChange}
        />
    </header>
  );
}
