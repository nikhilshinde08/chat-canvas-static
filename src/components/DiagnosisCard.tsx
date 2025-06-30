
import { AlertTriangle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const DiagnosisCard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <Card className="border-red-200 bg-red-50">
        <CardContent className="p-4">
          <div className="flex items-center space-x-2 mb-2">
            <AlertTriangle className="w-5 h-5 text-red-600" />
            <span className="font-medium text-red-800">High Sepsis Risk (82%)</span>
          </div>
          <p className="text-sm text-red-700">
            Based on rising WBC, fever, and low BP. Suggest immediate intervention.
          </p>
        </CardContent>
      </Card>

      <Card className="border-blue-200 bg-blue-50">
        <CardContent className="p-4">
          <div className="flex items-center space-x-2 mb-2">
            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
              87%
            </div>
            <div>
              <h3 className="font-medium text-blue-800">Pneumonia</h3>
              <p className="text-sm text-blue-700">
                Supported by Crackles on auscultation and CXR findings.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
