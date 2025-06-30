
import { PatientProfile } from "@/components/PatientProfile";
import { VitalSigns } from "@/components/VitalSigns";
import { LabResults } from "@/components/LabResults";
import { DiagnosisCard } from "@/components/DiagnosisCard";

export const PatientOverview = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1">
          <PatientProfile />
        </div>
        <div className="lg:col-span-2 space-y-6">
          <DiagnosisCard />
          <VitalSigns />
        </div>
      </div>
      <LabResults />
    </div>
  );
};
