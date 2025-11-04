interface MonthPickerProps {
    selectedRange: {
        from: Date;
        to: Date;
    };
    onSelect: (range: {
        from?: Date;
        to?: Date;
    } | undefined) => void;
}
export default function MonthPicker({ selectedRange, onSelect, }: MonthPickerProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=MonthPicker.d.ts.map