import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faPenToSquare, faTrashCan } from '@fortawesome/free-solid-svg-icons';

const Table = ({ columns, data, onCheckboxChange ,onViewDetails }) => {
    const pageSize = 5;
    const [currentPage, setCurrentPage] = React.useState(1);

    const totalPageCount = Math.ceil(data.length / pageSize);
    const startIndex = (currentPage - 1) * pageSize;
    const currentData = data.slice(startIndex, startIndex + pageSize);

  const getStatusColor = (status) => {
    switch (status) {
      case "Active":
        return "bg-green-500 text-white";
      case "Inactive":
        return "bg-red-500 text-white";
      case "DROPPED":
        return "bg-pink-500 text-white";
      case "REJECTED":
        return "bg-red-500 text-white";
      case "INITIATED":
        return "bg-blue-500 text-white";
      case "REINITIATED":
        return "bg-yellow-500 text-white";
      case "APPROVED":
        return "bg-green-500 text-white";
      default:
        return ""; // Default case for any other status
    }
  };

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

  return (
    <>
      <div className="overflow-x-auto" >
        <table className="min-w-full divide-y divide-gray-200" style={{boxShadow:"0 0 20px black"}}>
          <thead className="bg-[#5D76A9] text-white">
            <tr>
              {columns.map((column) => (
                <th
                  key={column.accessor}
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
                >
                  {column.header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {currentData.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {columns.map((column) => (
                  <td
                    key={column.accessor}
                    className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
                  >
                    {column.accessor === "checkbox" ? (
                      <input
                        type="checkbox"
                        checked={row.checkbox}
                        onChange={() => onCheckboxChange(rowIndex + startIndex)}
                      />
                    ) : column.accessor === "status" ? (
                      <span
                        className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(
                          row.status
                        )}`}
                      >
                        {row.status}
                      </span>
                    ) : column.accessor === "action" ? (
                      <div className="flex space-x-2">
                        <FontAwesomeIcon
                          icon={faEye}
                          className="mr-2 cursor-pointer"
                          onClick={() => onViewDetails(row)}
                        />
                        <FontAwesomeIcon
                          icon={faPenToSquare}
                          className="mr-2 cursor-pointer"
                        />
                        <FontAwesomeIcon
                          icon={faTrashCan}
                          className="cursor-pointer"
                        />
                      </div>
                    ) : (
                      row[column.accessor]
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        <div className="mt-4 flex justify-end">
          <nav
            className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
            aria-label="Pagination"
          >
            <button
              onClick={() =>
                handlePageChange(currentPage > 1 ? currentPage - 1 : 1)
              }
              className={`relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 ${
                currentPage === 1 ? "cursor-not-allowed" : "cursor-pointer"
              }`}
              disabled={currentPage === 1}
            >
              Previous
            </button>
            {Array.from({ length: totalPageCount }, (_, index) => (
              <button
                key={index}
                onClick={() => handlePageChange(index + 1)}
                className={`relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 ${
                  currentPage === index + 1
                    ? "z-10 bg-blue-50 border-blue-500 text-blue-600"
                    : "hover:text-blue-500"
                }`}
              >
                {index + 1}
              </button>
            ))}
            <button
              onClick={() =>
                handlePageChange(
                  currentPage < totalPageCount
                    ? currentPage + 1
                    : totalPageCount
                )
              }
              className={`relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 ${
                currentPage === totalPageCount
                  ? "cursor-not-allowed"
                  : "cursor-pointer"
              }`}
              disabled={currentPage === totalPageCount}
            >
              Next
            </button>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Table;