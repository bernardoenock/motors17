import { useState } from "react";
import { Container, Icon, Time } from "./styles";

interface IProps {
  limitData: string;
}

const Stopwatch: React.FC<IProps> = ({ limitData }) => {
  const [time, setTime] = useState("00:00:00");

  const restTime = () => {
    const endDate: any = new Date(limitData);
    const startDate: any = new Date();
    const difference = new Date(endDate - startDate);
    return [
      difference.getUTCHours(),
      difference.getUTCMinutes(),
      difference.getUTCSeconds(),
    ];
  };

  setTimeout(() => {
    const [hours, minutes, seconds] = restTime();
    setTime(
      `${hours <= 9 ? "0" + hours : hours}:${
        minutes <= 9 ? "0" + minutes : minutes
      }:${seconds <= 9 ? "0" + seconds : seconds}`
    );
  }, 1000);

  return (
    <Container>
      <Icon>
        <svg width="1em" height="1em" viewBox="0 0 15 15">
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M7.5.877a6.623 6.623 0 1 0 0 13.246A6.623 6.623 0 0 0 7.5.877ZM1.827 7.5a5.673 5.673 0 1 1 11.346 0a5.673 5.673 0 0 1-11.346 0ZM8 4.5a.5.5 0 0 0-1 0v3a.5.5 0 0 0 .146.354l2 2a.5.5 0 0 0 .708-.708L8 7.293V4.5Z"
            clipRule="evenodd"
          ></path>
        </svg>
      </Icon>

      <Time>{time}</Time>
    </Container>
  );
};

export default Stopwatch;
