"use client"
import { Combobox, ComboboxContent, ComboboxEmpty, ComboboxInput, ComboboxItem, ComboboxList } from "@/components/ui/combobox";

export default function ComboBoxList(ports, {setPort }) {
  return (
    <Combobox items={ports} onValueChange={(value) => {setPort(value)}}>
      <ComboboxInput placeholder=". . ." />
        <ComboboxContent>
            <ComboboxEmpty>No ports found.</ComboboxEmpty>
            <ComboboxList>
            {(item) => (
                item && (
                <ComboboxItem key={item.label} value={item}>
                    {item.label}
                </ComboboxItem>
                )
            )}
            </ComboboxList>
      </ComboboxContent>
    </Combobox>
  );
}
