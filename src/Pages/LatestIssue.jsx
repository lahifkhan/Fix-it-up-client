import IssueCard from "../Components/IssueCard";
import Loader from "../Components/Loader";

const LatestIssue = ({ latestIssues }) => {
  return (
    <div>
      <h1 className="text-center font-bold text-2xl md:text-3xl text-primary mt-20 mb-8">
        Latest Issues
      </h1>
      <div className=" w-11/12 mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        {latestIssues.map((issue) => (
          <IssueCard key={issue._id} issue={issue}></IssueCard>
        ))}
      </div>
    </div>
  );
};

export default LatestIssue;
