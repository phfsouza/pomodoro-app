import React from 'react';
import { useInterval } from '../hooks/use-interval';
import { secondsToTime } from '../utils/seconds-to-time';

interface Props {
  defaultPomodoroTime: number;
}

export function PomodoroTimer(props: Props) {
  const [mainTime, setMainTime] = React.useState(props.defaultPomodoroTime);
  useInterval(() => {
    setMainTime(mainTime - 1);
  }, 1000);

  return <div>Ola mundo {secondsToTime(mainTime)}</div>;
}
