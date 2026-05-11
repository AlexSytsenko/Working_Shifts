import ReactGA from "react-ga4";

export const initAnalytics = () => {
  ReactGA.initialize("G-S4DP7221XZ");
};

export const trackPageView = () => {
  ReactGA.send({
    hitType: "pageview",
    page: window.location.pathname,
  });
};