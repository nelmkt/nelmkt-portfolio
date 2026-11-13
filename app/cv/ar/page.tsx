import type { Metadata } from "next";
import CvDocument from "../../../components/CvDocument";

export const metadata: Metadata = {
  title: "السيرة الذاتية - نيللي المكتوم",
  description: "السيرة الذاتية لنيللي المكتوم: طالبة علوم حاسب ومهندسة تعلّم آلة وباحثة.",
  alternates: { canonical: "/cv/ar/", languages: { en: "/cv/", ar: "/cv/ar/" } },
};

export default function CvPageAr() {
  return <CvDocument lang="ar" />;
}
