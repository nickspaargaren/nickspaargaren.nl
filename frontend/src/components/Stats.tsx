import React from "react";
import styled from "styled-components";

interface StatsProps {
  title: string;
  subtitle: string;
  amount: number;
  icon: string;
}

const StyledStats = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 10px;

  .amount {
    font-size: 38px;
    padding-right: 12px;
    line-height: 1;
    font-weight: bold;
    font-family: "GilroyRegular";
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
    font-size: 19px;
    border: 2px solid #fff;
  }
  .content .subtitle {
    font-size: 15px;
    opacity: 0.75;
  }
`;

const Stats = ({ title, subtitle, amount, icon }: StatsProps) => {
  return (
    <StyledStats>
      <div className="amount">
        {amount}
        <div className="plus">{icon}</div>
      </div>
      <div className="content">
        <div>{title}</div>
        <div className="subtitle">{subtitle}</div>
      </div>
    </StyledStats>
  );
};

export default Stats;
