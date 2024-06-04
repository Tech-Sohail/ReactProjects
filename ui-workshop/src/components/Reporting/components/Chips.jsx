import React from "react";
import Chip from "@material-ui/core/Chip";
function Chips(props) {
  const services = props?.services;

  return (
    <div>
      {services?.map((service) => (
        <Chip
          key={service?.serviceId}
          label={service?.ServiceName}
          color={
            service?.serviceId === props?.clickedChipId
              ? "secondary"
              : "primary"
          }
          onClick={() => props?.handleChipClick(service.serviceId)}
        />
      ))}
    </div>
  );
}

export default Chips;
