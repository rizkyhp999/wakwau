import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Star } from "lucide-react";

interface TestimonialProps {
  name: string;
  role: string;
  imageUrl: string;
  feedback: string;
}

const Testimonial: React.FC<TestimonialProps> = ({
  name,
  role,
  imageUrl,
  feedback,
}) => {
  return (
    <Card className="shadow-lg p-4 max-w-md mx-auto">
      <CardHeader className="flex items-center space-x-4">
        <Avatar className="w-12 h-12">
          <AvatarImage src={imageUrl} alt={name} />
          <AvatarFallback>{name.charAt(0)}</AvatarFallback>
        </Avatar>
        <div>
          <h3 className="text-lg font-semibold">{name}</h3>
          <p className="text-sm text-gray-500">{role}</p>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-gray-700 italic">{feedback}</p>
      </CardContent>
      <CardFooter className="flex space-x-1 text-yellow-500">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-4 h-4" />
        ))}
      </CardFooter>
    </Card>
  );
};

export default function testimoni() {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          Apa Kata Mereka?
        </h2>
        <div className="grid gap-8 lg:grid-cols-3">
          <Testimonial
            name="Fathir Maula"
            role="Calon ASN"
            imageUrl="/budi.jpg"
            feedback="Dengan tryout ini, saya merasa jauh lebih siap menghadapi ujian CPNS. Simulasinya sangat mirip dengan ujian asli!"
          />
          <Testimonial
            name="Fatih Mahawisesa"
            role="Mahasiswa Kedinasan"
            imageUrl="/ani.jpg"
            feedback="Latihan soal yang tersedia benar-benar membantu saya memahami pola soal dengan lebih baik. Sangat direkomendasikan!"
          />
          <Testimonial
            name="Rizky Putra"
            role="Peserta CPNS 2020"
            imageUrl="/rahmat.jpg"
            feedback="Aplikasi ini sangat membantu! Skor saya meningkat drastis berkat latihan soal yang komprehensif."
          />
        </div>
      </div>
    </div>
  );
}
