import { useEffect, useRef, useState } from "react";
import DateInput from "./DateInput";
import { getUnitAbbreviation } from "../../utils/dateRange";
import type { DateRangeUnit } from "../../types/dateRange";

interface DateInputsRowProps {
  startDateUtc: string;
  endDateUtc: string;
  duration: number;
  unit: DateRangeUnit;
  excludeEnabled: boolean;
  activeDateField: "start" | "end";
  onStartDateChange: (value: string) => void;
  onEndDateChange: (value: string) => void;
  onDurationChange: (value: number) => void;
  onActiveFieldChange: (field: "start" | "end") => void;
}

export default function DateInputsRow({
  startDateUtc,
  endDateUtc,
  duration,
  unit,
  excludeEnabled,
  activeDateField,
  onStartDateChange,
  onEndDateChange,
  onDurationChange,
  onActiveFieldChange,
}: DateInputsRowProps) {
  const durationInputRef = useRef<HTMLInputElement>(null);
  const [unitPosition, setUnitPosition] = useState(0);

  useEffect(() => {
    if (durationInputRef.current) {
      const canvas = document.createElement("canvas");
      const context = canvas.getContext("2d");
      if (context) {
        context.font = "14px system-ui, -apple-system, sans-serif";
        const textWidth = context.measureText(duration.toString()).width;
        setUnitPosition(12 + textWidth + 4);
      }
    }
  }, [duration]);

  return (
    <div className="grid grid-cols-3 gap-4 mb-4">
      <div>
        <label
          className={`block text-xs font-medium mb-1 ${
            excludeEnabled ? "text-gray-400" : "text-gray-600"
          }`}
        >
          Start Date
        </label>
        <DateInput
          value={startDateUtc}
          onChange={onStartDateChange}
          placeholder="DD/MM/YYYY"
          onFocus={() => onActiveFieldChange("start")}
          disabled={excludeEnabled}
          className={`w-full px-3 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100 disabled:text-gray-400 disabled:border-gray-200 disabled:cursor-not-allowed disabled:focus:ring-0 ${
            activeDateField === "start"
              ? "border-blue-500"
              : "border-gray-300"
          }`}
        />
      </div>
      <div>
        <label
          className={`block text-xs font-medium mb-1 ${
            excludeEnabled ? "text-gray-400" : "text-gray-600"
          }`}
        >
          End Date
        </label>
        <DateInput
          value={endDateUtc}
          onChange={onEndDateChange}
          placeholder="DD/MM/YYYY"
          onFocus={() => onActiveFieldChange("end")}
          disabled={excludeEnabled}
          className={`w-full px-3 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100 disabled:text-gray-400 disabled:border-gray-200 disabled:cursor-not-allowed disabled:focus:ring-0 ${
            activeDateField === "end"
              ? "border-blue-500"
              : "border-gray-300"
          }`}
        />
      </div>
      <div>
        <label className="block text-xs font-medium text-gray-600 mb-1">
          Duration
        </label>
        <div className="relative">
          <input
            ref={durationInputRef}
            type="number"
            min="1"
            value={duration}
            onChange={(e) => onDurationChange(Number(e.target.value))}
            disabled={excludeEnabled}
            className="w-full pl-3 pr-10 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100 disabled:text-gray-400 disabled:border-gray-200 disabled:cursor-not-allowed disabled:focus:ring-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none [-moz-appearance:textfield]"
          />
          <span
            className={`absolute top-1/2 -translate-y-1/2 text-sm pointer-events-none ${
              excludeEnabled ? "text-gray-300" : "text-gray-500"
            }`}
            style={{ left: `${unitPosition}px` }}
          >
            {getUnitAbbreviation(unit)}
          </span>
        </div>
      </div>
    </div>
  );
}

