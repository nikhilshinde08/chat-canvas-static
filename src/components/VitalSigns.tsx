
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const vitalSigns = [
  { date: "2025-05-15", bp: "138/88" },
  { date: "2025-04-15", bp: "142/92" },
  { date: "2025-03-15", bp: "136/86" },
];

export const VitalSigns = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Recent Vital Signs</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b">
                <th className="text-left py-2 text-gray-600">DATE</th>
                <th className="text-left py-2 text-gray-600">BP</th>
              </tr>
            </thead>
            <tbody>
              {vitalSigns.map((vital, index) => (
                <tr key={index} className="border-b">
                  <td className="py-2">{vital.date}</td>
                  <td className="py-2 font-medium">{vital.bp}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
};
