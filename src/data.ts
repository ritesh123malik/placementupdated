export interface Company {
  sno: number;
  date: string;
  company: string;
  branches: string[];
  type: string;
  cgpa: string;
  ctc: number | null;
  fixed: number | null;
  stipend: number | null;
  placed: number;
  status: 'Completed' | 'Pending';
}

export const companies: Company[] = [
  { sno: 1, date: "N/A", company: "Flexport", branches: ["SDE"], type: "SLI", cgpa: "N/A", ctc: 63, fixed: null, stipend: 125000, placed: 2, status: "Completed" },
  { sno: 2, date: "29 Aug 25", company: "DE Shaw", branches: ["CSE","ECE","CCE"], type: "SLI + FTE", cgpa: "7+", ctc: 59.3, fixed: 24.0, stipend: 150000, placed: 3, status: "Completed" },
  { sno: 3, date: "17 Oct 25", company: "GoDaddy (SDE)", branches: ["SDE"], type: "SLI", cgpa: "5+", ctc: 46, fixed: null, stipend: 50000, placed: 2, status: "Completed" },
  { sno: 4, date: "17 Oct 25", company: "GoDaddy (PM)", branches: ["Product Manager"], type: "SLI + FTE", cgpa: "5+", ctc: 46, fixed: null, stipend: 50000, placed: 3, status: "Completed" },
  { sno: 5, date: "25 Aug 25", company: "Media.net", branches: ["CSE","ECE","CCE"], type: "SLI", cgpa: "6+", ctc: 39.3, fixed: null, stipend: 100000, placed: 2, status: "Completed" },
  { sno: 6, date: "20 Aug 25", company: "Triology", branches: ["CSE","ECE","CCE","Mech"], type: "FTE", cgpa: "5+", ctc: 32.5, fixed: 30.0, stipend: null, placed: 0, status: "Completed" },
  { sno: 7, date: "14 Nov 25", company: "Park+", branches: ["CSE","CCE","ECE","Mech"], type: "SLI + FTE", cgpa: "7+", ctc: 30, fixed: 8.0, stipend: 30000, placed: 0, status: "Pending" },
  { sno: 8, date: "N/A", company: "Wayfair", branches: ["Software Developer"], type: "SLI+FTE", cgpa: "N/A", ctc: 28, fixed: null, stipend: 65000, placed: 0, status: "Pending" },
  { sno: 9, date: "14 Nov 25", company: "AMD", branches: ["CSE","CCE","ECE"], type: "SLI + FTE", cgpa: "7.5+", ctc: 26.1, fixed: 13.4, stipend: 50000, placed: 0, status: "Completed" },
  { sno: 10, date: "22 Sept 25", company: "TITAN.email", branches: ["Open"], type: "SLI + FTE", cgpa: "7+", ctc: 25, fixed: 18.0, stipend: 100000, placed: 0, status: "Completed" },
  { sno: 11, date: "28 Jul 25", company: "Eatclub", branches: ["CSE","ECE","CCE","Mech"], type: "SLI + FTE", cgpa: "6.5+", ctc: 22, fixed: 10.0, stipend: 40000, placed: 5, status: "Completed" },
  { sno: 12, date: "22 Jul 25", company: "MakeMyTrip", branches: ["CSE","CCE"], type: "SLI + FTE", cgpa: "5+", ctc: 22, fixed: 12.0, stipend: 50000, placed: 2, status: "Completed" },
  { sno: 13, date: "05 Oct 24", company: "BNY Mellon", branches: ["CSE","CCE","ECE"], type: "Intern + PPO", cgpa: "7.5+", ctc: 22, fixed: null, stipend: 75000, placed: 4, status: "Completed" },
  { sno: 14, date: "05 Aug 25", company: "Tekion", branches: ["CSE"], type: "SLI + FTE", cgpa: "7+", ctc: 21, fixed: 20.0, stipend: 65000, placed: 5, status: "Completed" },
  { sno: 15, date: "N/A", company: "Flipkart", branches: ["Supply Chain"], type: "SLI + FTE", cgpa: "N/A", ctc: 19.05, fixed: null, stipend: 50000, placed: 3, status: "Completed" },
  { sno: 16, date: "16 Jul 25", company: "Sprinklr", branches: ["CSE","CCE"], type: "SLI + FTE", cgpa: "7+", ctc: 18, fixed: 15.0, stipend: 50000, placed: 2, status: "Completed" },
  { sno: 17, date: "14 Nov 25", company: "ION", branches: ["CSE","CCE","ECE"], type: "FTE", cgpa: "7.5+", ctc: 17.3, fixed: 15.0, stipend: null, placed: 1, status: "Completed" },
  { sno: 18, date: "27 Aug 25", company: "ProcDNA", branches: ["CSE","ECE","CCE","Mech"], type: "SLI + FTE", cgpa: "7+", ctc: 16.74, fixed: 7.9, stipend: 25000, placed: 2, status: "Completed" },
  { sno: 19, date: "14 Nov 25", company: "HSBC", branches: ["CSE"], type: "FTE", cgpa: "7+", ctc: 16.43, fixed: 15.0, stipend: null, placed: 0, status: "Completed" },
  { sno: 20, date: "29 Jul 25", company: "Whatfix (Quiko)", branches: ["CSE","ECE","CCE"], type: "SLI + FTE", cgpa: "7+", ctc: 16, fixed: 13.0, stipend: 50000, placed: 4, status: "Completed" },
  { sno: 21, date: "16 Jul 25", company: "Addverb Technologies", branches: ["CSE","ECE","CCE","Mech"], type: "SLI + FTE", cgpa: "6+", ctc: 16, fixed: 10.5, stipend: 25000, placed: 7, status: "Completed" },
  { sno: 22, date: "N/A", company: "OYO", branches: ["Business Analyst"], type: "SLI+FTE", cgpa: "N/A", ctc: 15.5, fixed: null, stipend: 40000, placed: 0, status: "Pending" },
  { sno: 23, date: "14 Nov 25", company: "Samsung Noida (R&D)", branches: ["CSE","ECE","CCE"], type: "SLI", cgpa: "7.5+", ctc: 15.5, fixed: null, stipend: 50000, placed: 7, status: "Completed" },
  { sno: 24, date: "14 Nov 25", company: "Samsung R&D", branches: ["CSE","ECE","CCE"], type: "SLI", cgpa: "7.5+", ctc: 15.5, fixed: null, stipend: 50000, placed: 9, status: "Completed" },
  { sno: 25, date: "23 Sept 25", company: "Unicommerce (SWE)", branches: ["CSE","ECE","CCE","Mech"], type: "SLI+FTE", cgpa: "5+", ctc: 15, fixed: 5.0, stipend: 30000, placed: 5, status: "Completed" },
  { sno: 26, date: "N/A", company: "Kickdrum", branches: ["Software Developer"], type: "FTE", cgpa: "N/A", ctc: 15, fixed: null, stipend: 35000, placed: 2, status: "Completed" },
  { sno: 27, date: "24 Sept 25", company: "ShodhAI", branches: ["CSE","CCE"], type: "SLI + FTE", cgpa: "5+", ctc: 15, fixed: 12.5, stipend: 15000, placed: 4, status: "Completed" },
  { sno: 28, date: "07 Oct 25", company: "Curiflow", branches: ["CSE","CCE","ECE"], type: "SLI+FTE", cgpa: "6.5+", ctc: 15, fixed: 9.5, stipend: 60000, placed: 4, status: "Completed" },
  { sno: 29, date: "14 Nov 25", company: "Media.net (SRE)", branches: ["CSE","CCE","ECE"], type: "SLI", cgpa: "6+", ctc: 14.5, fixed: null, stipend: 100000, placed: 1, status: "Pending" },
  { sno: 30, date: "N/A", company: "MAVQ", branches: ["SDE"], type: "SLI + FTE", cgpa: "N/A", ctc: 14.3, fixed: null, stipend: null, placed: 4, status: "Completed" },
  { sno: 31, date: "02 Sept 25", company: "ZS Associates", branches: ["CSE","ECE","CCE"], type: "SLI + FTE", cgpa: "7+", ctc: 14.15, fixed: 9.5, stipend: null, placed: 23, status: "Completed" },
  { sno: 32, date: "N/A", company: "Schlumberger", branches: ["Data-Analyst"], type: "SLI", cgpa: "N/A", ctc: 14, fixed: null, stipend: 40000, placed: 0, status: "Pending" },
  { sno: 33, date: "14 Nov 25", company: "Josh Technology Group", branches: ["CSE","ECE","CCE"], type: "SLI + FTE", cgpa: "5+", ctc: 13.5, fixed: 8.5, stipend: 23000, placed: 0, status: "Completed" },
  { sno: 34, date: "20 Aug 25", company: "E2E Networks", branches: ["CSE","ECE","CCE"], type: "SLI + FTE", cgpa: "7+", ctc: 13, fixed: 11.5, stipend: 48000, placed: 5, status: "Completed" },
  { sno: 35, date: "14 Nov 25", company: "rtCamp", branches: ["CSE","CCE"], type: "Intern + FTE", cgpa: "Open", ctc: 13, fixed: null, stipend: 25000, placed: 0, status: "Completed" },
  { sno: 36, date: "06 Sept 25", company: "APMSE (Eagleview)", branches: ["CSE","ECE","CCE"], type: "SLI + FTE", cgpa: "5+", ctc: 12.84, fixed: 12.0, stipend: 50000, placed: 7, status: "Completed" },
  { sno: 37, date: "19 Feb 24", company: "Deloitte", branches: ["CSE","ECE","CCE","Mech"], type: "Intern + PPO", cgpa: "6+", ctc: 12.64, fixed: 11.5, stipend: 30000, placed: 16, status: "Completed" },
  { sno: 38, date: "15 Sept 25", company: "Treebo Hotels", branches: ["CSE","ECE","CCE"], type: "SLI + FTE", cgpa: "6.5+", ctc: 12.5, fixed: 11.0, stipend: 25000, placed: 2, status: "Completed" },
  { sno: 39, date: "16 Jul 25", company: "Triumph Motorcycles", branches: ["Mech"], type: "SLI + FTE", cgpa: "5+", ctc: 12.5, fixed: null, stipend: 50000, placed: 4, status: "Completed" },
  { sno: 40, date: "27 May 25", company: "Bajaj Finserv Health", branches: ["CSE","ECE","CCE","Mech"], type: "SLI + PPO", cgpa: "5+", ctc: 12.2, fixed: null, stipend: 35000, placed: 3, status: "Completed" },
  { sno: 41, date: "N/A", company: "Ensylon", branches: ["SWE"], type: "SLI+FTE", cgpa: "N/A", ctc: 12, fixed: null, stipend: 50000, placed: 0, status: "Pending" },
  { sno: 42, date: "N/A", company: "Miimansa Systems", branches: ["NLP Intern"], type: "SLI+FTE", cgpa: "N/A", ctc: 12, fixed: null, stipend: 35000, placed: 6, status: "Completed" },
  { sno: 43, date: "N/A", company: "Futures First", branches: ["Financial Market Intern"], type: "SLI+FTE", cgpa: "N/A", ctc: 12, fixed: null, stipend: 40000, placed: 0, status: "Pending" },
  { sno: 44, date: "N/A", company: "Cyware", branches: ["SDET"], type: "SLI+FTE", cgpa: "N/A", ctc: 12, fixed: null, stipend: 50000, placed: 0, status: "Pending" },
  { sno: 45, date: "N/A", company: "Mamaearth", branches: ["Analyst"], type: "FTE", cgpa: "N/A", ctc: 12, fixed: null, stipend: 25000, placed: 3, status: "Completed" },
  { sno: 46, date: "N/A", company: "Serent Corporation", branches: ["NLP Intern"], type: "SLI+FTE", cgpa: "N/A", ctc: 12, fixed: null, stipend: 40000, placed: 3, status: "Completed" },
  { sno: 47, date: "N/A", company: "Blogvault", branches: ["SDE"], type: "SLI+FTE", cgpa: "N/A", ctc: 12, fixed: null, stipend: 30000, placed: 0, status: "Pending" },
  { sno: 48, date: "N/A", company: "Red Hat", branches: ["SDE"], type: "SLI + FTE", cgpa: "N/A", ctc: 12, fixed: null, stipend: 35000, placed: 0, status: "Pending" },
  { sno: 49, date: "09 Sept 25", company: "Spring Financial", branches: ["CSE","CCE"], type: "SLI + FTE", cgpa: "6+", ctc: 12, fixed: 12.0, stipend: 25000, placed: 3, status: "Completed" },
  { sno: 50, date: "14 Nov 25", company: "OneBanc", branches: ["CSE","CCE","ECE","Mech"], type: "SLI + FTE", cgpa: "7+", ctc: 12, fixed: 9.0, stipend: 40000, placed: 1, status: "Completed" },
  { sno: 51, date: "N/A", company: "Poshmark", branches: ["iOS Development"], type: "SLI + FTE", cgpa: "N/A", ctc: 12, fixed: null, stipend: 30000, placed: 0, status: "Pending" },
  { sno: 52, date: "N/A", company: "Truestate", branches: ["Intern"], type: "SLI", cgpa: "N/A", ctc: 12, fixed: null, stipend: 40000, placed: 4, status: "Completed" },
  { sno: 53, date: "N/A", company: "OTSI", branches: ["Full Stack Developer"], type: "SLI+FTE", cgpa: "N/A", ctc: 12, fixed: null, stipend: 25000, placed: 1, status: "Completed" },
  { sno: 54, date: "N/A", company: "Kaabil Tech", branches: ["SWE"], type: "SLI + FTE", cgpa: "N/A", ctc: 12, fixed: null, stipend: 0, placed: 6, status: "Completed" },
  { sno: 55, date: "N/A", company: "Bot Consulting", branches: ["SDE"], type: "SLI + FTE", cgpa: "N/A", ctc: 12, fixed: null, stipend: 35000, placed: 1, status: "Completed" },
  { sno: 56, date: "08 Oct 25", company: "Aperam", branches: ["CSE","CCE","ECE"], type: "SLI + FTE", cgpa: "6+", ctc: 11.5, fixed: 1.0, stipend: 30000, placed: 5, status: "Completed" },
  { sno: 57, date: "N/A", company: "NAV", branches: ["SWE"], type: "SLI + FTE", cgpa: "N/A", ctc: 11, fixed: null, stipend: 35000, placed: 3, status: "Completed" },
  { sno: 58, date: "N/A", company: "Procmart", branches: ["Product Analyst"], type: "SLI", cgpa: "N/A", ctc: 10, fixed: null, stipend: 20000, placed: 2, status: "Completed" },
  { sno: 59, date: "N/A", company: "Branch International", branches: ["SDE", "ML", "DevOps"], type: "SLI + FTE", cgpa: "N/A", ctc: 10, fixed: null, stipend: 50000, placed: 0, status: "Pending" },
  { sno: 60, date: "N/A", company: "Infoedge", branches: ["SDE"], type: "SLI + FTE", cgpa: "N/A", ctc: 10, fixed: null, stipend: 30000, placed: 0, status: "Pending" },
  { sno: 61, date: "05 Aug 25", company: "Signzy (Frontend)", branches: ["CSE","ECE","CCE","Mech"], type: "SLI+FTE", cgpa: "6.5+", ctc: 10, fixed: null, stipend: 40000, placed: 0, status: "Pending" },
  { sno: 62, date: "N/A", company: "Evam Labs", branches: ["Various Roles"], type: "SLI+FTE", cgpa: "N/A", ctc: 10, fixed: null, stipend: 35000, placed: 0, status: "Pending" },
  { sno: 63, date: "N/A", company: "Innovaccer", branches: ["Data Analyst"], type: "SLI + FTE", cgpa: "N/A", ctc: 10, fixed: null, stipend: 40000, placed: 11, status: "Completed" },
  { sno: 64, date: "15 Sept 25", company: "Treebo Hotels (SDET)", branches: ["CSE","ECE","CCE"], type: "SLI + FTE", cgpa: "6.5+", ctc: 9.5, fixed: 8.5, stipend: 15000, placed: 2, status: "Completed" },
  { sno: 65, date: "N/A", company: "Ador", branches: ["Core Engineer"], type: "FTE", cgpa: "N/A", ctc: 9, fixed: null, stipend: null, placed: 2, status: "Completed" },
  { sno: 66, date: "N/A", company: "Accolite", branches: ["SDE"], type: "SLI + FTE", cgpa: "N/A", ctc: 9, fixed: null, stipend: 25000, placed: 0, status: "Pending" },
  { sno: 67, date: "N/A", company: "Bolt Earth", branches: ["Software Engineer"], type: "SLI+FTE", cgpa: "N/A", ctc: 9, fixed: null, stipend: 25000, placed: 0, status: "Pending" },
  { sno: 68, date: "N/A", company: "SHL Labs", branches: ["Research Intern"], type: "SLI+FTE", cgpa: "N/A", ctc: 9, fixed: null, stipend: 25000, placed: 0, status: "Pending" },
  { sno: 69, date: "N/A", company: "Hero Vired", branches: ["Data Engineer", "Full Stack"], type: "FTE", cgpa: "N/A", ctc: 8.5, fixed: null, stipend: 30000, placed: 4, status: "Completed" },
  { sno: 70, date: "14 Nov 25", company: "Eucloid", branches: ["CSE","CCE","ECE"], type: "Intern", cgpa: "5+", ctc: 8.5, fixed: null, stipend: 35000, placed: 6, status: "Completed" },
  { sno: 71, date: "28 Aug 25", company: "EPAM", branches: ["CSE","CCE","ECE"], type: "SLI + FTE", cgpa: "6+", ctc: 8.48, fixed: 8.0, stipend: 28000, placed: 3, status: "Completed" },
  { sno: 72, date: "19 Feb 24", company: "HashedIn (Deloitte)", branches: ["CSE","ECE","CCE","Mech"], type: "SLI+FTE", cgpa: "6+", ctc: 8.1, fixed: null, stipend: 25000, placed: 2, status: "Completed" },
  { sno: 73, date: "N/A", company: "Atom Security", branches: ["Associate"], type: "SLI+FTE", cgpa: "N/A", ctc: 8, fixed: null, stipend: 25000, placed: 0, status: "Pending" },
  { sno: 74, date: "N/A", company: "Sibros", branches: ["Trainee"], type: "SLI+FTE", cgpa: "N/A", ctc: 8, fixed: null, stipend: 35000, placed: 0, status: "Pending" },
  { sno: 75, date: "N/A", company: "Evigway Technologies", branches: ["SDE Intern"], type: "SLI+FTE", cgpa: "N/A", ctc: 8, fixed: null, stipend: 40000, placed: 0, status: "Pending" },
  { sno: 76, date: "N/A", company: "Deloitte (Mendix)", branches: ["Mendix Developer"], type: "FTE", cgpa: "N/A", ctc: 7.6, fixed: null, stipend: null, placed: 0, status: "Pending" },
  { sno: 77, date: "N/A", company: "RGF", branches: ["Associate"], type: "SLI+FTE", cgpa: "N/A", ctc: 7.5, fixed: null, stipend: 25000, placed: 0, status: "Pending" },
  { sno: 78, date: "N/A", company: "Bot Consulting (AI)", branches: ["AI Engineer"], type: "SLI + FTE", cgpa: "N/A", ctc: 7.21, fixed: null, stipend: 25000, placed: 1, status: "Completed" },
  { sno: 79, date: "29 Sept 25", company: "Celebal Technologies", branches: ["CSE","ECE","CCE","Mech"], type: "SLI + FTE", cgpa: "5+", ctc: 7, fixed: 6.0, stipend: 15000, placed: 11, status: "Completed" },
  { sno: 80, date: "N/A", company: "Info Objects", branches: ["Trainee"], type: "SLI+FTE", cgpa: "N/A", ctc: 7, fixed: null, stipend: 15000, placed: 0, status: "Pending" },
  { sno: 81, date: "29 Sept 25", company: "FreeCharge", branches: ["Open"], type: "SLI + FTE", cgpa: "6+", ctc: 7, fixed: 7.0, stipend: 25000, placed: 9, status: "Completed" },
  { sno: 82, date: "22 Sept 25", company: "Nagarro Software", branches: ["CSE","ECE","CCE"], type: "SLI + FTE", cgpa: "6+", ctc: 7, fixed: 7.0, stipend: 30000, placed: 4, status: "Completed" },
  { sno: 83, date: "15 Sept 25", company: "Treebo Hotels (SRE)", branches: ["CSE","ECE","CCE"], type: "SLI + FTE", cgpa: "6.5+", ctc: 7, fixed: 6.0, stipend: 15000, placed: 2, status: "Completed" },
  { sno: 84, date: "N/A", company: "Manthan", branches: ["SDE"], type: "SLI + FTE", cgpa: "N/A", ctc: 7, fixed: null, stipend: 25000, placed: 5, status: "Completed" },
  { sno: 85, date: "25 Sept 25", company: "Provakil", branches: ["CSE","ECE","CCE","Mech"], type: "SLI + FTE", cgpa: "5+", ctc: 6.5, fixed: 6.5, stipend: 20000, placed: 2, status: "Completed" },
  { sno: 86, date: "N/A", company: "Pepsico", branches: ["Supply Chain"], type: "FTE", cgpa: "N/A", ctc: 6.29, fixed: null, stipend: null, placed: 0, status: "Pending" },
  { sno: 87, date: "N/A", company: "Mittal Saab", branches: ["Various Profiles"], type: "FTE", cgpa: "N/A", ctc: 6, fixed: null, stipend: null, placed: 0, status: "Pending" },
  { sno: 88, date: "N/A", company: "MTX", branches: ["Junior Associate"], type: "SLI + FTE", cgpa: "N/A", ctc: 6, fixed: null, stipend: 20000, placed: 0, status: "Pending" },
  { sno: 89, date: "14 Nov 25", company: "Honda Cars", branches: ["Mech"], type: "SLI + FTE", cgpa: "6+", ctc: 6, fixed: 6.0, stipend: 20000, placed: 1, status: "Completed" },
  { sno: 90, date: "N/A", company: "Axestrack", branches: ["SDE"], type: "SLI + FTE", cgpa: "N/A", ctc: 6, fixed: null, stipend: 25000, placed: 0, status: "Pending" },
  { sno: 91, date: "23 Sept 25", company: "Unicommerce (Onboarding)", branches: ["CSE","ECE","CCE","Mech"], type: "SLI + FTE", cgpa: "5+", ctc: 5.5, fixed: 5.0, stipend: 25000, placed: 4, status: "Completed" },
  { sno: 92, date: "14 Nov 25", company: "Josh Technology Group (Jr)", branches: ["CSE","CCE","ECE"], type: "SLI + FTE", cgpa: "5+", ctc: 5.39, fixed: 4.3, stipend: 20000, placed: 0, status: "Completed" },
  { sno: 93, date: "05 Aug 25", company: "Signzy (MERN)", branches: ["CSE","ECE","CCE","Mech"], type: "SLI + PPO", cgpa: "6.5+", ctc: null, fixed: null, stipend: 40000, placed: 0, status: "Pending" }
];

export interface ChangelogEntry {
  date: string;
  company: string;
  type: 'NEW' | 'UPDATE' | 'BLACKLIST';
  description: string;
  ctc?: string;
  students?: string;
  status?: string;
}

export const changelog: ChangelogEntry[] = [
  {
    date: "Dec 16, 2024",
    company: "Flexport",
    type: "NEW",
    description: "Company added to placement drive",
    ctc: "63 LPA",
    students: "0 → 2",
    status: "COMPLETED"
  },
  {
    date: "Dec 16, 2024",
    company: "GoDaddy",
    type: "NEW",
    description: "Company added to placement drive",
    ctc: "46 LPA",
    students: "0 → 2",
    status: "COMPLETED"
  },
  {
    date: "Dec 16, 2024",
    company: "Shodh AI",
    type: "UPDATE",
    description: "CTC update: 12 LPA → 15 LPA",
    status: "COMPLETED"
  },
  {
    date: "Dec 16, 2024",
    company: "Media.net SRE",
    type: "UPDATE",
    description: "CTC update: 15.7 LPA → 14.5 LPA",
    status: "COMPLETED"
  },
  {
    date: "Dec 16, 2024",
    company: "Samsung Delhi",
    type: "UPDATE",
    description: "Students selected: 8 → 9",
    status: "COMPLETED"
  },
  {
    date: "Dec 16, 2024",
    company: "Blogvault",
    type: "BLACKLIST",
    description: "Company blacklisted us"
  },
  {
    date: "Dec 16, 2024",
    company: "DELOITTE",
    type: "UPDATE",
    description: "Students selected: 18 → 16",
    status: "COMPLETED"
  }
];

export const offCampus = ["Google","Microsoft","Myntra","Amazon","Dell","Agoda","Gokwik","Allen","Other (19)"];

