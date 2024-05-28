function GetReportList() {
  return [
    {
      reportId: 1,
      reportName: "Employee List",
      serviceId: 1,
      description: "Employee List datat for the client",
    },
    {
      reportId: 2,
      reportName: "Driver List",
      serviceId: 1,
      description: "Driver List datat for the client",
    },
    {
      reportId: 3,
      reportName: "Monitoring List",
      serviceId: 3,
      description: "Monitoring List datat for the client",
    },
  ];
}

export { GetReportList };

function GetServices() {
  return [
    {
      serviceId: 1,
      ServiceName: "Driver Qualification",
    },
    {
      serviceId: 2,
      ServiceName: "Driver Training",
    },
    {
      serviceId: 3,
      ServiceName: "MVR",
    },
  ];
}

export { GetServices };

const ReportUrlMapping = [
  {
    servicedId_reportId: "1/1",
    reportComponent: "TestUrl",
  },
  {
    servicedId_reportId: "1/2",
    reportComponent: ".",
  },
  {
    servicedId_reportId: "2/1",
    reportComponent: ".",
  },
  {
    servicedId_reportId: "3/1",
    reportComponent: ".",
  },
  {
    servicedId_reportId: "3/2",
    reportComponent: ".",
  },
];

const GetReportUrl = (serviceId, reportId) => {
  return ReportUrlMapping.find(
    (mapping) => mapping.servicedId_reportId === `${serviceId}/${reportId}`
  )?.reportComponent;
};

export { GetReportUrl };
