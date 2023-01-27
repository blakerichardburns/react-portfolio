import Navigation from './Navigation';

export default function Header({ currentPage, handlePageChange }) {
    return (
        <div>
            <h1>Blake Burns</h1>
            <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
        </div>
    )
}
