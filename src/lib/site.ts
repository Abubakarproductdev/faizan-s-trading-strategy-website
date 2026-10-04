export const routes = [
  { href: "#attention", label: "Attention", number: "01" },
  { href: "#split-video", label: "The System", number: "02" },
  { href: "#pricing", label: "Pricing", number: "03" },
  { href: "#hall-of-fame", label: "Hall of Fame", number: "04" },
  { href: "#section-5", label: "Application", number: "05" },
] as const;

export const media = {
  heroVideo:
    "https://videos.pexels.com/video-files/37978560/16115788_3840_2160_25fps.mp4",
  heroPoster:
    "https://images.pexels.com/videos/37978560/bitcoin-fintech-37978560.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1080&w=1920",
  explainerVideo:
    "https://videos.pexels.com/video-files/7580434/7580434-uhd_4096_2160_25fps.mp4",
  explainerPoster:
    "https://images.pexels.com/videos/7580434/pexels-photo-7580434.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1080&w=1920",
  attribution:
    "Market footage by Rafael Minguet Delgado and Tima Miroshnichenko via Pexels",
} as const;

export const systemTools = [
  "Progress tracker",
  "Trading journal",
  "Free trade copier",
  "Cost tracker",
  "Simulator",
  "Monte Carlo simulator",
  "Account dashboard",
  "Active account roster",
  "Account-management functionality",
] as const;

export const discordBenefits = [
  "Live trades",
  "Daily market guidance",
  "Risk guidance",
  "Trade / don’t trade discretion",
] as const;

export const lifetimeBenefits = [
  "Detailed strategy videos",
  "24/7 support",
  "Premium Discord access",
  "Complete execution system",
] as const;

export const mentorshipBenefits = [
  "Everything in Lifetime Access",
  "Daily personal check-ins",
  "Individual progress reports",
  "Weekly one-on-one meetings",
  "Personal execution guidance",
] as const;
