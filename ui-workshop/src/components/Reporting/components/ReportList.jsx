import React from "react";
import { GetReportUrl } from "../../../services/ReportService";
import { Routes, Route, Link } from "react-router-dom";

const ReportList = (props) => {
  const reportList = props?.reportList;

  const handleReportClicked = (serviceId, reportId) => {
    console.log(serviceId, reportId);
    let url = GetReportUrl(serviceId, reportId);
    console.log(url);
  };

  return (
    <div>
      {reportList.length === 0 ? (
        <p>No Reports Found</p>
      ) : (
        reportList.map((report) => (
          <div key={report.reportId}>
            <h1>
              <Link
                to={`report/${report.serviceId}/${report.reportId}`}
                onClick={() =>
                  handleReportClicked(report.serviceId, report.reportId)
                }
              >
                {report?.reportName}
              </Link>
            </h1>
            <p>{report?.description}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default ReportList;
