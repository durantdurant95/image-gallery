"use client";

import { useRouter } from "next/navigation";
import { useEffect, useRef, type ElementRef } from "react";
import { createPortal } from "react-dom";

export function Modal({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const dialogRef = useRef<ElementRef<"dialog">>(null);

  useEffect(() => {
    if (!dialogRef.current?.open) {
      dialogRef.current?.showModal();
    }
  }, []);

  function onDismiss() {
    router.back();
  }

  return createPortal(
    <dialog
      ref={dialogRef}
      onClose={onDismiss}
      className="m-0 h-screen w-screen bg-slate-950/80"
    >
      {children}
    </dialog>,
    document.getElementById("modal-root")!,
  );
}
