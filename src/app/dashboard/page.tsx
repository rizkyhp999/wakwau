import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { EnvelopeOpenIcon, EnterIcon } from "@radix-ui/react-icons";

import { Button } from "@/components/ui/button";
export default function page() {
  return (
    <div className="container flex flex-wrap md:flex-nowrap justify-center max-w-xl px-4 py-4 sm:px-6 lg:px-8">
      <Card className="m-5">
        <CardHeader>
          <CardTitle className="text-3xl justify-center flex">
            Mulai Tryout Sekarang
          </CardTitle>
        </CardHeader>
        <CardContent className="flex items-center justify-center">
          <CardDescription className="text-justify mx-2">
            Uji kemampuan Anda dengan tryout online terbaru dan tingkatkan
            peluang sukses seleksi kedinasan mulai sekarang!
          </CardDescription>
        </CardContent>
        <CardFooter className="flex items-center justify-center">
          <Button>
            <EnterIcon className="mr-2 h-4 w-4" /> Mulai
          </Button>
        </CardFooter>
      </Card>
      <Card className="m-5">
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>Card Description</CardDescription>
        </CardHeader>
        <CardContent>
          <p>
            mampuan Anda kemampuan Anda kemampuanda kemampuanda kemampuanda
            kemampuan Anda kemampuan Anda tent
          </p>
        </CardContent>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </Card>
    </div>
  );
}
