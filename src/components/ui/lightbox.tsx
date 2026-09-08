"use client";

import { motion, useMotionValueEvent, useTransform, type MotionValue } from "motion/react";
import {
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
  type MouseEvent,
  type WheelEvent,
} from "react";
import { createPortal } from "react-dom";
import { useContent } from "@/i18n/content";

const ZOOM_MIN = 1;
const ZOOM_MAX = 2.6;
const ZOOM_STEP = 1.75;
const FA_DIGITS = "۰۱۲۳۴۵۶۷۸۹";

export type GalleryFrame = {
  src: string;
  label: string;
};

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

function toFaDigits(value: number) {
  return String(value).replace(/\d/g, (digit) => FA_DIGITS[Number(digit)]);
}

export function useVisiblePointer(opacity: MotionValue<number>) {
  return useTransform(opacity, (value) => (value > 0.45 ? "auto" : "none"));
}

type LightboxProps = {
  items: GalleryFrame[];
  index: number;
  onClose: () => void;
};

export function Lightbox({ items, index, onClose }: LightboxProps) {
  const { ui, locale, dir } = useContent();
  const titleId = useId();
  const closeRef = useRef<HTMLButtonElement>(null);
  const [active, setActive] = useState(index);
  const [zoom, setZoom] = useState(ZOOM_MIN);
  const total = items.length;
  const current = items[active] ?? items[0];
  const caption = current?.label;
  const many = total > 1;
  const formatCount = (value: number) =>
    locale === "fa" ? toFaDigits(value) : String(value);

  const go = useCallback(
    (delta: number) => {
      if (total < 2) return;
      setActive((value) => (value + delta + total) % total);
      setZoom(ZOOM_MIN);
    },
    [total],
  );

  useEffect(() => {
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
        return;
      }
      const rtl = dir === "rtl";
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        go(rtl ? 1 : -1);
        return;
      }
      if (event.key === "ArrowRight") {
        event.preventDefault();
        go(rtl ? -1 : 1);
        return;
      }
      if (event.key === "ArrowDown") {
        event.preventDefault();
        go(1);
        return;
      }
      if (event.key === "ArrowUp") {
        event.preventDefault();
        go(-1);
      }
    };

    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [dir, go, onClose]);

  const onWheelZoom = useCallback((event: WheelEvent<HTMLDivElement>) => {
    if (event.cancelable) event.preventDefault();
    const delta = event.deltaY > 0 ? -0.14 : 0.14;
    setZoom((currentZoom) => clamp(currentZoom + delta, ZOOM_MIN, ZOOM_MAX));
  }, []);

  const onImageClick = useCallback((event: MouseEvent<HTMLImageElement>) => {
    event.stopPropagation();
    setZoom((currentZoom) => (currentZoom > 1.05 ? ZOOM_MIN : ZOOM_STEP));
  }, []);

  if (typeof document === "undefined" || !current) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[120] flex items-center justify-center p-6"
      dir={dir}
      role="dialog"
      aria-modal="true"
      aria-labelledby={caption ? titleId : undefined}
    >
      <button
        type="button"
        className="absolute inset-0 bg-[#05060a]/90 backdrop-blur-md"
        aria-label={ui.close}
        onClick={onClose}
      />

      <div
        className="relative z-10 flex max-h-[92vh] max-w-[94vw] flex-col items-center"
        onWheel={onWheelZoom}
      >
        <img
          key={current.src}
          src={current.src}
          alt={caption ?? ""}
          decoding="async"
          fetchPriority="high"
          draggable={false}
          onClick={onImageClick}
          className="max-h-[78vh] max-w-[88vw] object-contain select-none"
          style={{
            transform: `scale(${zoom})`,
            transformOrigin: "center center",
            transition: "transform 180ms cubic-bezier(0.22, 1, 0.36, 1)",
            cursor: zoom > 1.05 ? "zoom-out" : "zoom-in",
          }}
        />
        {caption ? (
          <p
            id={titleId}
            className="pointer-events-none mt-4 max-w-xl text-center text-sm text-[var(--ink)]"
          >
            {caption}
          </p>
        ) : null}

        {many ? (
          <div className="mt-5 flex items-center gap-2">
            {items.map((item, itemIndex) => (
              <button
                key={`${item.src}-${itemIndex}`}
                type="button"
                aria-label={item.label}
                aria-current={itemIndex === active ? "true" : undefined}
                className={`h-2.5 rounded-full transition ${
                  itemIndex === active
                    ? "w-7 bg-[var(--gold)]"
                    : "w-2.5 bg-[var(--ink)]/28 hover:bg-[var(--cyan)]/70"
                }`}
                onClick={(event) => {
                  event.stopPropagation();
                  setActive(itemIndex);
                  setZoom(ZOOM_MIN);
                }}
              />
            ))}
          </div>
        ) : null}
      </div>

      <button
        ref={closeRef}
        type="button"
        onClick={onClose}
        className="glass pointer-events-auto absolute top-5 start-5 z-20 rounded-full px-4 py-2 text-sm font-semibold text-[var(--ink)] transition hover:border-[var(--cyan)]/40"
      >
        {ui.close}
      </button>

      {many ? (
        <p className="pointer-events-none absolute top-6 left-1/2 z-20 -translate-x-1/2 text-sm tracking-wide text-[var(--ink)]">
          «{formatCount(active + 1)} / {formatCount(total)}»
        </p>
      ) : null}

      {many ? (
        <>
          <button
            type="button"
            aria-label={ui.prev}
            className="lightbox-nav absolute top-1/2 start-6 z-20 -translate-y-1/2"
            onClick={(event) => {
              event.stopPropagation();
              go(-1);
            }}
          >
            ›
          </button>
          <button
            type="button"
            aria-label={ui.next}
            className="lightbox-nav absolute top-1/2 end-6 z-20 -translate-y-1/2"
            onClick={(event) => {
              event.stopPropagation();
              go(1);
            }}
          >
            ‹
          </button>
        </>
      ) : null}
    </div>,
    document.body,
  );
}

type ViewHotspotProps = {
  items: GalleryFrame[];
  index?: number;
  className?: string;
};

export function ViewHotspot({ items, index = 0, className }: ViewHotspotProps) {
  const { ui } = useContent();
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const caption = items[index]?.label ?? "";

  const close = useCallback(() => {
    setOpen(false);
    requestAnimationFrame(() => triggerRef.current?.focus());
  }, []);

  if (!items.length) return null;

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        className={`view-hotspot ${className ?? ""}`}
        aria-label={`${ui.view} ${caption}`}
        onClick={(event) => {
          event.stopPropagation();
          setOpen(true);
        }}
      >
        {ui.view}
      </button>
      {open ? <Lightbox items={items} index={index} onClose={close} /> : null}
    </>
  );
}

type FrameViewLayerProps = {
  items: GalleryFrame[];
  index: number;
  opacity: MotionValue<number>;
  tiltX: MotionValue<number>;
  tiltY: MotionValue<number>;
  scale: MotionValue<number>;
  imgClassName?: string;
};

export function FrameViewLayer({
  items,
  index,
  opacity,
  tiltX,
  tiltY,
  scale,
  imgClassName,
}: FrameViewLayerProps) {
  const pointerEvents = useVisiblePointer(opacity);
  const frame = items[index];
  const layerRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  const [opaque, setOpaque] = useState(() => opacity.get() > 0.04);
  const [loaded, setLoaded] = useState(false);
  const visible = inView && opaque;

  useEffect(() => {
    const el = layerRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { rootMargin: "160px 0px", threshold: 0.01 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useMotionValueEvent(opacity, "change", (value) => {
    setOpaque(value > 0.04);
  });

  useEffect(() => {
    if (visible) setLoaded(true);
  }, [visible]);

  if (!frame) return null;

  return (
    <motion.div
      ref={layerRef}
      style={{
        opacity,
        rotateX: tiltX,
        rotateY: tiltY,
        scale,
        pointerEvents: visible ? pointerEvents : "none",
      }}
      className={`device-frame absolute inset-0 ${visible ? "" : "invisible"}`}
    >
      {loaded ? (
        <>
          <img
            src={frame.src}
            alt={frame.label}
            loading="lazy"
            decoding="async"
            className={imgClassName}
          />
          <ViewHotspot items={items} index={index} />
        </>
      ) : null}
    </motion.div>
  );
}
