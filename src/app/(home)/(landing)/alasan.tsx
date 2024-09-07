import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

interface ReasonCardProps {
  title: string;
  description: string;
}

const ReasonCard: React.FC<ReasonCardProps> = ({ title, description }) => {
  return (
    <Card className="shadow-lg p-4">
      <CardHeader className="flex items-center space-x-2">
        <CheckCircle className="w-6 h-6 text-green-500" />
        <CardTitle className="text-lg font-semibold">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-700">{description}</p>
      </CardContent>
    </Card>
  );
};
export default function alasan() {
  return (
    <div className="py-16 bg-white">
      {/* Section: Alasan Ikut Tryout */}
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          Kenapa Harus Ikut Tryout Ini?
        </h2>
        <div className="grid gap-8 lg:grid-cols-3">
          <ReasonCard
            title="Soal Terbaru & Terupdate"
            description="Kami menyediakan soal-soal tryout terbaru yang disesuaikan dengan materi ujian terkini, sehingga kamu bisa mempersiapkan diri dengan baik."
          />
          <ReasonCard
            title="Simulasi Ujian Real-time"
            description="Rasakan pengalaman seperti ujian sesungguhnya dengan sistem waktu dan penilaian yang mirip dengan ujian asli."
          />
          <ReasonCard
            title="Pembahasan Lengkap"
            description="Setelah tryout, dapatkan pembahasan lengkap untuk setiap soal agar kamu bisa memahami konsep dengan lebih baik."
          />
          <ReasonCard
            title="Skor & Analisis Kinerja"
            description="Dapatkan laporan hasil tryout secara real-time, lengkap dengan analisis kinerja yang membantu kamu meningkatkan skor."
          />
          <ReasonCard
            title="Akses Mudah & Fleksibel"
            description="Latihan kapan saja dan di mana saja. Platform kami bisa diakses dari berbagai perangkat, membuat persiapanmu lebih fleksibel."
          />
          <ReasonCard
            title="Ratusan Soal Berkualitas"
            description="Tersedia ratusan soal berkualitas yang mencakup berbagai topik yang akan diujikan dalam tes CPNS dan Kedinasan."
          />
        </div>
      </div>
    </div>
  );
}
