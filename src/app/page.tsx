"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import { useState } from "react";

type Verse = {
  reference: string;
  verses: [
    {
      book_id: string;
      book_name: string;
      chapter: number;
      verse: number;
      text: string;
    }
  ];
  text: string;
  translation_id: string;
  translation_name: string;
  translation_note: string;
};

export default function Home() {
  const [verse, setVerse] = useState<Verse | null>(null);

  const fetchVerse = async () => {
    const response = await fetch(
      "https://bible-api.com/?random=verse&translation=almeida"
    );
    const data = await response.json();
    setVerse(data);
  };

  return (
    <div className="flex w-full h-full justify-center items-center">
      <Card className="w-[90%] sm:w-[600px] h-[250px] bg-slate-100">
        <CardHeader>
          <Button
            onClick={fetchVerse}
            className="font-semibold"
            variant="outline"
          >
            GERAR VERSÍCULO
          </Button>
        </CardHeader>
        <CardContent className="flex flex-col justify-center">
          {verse ? <p>{verse.text}</p> : null}
          <CardDescription className="text-end">
            {verse ? <p>{verse.reference}</p> : null}
          </CardDescription>
        </CardContent>
      </Card>
    </div>
  );
}
