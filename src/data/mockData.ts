// Mock data for the Dark Web Monitoring Simulation

// Search results for various keywords
export const searchResults = {
  "credentials": [
    {
      id: "sr001",
      url: "http://cred5tg3j2m5n7x.onion",
      title: "DarkCredHub - Premium Accounts",
      description: "Database of leaked credentials from various sources. Updated daily with fresh leaks.",
      threatScore: 85,
      category: "Marketplace",
      lastSeen: "2 hours ago",
      tags: ["credentials", "leaks", "marketplace"]
    },
    {
      id: "sr002",
      url: "http://pass4tradecvs2.onion",
      title: "PassTrade - Credential Exchange",
      description: "Exchange platform for trading access credentials to various services and websites.",
      threatScore: 75,
      category: "Forum",
      lastSeen: "6 hours ago",
      tags: ["credentials", "trading", "accounts"]
    },
    {
      id: "sr003",
      url: "http://logindumpxyz.onion",
      title: "LoginDump - Fresh Credentials",
      description: "Latest credential dumps from recent breaches. Username and password combinations available.",
      threatScore: 90,
      category: "Data Leak",
      lastSeen: "1 day ago",
      tags: ["credentials", "dump", "breach"]
    },
    {
      id: "sr004",
      url: "http://accfactory23xc.onion",
      title: "Account Factory - Premium Accounts",
      description: "Factory for generated premium accounts across streaming, gaming, and financial services.",
      threatScore: 65,
      category: "Service",
      lastSeen: "3 days ago",
      tags: ["accounts", "premium", "streaming"]
    }
  ],
  "ransomware": [
    {
      id: "sr005",
      url: "http://ransom76market.onion",
      title: "RansomHub - Ransomware as a Service",
      description: "Marketplace offering ransomware as a service to affiliates. Includes customer support and payment processing.",
      threatScore: 95,
      category: "Marketplace",
      lastSeen: "4 hours ago",
      tags: ["ransomware", "malware", "service"]
    },
    {
      id: "sr006",
      url: "http://cryptlockr77h.onion",
      title: "CryptLockr - Advanced Encryption Tools",
      description: "Tools for file encryption and system locking. Used in targeted ransomware attacks.",
      threatScore: 90,
      category: "Tool",
      lastSeen: "1 day ago",
      tags: ["encryption", "ransomware", "tool"]
    },
    {
      id: "sr007",
      url: "http://darkleakforum2x.onion",
      title: "DarkLeak Forum - Ransomware Discussion",
      description: "Forum for discussing ransomware techniques, targets, and payment processing methods.",
      threatScore: 80,
      category: "Forum",
      lastSeen: "12 hours ago",
      tags: ["ransomware", "forum", "discussion"]
    }
  ],
  "zero-day": [
    {
      id: "sr008",
      url: "http://zeroday2market.onion",
      title: "0day Market - Premium Exploits",
      description: "Marketplace for zero-day exploits in various platforms, operating systems, and applications.",
      threatScore: 98,
      category: "Marketplace",
      lastSeen: "1 hour ago",
      tags: ["zero-day", "exploits", "vulnerabilities"]
    },
    {
      id: "sr009",
      url: "http://exploitbayxrz.onion",
      title: "ExploitBay - Vulnerability Trading",
      description: "Trading platform for unpatched security vulnerabilities. Includes proof-of-concept code.",
      threatScore: 95,
      category: "Marketplace",
      lastSeen: "5 hours ago",
      tags: ["exploits", "zero-day", "trading"]
    },
    {
      id: "sr010",
      url: "http://hackforumsdark.onion",
      title: "HackForums - Zero Day Discussion",
      description: "Discussion forum for zero-day vulnerabilities, exploits and attack methodologies.",
      threatScore: 85,
      category: "Forum",
      lastSeen: "1 day ago",
      tags: ["zero-day", "hacking", "forum"]
    }
  ],
  "hacking": [
    {
      id: "sr011",
      url: "http://hacktools67dc.onion",
      title: "HackTools - Premium Toolkit",
      description: "Collection of hacking tools, scripts and utilities for various targets and platforms.",
      threatScore: 80,
      category: "Service",
      lastSeen: "8 hours ago",
      tags: ["hacking", "tools", "scripts"]
    },
    {
      id: "sr012",
      url: "http://l33tacademy99x.onion",
      title: "L33t Academy - Hacking Tutorials",
      description: "Educational platform for learning hacking techniques from beginner to advanced levels.",
      threatScore: 70,
      category: "Educational",
      lastSeen: "2 days ago",
      tags: ["hacking", "tutorials", "education"]
    },
    {
      id: "sr013",
      url: "http://hackforumxyz.onion",
      title: "Hack Forum - Community Discussion",
      description: "Forum for hackers to discuss techniques, share code, and collaborate on projects.",
      threatScore: 75,
      category: "Forum",
      lastSeen: "1 day ago",
      tags: ["hacking", "forum", "community"]
    }
  ]
};

// Threat feed data for the live alert system
export const threatFeedData = [
  {
    id: "tf001",
    title: "New Ransomware Variant Detected",
    description: "New ransomware strain 'CryptoLock 2.0' discovered on underground forums",
    source: "DarkLeak Forum",
    sourceUrl: "http://darkleakforum2x.onion",
    severity: "Critical",
    timestamp: "2025-04-01T10:23:15",
    category: "Malware",
    tags: ["ransomware", "malware", "encryption"]
  },
  {
    id: "tf002",
    title: "Large Database of Credentials for Sale",
    description: "Over 2 million credentials from financial institutions available on DarkCredHub",
    source: "DarkCredHub",
    sourceUrl: "http://cred5tg3j2m5n7x.onion",
    severity: "High",
    timestamp: "2025-04-01T09:18:42",
    category: "Data Leak",
    tags: ["credentials", "financial", "breach"]
  },
  {
    id: "tf003",
    title: "Zero-Day Exploit for Popular Browser",
    description: "Unpatched vulnerability in Chrome browser being sold for $200,000",
    source: "0day Market",
    sourceUrl: "http://zeroday2market.onion",
    severity: "Critical",
    timestamp: "2025-04-01T08:45:30",
    category: "Exploit",
    tags: ["zero-day", "browser", "vulnerability"]
  },
  {
    id: "tf004",
    title: "Credit Card Dump from Major Retailer",
    description: "Fresh dump of 50,000 credit cards with CVV from retail breach",
    source: "CardShop Plus",
    sourceUrl: "http://cardshop55xx.onion",
    severity: "High",
    timestamp: "2025-04-01T07:30:15",
    category: "Data Leak",
    tags: ["credit cards", "retail", "financial"]
  },
  {
    id: "tf005",
    title: "Corporate Network Access for Sale",
    description: "Admin credentials for Fortune 500 company network infrastructure",
    source: "AccessMarket",
    sourceUrl: "http://acc3ssmark3t.onion",
    severity: "Critical",
    timestamp: "2025-04-01T06:22:08",
    category: "Insider Threat",
    tags: ["corporate", "network", "access"]
  },
  {
    id: "tf006",
    title: "New Phishing Kit Released",
    description: "Advanced phishing toolkit targeting mobile banking applications",
    source: "HackTools",
    sourceUrl: "http://hacktools67dc.onion",
    severity: "Medium",
    timestamp: "2025-04-01T05:12:48",
    category: "Phishing",
    tags: ["phishing", "banking", "mobile"]
  },
  {
    id: "tf007",
    title: "Healthcare Data Breach Announced",
    description: "1.2 million patient records from healthcare provider available for sale",
    source: "DataBreach Market",
    sourceUrl: "http://databreach44x.onion",
    severity: "High",
    timestamp: "2025-04-01T04:08:33",
    category: "Data Leak",
    tags: ["healthcare", "PII", "medical"]
  },
  {
    id: "tf008",
    title: "DDoS Service Offering",
    description: "New DDoS-for-hire service advertising 1Tbps attack capability",
    source: "DDoS Market",
    sourceUrl: "http://ddos4hirevip.onion",
    severity: "Medium",
    timestamp: "2025-04-01T03:45:22",
    category: "Service",
    tags: ["ddos", "attack", "service"]
  },
  {
    id: "tf009",
    title: "Botnet Command & Control Discovered",
    description: "New botnet C2 infrastructure identified with over 200,000 infected devices",
    source: "ThreatWatch",
    sourceUrl: "http://threatwatch99.onion",
    severity: "High",
    timestamp: "2025-04-01T02:38:14",
    category: "Botnet",
    tags: ["botnet", "malware", "C2"]
  },
  {
    id: "tf010",
    title: "Banking Trojan Source Code Leaked",
    description: "Source code for sophisticated banking trojan released on hacking forums",
    source: "Hack Forum",
    sourceUrl: "http://hackforumxyz.onion",
    severity: "High",
    timestamp: "2025-04-01T01:25:07",
    category: "Malware",
    tags: ["trojan", "banking", "source code"]
  },
  {
    id: "tf011",
    title: "Ransomware Gang Targeting Healthcare",
    description: "New campaign specifically targeting healthcare providers in North America",
    source: "RansomHub",
    sourceUrl: "http://ransom76market.onion",
    severity: "Critical",
    timestamp: "2025-04-01T00:15:55",
    category: "Targeted Attack",
    tags: ["ransomware", "healthcare", "campaign"]
  },
  {
    id: "tf012",
    title: "SIM Swapping Service Advertised",
    description: "Service offering SIM swapping attacks for cryptocurrency theft",
    source: "CryptoHack Forum",
    sourceUrl: "http://cryptohack23x.onion",
    severity: "Medium",
    timestamp: "2025-03-31T23:10:42",
    category: "Service",
    tags: ["sim swapping", "cryptocurrency", "theft"]
  }
];

// Onion sites to scan
export const onionSites = [
  {
    id: "os001",
    url: "http://cred5tg3j2m5n7x.onion",
    title: "DarkCredHub",
    type: "Marketplace",
    sslSupport: true,
    uptime: "98.2%",
    lastSeen: "2 hours ago",
    maliciousScore: 85,
    description: "Credential marketplace with focus on financial accounts"
  },
  {
    id: "os002",
    url: "http://ransom76market.onion",
    title: "RansomHub",
    type: "Marketplace",
    sslSupport: true,
    uptime: "95.7%",
    lastSeen: "4 hours ago",
    maliciousScore: 95,
    description: "Ransomware as a service platform with affiliate program"
  },
  {
    id: "os003",
    url: "http://zeroday2market.onion",
    title: "0day Market",
    type: "Marketplace",
    sslSupport: true,
    uptime: "92.3%",
    lastSeen: "1 hour ago",
    maliciousScore: 98,
    description: "Zero-day exploit marketplace with verification service"
  },
  {
    id: "os004",
    url: "http://hackforumxyz.onion",
    title: "Hack Forum",
    type: "Forum",
    sslSupport: false,
    uptime: "99.1%",
    lastSeen: "1 day ago",
    maliciousScore: 75,
    description: "Discussion forum for hackers with various subforums"
  },
  {
    id: "os005",
    url: "http://darkleakforum2x.onion",
    title: "DarkLeak Forum",
    type: "Forum",
    sslSupport: false,
    uptime: "97.5%",
    lastSeen: "12 hours ago",
    maliciousScore: 80,
    description: "Forum focused on data leaks and ransomware topics"
  },
  {
    id: "os006",
    url: "http://ddos4hirevip.onion",
    title: "DDoS Market",
    type: "Service",
    sslSupport: true,
    uptime: "90.2%",
    lastSeen: "5 hours ago",
    maliciousScore: 85,
    description: "DDoS attack service with various packages and targets"
  },
  {
    id: "os007",
    url: "http://l33tacademy99x.onion",
    title: "L33t Academy",
    type: "Educational",
    sslSupport: true,
    uptime: "98.9%",
    lastSeen: "2 days ago",
    maliciousScore: 70,
    description: "Hacking tutorials and courses from basic to advanced"
  },
  {
    id: "os008",
    url: "http://scammerxposed.onion",
    title: "Scammer Exposed",
    type: "Forum",
    sslSupport: false,
    uptime: "96.3%",
    lastSeen: "3 days ago",
    maliciousScore: 40,
    description: "Community-driven forum exposing scammers on the dark web"
  }
];

// OSINT tools data
export const osintTools = [
  {
    id: "tool001",
    name: "OnionScan",
    description: "Scans .onion sites for security issues and information leaks",
    category: "Scanner",
    features: [
      "SSL verification",
      "Server fingerprinting",
      "Hidden service detection",
      "Apache mod_status detection",
      "Open directory listing detection",
      "Exposed version control detection"
    ]
  },
  {
    id: "tool002",
    name: "DarkSearch",
    description: "Search engine for .onion domains with crawling capabilities",
    category: "Search Engine",
    features: [
      "Keyword search",
      "Domain categorization",
      "Content indexing",
      "Historical snapshots",
      "Related domain discovery"
    ]
  },
  {
    id: "tool003",
    name: "TorBot",
    description: "Tor network crawler and analyzer for link discovery",
    category: "Crawler",
    features: [
      "Link extraction",
      "Domain status checking",
      "Content analysis",
      "Network mapping",
      "Visualization exports"
    ]
  },
  {
    id: "tool004",
    name: "DarkEye",
    description: "Visual reconnaissance tool for dark web monitoring",
    category: "Monitoring",
    features: [
      "Real-time monitoring",
      "Screenshot capture",
      "Content changes detection",
      "Alert system",
      "Visual dashboard"
    ]
  },
  {
    id: "tool005",
    name: "HiddenServiceID",
    description: "Identification and fingerprinting of hidden services",
    category: "Forensics",
    features: [
      "Service identification",
      "Technology stack detection",
      "Vulnerability scanning",
      "Hosting information",
      "Related service discovery"
    ]
  },
  {
    id: "tool006",
    name: "DarkTracer",
    description: "Darknet activity tracker focusing on threats and illegal activities",
    category: "Threat Intelligence",
    features: [
      "Activity monitoring",
      "Behavioral analysis",
      "Threat correlation",
      "Marketplace monitoring",
      "Pattern recognition"
    ]
  }
];

// Statistics for charts and dashboards
export const statistics = {
  sitesPerCategory: [
    { category: "Marketplace", count: 156 },
    { category: "Forum", count: 231 },
    { category: "Service", count: 127 },
    { category: "Educational", count: 54 },
    { category: "Data Leak", count: 78 },
    { category: "Scam", count: 205 }
  ],
  threatLevels: [
    { level: "Critical", count: 43 },
    { level: "High", count: 87 },
    { level: "Medium", count: 154 },
    { level: "Low", count: 216 }
  ],
  activeThreats: {
    ransomware: 25,
    dataLeaks: 38,
    exploits: 17,
    malware: 42,
    phishing: 23,
    ddos: 12,
    botnets: 8
  },
  recentActivity: {
    lastHour: 23,
    last24Hours: 147,
    lastWeek: 862
  },
  topKeywords: [
    { keyword: "credentials", count: 245 },
    { keyword: "ransomware", count: 187 },
    { keyword: "zero-day", count: 163 },
    { keyword: "database", count: 142 },
    { keyword: "bitcoin", count: 126 },
    { keyword: "credit card", count: 118 },
    { keyword: "exploit", count: 107 },
    { keyword: "malware", count: 98 }
  ]
};