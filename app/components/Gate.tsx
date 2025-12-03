import Image from "next/image";

const Gate = () => {
  return (
    <header className="green w-full h-[400px] flex items-center justify-around my-[20px] shadow-[0_-8px_15px_-3px_rgba(0,0,0,0.3),0_8px_15px_-3px_rgba(0,0,0,0.3)]">
      <div className="relative w-full h-full">
        <Image
          src="/gate-image.png"
          alt="תמונת שער"
          height={400}
          width={1000}
          className="w-full h-full object-fill"
        />
        <div className="absolute inset-0 bg-white/30 gate">
          <p>בסייעתא דשמייא</p>
          <h1>הַגֶּשֶׁר לִבְנֵי אָדָם</h1>
          <div>
            <p>
              “הַגֶּשֶׁר לִבְנֵי אָדָם” הוא מקום שמפשט את עולם התקשורת והחשיבה
              האנושית ומגיש תובנות ברורות לחיי היום-יום.
            </p>
            <p>
              המאמרים נכתבים בידי ד"ר אליהו הדר, מומחה בעל ניסיון עשיר בהבנת
              תהליכי נפש ושפה.
            </p>
            <p>
              כאן מחכים לך כלים פרקטיים, רעיונות מעוררי מחשבה ותגליות שיגרמו לך
              לרצות להעמיק עוד.
            </p>
          </div>
        </div>
        {/* <div className="absolute inset-0 bg-white/30">fewfwef</div> */}
      </div>
    </header>
  );
};

export default Gate;
// brightness-250
