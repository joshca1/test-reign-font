import React from "react";
import ReactPaginate from "react-paginate";
import "../styles/pagination.css";

type Props = {
  page: number;
  pageCount: number;
  onPageChange: (selectedItem: { selected: number }) => void;
};

const Pagination: React.FC<Props> = (props: Props) => {
  const { page, pageCount, onPageChange } = props;

  const previousLabel = () => {
    return (
      <div className="pagination-item">
        <span> {"<"} </span>
      </div>
    );
  };

  const nextLabel = () => {
    return (
      <div className="pagination-item">
        <span> {">"} </span>
      </div>
    );
  };

  return (
    <div data-testid="pagination" className="pagination">
      {pageCount > 1 && (
        <ReactPaginate
          previousLabel={previousLabel()}
          nextLabel={nextLabel()}
          breakLabel=""
          breakClassName="pagination-item"
          forcePage={page}
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          pageClassName="pagination-item"
          onPageChange={onPageChange}
          containerClassName="pagination"
          activeClassName="pagination-item--active"
        />
      )}
    </div>
  );
};

export default Pagination;
