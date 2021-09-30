const PageTurn = ({ page, setPage, pageCount, yPos }) => {
  const handleNextPage = () => {
    setPage(page + 1);
    window.scrollTo(0, yPos);
  };

  const handlePrevPage = () => {
    setPage(page - 1);
    window.scrollTo(0, yPos);
  };
  return (
    <div className="flex justify-center space-x-52">
      {page > 1 ? (
        <button
          className="text-bluegray-500 font-semibold focus:outline-none"
          onClick={handlePrevPage}
        >
          Last Page
        </button>
      ) : (
        <div className="text-white select-none">Prev Page</div>
      )}
      <div className="text-bluegray-500 font-semibold">{page}</div>
      {page < pageCount ? (
        <button
          className="text-bluegray-500 font-semibold focus:outline-none"
          onClick={handleNextPage}
        >
          Next Page
        </button>
      ) : (
        <div className="text-white select-none">Next Page</div>
      )}
    </div>
  );
};

export default PageTurn;
