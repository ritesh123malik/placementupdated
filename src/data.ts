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
  { sno: 1, date: "N/A", company: "Flexport", branches: ["SDE"], type: "SLI", cgpa: "7.4+", ctc: 63, fixed: null, stipend: 125000, placed: 3, status: "Completed" },
  { sno: 2, date: "29 Aug 25", company: "DE Shaw", branches: ["CSE","CCE","ECE"], type: "SLI + FTE", cgpa: "7+", ctc: 59.3, fixed: 24.0, stipend: 150000, placed: 4, status: "Completed" },
  { sno: 3, date: "17 Oct 25", company: "GoDaddy (SDE)", branches: ["CSE","CCE","ECE","Mech"], type: "SLI", cgpa: "5+", ctc: 46, fixed: null, stipend: 50000, placed: 2, status: "Completed" },
  { sno: 4, date: "17 Oct 25", company: "GoDaddy (PM)", branches: ["CSE","CCE","ECE","Mech"], type: "SLI + FTE", cgpa: "5+", ctc: 46, fixed: null, stipend: 50000, placed: 3, status: "Completed" },
  { sno: 5, date: "25 Aug 25", company: "Media.net", branches: ["CSE","CCE","ECE"], type: "Summer Intern", cgpa: "6+", ctc: 39.3, fixed: null, stipend: 100000, placed: 3, status: "Completed" },
  { sno: 6, date: "20 Aug 25", company: "Triology", branches: ["CSE","ECE","CCE","Mech"], type: "FTE", cgpa: "5+", ctc: 32.5, fixed: 30.0, stipend: null, placed: 0, status: "Completed" },
  { sno: 7, date: "14 Nov 25", company: "Park+", branches: ["CSE","CCE","ECE","Mech"], type: "SLI + FTE", cgpa: "7+", ctc: 30, fixed: 8.0, stipend: 30000, placed: 0, status: "Pending" },
  { sno: 8, date: "N/A", company: "Wayfair", branches: ["Software Developer"], type: "SLI+FTE", cgpa: "N/A", ctc: 28, fixed: null, stipend: 65000, placed: 0, status: "Pending" },
  { sno: 9, date: "14 Nov 25", company: "AMD", branches: ["CSE","CCE","ECE"], type: "SLI + FTE", cgpa: "7.5+", ctc: 26.1, fixed: 13.4, stipend: 50000, placed: 0, status: "Completed" },
  { sno: 10, date: "22 Sept 25", company: "TITAN.email", branches: ["Open"], type: "SLI + FTE", cgpa: "7+", ctc: 25, fixed: 18.0, stipend: 100000, placed: 0, status: "Completed" },
  { sno: 11, date: "28 Jul 25", company: "Eatclub", branches: ["CSE","CCE","ECE","Mech"], type: "SLI + FTE", cgpa: "6.5+", ctc: 22, fixed: 10.0, stipend: 40000, placed: 5, status: "Completed" },
  { sno: 12, date: "22 Jul 25", company: "MakeMyTrip", branches: ["CSE","CCE"], type: "SLI + FTE", cgpa: "5+", ctc: 22, fixed: 12.0, stipend: 50000, placed: 2, status: "Completed" },
  { sno: 13, date: "05 Oct 24", company: "BNY Mellon", branches: ["CSE","CCE","ECE"], type: "Summer Intern", cgpa: "7.5+", ctc: 22, fixed: null, stipend: 75000, placed: 3, status: "Completed" },
  { sno: 14, date: "05 Aug 25", company: "Tekion", branches: ["CSE","CCE","ECE"], type: "SLI + FTE", cgpa: "7+", ctc: 20, fixed: 20.0, stipend: 65000, placed: 5, status: "Completed" },
  { sno: 15, date: "N/A", company: "Flipkart", branches: ["ECE","Mech"], type: "SLI + FTE", cgpa: "5+", ctc: 14.5, fixed: null, stipend: 50000, placed: 1, status: "Completed" },
  { sno: 16, date: "16 Jul 25", company: "Sprinklr", branches: ["CSE","CCE"], type: "SLI + FTE", cgpa: "7+", ctc: 15, fixed: 15.0, stipend: 50000, placed: 3, status: "Completed" },
  { sno: 17, date: "14 Nov 25", company: "ION", branches: ["CSE","CCE","ECE"], type: "FTE", cgpa: "7.5+", ctc: 17.3, fixed: 15.0, stipend: null, placed: 1, status: "Completed" },
  { sno: 18, date: "27 Aug 25", company: "ProcDNA", branches: ["CSE","CCE","ECE","Mech"], type: "SLI + FTE", cgpa: "7+", ctc: 16.74, fixed: 7.9, stipend: 25000, placed: 3, status: "Completed" },
  { sno: 19, date: "14 Nov 25", company: "HSBC", branches: ["CSE"], type: "FTE", cgpa: "7+", ctc: 16.43, fixed: 15.0, stipend: null, placed: 0, status: "Completed" },
  { sno: 20, date: "29 Jul 25", company: "Whatfix (Quiko)", branches: ["CSE","CCE","ECE"], type: "SLI + FTE", cgpa: "7+", ctc: 16, fixed: 13.0, stipend: 50000, placed: 4, status: "Completed" },
  { sno: 21, date: "16 Jul 25", company: "Addverb Technologies", branches: ["CSE","CCE","ECE","Mech"], type: "SLI + FTE", cgpa: "6+", ctc: 16, fixed: 10.5, stipend: 25000, placed: 8, status: "Completed" },
  { sno: 22, date: "N/A", company: "OYO", branches: ["Business Analyst"], type: "SLI+FTE", cgpa: "N/A", ctc: 15.5, fixed: null, stipend: 40000, placed: 0, status: "Pending" },
  { sno: 23, date: "14 Nov 25", company: "Samsung Noida (R&D)", branches: ["CSE","CCE","ECE"], type: "SLI", cgpa: "7+", ctc: 15.5, fixed: null, stipend: 50000, placed: 4, status: "Completed" },
  { sno: 24, date: "14 Nov 25", company: "Samsung R&D", branches: ["CSE","CCE","ECE"], type: "SLI", cgpa: "7+", ctc: 15.5, fixed: null, stipend: 50000, placed: 10, status: "Completed" },
  { sno: 25, date: "23 Sept 25", company: "Unicommerce (SWE)", branches: ["CSE","CCE","ECE","Mech"], type: "SLI + FTE", cgpa: "5+", ctc: 15, fixed: 5.0, stipend: 30000, placed: 10, status: "Completed" },
  { sno: 26, date: "N/A", company: "Kickdrum", branches: ["Software Developer"], type: "FTE", cgpa: "N/A", ctc: 7.6, fixed: null, stipend: 25000, placed: 2, status: "Completed" },
  { sno: 27, date: "24 Sept 25", company: "ShodhAI", branches: ["CSE","CCE"], type: "SLI + FTE", cgpa: "5+", ctc: 12.5, fixed: 12.5, stipend: 15000, placed: 2, status: "Completed" },
  { sno: 28, date: "07 Oct 25", company: "Curiflow", branches: ["CSE","CCE","ECE"], type: "SLI + FTE", cgpa: "6.5+", ctc: 15, fixed: 9.5, stipend: 60000, placed: 3, status: "Completed" },
  { sno: 29, date: "14 Nov 25", company: "Media.net (SRE)", branches: ["CSE","CCE","ECE"], type: "SLI", cgpa: "6+", ctc: 14.5, fixed: null, stipend: 100000, placed: 1, status: "Pending" },
  { sno: 30, date: "N/A", company: "MAVQ", branches: ["SDE"], type: "SLI", cgpa: "N/A", ctc: 14.3, fixed: null, stipend: 40000, placed: 4, status: "Completed" },
  { sno: 31, date: "02 Sept 25", company: "ZS Associates", branches: ["CSE","ECE","CCE"], type: "SLI + FTE", cgpa: "7+", ctc: 14.15, fixed: 9.5, stipend: null, placed: 23, status: "Completed" },
  { sno: 32, date: "N/A", company: "Schlumberger", branches: ["Data-Analyst"], type: "SLI", cgpa: "N/A", ctc: 14, fixed: null, stipend: 40000, placed: 0, status: "Pending" },
  { sno: 33, date: "14 Nov 25", company: "Josh Technology Group", branches: ["CSE","ECE","CCE"], type: "SLI + FTE", cgpa: "5+", ctc: 13.5, fixed: 8.5, stipend: 23000, placed: 0, status: "Completed" },
  { sno: 34, date: "20 Aug 25", company: "E2E Networks", branches: ["CSE","CCE","ECE"], type: "SLI + FTE", cgpa: "7+", ctc: 13, fixed: 11.5, stipend: 48200, placed: 5, status: "Completed" },
  { sno: 35, date: "14 Nov 25", company: "rtCamp", branches: ["CSE","CCE"], type: "Intern + FTE", cgpa: "Open", ctc: 13, fixed: null, stipend: 25000, placed: 0, status: "Completed" },
  { sno: 36, date: "06 Sept 25", company: "APMSE (Eagleview)", branches: ["CSE","CCE","ECE"], type: "SLI + FTE", cgpa: "5+", ctc: 12.84, fixed: 12.0, stipend: 50000, placed: 8, status: "Completed" },
  { sno: 37, date: "19 Feb 24", company: "Deloitte", branches: ["CSE","ECE","CCE","Mech"], type: "Intern + PPO", cgpa: "6+", ctc: 12.64, fixed: 11.5, stipend: 30000, placed: 16, status: "Completed" },
  { sno: 38, date: "15 Sept 25", company: "Treebo Hotels", branches: ["CSE","CCE","ECE"], type: "SLI + FTE", cgpa: "6.5+", ctc: 12.5, fixed: 11.0, stipend: 25000, placed: 6, status: "Completed" },
  { sno: 39, date: "16 Jul 25", company: "Triumph Motorcycles", branches: ["Mech"], type: "SLI + FTE", cgpa: "5+", ctc: 12.5, fixed: null, stipend: 50000, placed: 4, status: "Completed" },
  { sno: 40, date: "27 May 25", company: "Bajaj Finserv Health", branches: ["CSE","ECE","CCE","Mech"], type: "SLI + PPO", cgpa: "5+", ctc: 12.2, fixed: null, stipend: 35000, placed: 3, status: "Completed" },
  { sno: 41, date: "N/A", company: "Ensylon India Pvt. Ltd.", branches: ["SWE", "CSE", "ECE", "CCE"], type: "SLI + FTE", cgpa: "7+", ctc: 12, fixed: null, stipend: 50000, placed: 13, status: "Completed" },
  { sno: 42, date: "N/A", company: "Miimansa Systems", branches: ["CSE","CCE","ECE"], type: "SLI + FTE", cgpa: "6+", ctc: 12, fixed: null, stipend: 35000, placed: 6, status: "Completed" },
  { sno: 43, date: "N/A", company: "Futures First", branches: ["Financial Market Intern"], type: "SLI+FTE", cgpa: "N/A", ctc: 12, fixed: null, stipend: 40000, placed: 0, status: "Pending" },
  { sno: 44, date: "N/A", company: "Cyware", branches: ["SDET"], type: "SLI+FTE", cgpa: "N/A", ctc: 12, fixed: null, stipend: 50000, placed: 0, status: "Pending" },
  { sno: 45, date: "N/A", company: "Mamaearth", branches: ["CSE","CCE","ECE","Mech"], type: "SLI", cgpa: "5+", ctc: 12, fixed: null, stipend: 25000, placed: 2, status: "Completed" },
  { sno: 46, date: "N/A", company: "Serent Corporation", branches: ["CSE","CCE","ECE","Mech"], type: "SLI", cgpa: "5+", ctc: 12, fixed: null, stipend: 40000, placed: 3, status: "Completed" },
  { sno: 47, date: "N/A", company: "Blogvault", branches: ["SDE"], type: "SLI+FTE", cgpa: "N/A", ctc: 12, fixed: null, stipend: 30000, placed: 0, status: "Pending" },
  { sno: 48, date: "N/A", company: "Red Hat", branches: ["SDE"], type: "SLI + FTE", cgpa: "N/A", ctc: 12, fixed: null, stipend: 35000, placed: 0, status: "Pending" },
  { sno: 49, date: "09 Sept 25", company: "Spring Financial", branches: ["CSE","CCE"], type: "SLI + FTE", cgpa: "6+", ctc: 12, fixed: 12.0, stipend: 35000, placed: 2, status: "Completed" },
  { sno: 50, date: "14 Nov 25", company: "OneBanc", branches: ["CSE","CCE","ECE","Mech"], type: "SLI + FTE", cgpa: "7+", ctc: 12, fixed: 9.0, stipend: 40000, placed: 1, status: "Completed" },
  { sno: 51, date: "N/A", company: "Poshmark", branches: ["iOS Development"], type: "SLI + FTE", cgpa: "N/A", ctc: 12, fixed: null, stipend: 30000, placed: 0, status: "Pending" },
  { sno: 52, date: "N/A", company: "Truestate", branches: ["Intern"], type: "SLI", cgpa: "N/A", ctc: 12, fixed: null, stipend: 40000, placed: 4, status: "Completed" },
  { sno: 53, date: "N/A", company: "OTSI", branches: ["Full Stack Developer"], type: "SLI+FTE", cgpa: "N/A", ctc: 12, fixed: null, stipend: 25000, placed: 1, status: "Completed" },
  { sno: 54, date: "N/A", company: "Kaabil Tech", branches: ["CSE","CCE","ECE"], type: "SLI + FTE", cgpa: "5+", ctc: 12, fixed: null, stipend: 25000, placed: 6, status: "Completed" },
  { sno: 55, date: "N/A", company: "Bot Consulting", branches: ["SDE"], type: "SLI + FTE", cgpa: "N/A", ctc: 12, fixed: null, stipend: 35000, placed: 1, status: "Completed" },
  { sno: 56, date: "08 Oct 25", company: "Aperam", branches: ["CSE","ECE","CCE"], type: "Intern + FTE", cgpa: "60%", ctc: 10, fixed: 1.0, stipend: 30000, placed: 5, status: "Completed" },
  { sno: 57, date: "N/A", company: "NAV", branches: ["CSE","CCE","ECE"], type: "SLI + FTE", cgpa: "6.5+", ctc: 11, fixed: null, stipend: 25000, placed: 3, status: "Completed" },
  { sno: 58, date: "N/A", company: "Procmart", branches: ["Product Analyst"], type: "SLI", cgpa: "N/A", ctc: 6, fixed: null, stipend: 20000, placed: 2, status: "Completed" },
  { sno: 59, date: "N/A", company: "Branch International", branches: ["SDE", "ML", "DevOps"], type: "SLI + FTE", cgpa: "N/A", ctc: 10, fixed: null, stipend: 50000, placed: 1, status: "Pending" },
  { sno: 60, date: "N/A", company: "Infoedge", branches: ["SDE"], type: "SLI + FTE", cgpa: "N/A", ctc: 10, fixed: null, stipend: 30000, placed: 0, status: "Pending" },
  { sno: 61, date: "05 Aug 25", company: "Signzy (Frontend)", branches: ["CSE","ECE","CCE","Mech"], type: "SLI+FTE", cgpa: "6.5+", ctc: 10, fixed: null, stipend: 40000, placed: 0, status: "Pending" },
  { sno: 62, date: "N/A", company: "Evam Labs", branches: ["Various Roles"], type: "SLI+FTE", cgpa: "N/A", ctc: 10, fixed: null, stipend: 35000, placed: 0, status: "Pending" },
  { sno: 63, date: "N/A", company: "Innovaccer (Associate Data Analyst)", branches: ["CSE","ECE","CCE","Mech"], type: "SLI + FTE", cgpa: "5+", ctc: 10, fixed: null, stipend: 40000, placed: 12, status: "Completed" },
  { sno: 64, date: "15 Sept 25", company: "Treebo Hotels (SDET)", branches: ["CSE","CCE","ECE"], type: "SLI + FTE", cgpa: "6.5+", ctc: 9.5, fixed: 8.5, stipend: 15000, placed: 2, status: "Completed" },
  { sno: 65, date: "N/A", company: "Ador", branches: ["Core Engineer"], type: "FTE", cgpa: "N/A", ctc: 9, fixed: null, stipend: null, placed: 2, status: "Completed" },
  { sno: 66, date: "N/A", company: "Accolite", branches: ["SDE"], type: "SLI + FTE", cgpa: "N/A", ctc: 9, fixed: null, stipend: 25000, placed: 0, status: "Pending" },
  { sno: 67, date: "N/A", company: "Bolt Earth", branches: ["Software Engineer"], type: "SLI+FTE", cgpa: "N/A", ctc: 9, fixed: null, stipend: 25000, placed: 0, status: "Pending" },
  { sno: 68, date: "N/A", company: "SHL Labs", branches: ["Research Intern"], type: "SLI+FTE", cgpa: "N/A", ctc: 9, fixed: null, stipend: 25000, placed: 0, status: "Pending" },
  { sno: 69, date: "N/A", company: "Hero Vired", branches: ["CSE","CCE","ECE","Mech"], type: "SLI + FTE", cgpa: "6.5+", ctc: 8.5, fixed: null, stipend: 30000, placed: 4, status: "Completed" },
  { sno: 70, date: "14 Nov 25", company: "Eucloid Data Solutions", branches: ["Data Solutions Associate Intern"], type: "SLI + FTE", cgpa: "5+", ctc: 8.5, fixed: 8.5, stipend: 35000, placed: 6, status: "Completed" },
  { sno: 71, date: "28 Aug 25", company: "EPAM", branches: ["CSE","CCE","ECE"], type: "SLI + FTE", cgpa: "6+", ctc: 8.48, fixed: 8.0, stipend: 27500, placed: 2, status: "Completed" },
  { sno: 72, date: "19 Feb 24", company: "HashedIn (Software Engineer)", branches: ["CSE","ECE","CCE"], type: "SLI+FTE", cgpa: "7+", ctc: 8.1, fixed: null, stipend: 25000, placed: 5, status: "Completed" },
  { sno: 73, date: "N/A", company: "Atom Security", branches: ["Associate"], type: "SLI+FTE", cgpa: "N/A", ctc: 8, fixed: null, stipend: 25000, placed: 0, status: "Pending" },
  { sno: 74, date: "N/A", company: "Sibros", branches: ["Trainee"], type: "SLI+FTE", cgpa: "N/A", ctc: 8, fixed: null, stipend: 35000, placed: 0, status: "Pending" },
  { sno: 75, date: "N/A", company: "Evigway Technologies", branches: ["SDE Intern"], type: "SLI+FTE", cgpa: "N/A", ctc: 8, fixed: null, stipend: 40000, placed: 1, status: "Pending" },
  { sno: 76, date: "N/A", company: "Deloitte (Mendix)", branches: ["Mendix Developer"], type: "FTE", cgpa: "N/A", ctc: 7.6, fixed: null, stipend: null, placed: 0, status: "Pending" },
  { sno: 77, date: "N/A", company: "RGF", branches: ["CSE","CCE","ECE","Mech"], type: "SLI + FTE", cgpa: "5+", ctc: 7.5, fixed: null, stipend: 25000, placed: 0, status: "Pending" },
  { sno: 78, date: "N/A", company: "Bot Consulting (AI)", branches: ["CSE","CCE","ECE","Mech"], type: "SLI + FTE", cgpa: "5+", ctc: 7.21, fixed: null, stipend: 25000, placed: 1, status: "Completed" },
  { sno: 79, date: "29 Sept 25", company: "Celebal Technologies", branches: ["CSE","ECE","CCE","Mech"], type: "SLI + FTE", cgpa: "5+", ctc: 7, fixed: 6.0, stipend: 15000, placed: 16, status: "Completed" },
  { sno: 80, date: "N/A", company: "Info Objects", branches: ["Trainee"], type: "SLI+FTE", cgpa: "N/A", ctc: 7, fixed: null, stipend: 15000, placed: 0, status: "Pending" },
  { sno: 81, date: "29 Sept 25", company: "Freecharge", branches: ["CSE", "ECE", "CCE"], type: "SLI + FTE", cgpa: "7+", ctc: 7, fixed: 7.0, stipend: 25000, placed: 12, status: "Completed" },
  { sno: 82, date: "22 Sept 25", company: "Nagarro Software", branches: ["CSE","CCE","ECE"], type: "SLI + FTE", cgpa: "6+", ctc: 8, fixed: 7.0, stipend: 33000, placed: 4, status: "Completed" },
  { sno: 83, date: "15 Sept 25", company: "Treebo Hotels (SRE)", branches: ["CSE","CCE","ECE"], type: "SLI + FTE", cgpa: "6.5+", ctc: 7, fixed: 6.0, stipend: 15000, placed: 2, status: "Completed" },
  { sno: 84, date: "N/A", company: "Manthan", branches: ["CSE","CCE","ECE","Mech"], type: "SLI + FTE", cgpa: "5+", ctc: 7, fixed: null, stipend: 25000, placed: 5, status: "Completed" },
  { sno: 85, date: "25 Sept 25", company: "Provakil", branches: ["CSE","CCE","ECE","Mech"], type: "SLI + FTE", cgpa: "5+", ctc: 6.5, fixed: 6.5, stipend: 20000, placed: 1, status: "Completed" },
  { sno: 86, date: "N/A", company: "Pepsico", branches: ["Supply Chain"], type: "FTE", cgpa: "N/A", ctc: 6.29, fixed: null, stipend: null, placed: 0, status: "Pending" },
  { sno: 87, date: "N/A", company: "Mittal Saab", branches: ["Various Profiles"], type: "FTE", cgpa: "N/A", ctc: 6, fixed: null, stipend: null, placed: 0, status: "Pending" },
  { sno: 88, date: "N/A", company: "MTX", branches: ["Junior Associate"], type: "SLI + FTE", cgpa: "N/A", ctc: 6, fixed: null, stipend: 20000, placed: 0, status: "Pending" },
  { sno: 89, date: "14 Nov 25", company: "Honda Cars", branches: ["Mech"], type: "SLI + FTE", cgpa: "6+", ctc: 6, fixed: 6.0, stipend: 20000, placed: 1, status: "Completed" },
  { sno: 90, date: "N/A", company: "Axestrack", branches: ["CSE"], type: "SLI + FTE", cgpa: "N/A", ctc: 6, fixed: null, stipend: 25000, placed: 0, status: "Pending" },
  { sno: 91, date: "23 Sept 25", company: "Unicommerce (Onboarding)", branches: ["CSE","CCE","ECE","Mech"], type: "SLI + FTE", cgpa: "5+", ctc: 5.5, fixed: 5.0, stipend: 25000, placed: 4, status: "Completed" },
  { sno: 92, date: "14 Nov 25", company: "Josh Technology Group (Jr)", branches: ["CSE","CCE","ECE"], type: "SLI + FTE", cgpa: "5+", ctc: 5.39, fixed: 4.3, stipend: 20000, placed: 0, status: "Completed" },
  { sno: 93, date: "05 Aug 25", company: "Signzy (MERN)", branches: ["CSE","ECE","CCE","Mech"], type: "SLI + PPO", cgpa: "6.5+", ctc: null, fixed: null, stipend: 40000, placed: 0, status: "Pending" },
  { sno: 94, date: "N/A", company: "CropXplore", branches: ["Open"], type: "SLI+FTE", cgpa: "N/A", ctc: null, fixed: null, stipend: null, placed: 1, status: "Completed" },
  { sno: 95, date: "N/A", company: "Iool Technologies Private Limited", branches: ["Open"], type: "SLI+FTE", cgpa: "N/A", ctc: null, fixed: null, stipend: null, placed: 1, status: "Completed" },
  { sno: 96, date: "N/A", company: "Eurofins IT Solutions India Pvt. Ltd.", branches: ["Open"], type: "SLI+FTE", cgpa: "N/A", ctc: null, fixed: null, stipend: null, placed: 1, status: "Completed" },
  { sno: 97, date: "N/A", company: "Qulabs Software (India) PVT LTD", branches: ["Open"], type: "SLI+FTE", cgpa: "N/A", ctc: null, fixed: null, stipend: null, placed: 1, status: "Completed" },
  { sno: 98, date: "N/A", company: "EatClub Brands Private Limited", branches: ["Open"], type: "SLI+FTE", cgpa: "N/A", ctc: null, fixed: null, stipend: null, placed: 4, status: "Completed" },
  { sno: 99, date: "N/A", company: "Delhivery Limited", branches: ["Open"], type: "SLI+FTE", cgpa: "N/A", ctc: null, fixed: null, stipend: null, placed: 1, status: "Completed" },
  { sno: 100, date: "N/A", company: "Kuki Solutions", branches: ["Open"], type: "SLI+FTE", cgpa: "N/A", ctc: null, fixed: null, stipend: null, placed: 1, status: "Completed" },
  { sno: 101, date: "N/A", company: "Tekion India Private Limited", branches: ["Open"], type: "SLI+FTE", cgpa: "N/A", ctc: null, fixed: null, stipend: null, placed: 5, status: "Completed" },
  { sno: 102, date: "N/A", company: "Thingslista Automation LLP", branches: ["Open"], type: "SLI+FTE", cgpa: "N/A", ctc: null, fixed: null, stipend: null, placed: 1, status: "Completed" },
  { sno: 103, date: "N/A", company: "Spinny (Valuedrive Technologies)", branches: ["Open"], type: "SLI+FTE", cgpa: "N/A", ctc: null, fixed: null, stipend: null, placed: 1, status: "Completed" },
  { sno: 104, date: "N/A", company: "HireQuotient Technologies Pte. Ltd", branches: ["Open"], type: "SLI+FTE", cgpa: "N/A", ctc: null, fixed: null, stipend: null, placed: 1, status: "Completed" },
  { sno: 105, date: "N/A", company: "MYLO", branches: ["Open"], type: "SLI+FTE", cgpa: "N/A", ctc: null, fixed: null, stipend: null, placed: 1, status: "Completed" },
  { sno: 106, date: "N/A", company: "KickDrum", branches: ["Open"], type: "SLI+FTE", cgpa: "N/A", ctc: null, fixed: null, stipend: null, placed: 1, status: "Completed" },
  { sno: 107, date: "N/A", company: "Flickd", branches: ["Open"], type: "SLI+FTE", cgpa: "N/A", ctc: null, fixed: null, stipend: null, placed: 1, status: "Completed" },
  { sno: 108, date: "N/A", company: "Layer3 Inc.", branches: ["Open"], type: "SLI+FTE", cgpa: "N/A", ctc: null, fixed: null, stipend: null, placed: 1, status: "Completed" },
  { sno: 109, date: "N/A", company: "Swiss Beauty", branches: ["Open"], type: "SLI+FTE", cgpa: "N/A", ctc: null, fixed: null, stipend: null, placed: 1, status: "Completed" },
  { sno: 110, date: "N/A", company: "Jio Haptik Technologies Limited", branches: ["Open"], type: "SLI+FTE", cgpa: "N/A", ctc: null, fixed: null, stipend: null, placed: 1, status: "Completed" },
  { sno: 111, date: "N/A", company: "Drivool Technologies Pvt Limited", branches: ["Open"], type: "SLI+FTE", cgpa: "N/A", ctc: null, fixed: null, stipend: null, placed: 1, status: "Completed" },
  { sno: 112, date: "N/A", company: "Rahul Agrawal Software Consultant", branches: ["Open"], type: "SLI+FTE", cgpa: "N/A", ctc: null, fixed: null, stipend: null, placed: 1, status: "Completed" },
  { sno: 113, date: "N/A", company: "Sainath Natural Stones", branches: ["Open"], type: "SLI+FTE", cgpa: "N/A", ctc: null, fixed: null, stipend: null, placed: 1, status: "Completed" },
  { sno: 114, date: "N/A", company: "RGF Professional Recruitment India", branches: ["Open"], type: "SLI+FTE", cgpa: "N/A", ctc: null, fixed: null, stipend: null, placed: 1, status: "Completed" },
  { sno: 115, date: "N/A", company: "Syntax Studios", branches: ["Open"], type: "SLI+FTE", cgpa: "N/A", ctc: null, fixed: null, stipend: null, placed: 1, status: "Completed" },
  { sno: 116, date: "N/A", company: "Proluma Innovations Private Limited", branches: ["Open"], type: "SLI+FTE", cgpa: "N/A", ctc: null, fixed: null, stipend: null, placed: 2, status: "Completed" },
  { sno: 117, date: "N/A", company: "JDSP Distilleries and Breweries Pvt Ltd", branches: ["Open"], type: "SLI+FTE", cgpa: "N/A", ctc: null, fixed: null, stipend: null, placed: 1, status: "Completed" },
  { sno: 118, date: "N/A", company: "TheBoomerang.com", branches: ["Open"], type: "SLI+FTE", cgpa: "N/A", ctc: null, fixed: null, stipend: null, placed: 2, status: "Completed" },
  { sno: 119, date: "N/A", company: "Manthhan Software Private Limited", branches: ["Open"], type: "SLI+FTE", cgpa: "N/A", ctc: null, fixed: null, stipend: null, placed: 5, status: "Completed" },
  { sno: 120, date: "N/A", company: "Axcestrack", branches: ["Open"], type: "SLI+FTE", cgpa: "N/A", ctc: null, fixed: null, stipend: null, placed: 1, status: "Completed" },
  { sno: 121, date: "N/A", company: "Myntra", branches: ["Open"], type: "SLI+FTE", cgpa: "N/A", ctc: null, fixed: null, stipend: null, placed: 1, status: "Completed" },
  { sno: 122, date: "N/A", company: "Tychi Wallet", branches: ["Open"], type: "SLI+FTE", cgpa: "N/A", ctc: null, fixed: null, stipend: null, placed: 1, status: "Completed" },
  { sno: 123, date: "N/A", company: "NIT Jaipur", branches: ["Open"], type: "SLI+FTE", cgpa: "N/A", ctc: null, fixed: null, stipend: null, placed: 1, status: "Completed" },
  { sno: 124, date: "N/A", company: "Goldman Sachs", branches: ["Open"], type: "SLI+FTE", cgpa: "N/A", ctc: null, fixed: null, stipend: null, placed: 1, status: "Completed" },
  { sno: 125, date: "N/A", company: "Hacken", branches: ["Open"], type: "SLI+FTE", cgpa: "N/A", ctc: null, fixed: null, stipend: null, placed: 1, status: "Completed" },
  { sno: 126, date: "N/A", company: "Triumph Motorcycles India Pvt. Ltd.", branches: ["Open"], type: "SLI+FTE", cgpa: "N/A", ctc: null, fixed: null, stipend: null, placed: 4, status: "Completed" },
  { sno: 127, date: "N/A", company: "NodeOps Network", branches: ["Open"], type: "SLI+FTE", cgpa: "N/A", ctc: null, fixed: null, stipend: null, placed: 1, status: "Completed" },
  { sno: 128, date: "N/A", company: "Trisx Technologies Pvt. Ltd.", branches: ["Open"], type: "SLI+FTE", cgpa: "N/A", ctc: null, fixed: null, stipend: null, placed: 2, status: "Completed" },
  { sno: 129, date: "N/A", company: "Cloudsufi", branches: ["Open"], type: "SLI+FTE", cgpa: "N/A", ctc: null, fixed: null, stipend: null, placed: 1, status: "Completed" },
  { sno: 130, date: "N/A", company: "Allen Digital", branches: ["Open"], type: "SLI+FTE", cgpa: "N/A", ctc: null, fixed: null, stipend: null, placed: 1, status: "Completed" },
  { sno: 131, date: "N/A", company: "Hoonartek", branches: ["Open"], type: "SLI+FTE", cgpa: "N/A", ctc: null, fixed: null, stipend: null, placed: 1, status: "Completed" },
  { sno: 132, date: "N/A", company: "Nefture", branches: ["Open"], type: "SLI+FTE", cgpa: "N/A", ctc: null, fixed: null, stipend: null, placed: 1, status: "Completed" },
  { sno: 133, date: "N/A", company: "PayOrch Technologies", branches: ["Open"], type: "SLI+FTE", cgpa: "N/A", ctc: null, fixed: null, stipend: null, placed: 1, status: "Completed" },
  { sno: 134, date: "N/A", company: "Craft AI", branches: ["Open"], type: "SLI+FTE", cgpa: "N/A", ctc: null, fixed: null, stipend: null, placed: 1, status: "Completed" },
  { sno: 135, date: "N/A", company: "IIT Delhi", branches: ["Open"], type: "SLI+FTE", cgpa: "N/A", ctc: null, fixed: null, stipend: null, placed: 1, status: "Completed" },
  { sno: 136, date: "N/A", company: "GoDaddy", branches: ["Open"], type: "SLI+FTE", cgpa: "N/A", ctc: null, fixed: null, stipend: null, placed: 4, status: "Completed" },
  { sno: 137, date: "N/A", company: "Matiks Mental Arithmetic Pvt. Ltd.", branches: ["Open"], type: "SLI+FTE", cgpa: "N/A", ctc: null, fixed: null, stipend: null, placed: 1, status: "Completed" },

  { sno: 138, date: "N/A", company: "Fenix Commerce", branches: ["Open"], type: "SLI+FTE", cgpa: "N/A", ctc: null, fixed: null, stipend: null, placed: 1, status: "Completed" },
  { sno: 139, date: "N/A", company: "DB Labs", branches: ["Open"], type: "SLI+FTE", cgpa: "N/A", ctc: null, fixed: null, stipend: null, placed: 1, status: "Completed" },
  { sno: 140, date: "N/A", company: "Bundl", branches: ["Open"], type: "SLI+FTE", cgpa: "N/A", ctc: null, fixed: null, stipend: null, placed: 1, status: "Completed" },
  { sno: 141, date: "N/A", company: "SaturnIQ Intelligent Solutions Pvt Ltd", branches: ["Open"], type: "SLI+FTE", cgpa: "N/A", ctc: null, fixed: null, stipend: null, placed: 1, status: "Completed" },
  { sno: 142, date: "N/A", company: "Ather Energy", branches: ["Open"], type: "SLI+FTE", cgpa: "N/A", ctc: null, fixed: null, stipend: null, placed: 1, status: "Completed" },

  { sno: 143, date: "N/A", company: "Filmverse Media (Entrepreneurship)", branches: ["Open"], type: "SLI+FTE", cgpa: "N/A", ctc: null, fixed: null, stipend: null, placed: 1, status: "Completed" },
  { sno: 144, date: "N/A", company: "E2E Networks Ltd", branches: ["Open"], type: "SLI+FTE", cgpa: "N/A", ctc: null, fixed: null, stipend: null, placed: 5, status: "Completed" },
  { sno: 145, date: "N/A", company: "Goyal Gums Pvt. Ltd.", branches: ["Open"], type: "SLI+FTE", cgpa: "N/A", ctc: null, fixed: null, stipend: null, placed: 1, status: "Completed" },
  { sno: 146, date: "N/A", company: "Coffer Internet Services (Powerplay)", branches: ["Open"], type: "SLI+FTE", cgpa: "N/A", ctc: null, fixed: null, stipend: null, placed: 1, status: "Completed" },
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
    date: "Today",
    company: "Samsung R&D",
    type: "UPDATE",
    description: "Stipend and criteria updated",
    status: "COMPLETED"
  },
  {
    date: "Today",
    company: "Eagleview",
    type: "UPDATE",
    description: "Package updated to 12.84L",
    ctc: "12.84 LPA",
    status: "COMPLETED"
  },
  {
    date: "Today",
    company: "Addverb Technologies",
    type: "UPDATE",
    description: "CTC verified at 16L",
    ctc: "16 LPA",
    status: "COMPLETED"
  },
  {
    date: "Today",
    company: "Kaabil Tech",
    type: "UPDATE",
    description: "CTC updated to 12L",
    ctc: "12 LPA",
    status: "COMPLETED"
  },
  {
    date: "Today",
    company: "Treebo Hotels",
    type: "UPDATE",
    description: "Profiles split into individual tracking blocks",
    ctc: "7-12.5 LPA",
    status: "COMPLETED"
  },
  {
    date: "Today",
    company: "Unicommerce",
    type: "UPDATE",
    description: "Multiple profiles aligned",
    ctc: "5.5-15 LPA",
    status: "COMPLETED"
  },
  {
    date: "Today",
    company: "Aperam",
    type: "UPDATE",
    description: "Intern+FTE parameters mapped",
    ctc: "10 LPA",
    status: "COMPLETED"
  },
  {
    date: "Today",
    company: "E2E Networks",
    type: "UPDATE",
    description: "Stipend increased to 48.2k",
    ctc: "13 LPA",
    status: "COMPLETED"
  },
  {
    date: "Today",
    company: "Tekion",
    type: "UPDATE",
    description: "CTC corrected to 20L",
    ctc: "20 LPA",
    status: "COMPLETED"
  },
  {
    date: "Today",
    company: "DE Shaw",
    type: "UPDATE",
    description: "CTC fixed to 59.3L",
    ctc: "59.3 LPA",
    status: "COMPLETED"
  },
  {
    date: "Today",
    company: "Eatclub",
    type: "UPDATE",
    description: "CTC confirmed at 22L",
    ctc: "22 LPA",
    status: "COMPLETED"
  },
  {
    date: "Today",
    company: "GoDaddy",
    type: "UPDATE",
    description: "Stipend updated",
    ctc: "46 LPA",
    status: "COMPLETED"
  },
  {
    date: "Today",
    company: "Nagarro Software",
    type: "UPDATE",
    description: "CTC bounded at 7-8L",
    ctc: "8 LPA",
    status: "COMPLETED"
  },
  {
    date: "Today",
    company: "MakeMyTrip",
    type: "UPDATE",
    description: "CTC validated",
    ctc: "22 LPA",
    status: "COMPLETED"
  },
  {
    date: "Today",
    company: "Miimansa Systems",
    type: "UPDATE",
    description: "CTC validated",
    ctc: "12 LPA",
    status: "COMPLETED"
  },
  {
    date: "Today",
    company: "Sprinklr",
    type: "UPDATE",
    description: "CTC updated",
    ctc: "15 LPA",
    status: "COMPLETED"
  },
  {
    date: "Today",
    company: "Flipkart",
    type: "UPDATE",
    description: "CTC added",
    ctc: "14.5 LPA",
    status: "COMPLETED"
  },
  {
    date: "Today",
    company: "Hero Vired",
    type: "UPDATE",
    description: "CTC aligned",
    ctc: "8.5 LPA",
    status: "COMPLETED"
  },
  {
    date: "Today",
    company: "Innovaccer",
    type: "UPDATE",
    description: "Profile name strictly set",
    ctc: "10 LPA",
    status: "COMPLETED"
  },
  {
    date: "Today",
    company: "Freecharge",
    type: "UPDATE",
    description: "CTC and bounds locked",
    ctc: "7 LPA",
    status: "COMPLETED"
  },
  {
    date: "Today",
    company: "Ensylon",
    type: "UPDATE",
    description: "Name fully qualified",
    ctc: "12 LPA",
    status: "COMPLETED"
  },
  {
    date: "Today",
    company: "Eucloid Data Solutions",
    type: "UPDATE",
    description: "Role aligned to Data",
    ctc: "8.5 LPA",
    status: "COMPLETED"
  },
  {
    date: "Sep 19, 2025",
    company: "ZS Associates",
    type: "UPDATE",
    description: "Final shortlist released",
    ctc: "14.15 LPA",
    students: "24 → 23",
    status: "COMPLETED"
  },
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

