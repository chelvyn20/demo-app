import React from "react";
import { ClockClass } from "../../components/Clockclass";
import { TapAlertFunc } from "../../components/TapAlertFunc";
import { ClockFunc } from "./../../components/ClockFunc";
import { ClockToggle } from "./../../components/ClockToggle";
import { CounterClass } from "./../../components/CounterClass";
import { CounterFunc } from "./../../components/CounterFunc";
import { TapAlertClass } from "./../../components/TapAlertClass";

export const viewInitState = <CounterClass />;

export function viewReducer(state, action) {
  switch (action) {
    case "CounterClass":
      return <CounterClass />;
    case "CounterFunc":
      return <CounterFunc />;
    case "ClockClass":
      return <ClockToggle children={<ClockClass />} />;
    case "ClockFunc":
      return <ClockToggle children={<ClockFunc />} />;
    case "TapAlertClass":
      return <TapAlertClass />;
    case "TapAlertFunc":
      return <TapAlertFunc />;
    default:
      return <CounterClass />;
  }
}
