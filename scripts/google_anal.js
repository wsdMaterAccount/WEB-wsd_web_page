function trackOutboundLink(url) {
  gtag("event", "사용자_반응", {
    event_category: "outbound",
    event_label: url,
    transport_type: "beacon",
    event_callback: function () {
      document.location = url;
    },
  });
}
