"use client";

export default function ({ error }: { error: Error }) {
  return (
    <>
      <p>שגיאה מכוונת</p>
      <p>שגיאה מכוונת</p>
      <p>שגיאה מכוונת</p>
      <p>שגיאה מכוונת</p>
      <p>שגיאה מכוונת</p>
      <p>שגיאה מכוונת</p>
      <p>שגיאה מכוונת</p>
      <p>שגיאה מכוונת</p>
      <p>שגיאה מכוונת</p>
      <p>{error.message}</p>
    </>
  );
}
