import { Card, Divider, Image } from "antd";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { useAppSelector } from "../../app/hooks";
import { DetailsProps } from "../../common/types";
import { projectSelector } from "../../slices/projectSlice";

const LogoDetails = () => {
  const { timelineId } = useParams();
  const state = useLocation().state;
  const { loading } = useAppSelector(projectSelector);
  const [timelineDetails, setTimelineDetails] = useState(state as DetailsProps);

  useEffect(() => {
    setTimelineDetails(state as DetailsProps);
  }, [timelineId, state]);

  return (
    <>
      {!loading && (
        <Card
          title={timelineDetails.timeline.title}
          style={{ width: "80%", margin: "0 25px 25px 0" }}
          extra={
            <>
              Started at{" "}
              {moment(timelineDetails.timeline.started).format("DD MMMM, YYYY")}
              <br />
              Finished at{" "}
              {moment(timelineDetails.timeline.finished).format(
                "DD MMMM, YYYY"
              )}
            </>
          }
        >
          {timelineDetails.timeline.description && (
            <>
              {timelineDetails.timeline.description}
              <Divider />
            </>
          )}

          <Image.PreviewGroup>
            {timelineDetails.timeline.photos.map((item, i) => {
              return (
                <Image
                  key={i}
                  width={100}
                  src={"/upload/" + item.url}
                  style={{ padding: "10px" }}
                />
              );
            })}
          </Image.PreviewGroup>
        </Card>
      )}
    </>
  );
};

export default LogoDetails;
