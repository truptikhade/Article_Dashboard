import { useEffect, useState } from "react";
import { fetchInsights } from "../../api/apiClient";

const InsightsTable = ({ filters }) => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const limit = 10;
  useEffect(() => {
    fetchInsights(filters).then((res) => {
      setData(res.data || []);
      setPage(1); // reset page when filters change
    });
  }, [filters]);
  const start = (page - 1) * limit;
  const end = start + limit;
  const pageData = data.slice(start, end);
  return (
    <div className="table-container">
      <table className="insights-table">
        <thead>
          <tr>
            <th>No.</th>
            <th>Title</th>
            <th>Topic</th>
            <th>Sector</th>
            <th>Region</th>
            <th>Country</th>
            <th>Intensity</th>
            <th>Likelihood</th>
            <th>Relevance</th>
            <th>Source</th>
            <th>Added</th>
            <th>Published</th>
          </tr>
        </thead>

        <tbody>
          {pageData.map((row, i) => (
            <tr key={i}>
              <td>{start + i + 1}</td>
              <td>{row.title}</td>
              <td>{row.topic}</td>
              <td>{row.sector}</td>
              <td>{row.region}</td>
              <td>{row.country}</td>
              <td>{row.intensity}</td>
              <td>{row.likelihood}</td>
              <td>{row.relevance}</td>
              <td>{row.source}</td>
              <td>{row.added}</td>
              <td>{row.published}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="pagination">
        <button disabled={page === 1} onClick={() => setPage(page - 1)}>
          {"<"}
        </button>
        <span>
          {data.length === 0
            ? "0 results"
            : `${start + 1}-${Math.min(end, data.length)} of ${data.length}`}
        </span>
        <button disabled={end >= data.length} onClick={() => setPage(page + 1)}>
          {">"}
        </button>
      </div>
    </div>
  );
};

export default InsightsTable;