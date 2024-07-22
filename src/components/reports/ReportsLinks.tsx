import Link from "next/link";
import { TbReport } from "react-icons/tb";
import { FcStatistics } from "react-icons/fc";
import { TfiThought } from "react-icons/tfi";

export default function ReportsLinks() {
  const titleStyle = "text-2xl font-bold text-center text-white underline";
  const containerStyle =
    "bg-purple-500 flex flex-col items-center p-6 rounded-lg w-[300px] gap-6";
  const descriptionStyle = "text-center text-white italic";

  return (
    <>
      <div className="flex flex-row justify-around my-10 flex-wrap gap-4">
        <Link href="/reports/gameweek-report">
          <div className={containerStyle}>
            <p className={titleStyle}>Gameweek Report</p>
            <TbReport className="size-[80px] bg-white p-4 rounded-3xl" />
            <p className={descriptionStyle}>
              A detailed look at the previous gameweek, including the weekly
              leaderboard, top performers and more. Check out how your team
              fared compared to the rest and look out for some predictions for
              the upcoming week.
            </p>
          </div>
        </Link>
        <Link href="/reports/friday-forecasts">
          <div className={containerStyle}>
            <p className={titleStyle}>Friday Forecasts</p>
            <FcStatistics className="size-[80px] bg-white p-4 rounded-3xl" />
            <p className={descriptionStyle}>
              Get a head start on the upcoming gameweek with our Friday
              Forecasts. We analyze the fixtures, form, and other factors to
              provide you with the best possible insight on how to set up your
              team for the weekend.
            </p>
          </div>
        </Link>
        <Link href="/reports/deadline-dilemmas">
          <div className={containerStyle}>
            <p className={titleStyle}>Deadline Dilemmas</p>
            <TfiThought className="size-[80px] bg-white p-4 rounded-3xl" />
            <p className={descriptionStyle}>
              The final call before the deadline. We provide you with the latest
              team news, injuries, suspensions, and more to help you make the
              best decisions for your fantasy team. Don&apos;t miss out on the
              Deadline Dilemmas report.
            </p>
          </div>
        </Link>
      </div>
    </>
  );
}
