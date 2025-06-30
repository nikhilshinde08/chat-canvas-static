
import { 
  LayoutDashboard, 
  Users, 
  Calendar, 
  FileText, 
  Activity, 
  Pill, 
  Settings, 
  HelpCircle 
} from "lucide-react";

const navigationItems = [
  { icon: LayoutDashboard, label: "Dashboard", active: false },
  { icon: Users, label: "Patients", active: true },
  { icon: Calendar, label: "Appointments", active: false },
  { icon: FileText, label: "Medical Records", active: false },
  { icon: Activity, label: "Vitals", active: false },
  { icon: Pill, label: "Medications", active: false },
  { icon: Settings, label: "Settings", active: false },
  { icon: HelpCircle, label: "Help", active: false },
];

export const Sidebar = () => {
  return (
    <div className="w-64 bg-white border-r border-gray-200 flex flex-col">
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
            <span className="text-white font-bold text-sm">ACL</span>
          </div>
          <span className="font-semibold text-gray-900">Digital</span>
        </div>
      </div>
      
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {navigationItems.map((item, index) => (
            <li key={index}>
              <a
                href="#"
                className={`flex items-center space-x-3 px-3 py-2 rounded-md transition-colors ${
                  item.active
                    ? "bg-blue-50 text-blue-700 border-r-2 border-blue-700"
                    : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                }`}
              >
                <item.icon className="w-5 h-5" />
                <span className="text-sm font-medium">{item.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};
