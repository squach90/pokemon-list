import React, { useState } from "react";
import { IconType } from "react-icons";
import { GiElectric, GiWaterDrop, GiFire } from "react-icons/gi";

interface IconSelectorProps {
  selectedIcon: IconType | null;
  onSelect: (icon: IconType) => void;
}

const icons: { name: string; icon: IconType }[] = [
  { name: "Electric", icon: GiElectric },
  { name: "Water", icon: GiWaterDrop },
  { name: "Fire", icon: GiFire },
];

const IconSelector: React.FC<IconSelectorProps> = ({
  selectedIcon,
  onSelect,
}) => {
  return (
    <div className="flex space-x-4">
      {icons.map(({ name, icon: Icon }) => (
        <button
          key={name}
          className={`p-2 border rounded ${
            selectedIcon === Icon
              ? "bg-blue-500 text-white"
              : "bg-white text-black"
          }`}
          onClick={() => onSelect(Icon)}
        >
          <Icon size={24} />
        </button>
      ))}
    </div>
  );
};

export default IconSelector;
