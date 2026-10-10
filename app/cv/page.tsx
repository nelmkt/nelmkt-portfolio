import type { Metadata } from "next";
import CvDocument from "@/components/CvDocument";

export const metadata: Metadata = {
  title: "CV - Nelly Almaktoum",
  description: "The CV of Nelly Almaktoum: Computer Science student, ML engineer and researcher.",
};

// Visitors reading the site in Arabic get the Arabic CV straight away (key: LANG_KEY in components/lang.ts).
const toArabic = `try{if(localStorage.getItem("nelmkt-lang")==="ar")location.replace("/cv/ar/")}catch(e){}`;

export default function CvPage() {
  return (
    <>
      <script dangerouslySetInnerHTML={{ __html: toArabic }} />
      <CvDocument lang="en" />
    </>
  );
}
