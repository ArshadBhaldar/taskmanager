import OverviewPanel from '../components/OverviewPanel';
import RightPanel from '../components/RightPanel';
import LowerPanel from '../components/LowerPanel';

export default function DashboardContainer() {
  return (
    <div className="flex min-h-screen bg-gray-50 text-gray-900">

      {/* Main dashboard area */}
      <div className="flex-1 px-8 py-6 grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <OverviewPanel />
          <LowerPanel />
        </div>
        <RightPanel />
      </div>
    </div>
  );
}
