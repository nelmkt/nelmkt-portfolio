import type { Metadata } from "next";
import CvDocument from "../../../components/CvDocument";

export const metadata: Metadata = {
  title: "السيرة الذاتية - نيللي المكتوم",
  description: "السيرة الذاتية لنيللي المكتوم: باحثة في تعلّم الآلة ومخترعة في جامعة الملك عبدالعزيز.",
  alternates: { canonical: "/cv/ar/", languages: { en: "/cv/", ar: "/cv/ar/" } },
};

export default function CvPageAr() {
  return <CvDocument lang="ar" />;
}
