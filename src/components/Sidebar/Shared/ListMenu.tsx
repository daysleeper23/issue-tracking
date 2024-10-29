import { Icon } from "@phosphor-icons/react";
import MenuItem from "../MenuItem";

export interface IListMenuProps {
  items: Array<{
    url: string
    text: string
    icon: Icon
  }>;
};

export default function ListMenu ({ items }: IListMenuProps) {
  return (
    <div className="flex flex-col gap-1 mb-8">
      {items.map((item, index) => (
        <MenuItem key={index} url={item.url} text={item.text}>
          <item.icon weight='bold' size={20} color='#1f2937'/>
        </MenuItem>
      ))}
    </div>
  );
};
