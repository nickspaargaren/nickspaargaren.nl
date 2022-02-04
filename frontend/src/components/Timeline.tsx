import { useTimelineData } from "@src/hooks/useTimelineData";
import React, { ReactElement } from "react";
import { GiCheckMark } from "react-icons/gi";
import styled from "styled-components";

const StyledTimeline = styled.div`
  border-left: 3px dashed #bababa;
  padding-left: 31px;
  margin-left: 11px;
`;

const StyledTimelineItem = styled.div`
  margin-bottom: 30px;
  padding: 5px 0 0;
  position: relative;
  h4 {
    margin: 0;
  }
  .check {
    position: absolute;
    content: "";
    justify-content: center;
    display: flex;
    height: 16px;
    width: 16px;
    padding: 3px;
    background: #fff;
    left: -45px;
    top: 5px;
    border: 2px solid #bababa;
    border-radius: 3px;
    svg {
      margin: 0;
      fill: #7d7d7d;
    }
  }
  &:last-child .check {
    border-color: #f0a828;
    svg {
      fill: #f0a828;
      opacity: 0.15;
    }
    animation: check 1.2s infinite;
  }
  @keyframes check {
    0% {
      box-shadow: 0 0 0 3px rgba(240, 168, 40, 0.2);
    }
    50% {
      box-shadow: 0 0 0 5px rgba(240, 168, 40, 0.2);
    }
    100% {
      box-shadow: 0 0 0 3px rgba(240, 168, 40, 0.2);
    }
  }
`;

type TimelineItemType = {
  title: string;
  subtitle: string;
};

const TimelineItem = ({ title, subtitle }: TimelineItemType): ReactElement => {
  return (
    <StyledTimelineItem>
      <div className="check">
        <GiCheckMark />
      </div>
      <h4>{title}</h4>
      <p>{subtitle}</p>
    </StyledTimelineItem>
  );
};

const Timeline = (): ReactElement => {
  const timeline = useTimelineData();

  return (
    <StyledTimeline>
      {timeline.map((item) => (
        <TimelineItem title={item.title} subtitle={item.subtitle} />
      ))}
    </StyledTimeline>
  );
};

export default Timeline;
