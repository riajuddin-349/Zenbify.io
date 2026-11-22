/**
 * Product illustrations built in CSS. Always labelled "Sample data": these
 * show how the product is described, not real customer figures.
 */
function Frame({ label, children, foot = "Sample data for illustration" }: { label: string; children: React.ReactNode; foot?: string }) {
  return (
    <div className="mock" role="img" aria-label={label}>
      <div className="mock-bar" aria-hidden="true"><i /><i /><i /><b>Sample data</b></div>
      <div className="mock-body" aria-hidden="true">{children}</div>
      <div className="mock-foot" aria-hidden="true">{foot}</div>
    </div>
  );
}

export function OrderFlowMock() {
  return (
    <Frame label="Illustration of an order moving from new order to AI confirmation to courier booking, using sample data">
      <div className="m-row"><div><strong>New order · cash on delivery</strong><small>Wireless headphones · ৳2,450</small></div><span className="badge badge-warn">Pending</span></div>
      <div className="m-row"><div><strong>AI confirmation call</strong><small>Customer confirms delivery details</small></div><span className="badge badge-good">Confirmed</span></div>
      <div className="m-row"><div><strong>Courier booked</strong><small>Steadfast · tracking shared with customer</small></div><span className="badge badge-neutral">Booked</span></div>
      <div className="m-row"><div><strong>Profit updated</strong><small>Revenue and costs recalculated</small></div><span className="badge badge-neutral">Done</span></div>
    </Frame>
  );
}

export function OrdersMock() {
  return (
    <Frame label="Illustration of an orders list with risk, duplicate and call-to-confirm tags, using sample data">
      <div className="m-stats">
        <div className="m-stat"><small>Pending</small><strong>36</strong></div>
        <div className="m-stat"><small>Confirmed</small><strong>124</strong></div>
        <div className="m-stat"><small>Flagged</small><strong>3</strong></div>
      </div>
      <div className="m-row"><div><strong>#ZB-1045</strong><small>Smart watch</small></div><span className="badge badge-bad">High risk</span></div>
      <div className="m-row"><div><strong>#ZB-1044</strong><small>Running shoes</small></div><span className="badge badge-warn">Duplicate</span></div>
      <div className="m-row"><div><strong>#ZB-1043</strong><small>Travel backpack</small></div><span className="badge badge-good">Call to confirm</span></div>
    </Frame>
  );
}

export function ProfitMock() {
  const bars = [38, 52, 44, 66, 58, 80, 72];
  return (
    <Frame label="Illustration of a profit dashboard with revenue, costs and net profit, using sample data">
      <div className="m-stats">
        <div className="m-stat"><small>Revenue</small><strong>৳1,24,500</strong></div>
        <div className="m-stat"><small>Costs</small><strong>৳76,250</strong></div>
        <div className="m-stat"><small>Net profit</small><strong>৳48,250</strong></div>
      </div>
      <div className="m-bars">{bars.map((h, i) => <span key={i} style={{ height: `${h}%` }} />)}</div>
    </Frame>
  );
}
