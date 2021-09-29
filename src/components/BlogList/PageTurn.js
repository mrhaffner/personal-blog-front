const PageTurn = ({ page, setPage, pageCount }) => (
  <div className="flex justify-center space-x-52">
    {page > 1 ? (
      <button
        className="text-bluegray-500 font-semibold focus:outline-none"
        onClick={() => setPage(page - 1)}
      >
        Last Page
      </button>
    ) : (
      <div className="text-white select-none">Last Page</div>
    )}
    <div className="text-bluegray-500 font-semibold">{page}</div>
    {page < pageCount ? (
      <button
        className="text-bluegray-500 font-semibold focus:outline-none"
        onClick={() => setPage(page + 1)}
      >
        Next Page
      </button>
    ) : (
      <div className="text-white select-none">Next Page</div>
    )}
  </div>
);

export default PageTurn;
