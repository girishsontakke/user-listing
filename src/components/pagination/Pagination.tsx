import usePagination, { DOTS } from "./usePagination";
import styles from "./Pagination.module.scss";

interface Iprops {
  totalCount: number;
  currentPage: number;
  pageSize: number;
  onPageChange: (page: number) => void;
}

function handleButtonClick(
  event: React.MouseEvent,
  onPageChange: (page: number) => void
) {
  let page: string | number | undefined = (event.target as HTMLElement).dataset
    .page;
  try {
    if (page !== undefined) page = parseInt(page);
  } catch (error) {
    page = 0;
  }
  typeof page === "number" && onPageChange(page);
}

function Pagination({
  totalCount,
  currentPage,
  pageSize,
  onPageChange
}: Iprops) {
  const paginationRange = usePagination({
    currentPage,
    totalCount,
    pageSize
  });

  // If there are less than 2 times in pagination range we shall not render the component
  if (!paginationRange || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  let lastPage = paginationRange[paginationRange.length - 1];
  return (
    <div className={styles.paginationContainer}>
      {/* Left navigation arrow */}
      <button
        className={`${styles.paginationItem} ${
          currentPage === 1 ? styles.disabled : ""
        }`}
        onClick={onPrevious}
      >
        <div className={`${styles.arrow} ${styles.left}`} />
      </button>
      <div
        className={styles.buttonsContainer}
        onClick={(event) => handleButtonClick(event, onPageChange)}
      >
        {paginationRange.map((pageNumber, idx) => {
          // If the pageItem is a DOT, render the DOTS unicode character
          if (pageNumber === DOTS) {
            return (
              <button
                key={pageNumber + idx}
                className={`${styles.paginationItem} ${styles.dots}`}
              >
                &#8230;
              </button>
            );
          }

          // Render our Page Pills
          return (
            <button
              key={pageNumber}
              className={`${styles.paginationItem} ${
                pageNumber === currentPage ? styles.selected : ""
              }`}
              data-page={pageNumber}
            >
              {pageNumber}
            </button>
          );
        })}
      </div>

      {/*  Right Navigation arrow */}
      <button
        className={`${styles.paginationItem} ${
          currentPage === lastPage ? styles.disabled : ""
        } `}
        onClick={onNext}
      >
        <div className={`${styles.arrow} ${styles.right}`} />
      </button>
    </div>
  );
}

export default Pagination;
