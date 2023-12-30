import React, { ReactElement } from "react";
import styled from "styled-components";

const StyledStats = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 10px;

  .amount {
    font-size: 44px;
    padding-right: 9px;
    line-height: 1;
    font-weight: bold;
    position: relative;
  }
  .plus {
    position: absolute;
    right: 0;
    bottom: 0;
    line-height: 1;
    background: #35ca88;
    color: #fff;
    height: 17px;
    width: 17px;
    display: flex;
    justify-content: center;
    border-radius: 17px;
    font-size: 18px;
    border: 2px solid #fff;
    font-family: Arial;
    font-weight: normal;
  }

  .content h4 {
    margin: 0;
  }

  .content .subtitle {
    font-size: 16px;
    opacity: 0.75;
  }
`;

const Stats = ({
  title,
  subtitle,
  amount,
  icon,
}: Queries.statsQuery["stats"]["nodes"][number]): ReactElement => (
  <StyledStats>
    <div className="amount">
      {amount}
      <div className="plus" aria-hidden="true">
        {icon}
      </div>
    </div>
    <div className="content">
      <h4>{title}</h4>
      <div className="subtitle">{subtitle}</div>
    </div>
  </StyledStats>
);

export default Stats;
