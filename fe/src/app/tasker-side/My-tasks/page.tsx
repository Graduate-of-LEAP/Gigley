import MyTasks from '@/components/My-tasks-components/my-task';
import { DashboardLayout } from '@/components/TaskerDashboard-components/DashboardLayout';
import { Container } from '@/components/assets/Container';

export default function MyTasksPage() {
  return (
    <Container className="py-6">
      <DashboardLayout>
        <MyTasks />
      </DashboardLayout>
    </Container>
  );
}
