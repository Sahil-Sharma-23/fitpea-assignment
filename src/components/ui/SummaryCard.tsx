import { ChevronDown, ChevronUp } from "lucide-react";
import { Card, CardContent } from "../ui/card";

type SummaryCardProps = {
  imgSrc: string;
  title: string;
  amount: string;
  percentage: string;
  isPositive: boolean;
};

export default function SummaryCard({
  imgSrc,
  title,
  amount,
  percentage,
  isPositive,
}: SummaryCardProps) {
  return (
    <div className="h-fit w-fit">
      <Card className="border-none">
        <CardContent className="p-4 w-52 flex flex-col gap-3 bg-muted/40 rounded-lg">
          <div className="flex flex-col items-start">
            <img src={imgSrc} alt="Icon" className="h-14 w-14 rounded-lg" />
            <p className="text-muted-foreground font-bold">{title}</p>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-3xl font-bold">{amount}</span>
            <span>
              {isPositive ? (
                <span className="text-green-500 flex">
                  <ChevronUp color="green" fill="green" />
                  {percentage}%
                </span>
              ) : (
                <span className="text-red-700 flex">
                  <ChevronDown color="red" fill="red" />
                  {percentage}%
                </span>
              )}
            </span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
