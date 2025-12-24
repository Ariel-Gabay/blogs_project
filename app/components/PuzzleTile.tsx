interface Props {
  top: boolean;
  right: boolean;
  bottom: boolean;
  left: boolean;
  index: string;
}

const PuzzleTile = ({ top, right, bottom, left, index }: Props) => {
  console.log({ top, right });

  return (
    // <div className={styles.tile}>
    //   <svg
    //     viewBox="0 0 240 240"
    //     width={240}
    //     height={240}
    //     style={{ overflow: "visible" }}
    //   >
    //     <defs>
    //       <linearGradient id="grad" x1="0" y1="0" x2="1" y2="1">
    //         <stop offset="0%" stopColor="#6ee7b7" />
    //         <stop offset="100%" stopColor="#3b82f6" />
    //       </linearGradient>

    //       <mask id={index}>
    //         <rect width="240" height="240" fill="white" />
    //         {!top && <circle cx="120" cy="0" r="24" fill="black" />}
    //         {!right && <circle cx="240" cy="120" r="24" fill="black" />}
    //         {!bottom && <circle cx="120" cy="240" r="24" fill="black" />}
    //         {!left && <circle cx="0" cy="120" r="24" fill="black" />}
    //       </mask>
    //     </defs>

    //     <rect
    //       width="240"
    //       height="240"
    //       mask={`url(#${index})`}
    //       fill="url(#grad)"
    //       stroke="#1f2937"
    //       strokeWidth="4"
    //       rx="16"
    //       ry="16"
    //     />
    //     {top && <circle cx="120" cy="0" r="24" fill="url(#grad)" />}
    //     {right && <circle cx="240" cy="120" r="24" fill="url(#grad)" />}
    //     {bottom && <circle cx="120" cy="240" r="24" fill="url(#grad)" />}
    //     {left && <circle cx="0" cy="120" r="24" fill="url(#grad)" />}
    //   </svg>
    // </div>
    <div></div>
  );
};

export default PuzzleTile;
