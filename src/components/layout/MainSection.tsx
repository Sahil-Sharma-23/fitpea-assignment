import CustomBarChart from "../CustomBarChart";
import SummaryCard from "../ui/SummaryCard";

export default function MainSection() {
  return (
    <>
      <div className="overflow-y-scroll overflow-x-hidden grid grid-cols-6 h-full gap-4">
        <div className="col-span-4">
          <div className="flex gap-4 justify-between">
            <SummaryCard
              imgSrc="/total_orders.png"
              amount="75"
              isPositive
              percentage="3"
              title="Total Orders"
            />
            <SummaryCard
              imgSrc="/total_delivered.png"
              amount="70"
              isPositive={false}
              percentage="3"
              title="Total Delivered"
            />
            <SummaryCard
              imgSrc="/total_cancelled.png"
              amount="05"
              isPositive
              percentage="3"
              title="Total Cancelled"
            />
            <SummaryCard
              imgSrc="/total_revenue.png"
              amount="$12K"
              isPositive={false}
              percentage="3"
              title="Total Revenue"
            />
          </div>

          <div className="h-56 w-full">
            <CustomBarChart />
          </div>
        </div>

        <div className="col-span-2"></div>
      </div>
    </>
  );
}
