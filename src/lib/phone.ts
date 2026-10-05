export function getTrackingPhone() {
  const raw = String(import.meta.env.PUBLIC_PHONE ?? "").replace(/\D/g, "");
  if (raw.length < 10) return null;

  const ten = raw.slice(-10);
  return {
    href: `tel:+1${ten}`,
    label: `(${ten.slice(0, 3)}) ${ten.slice(3, 6)}-${ten.slice(6)}`,
  };
}
