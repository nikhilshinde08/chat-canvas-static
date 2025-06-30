
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const labResults = [
  { test: "Glucose", result: "126", unit: "mg/dL", reference: "70-99", flag: "H" },
  { test: "HbA1c", result: "7.2", unit: "%", reference: "4.0-5.6", flag: "H" },
  { test: "Creatinine", result: "1.0", unit: "mg/dL", reference: "0.7-1.3", flag: "N" },
  { test: "BUN", result: "18", unit: "mg/dL", reference: "7-20", flag: "N" },
  { test: "WBC", result: "11.5", unit: "K/uL", reference: "4.5-11.0", flag: "H" },
];

export const LabResults = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Latest Lab Results (2023-11-15)</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b">
                <th className="text-left py-2 text-gray-600">TEST</th>
                <th className="text-left py-2 text-gray-600">RESULT</th>
                <th className="text-left py-2 text-gray-600">UNIT</th>
                <th className="text-left py-2 text-gray-600">REFERENCE RANGE</th>
                <th className="text-left py-2 text-gray-600">FLAG</th>
              </tr>
            </thead>
            <tbody>
              {labResults.map((lab, index) => (
                <tr key={index} className="border-b">
                  <td className="py-2 font-medium">{lab.test}</td>
                  <td className="py-2">{lab.result}</td>
                  <td className="py-2 text-gray-600">{lab.unit}</td>
                  <td className="py-2 text-gray-600">{lab.reference}</td>
                  <td className="py-2">
                    <span className={`font-medium ${
                      lab.flag === 'H' ? 'text-red-600' : 'text-green-600'
                    }`}>
                      {lab.flag}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded">
          <p className="text-sm text-yellow-800">
            💡 HbA1c indicates moderate glycemic control. WBC is borderline high - may require follow-up if symptoms are present.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};
