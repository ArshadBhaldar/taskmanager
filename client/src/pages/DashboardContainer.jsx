import OverviewPanel from '../components/OverviewPanel';
import RightPanel from '../components/RightPanel';
import LowerPanel from '../components/LowerPanel';

export default function DashboardContainer() {
  return (
    <div className="flex-grow px-8 py-8 bg-gradient-to-tr from-blue-50 via-purple-50 to-pink-50 min-h-screen">
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        <div className="col-span-2 flex flex-col gap-8">
          <OverviewPanel />
          <LowerPanel />
        </div>
        <RightPanel />
      </div>
    </div>
  );
}
