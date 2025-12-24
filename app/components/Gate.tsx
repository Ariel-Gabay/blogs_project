import Image from "next/image";
import styles from "@/lib/styles/Gate.module.scss";
import { ArrowBigDown } from "lucide-react";

const Gate = () => {
  return (
    <div className={styles.gate}>
      <div className={styles.contentArea}>
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
        <div className={styles.cards}>
          <div className={styles.card}>
            <ArrowBigDown />
            <h2>מה חדש בבלוג?</h2>
            <h3>
              הישארו מעודכנים עם התוכן הטרי ביותר. המאמרים האחרונים מחכים לכם
              כאן.
            </h3>
          </div>
          <div className={styles.card}>
            <ArrowBigDown />
            <h2>מפת עולמות התוכן</h2>
            <h3>
              צללו לעומק התוכן שלנו. כאן תוכלו למצוא את המאמרים מרוכזים לפי
              נושאים.
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gate;
