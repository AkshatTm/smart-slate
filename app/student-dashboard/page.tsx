import Header from "@/components/layout/header";
import StudentTimetable from "@/components/timetable/student-timetable";
import StudentSidebar from "@/components/dashboard/student-sidebar";

export default function StudentDashboard() {
  return (
    <div className="min-h-screen bg-[#f8f9fa]">
      <Header />

      <main className="p-6">
        <div className="mb-6">
          <nav className="flex text-sm text-gray-500">
            <span>Home</span>
            <span className="mx-2">/</span>
            <span className="text-gray-900 font-medium">Student Dashboard</span>
          </nav>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          {/* Main Timetable - 60% width on larger screens */}
          <div className="xl:col-span-2">
            <StudentTimetable />
          </div>

          {/* Right Sidebar - 40% width on larger screens */}
          <div className="xl:col-span-1">
            <StudentSidebar />
          </div>
        </div>
      </main>
    </div>
  );
}
