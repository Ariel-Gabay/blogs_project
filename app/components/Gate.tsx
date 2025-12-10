import Image from "next/image";

const Gate = () => {
  return (
    <header className="gate-height mt-[70px] relative w-full flex items-center justify-center shadow-[0_-8px_15px_-3px_rgba(0,0,0,0.3),0_8px_15px_-3px_rgba(0,0,0,0.3)] rounded-b-md">
      <Image
        src="/gate-image.png"
        alt="תמונת שער"
        height={800}
        width={1000}
        // placeholder="blur"
        // blurDataURL={URLGateImage}
        className="w-full h-full object-fill rounded-b-md"
      />
      <div className="absolute inset-0 bg-white/10 gate rounded-b-md">
        <div>
          <h1>הַגֶּשֶׁר לִבְנֵי אָדָם</h1>
        </div>
        <div>
          <p>
            “הַגֶּשֶׁר לִבְנֵי אָדָם” הוא מקום שמפשט את עולם התקשורת והחשיבה
            האנושית ומגיש תובנות ברורות לחיי היום-יום.
            <br />
            המאמרים נכתבים בידי ד"ר אליהו הדר, מומחה בעל ניסיון עשיר בהבנת
            תהליכי נפש ושפה.
            <br />
            כאן מחכים לך כלים פרקטיים, רעיונות מעוררי מחשבה ותגליות שיגרמו לך
            לרצות להעמיק עוד.
          </p>
        </div>
      </div>
    </header>
  );
};

export default Gate;
