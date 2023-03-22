import { IconChevronRight } from '@tabler/icons-react';
import { IconChevronLeft } from '@tabler/icons-react';

export const Pagination = ({page, onRightPagination, onLeftPagination }) => {

    return (
        <header className="pagination">
            {page >= 1 && <IconChevronLeft onClick={onLeftPagination} />}
            <p>{page}</p>
            <IconChevronRight onClick={onRightPagination}/>
        </header>
    )
}