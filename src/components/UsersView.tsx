import { Card } from "@/components/ui/card";
import MembersListView from './members/list/MembersListView';

const UsersView = () => {
  return (
    <div className="space-y-6">
      <header className="mb-8">
        <h1 className="text-3xl font-medium mb-2 text-white">User Management</h1>
        <p className="text-dashboard-text">View and manage member accounts</p>
      </header>

      <Card className="p-6 bg-dashboard-card border-dashboard-cardBorder">
        <MembersListView />
      </Card>
    </div>
  );
};

export default UsersView;