interface QuarterPickerProps {
    selectedRange: {
        from: Date;
        to: Date;
    };
    onSelect: (range: {
        from?: Date;
        to?: Date;
    } | undefined) => void;
}
export default function QuarterPicker({ selectedRange, onSelect, }: QuarterPickerProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=QuarterPicker.d.ts.map