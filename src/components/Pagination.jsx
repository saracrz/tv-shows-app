export const Pagination = ({page, addPagination}) => {

    return (
        <header className="pagination">
            <p>Page: {page}</p>
            <button className="button-pagination" onClick={addPagination}>Next</button>
        </header>
    )
}