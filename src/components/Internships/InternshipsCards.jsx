"use client"

import { useState } from "react";
import InternshipCard from "./InternshipCard";
import { internshipsData } from "@/utils/internshipPositions";
import { colors } from "@/utils/colors";
import { Button } from "@nextui-org/react";

export default function InternshipsCards() {
  const [itemsToShow, setItemsToShow] = useState(10);

  const handleShowMoreItems = () => {
    setItemsToShow(itemsToShow + 10);
  };

  return (
    <div className="w-[70vw] flex flex-col gap-4 items-center">
      <div className="w-[70vw] flex gap-x-5 gap-3 flex-wrap py-5">
        {internshipsData.slice(0, itemsToShow).map((item, index) => {
          return (
            <InternshipCard item={item} color={colors[index % colors.length]} key={index} />
          );
        })}
      </div>
      {itemsToShow < internshipsData.length && (
        <Button variant="shadow" color="danger" radius="large" onClick={handleShowMoreItems}>More</Button>
      )}
    </div>
  );
}
 