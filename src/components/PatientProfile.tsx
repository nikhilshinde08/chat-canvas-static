
import { Phone, Mail } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const PatientProfile = () => {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex items-start space-x-4 mb-6">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
            <span className="text-xl font-semibold text-blue-700">JD</span>
          </div>
          <div className="flex-1">
            <div className="flex items-center space-x-2 mb-1">
              <h2 className="text-xl font-semibold text-gray-900">John Doe</h2>
              <span className="px-2 py-1 bg-red-100 text-red-700 text-xs font-medium rounded">
                High Risk
              </span>
            </div>
            <p className="text-gray-600 text-sm mb-2">📅 1985-05-15 (40 years)</p>
            <div className="space-y-1">
              <div className="flex items-center text-gray-600 text-sm">
                <Phone className="w-4 h-4 mr-2" />
                (555) 123-4567
              </div>
              <div className="flex items-center text-gray-600 text-sm">
                <Mail className="w-4 h-4 mr-2" />
                john.doe@example.com
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <h3 className="font-medium text-gray-900 mb-2">Insurance Information</h3>
            <div className="text-sm space-y-1">
              <p><span className="text-gray-600">Provider:</span> Blue Cross</p>
              <p><span className="text-gray-600">Policy Number:</span> BC123456789</p>
            </div>
          </div>

          <div>
            <h3 className="font-medium text-gray-900 mb-2">Emergency Contact</h3>
            <div className="text-sm space-y-1">
              <p><span className="text-gray-600">Name:</span> Jane Doe</p>
              <p><span className="text-gray-600">Relationship:</span> Spouse</p>
              <p><span className="text-gray-600">Contact Number:</span> (555) 987-6543</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
