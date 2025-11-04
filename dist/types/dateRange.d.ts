export type DateRangeUnit = "day" | "week" | "month" | "quarter";
export interface DateRangeSelection {
    startDateUtc: string;
    endDateUtc: string;
    unit: DateRangeUnit;
    duration: number;
    excludedWeekdays: number[];
    includedDatesUtc: string[];
    excludeEnabled?: boolean;
    excludeFilterTypes?: ("days" | "specific-date" | "saved-dates" | "date-range")[];
    excludedSpecificDates?: string[];
    excludedSavedDates?: string[];
    excludedDateRanges?: Array<{
        id: string;
        start: string;
        end: string;
    }>;
}
export interface SavedDateRange {
    id: string;
    label: string;
    selection: DateRangeSelection;
    createdAt: number;
}
export interface PresetDateRange {
    label: string;
    getValue: () => Pick<DateRangeSelection, "startDateUtc" | "endDateUtc">;
}
//# sourceMappingURL=dateRange.d.ts.map