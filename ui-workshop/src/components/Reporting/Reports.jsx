import React, { useState } from "react";
import Chips from "./components/Chips";
import { GetServices, GetReportList } from "../../services/ReportService";
import ReportList from "./components/ReportList";

function Reports() {
  const [chipClicked, setChipClicked] = useState(0);
  const [reportList, setReportList] = useState([]);
  const services = GetServices();
  const reports = GetReportList();

  if (chipClicked === 0) {
    var defaultServiceId = services[0]?.serviceId;
    setChipClicked(defaultServiceId);
    setReportList(
      reports.filter((report) => report.serviceId === defaultServiceId)
    );
  }

  const handleChipClick = (chipId) => {
    setChipClicked(chipId);
    setReportList(reports.filter((report) => report.serviceId === chipId));
  };

  console.log(reportList);

  return (
    <div style={{ display: "flex", textAlign: "center", marginBottom: "20px" }}>
      <Chips
        services={services}
        handleChipClick={handleChipClick}
        clickedChipId={chipClicked}
      />
      <div style={{ marginLeft: "20px", marginTop: "30px" }}>
        <ReportList reportList={reportList} />
      </div>
    </div>
  );
}

export default Reports;
