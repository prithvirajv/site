// ============================================================
//  CERTIFICATES
//  Each category maps to a folder under certificates/
//
//  HOW TO ADD A NEW CERTIFICATE:
//  1. Upload your image to the correct subfolder:
//       certificates/judging/        → judging roles
//       certificates/peer-review/    → paper reviewer certs
//       certificates/memberships/    → IEEE, IETE, SAS, SCRS etc.
//       certificates/speaking/       → keynote / speaker certs
//       certificates/publications/   → paper acceptance / publication certs
//
//  2. Add one entry to the matching section below.
//     { file: "filename.png", title: "...", issuer: "...", date: "..." }
//
//  That's it — the Recognitions page updates automatically.
// ============================================================

const CERTIFICATES = {

  // ── certificates/judging/ ─────────────────────────────────
  judging: [
    {
      file:   "ksu-innovation-quest-2026.jpg",
      title:  "Certificate of Appreciation – Research Innovation Quest",
      issuer: "Kennesaw State University · CCSE",
      date:   "2026",
    },
    {
      file:   "ksu-hackathon-social-good-2026.jpg",
      title:  "Certificate of Appreciation – Hackathon for Social Good & Sustainability",
      issuer: "Kennesaw State University · CCSE",
      date:   "2026",
    },
    {
      file:   "lahacks-2026.png",
      title:  "Certificate of Judging – LA Hacks 2026",
      issuer: "LA Hacks",
      date:   "April 27, 2026",
    },
    {
      file:   "globee-cybersecurity-2026.png",
      title:  "Industry Judge – Globee® Awards for Cybersecurity",
      issuer: "Globee® Awards",
      date:   "2026",
    },
    {
      file:   "globee-excellence-2026.png",
      title:  "Industry Judge – Globee® Awards for Excellence",
      issuer: "Globee® Awards",
      date:   "2026",
    },
    // ── ADD NEW JUDGING CERTIFICATES BELOW ──
    // { file: "event-name-year.png", title: "...", issuer: "...", date: "..." },
  ],

  // ── certificates/peer-review/ ─────────────────────────────
  peerReview: [
    {
      file:   "aiei-2026-reviewer.png",
      title:  "Certificate of Reviewer – IEEE AIEI 2026",
      issuer: "IEEE · NIT Jamshedpur, India",
      date:   "March 26–28, 2026",
    },
    {
      file:   "icbda-2026-reviewer.png",
      title:  "Certificate of Appreciation – Committee Reviewer",
      issuer: "IEEE ICBDA 2026 · Waseda University, Tokyo",
      date:   "April 11–14, 2026",
    },
    // ── ADD NEW PEER REVIEW CERTIFICATES BELOW ──
    // { file: "conf-year-reviewer.png", title: "Certificate of Reviewer – CONF YEAR", issuer: "IEEE · ...", date: "Month YEAR" },
  ],

  // ── certificates/memberships/ ─────────────────────────────
  memberships: [
    // Upload membership certificate images here and add entries below
    // { file: "ieee-senior-member.png",  title: "IEEE Senior Member",   issuer: "IEEE",  date: "2025" },
    // { file: "iete-fellow.png",         title: "IETE Fellow",          issuer: "IETE",  date: "2025" },
    // { file: "sas-eminent-fellow.png",  title: "SAS Eminent Fellow",   issuer: "SAS",   date: "2025" },
     { file: "scrs-fellow.png",         title: "SCRS Fellow",          issuer: "SCRS",  date: "2025" },
  ],

  // ── certificates/speaking/ ────────────────────────────────
  speaking: [
    // Upload keynote/speaker certificates here
    // { file: "imed-2026-keynote.png", title: "Keynote Speaker – IMED 2026", issuer: "IMED 2026 · Malaysia", date: "2026" },
    // { file: "cvr-2026-keynote.png",  title: "Keynote Speaker – CVR 2026",  issuer: "CVR 2026 · India",    date: "2026" },
  ],

  // ── certificates/publications/ ────────────────────────────
  publications: [
    // Upload paper acceptance / publication certificates here
    // { file: "isdfs-2026-paper.png", title: "IEEE ISDFS 2026 – Paper Acceptance", issuer: "IEEE", date: "2026" },
  ],

};
