import { DateRangeSelection } from '../../types/dateRange';
interface AdvancedDateRangePickerProps {
    initialSelection?: Partial<DateRangeSelection>;
    onApply: (selection: DateRangeSelection) => void;
    onCancel: () => void;
}
export default function AdvancedDateRangePicker({ initialSelection, onApply, onCancel, }: AdvancedDateRangePickerProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=AdvancedDateRangePicker.d.ts.map